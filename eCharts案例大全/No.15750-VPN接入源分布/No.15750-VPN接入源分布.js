
var latlong = {};
latlong.WGQ = {'latitude':42.5, 'longitude':1.5};
latlong.JS = {'latitude':24, 'longitude':54};
latlong.TJ = {'latitude':-20, 'longitude':30};

var mapData = [
{'code':'WGQ' , 'name':'Afghanistan', 'value':20},
{'code':'JS' , 'name':'Albania', 'value':30},
{'code':'TJ' , 'name':'Zimbabwe', 'value':50}];

var max = -Infinity;
var min = Infinity;
mapData.forEach(function (itemOpt) {
    if (itemOpt.value > max) {
        max = itemOpt.value;
    }
    if (itemOpt.value < min) {
        min = itemOpt.value;
    }
});

option = {
    //backgroundColor: '#404a59',
    title : {
        text: 'VPN接入源地区统计',
        subtext: 'From WuXi AppTec',
        left: 'center',
        top: 'top',
        textStyle: {
            //color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter : function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    + '.' + value[1];
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    visualMap: {
        show: false,
        min: 0,
        max: max,
        inRange: {
            symbolSize: [6, 60]
        }
    },
    geo: {
        type: 'map',
        map: 'world',
        roam: true,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                //areaColor: '#323c48',
                //borderColor: '#111'
            },
            emphasis: {
                //areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: mapData.map(function (itemOpt) {
                return {
                    name: itemOpt.name,
                    value: [
                        latlong[itemOpt.code].longitude,
                        latlong[itemOpt.code].latitude,
                        itemOpt.value
                    ],
                    label: {
                        emphasis: {
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: itemOpt.color
                        }
                    }
                };
            })
        }
    ]
};