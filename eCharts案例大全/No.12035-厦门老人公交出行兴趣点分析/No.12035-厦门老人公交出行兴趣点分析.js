var uploadedDataURL = "/asset/get/s/data-1551702964926-4Wi6tEpVh.csv";

//以下是离线转换GPS坐标到百度坐标

var pi = 3.14159265358979324;
var a = 6378245.0;
var ee = 0.00669342162296594323;
var x_pi = 3.14159265358979324 * 3000.0 / 180.0;

function transformLat(lat, lon) {
    var ret = -100.0 + 2.0 * lat + 3.0 * lon + 0.2 * lon * lon + 0.1 * lat * lon + 0.2 * Math.sqrt(Math.abs(lat));
    ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lon * pi) + 40.0 * Math.sin(lon / 3.0 * pi)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(lon / 12.0 * pi) + 320 * Math.sin(lon * pi / 30.0)) * 2.0 / 3.0;
    return ret;
}

function transformLon(lat, lon) {
    var ret = 300.0 + lat + 2.0 * lon + 0.1 * lat * lat + 0.1 * lat * lon + 0.1 * Math.sqrt(Math.abs(lat));
    ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lat * pi) + 40.0 * Math.sin(lat / 3.0 * pi)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(lat / 12.0 * pi) + 300.0 * Math.sin(lat / 30.0 * pi)) * 2.0 / 3.0;
    return ret;
}

function wgs2gcj(lat, lon) {
    var dLat = transformLat(lon - 105.0, lat - 35.0);
    var dLon = transformLon(lon - 105.0, lat - 35.0);
    var radLat = lat / 180.0 * pi;
    var magic = Math.sin(radLat);
    magic = 1 - ee * magic * magic;
    var sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
    dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
    var mgLat = lat + dLat;
    var mgLon = lon + dLon;
    var loc = [mgLat, mgLon];
    return loc;
}

function gcj2bd(lat, lon) {
    var x = lon,
        y = lat;
    var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
    var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
    var bd_lon = z * Math.cos(theta) + 0.0065;
    var bd_lat = z * Math.sin(theta) + 0.006;
    return [bd_lat, bd_lon];
}

function wgs2bd(lat, lon) {

    var gcj = wgs2gcj(lat, lon);

    var bd = gcj2bd(gcj[0], gcj[1]);
    return bd;
}


//百度坐标转换结束

var convertData = function(csvdata) {
    var res = {
        'education': [],
        'hospital': [],
        'scope': [],
        'shopping': []
    };
    var rows = csvdata.split('\n');
    for (var i in rows) {
        if (i < 1)
            continue;
        var row = rows[i].split(',');
        if (row[0]) {
            row[0] = row[0].slice(1, row[0].length - 1);
            row[1] = row[1].slice(1, row[1].length - 1);
            res[row[0]].push({
                "name": row[1],
                "value": [parseFloat(row[4]), parseFloat(row[3]), parseInt(row[2])]
            });
        }
    }
    console.log(res);

    return res;
};

var max = 2143,
    min = 1; // todo 
var maxSize4Pin = 50,
    minSize4Pin = 10;

var option = {
    bmap: {
        roam: true,
    },
    tooltip: {
        trigger: 'item',
        formatter:function(param){
            console.log(param);
            var res='地点:'+param.name+'<br>'
            +'排名:'+(param.dataIndex+1)+'<br>'
            +'类型:'+param.seriesName+'<br>'
            +'客流:'+param.value[2]
            return res;
        },
    },
    title: {
        text: '老人出行POI兴趣点分析',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        selectedMode: 'multiple',
        orient: 'vertical',
        y: 'center',
        x: 'left',
        data: ['学校', '医院', '公园', '购物'],
        textStyle: {
            color: 'black'
        }
    },
    color:['green','gray','red','brown'],
    /*visualMap: [{
        left: 'right',
        top: '10%',
        dimension: 2,
        min: 0,
        max: 100,
        itemWidth: 30,
        itemHeight: 120,
        calculable: true,
        precision: 0.1,
        inRange: {
            symbolSize: [3, 10]
        },
        outOfRange: {
            symbolSize: [3, 10],
            color: ['rgba(255,255,255,.2)']
        }
    }],*/
    series: [{
            name: '学校',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [],
            symbolSize: function(val) {
                if (val[2] / 100 < 1)
                    return 5;
                if (val[2] / 100 > 10)
                    return 10;
                return val[2] / 100;
            },
            symbol: 'triangle',
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },

        },
        {
            name: '医院',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [],
            symbolSize: function(val) {
                if (val[2] / 100 < 1)
                    return 5;
                if (val[2] / 100 > 10)
                    return 10;
                return val[2] / 100;
            },
            symbol: 'diamond',
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },

        },
        {
            name: '公园',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [],
            symbolSize: function(val) {
                
                if (val[2] / 100 < 20)
                    return 5;
                if (val[2] / 100 > 20)
                    return 20;
                return val[2] / 100;
            },
            symbol: 'roundRect',
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
        },
        {
            name: '购物',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [],
            symbol: 'pin',
            symbolSize: function(val) {
                console.log(val);
                if (val[2] / 100 < 15)
                    return 15;
                if (val[2] / 100 > 15)
                    return 20;
                return val[2] / 100;
            },
            label: {
                normal: {
                    formatter: function(val){
                        return val.dataIndex+1+":"+val.name;
                    },
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },

        },

    ]
};

$.ajax({
    "url": uploadedDataURL,
    "dataType": "text",
    "method": "GET",
    "success": function(csvdata) {
        var res = convertData(csvdata);
        option.series[0].data = res['education'];
        option.series[1].data = res['hospital'];
        option.series[2].data = res['scope'];
        option.series[3].data = res['shopping'];

        //console.log(option.series[1].data);
        myChart.setOption(option);
        // console.log(option);
        //获取echart中使用的bmap实例
        var map = myChart.getModel().getComponent('bmap').getBMap();
        map.disableDoubleClickZoom();
        map.centerAndZoom("厦门", 13);

    },
});