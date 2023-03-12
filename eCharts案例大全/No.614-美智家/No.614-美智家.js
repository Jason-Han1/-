var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/
var points = [{
    value: [117.4219, 39.4189],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [103.5901, 36.3043],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [112.3352, 37.9413],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [113.6200,34.7500],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [109.4800, 36.6000],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [107.1300,34.3700],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [113.2300,23.1600],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [117.4219, 39.4189],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [108.3700, 22.8200],
    itemStyle: {
        color: '#f58f0e'
    }
},{
    value: [109.1162, 34.2004],
    itemStyle: {
        color: '#f5a305'
    }
},{
    value: [103.5901, 36.3043],
    itemStyle: {
        color: '#e7ab0b'
    }
},{
    value: [106.3586, 38.1775],
    itemStyle: {
        color: '#dfae10'
    }
},{
    value: [103.9526, 30.7617],
    itemStyle: {
        color: '#c1bb1f'
    }
}]
// var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
myChart.showLoading();
let index = -1;

$.getJSON(uploadedDataURL, function(geoJson) {

    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    option = {
        backgroundColor: '#013954',
        /*   title: {
               top: 20,
               text: '“困难人数” - 杭州市',
               subtext: '',
               x: 'center',
               textStyle: {
                   color: '#ccc'
               }
           },*/

        // tooltip: {
        //     trigger: 'item',
        //     formatter: function(params) {
        //         console.log(params)
        //             return params.name + ' : ' + params.value[2];
        //     }
        // },
        /*visualMap: {
           min: 0,
           max: 1000000,
           right: 100,
           seriesIndex: 1,
           type: 'piecewise',
           bottom: 100,
           textStyle: {
             color: '#FFFF'
           },
           splitList: [
             {
               gt: 50000,
               color: '#F5222D',
               label: '困难人数大于5万人'
             }, //大于5万人
             {
               gte: 30000,
               lte: 50000,
               color: '#FA541C ',
               label: '困难人数3-5万人'
             }, //3-5万人
             {
               gte: 10000,
               lte: 30000,
               color: '#FA8C16',
               label: '困难人数1-3万人'
             }, //1-3万人
             {
               lte: 10000,
               color: '#fbe1d6',
               label: '困难人数小于1万人'
             }
           ]
         },*/

        geo: {
            map: 'china',
            aspectScale: 0.75, //长宽比
            zoom: 1.1,
            scaleLimit : {
                min:1,
                max:3,
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#09132c' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#274d68' // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    },
                    shadowColor: 'rgb(58,115,192)',
                    shadowOffsetX: 10,
                    shadowOffsetY: 11
                },
                emphasis: {
                    areaColor: '#2AB8FF',
                    borderWidth: 0,
                    color: 'green',
                    label: {
                        show: false
                    }
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
                    }
                },


            }],
        },
        series: [{
                type: 'map',
                roam: false,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#1DE9B6'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgb(183,185,14)'
                        }
                    }
                },

                itemStyle: {
                    normal: {
                        borderColor: 'rgb(147, 235, 248)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: '#09132c' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#274d68' // 100% 处的颜色
                            }],
                            globalCoord: true // 缺省为 false
                        },
                    },
                    emphasis: {
                        areaColor: 'rgb(46,229,206)',
                        //    shadowColor: 'rgb(12,25,50)',
                        borderWidth: 0.1
                    }
                },
                zoom: 1.1,
                //     roam: false,
                map: 'china' //使用
                // data: this.difficultData //热力图数据   不同区域 不同的底色
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel: 1,
                rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#1DE9B6',
                        show: true
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#1DE9B6'
                            /* function (value){ //随机颜色
                             return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
                             }*/
                            ,
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                symbolSize: 12,
                data: points
            }, //地图线的动画效果
            {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                },
                lineStyle: {
                    normal: {
                        color: '#1DE9B6'
                            /* function (value){ //随机颜色
                        
                        ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                        '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                        '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                        '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                        '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                        '#52b9c7','#4fb6d2','#4ab2e5']
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/
                            ,
                        width: 1, //线条宽度
                        opacity: 0.1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: [{
                    coords: [
                        [117.4219, 39.4189],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#f58414'
                    }
                },{
                    coords: [
                        [112.3352, 37.9413],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#f58f0e'
                    }
                },{
                    coords: [
                        [103.5901, 36.3043],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#e7ab0b'
                    }
                },{
                    coords: [
                        [106.3586, 38.1775],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#dfae10'
                    }
                },{
                    coords: [
                        [103.9526, 30.7617],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#c1bb1f'
                    }
                },{
                    coords: [
                        [108.3700, 22.8200],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#c1bb1f'
                    }
                },{
                    coords: [
                        [113.2300,23.1600],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#c1bb1f'
                    }
                },{
                    coords: [
                        [107.1300,34.3700],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#c1bb1f'
                    }
                },{
                    coords: [
                        [109.4800, 36.6000],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#c1bb1f'
                    }
                },{
                    coords: [
                        [113.6200,34.7500],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#c1bb1f'
                    }
                },{
                    coords: [
                        [105.7314,34.5874],
                        [109.1162, 34.2004]
                    ],
                    lineStyle: {
                        color: '#c1bb1f'
                    }
                }]
            }

        ]
    };
    myChart.setOption(option, true);
});