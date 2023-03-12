let iconRQ = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII="

let data = [{
        name: "北京",
        value: [116.24, 39.55, 100],

    },
    {
        name: "深圳",
        value: [114.271522, 22.753644]
    },

    {
        name: "重庆",
        value: [106.54, 29.59]
    },
    {
        name: "南京",
        value: [118.78, 32.04]
    },

]

let mapData = [{
        name: "广东",
        selected: true
    },
    {
        name: "安徽",
        selected: true
    },
    {
        name: "北京",
        selected: true
    },
    {
        name: "重庆",
        selected: true
    },
]

let LableData = [{
        name: "北京",
        value: [118.24, 35.55, 100],
        lable: [10, 1]
    },
    /* {
         name: "深圳",
         value: [116.271522, 20.753644],
         lable: [10, 1]
     },*/
    {
        name: "重庆",
        value: [108.54, 24.59],
        lable: [10, 1]
    },
    {
        name: "南京",
        value: [118.78, 26.04],
        lable: [10, 1]
    },
];

option = {
    backgroundColor: '#000f1e',
    xAxis: [],
        yAxis: [],
    grid:[],    
    geo: {
        map: 'china',
        aspectScale: 0.85,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: '140%',
        itemStyle: {
            normal: {
                shadowColor: '#276fce',
                shadowOffsetX: 0,
                shadowOffsetY: 15,
                opacity: 0.5,
            },
            emphasis: {
                areaColor: '#276fce',

            }
        },
        regions: [{
            name: '南海诸岛',
            itemStyle: {
                areaColor: 'rgba(0, 10, 52, 1)',

                borderColor: 'rgba(0, 10, 52, 1)',
                normal: {
                    opacity: 0,
                    label: {
                        show: false,
                        color: "#009cc9",
                    }
                },


            },
            label: {
                show: false,
                color: '#FFFFFF',
                fontSize: 12,
            },


        }],

    },
    series: [
        // 常规地图
        {
            type: 'map', // 系列类型
            name: 'map', // 系列名称
            mapType: 'china',
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: '140%',
            zoom: 1, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            scaleLimit: { //滚轮缩放的极限控制
                min: 1,
                max: 2
            },
            itemStyle: {
                normal: {
                    areaColor: '#0c274b',
                    borderColor: '#1cccff',
                    borderWidth: 1.5,
                    opacity: 1,


                },
                emphasis: {
                    areaColor: '#0c274b',
                    borderColor: '#087cf9',
                    borderWidth: 5,
                    opacity: 1,
                    label: {
                        show: false,
                        color: "#fff"
                    }

                }
            },
            /*  data:mapData*/


        },
        //首都星图标
        {
            name: '首都',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [{
                name: '首都',
                value: [116.24, 41.55, 100],

            }, ],
            symbol: iconRQ,
            symbolSize: 20,
            label: {
                normal: {
                    show: false,

                },
                emphasis: {
                    show: false
                }
            },

        },
        // 区域散点图
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbolSize: 8,
            rippleEffect: { //坐标点动画
                period: 3,
                scale: 5,
                brushType: 'fill'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    color: '#b3e2f2',
                    fontWeight: "bold",
                    fontSize: 18
                }
            },

            data: data,
            itemStyle: { //坐标点颜色
                normal: {
                    show: true,
                    color: '#c0e6f2',
                    shadowBlur: 20,
                    shadowColor: '#fff'
                },
                emphasis: {
                    areaColor: '#f00'
                }
            },

        },
        // 线 和 点
        {
            type: 'lines',
            zlevel: 1, //设置这个才会有轨迹线的小尾巴
            polyline: true,
            effect: {
                show: true,
                period: 10,
                trailLength: 0.7,
                color: '#fff', //流动点颜色
                symbol: 'arrow',
                symbolSize: 6
            },
            lineStyle: {
                normal: {
                    color: '#fff', //线条颜色
                    width: 1.5,
                    curveness: 0.2,
                    shadowColor: '#fff',
                }
            },
            data: [{

                    fromName: "深圳",
                    toName: "北京",
                    coords: [
                        [114.271522, 22.753644],
                        [116.24, 39.55],
                        [114.271522, 22.753644],


                    ]
                },
                {

                    fromName: "深圳",
                    toName: "浙江",
                    coords: [
                        [114.271522, 22.753644],
                        [118.78, 32.04],
                        [114.271522, 22.753644],

                    ]
                },
                {
                    fromName: "深圳",
                    toName: "重庆",
                    coords: [
                        [114.271522, 22.753644],
                        [106.54, 29.59],
                        [114.271522, 22.753644],

                    ]
                }
            ],

        },
        //lable
        { 
            name: 'lable',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [50, 20],
            hoverAnimation: true,
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: "#fff8a8",
                        fontSize: 16,
                        fontWeight: 'bold',
                        lineHeight: 15,

                    },
                    formatter: function(params) {

                        return params.data.lable[0] + "G" + '/' + params.data.lable[1] + "G"
                    }
                }
            },

            itemStyle: {
                normal: {
                    color: 'transparent', //标志颜色
                    opacity: 1,

                }
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            data: LableData,


        },
        
        
        
       

    ]
};

myChart.on('mouseover', function(params) {
    let option = myChart.getOption();
    if (params.name == '深圳') {
        option.series[0].itemStyle.opacity = 0.5;
        myChart.setOption(option)

        myChart.dispatchAction({
            type: 'highlight',
            name: '广东'
        });



    } else if (params.name == '北京') {
        option.series[0].itemStyle.opacity = 0.5;
        myChart.setOption(option)

        myChart.dispatchAction({
            type: 'highlight',
            name: '北京'
        });
        console.log(params)
    } else if (params.name == '南京') {
        option.series[0].itemStyle.opacity = 0.5;
        myChart.setOption(option)

        myChart.dispatchAction({
            type: 'highlight',
            name: '安徽'
        });

    } else if (params.name == '重庆') {
        option.series[0].itemStyle.opacity = 0.5;
        myChart.setOption(option)

        myChart.dispatchAction({
            type: 'highlight',
            name: '重庆'
        });

    } else {
        myChart.dispatchAction({
            type: 'downplay',
            name: params.name
        });
    }
});
myChart.on('mouseout', function(params) {
    myChart.dispatchAction({
        type: 'downplay',
        name: params.name
    });
    myChart.setOption(option)
})
myChart.on('click', function(params) {
    let option = myChart.getOption();

    for (let i = 0; i < option.series[2].data.length; i++) {
        if (params.name == option.series[2].data[i].name) {
            console.log(params.name);
        }
    }
    // 
});
setInterval(function() {
    for (let i = 0; i < LableData.length; i++) {
        LableData[i].lable[1] = getRandom(10, 100, 0);
        LableData[i].lable[0] = getRandom(1, 10, 0);
    }
    let option = myChart.getOption();
    option.series[4].data = LableData;
    myChart.setOption(option)

}, 60000)

function getRandom(start, end, fixed) {
    let differ = end - start;
    let random = Math.random();
    return (start + differ * random).toFixed(fixed)
}
