var geoCoordMap = {
    
    "拉萨": [87.11, 31.97],
    "拉萨1": [90.12, 31.97],
    "拉萨2": [94.13, 31.97],
   
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
option = {
    backgroundColor: '#404a59',
    title: {
        text: '全国视频质量',
        subtext: '',
        sublink: '',
        x: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        y: 'top',
        x: 'left',
        
        data: ['占比','可用率'],
        textStyle: {
            color: '#fff'
        }
    },
   
    geo: {
        map: 'china',
        label: {
            normal: {
 
                show: true,
                
               

            },

            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '占比',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData([ {
                name: "拉萨",
                value: 24
            }

        ]),
        symbolSize: 20,
        symbol: 'rect',
        label: {
            normal: {
                show: true,
                position: 'bottom'
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: '#fff',
                borderWidth: 1
            }
        }
    },{
        name: '可用率',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData([ {
                name: "拉萨1",
                value: 345
            },
        ]),
        symbolSize: 20,
        symbol: 'rect',
        label: {
            normal: {
                show: true,
                position: 'bottom'
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: '#fff',
                borderWidth: 1
            }
        }
    },]
};