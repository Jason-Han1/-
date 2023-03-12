let iconRQ = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII="
let data = [{
        name: "北京北七家",
        value: [116.24, 39.55]
    },
    {
        name: "北京芍药居",
        value: [116.24, 40]
    },
    {
        name: "深圳",
        value: [114.271522, 22.753644]
    },

    {
        name: "天津",
        value: [117.205914, 39.090908]
    },
    {
        name: "上海",
        value: [121.480237, 31.236305]
    },

];
let LableData = [{
        name: "北京北七家",
        value: [116.24, 39.55],
        lable: [1.21, 10.20]
    },
    {
        name: "北京芍药居",
        value: [116.24, 40],
        lable: [1.21, 10.20]
    },
    {
        name: "深圳",
        value: [114.271522, 22.753644],
        lable: [1.21, 10.20]
    },
    {
        name: "天津",
        value: [117.205914, 39.090908],
        lable: [1.21, 10.20]
    },
    {
        name: "上海",
        value: [121.480237, 31.236305],
        lable: [1.21, 10.20]
    },
];
/*let LableData = [
    {
    name: "北京",
    coords: [
        [116.24, 39.55],
        [115.24, 42.55]
    ], // 线条位置[开始位置，结束位置]
    value: [10.21, 1.20]
}, 
{
    name: "深圳",
    coords: [
        [114.271522, 22.753644],
        [118.24, 18.55, 100]
    ], // 线条位置[开始位置，结束位置]
    value: [10.21, 1.20]
}, 
{
    name: "天津",
    coords: [
        [117.205914, 39.090908],
        [118.24, 40.55]
    ], // 线条位置[开始位置，结束位置]
    value: [10.21, 1.20]
}, 
{
    name: "上海",
    coords: [
        [121.480237, 31.236305],
        [128.24, 35.55, 100]
    ], // 线条位置[开始位置，结束位置]
    value: [10.21, 1.20]
}, 
];*/
option = {
    backgroundColor: '#000f1e',
    geo: {
        map: 'china',
        roam: true,
        aspectScale: 0.85,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: '100%',
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
            type: 'map',
            mapType: 'china',
            roam: true,
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: '100%',
            zoom: 1, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            /*scaleLimit: { //滚轮缩放的极限控制
                min: 1,
                max: 10
            },*/
            itemStyle: {
                normal: {
                    areaColor: '#0c274b',
                    borderColor: '#1cccff',
                    borderWidth: 1.5


                },
                emphasis: {
                    areaColor: '#02102b',
                    label: {
                        color: "#fff"
                    }

                }
            },


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
            zlevel: 3,
            symbolSize: 10,
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
                    color: 'green',
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

                    fromName: "北京",
                    toName: "深圳",
                    coords: [
                        [116.24, 39.55],
                        [114.271522, 22.753644],
                        [116.24, 39.55],
                        


                    ]
                },
                {

                    fromName: "北京",
                    toName: "上海",
                    coords: [
                        [116.24, 39.55],
                        [121.480237, 31.236305],
                       [116.24, 39.55],

                    ]
                },
                {
                    fromName: "北京",
                    toName: "天津",
                    coords: [
                        [116.24, 39.55],
                        [117.205914, 39.090908],
                       [116.24, 39.55],

                    ]
                }
            ],

        },
        // lable  
        {
            name: 'lable',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [150, 90],
            hoverAnimation: true,
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: "#fff",

                        lineHeight: 15,

                    },
                    formatter(params) {
                        return "上行:" + params.data.lable[0] + "G/s" + "\n" + "下行:" + params.data.lable[1] + "G/s"
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#1a3961', //标志颜色
                    opacity: 1,
                    borderColor: '#aee9fb',
                    borderWidth: 1,
                }
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            data: LableData,
        },
       /*{

            type: 'lines',
            zlevel: 3,
            symbol: 'circle',
            symbolSize: [5, 5],
            color: '#ff8003',
            opacity: 1,
            label: {
                show: true,
                padding: [5, 5],
                color: '#fff',
                backgroundColor: "#1a3961",
                borderColor: '#aee9fb',
                borderWidth: 1,
                borderRadius: 6,
                formatter(params) {
                    console.log(params)
                    let arr = [params.name, "上行：" + params.value[1] + "G/s", "下行：" + params.value[0] + "G/s"];
                    return arr.join("\n")
                },
                textStyle: {
                    align: 'left',
                    lineHeight: 20,
                }
               
            },
            lineStyle: {
                type: 'solid',
                color: '#fff',
                width: 0.5,
                opacity: 1,

            },
            data: LableData,


        },*/
    ]
}




myChart.on('georoam', function(params) {
   
    var option = myChart.getOption(); //获得option对象
    if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
        option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    } else { //捕捉到拖曳时
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    }
    myChart.setOption(option); //设置option
});