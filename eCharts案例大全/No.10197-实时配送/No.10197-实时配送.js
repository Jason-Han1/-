var uploadedDataURL= "/asset/get/s/data-1566436989733-sRoy1-ji5.json";

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('yuhang', geoJson);
    myChart.setOption({
        series: [{
            type: 'map',
            map: 'yuhang'
        }]
    });
var geoCoordMap = {
   '余杭中心库': [120.3024800000,30.4536300000],
        '余杭供电所': [119.9383, 30.25933],
        '瓶窑供电所': [119.9750500000, 30.3751100000],
        '良渚供电所': [120.0912700000, 30.3512900000],
        '南苑供电所': [120.3072900000, 30.4342200000],
        '塘栖供电所': [120.0890960000, 30.4417230000],
        '东湖供电所': [120.3064930000, 30.4252520000],
        '科技城供电所': [119.9794080000, 30.2742200000],

};

var goData = [
    [{
        name: '余杭中心库'
    }, {
        id: 1,
        name: '余杭供电所',
        value: 60
    }],
     [{
        name: '余杭中心库'
    }, {
        id: 1,
        name: '瓶窑供电所',
        value: 60
    }],
     [{
        name: '余杭中心库'
    }, {
        id: 1,
        name: '良渚供电所',
        value: 30
    }],
    [{
        name: '余杭中心库'
    }, {
        id: 1,
        name: '南苑供电所',
        value: 20
    }],
    [{
        name: '余杭中心库'
    }, {
        id: 1,
        name: '塘栖供电所',
        value: 60
    }],
[{
        name: '余杭中心库'
    }, {
        id: 1,
        name: '东湖供电所',
        value: 20
    }],
    [{
        name: '余杭中心库'
    }, {
        id: 1,
        name: '科技城供电所',
        value: 30
    }],
    //  [{name:'蓟县'}, {name:'宁河',value:95}],
];
//值控制圆点大小
var backData = [
   [{
        name: '余杭供电所'
    }, {
        id: 2,
        name: '余杭中心库',
        value: 75
    }],
     [{
        name: '瓶窑供电所'
    }, {
        id: 2,
        name: '余杭中心库',
        value: 75
    }],
     [{
        name: '良渚供电所'
    }, {
        id: 2,
       name: '余杭中心库' ,
        value: 75
    }],
    [{
       name: '南苑供电所' 
    }, {
        id: 2,
        name: '余杭中心库',
        value: 75
    }],
    [{
        name: '塘栖供电所' 
    }, {
        id: 2,
       name: '余杭中心库',
        value: 75
    }],
[{
       name: '东湖供电所' 
    }, {
        id: 2,
       name: '余杭中心库' ,
        value: 75
    }],
    [{
        name: '科技城供电所'
    }, {
        id: 2,
        name: '余杭中心库',
        value: 75
    }],
];

var planePath = 'circle';
var arcAngle = function(data) {
    var j, k;
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        if (dataItem[1].id == 1) {
            j = 0.2;
            return j;
        } else if (dataItem[1].id == 2) {
            k = -0.2;
            return k;
        }
    }
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (dataItem[1].id == 1) {
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                }, {
                    coord: toCoord,
                    value: dataItem[1].value //线条颜色

                }]);
            }
        } else if (dataItem[1].id == 2) {
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                }, {
                    coord: toCoord
                }]);
            }
        }
    }
    return res;
};

var color = ['#fff', '#FF1493', '#0000FF'];
var series = [];
[
    ['1', goData],
    ['2', backData]
].forEach(function(item, i) {
    series.push({
        name: item[0],
        type: 'lines',
        zlevel: 2,
        //线特效配置
        effect: {
            show: true,
            period: 2,
            trailLength: 0,
            symbol: planePath, //标记类型
            symbolSize: 5
        },
        lineStyle: {
            normal: {
                width: 1,
                opacity: 0.4,
                curveness: arcAngle(item[1]), //弧线角度
                color: '#fff'
            }
        },
        data: convertData(item[1])
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        //波纹效果
        rippleEffect: {
            period: 2,
            brushType: 'stroke',
            scale: 5
        },
        label: {
            normal: {
                show: true,
                color: '#fff',
                position: 'right',
                formatter: '{b}'
            }
        },
        //终点形象
        symbol: 'circle',
        //圆点大小
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                show: true
            }
        },
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })

    });

});

option = {
      backgroundColor: '#031f2d',
    title: {
        text: '',
        subtext: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}<br />今日需配送物资金额：8832元<br />计划配送次数：6次<br />已配送物资金额：7900元<br />已完成配送次数：4次<br />常规配送任务数：6次<br />在途配送应急调配任务数：0次<br />跨库调配任务数：0次"
    },
    //线颜色及飞行轨道颜色
    visualMap: {
        show: false,
        min: 0,
        max: 100,
        color: ['#a6c84c', '#ffa022', '#46bee9']
    },
    //地图相关设置
    geo: {
        map: 'yuhang',
        //视角缩放比例
        zoom: 1,
        //显示文本样式
        label: {
            normal: {
                show: false,
                textStyle: {
                    color: '#fff'
                }
            },
            emphasis: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        //鼠标缩放和平移
        roam: true,
        itemStyle: {
            normal: {
                //          	color: '#ddd',
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
            }
        }
    },
    series: series
};
 myChart.setOption(option);
});
