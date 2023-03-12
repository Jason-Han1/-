var uploadedDataURL = "/asset/get/s/data-1560952617745-J48vwHZ-j.csv";


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
        //console.log(row);
        if (row[0]) {
            var bd = wgs2bd(parseFloat(row[1]), parseFloat(row[2]));

            res[row[3]].push({
                "name": row[0],
                "value": [bd[1].toFixed(4), bd[0].toFixed(4), parseInt(row[4])]
            });
        }
    }
    //console.log(res);

    return res;
};

var max = 86029,
    min = 1; // todo 



var option = {
    // backgroundColor: '#404a59',
    tooltip: {
        trigger: 'item'
    },
    title: {
        text: "厦门老人乘公交出行热门起点站热力图",
        subtext: "2014年5月",
        textStyle: {
            color: 'blue',
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 20
        },
        right: '10%'
    },
    bmap: {
        roam: true,
    },
    legend: {
        x:'right',
        y:'center',
        orient:'vertical',
        selectedMode:'single',
        data: ['学校', '医院', '公园', '购物'],
        color: [ 'blue', 'green', 'yellow', 'red'],
    },
            visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: [ 'blue', 'green', 'yellow', 'red']
            }
        },
    series: [{
            name: '学校',
            type: 'heatmap',
            coordinateSystem: 'bmap',
            pointSize: 5,
            blurSize: 6

        },
        {
            name: '医院',
            type: 'heatmap',
            coordinateSystem: 'bmap',
            pointSize: 5,
            blurSize: 6

        },
        {
            name: '公园',
            type: 'heatmap',
            coordinateSystem: 'bmap',
            pointSize: 5,
            blurSize: 6
        },
        {
            name: '购物',
            type: 'heatmap',
            coordinateSystem: 'bmap',
            pointSize: 5,
            blurSize: 6

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
        
        console.log(option.series);
        myChart.setOption(option);
        // console.log(option);
        //获取echart中使用的bmap实例
        var map = myChart.getModel().getComponent('bmap').getBMap();
        map.disableDoubleClickZoom();
        map.centerAndZoom("厦门", 14);


    },
});