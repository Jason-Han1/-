var geoCoordMap = {
    "北京": [116.46, 39.92],
    "四川": [104.06, 30.67],
    "浙江": [120.19, 30.26],
    "山东": [117, 36.65],
    "福建": [119.3, 26.08],
    "上海": [121.48, 31.22],
    "重庆": [106.54, 29.59],
    "江西": [115.89, 28.68],
    "广东": [113.23, 23.16],
    "山西": [112.53, 37.87],
    "黑龙江": [126.63, 45.75],
    "陕西": [108.95, 34.27],
    "辽宁": [123.38, 41.8],
    "海南": [110.35, 20.02],
    "湖南": [113, 28.21],
    "宁夏": [106.27, 38.47],
    "河北": [114.48, 38.03],
    "云南": [102.73, 25.04],
    "湖北": [114.31, 30.52],
    "内蒙古": [111.65, 40.82],
    "天津": [117.2, 39.13],
    "贵州": [106.71, 26.57],
    "甘肃": [103.73, 36.03],
    "江苏": [118.78, 32.04],
    "吉林": [125.35, 43.88],
    "河南": [113.65, 34.76],
    "青海": [101.74, 36.56],
    "安徽": [117.27, 31.86],
    "广西": [108.33, 22.84],
    "西藏": [91.11, 29.97],
    "新疆": [87.68, 43.77]
};


//数据部分
var data = [
    {name:"北京",value:88},
    {name:"四川",value:88},
    {name:"浙江",value:87},
    {name:"山东",value:87},
    {name:"福建",value:87},
    {name:"上海",value:87},
    {name:"重庆",value:87},
    {name:"云南",value:87},
    {name:"江西",value:86},
    {name:"广东",value:85},
    {name:"山西",value:84},
    {name:"黑龙江",value:83},
    {name:"陕西",value:83},
    {name:"辽宁",value:82},
    {name:"海南",value:82},
    {name:"湖南",value:82},
    {name:"宁夏",value:82},
    {name:"河北",value:82},
    {name:"湖北",value:81},
    {name:"内蒙古",value:81},
    {name:"天津",value:80},
    {name:"贵州",value:80},
    {name:"甘肃",value:80},
    {name:"江苏",value:80},
    {name:"吉林",value:80},
    {name:"河南",value:79},
    {name:"青海",value:79},
    {name:"广西",value:78},
    {name:"安徽",value:77},
    {name:"新疆",value:76},
    {name:"西藏",value:76}
];
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



myChart.setOption(option = {
        backgroundColor:'#0B2744',
        tooltip: {
            trigger: 'item',
            // position: 'unset',
            backgroundColor: 'rgba(0,0,0,0)',
            formatter: function(params) {
                var tip = '';
                if (params.componentSubType === 'effectScatter') {
                    tip = `<div style="background:#000259;height:28px;line-height:28px;padding: 0 9px;fontSize:18px">
                            ${params.name}:${params.value[2]}人
                        </div>`;
                    return tip;
                } else {
                    if(params.componentSubType === 'map'){if(params.value){
                    tip = `<div style="display:flex;background:none;position:relative;top:-50px;left:-20px">
                            <div style="height:44px;width:1px;background:#00FFF6">1</div>
                            <div style="background:#000259;height:28px;line-height:28px;padding: 0 9px;fontSize:18px">
                            ${params.name}:${params.value}人</div>
                        </div>`
                    }}
                }
                return tip;
            }
        },
        geo: 
            {
                type: 'map',
                map: 'china',
                zlevel: -5,
                layoutCenter: ['50%', '50%'],
               // layoutSize: '90%',
                roam: false,
                silent: true,
                itemStyle: {
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 3,
                        shadowColor: '#ffffff',
                        // shadowColor:'red',
                        shadowColor: '#00F6FF',
                        // shadowColor:'red',
                        shadowBlur: 15,
                    }
                }
            },
    series: [
        {
            type: 'map',
            map: 'china',
            zlevel: 5,
            geoIndex: 1,
            data: data,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: true, // 存在legend时显示
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: false,
            itemStyle: {
                
                normal: {
                    borderColor: 'rgba(111, 253, 255, 1)',
                    borderWidth: 0.5,
                    // areaColor: 'rgba(29,85,139,.6)'
                    areaColor: {
                            type: 'linear-gradient',
                            x: 0,
                            y: 600,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: 'RGBA(37,108,190,1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'RGBA(15,169,195,1)' // 50% 处的颜色
                            }],
                            global: true // 缺省为 false
                        },
                },
                emphasis: {
                    areaColor: {
                            type: 'linear-gradient',
                            x: 0,
                            y: 600,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: 'RGBA(37,108,190,1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'RGBA(15,169,195,1)' // 50% 处的颜色
                            }],
                            global: true // 缺省为 false
                        },
                }
            },
        },
       /* {
            name: '生源密集度',
            type: 'scatter',
            roam: false,
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2]/8;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    textStyle:{
                        fontSize:10,
                        fontWeight:'bolder',
                        color:'#666666'
                    },
                    show: false
                },
                emphasis: {
                    show: true,
                }
            },
            itemStyle: {
                normal: {
                    color: '#3397F0',
                    shadowColor: '#3397F0',
                    shadowBlur: 20
                }
            }
        }*/        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            symbol: 'circle',
            symbolSize: 6,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                scale: 10
            },
            hoverAnimation: true,
            label: {
                show: false,
                formatter: name => {
                    return name.data[2];
                },
                position: 'right',
                color: '#fff',
                fontSize: 14,
                distance: 10
            },
            itemStyle: {
                color: 'rgba(0, 255, 246, 1)',
            },
            zlevel: 12,
            data: convertData(data)
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            silent: true,
            symbol: 'circle',
            symbolSize: 4,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                scale: 6
            },
            hoverAnimation: true,
            label: {
                formatter: '',
                position: 'right',
                color: '#fff',
                fontSize: 14,
                distance: 10,
                show: !0,
            },
            itemStyle: {
                color: 'rgba(255, 255, 255, 0.8)',
            },
            zlevel: 6,
            data: convertData(data)
        }
    ]
});