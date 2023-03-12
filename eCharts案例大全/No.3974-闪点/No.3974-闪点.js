var uploadedDataURL = "/asset/get/s/data-1614174699882-wkvijIze3.json";

// var uploadedDataURL = "/asset/get/s/data-1595473893338-SpJOkOU_l.json";

// var uploadedDataURL = "/asset/get/s/data-1595468790318-hKTS8IYn1.json";

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

var regions = [{
    name: '迪庆',
    itemStyle: {
        areaColor: 'rgb(46 133 198)',
        opacity: 0.5
    }
}, {
    name: '丽江',
    itemStyle: {
        areaColor: 'rgb(122 32 179)',
        opacity: 0.5
    }
}, {
    name: '怒江',
    itemStyle: {
        areaColor: 'rgb(3 183 177)',
        opacity: 0.5
    }
}, {
    name: '大理',
    itemStyle: {
        areaColor: 'rgb(25 185 79)',
        opacity: 0.5
    }
}, {
    name: '保山',
    itemStyle: {
        areaColor: 'rgb(193 171 55)',
        opacity: 0.5
    }
}, {
    name: '德宏',
    itemStyle: {
        areaColor: "rgb(46 133 198)",
        opacity: 0.5
    }
}, {
    name: '临沧',
    itemStyle: {
        areaColor: 'rgb(3 183 177)',
        opacity: 0.5
    }
}, {
    name: '普洱',
    itemStyle: {
        areaColor: 'rgb(46 133 198)',
        opacity: 0.5
    }
}, {
    name: '西双版纳',
    itemStyle: {
        areaColor: 'rgb(193 171 55)',
        opacity: 0.5
    }
}, {
    name: '红河',
    itemStyle: {
        areaColor: 'rgb(46 133 198)',
        opacity: 0.5
    }
}, {
    name: '玉溪',
    itemStyle: {
        areaColor: 'rgb(3 183 177)',
        opacity: 0.5
    }
}, {
    name: '文山',
    itemStyle: {
        areaColor: 'rgb(46 133 198)',
        opacity: 0.5
    }
}, {
    name: '昆明',
    itemStyle: {
        areaColor: 'rgb(46 133 198)',
        opacity: 0.5
    }
}, {
    name: '曲靖',
    itemStyle: {
        areaColor: 'rgb(193 171 55)',
        opacity: 0.5
    }
}, {
    name: '楚雄',
    itemStyle: {
        areaColor: 'rgb(122 32 179)',
        opacity: 0.5
    }
}, {
    name: '昭通',
    itemStyle: {
        areaColor: 'rgb(122 32 179)',
        opacity: 0.5
    }
}];
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('yunnan', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {}
    var dataTooltip = [{
            name: '黔南信创项目2020001',
            value: 89
        },
        {
            name: '黔南信创项目2020002',
            value: 70
        },
        {
            name: '黔南信创项目2020003',
            value: 60
        }
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

    option = {
        backgroundColor: '#fff',
        title: {
            show: false,
        },

        tooltip: { //提示框组件
            trigger: 'item', //触发类型：数据项图形触发
            formatter: function(params) {
                if (typeof(params.value)[2] == "undefined") {
                    return params.name;
                } else {
                    return params.name + ' : ' + params.value[2] + '%';
                }
            }
        }, //提示框浮层内容格式器
        visualMap: { //视觉映射组件
            show: false, //否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在
            max: 100, //指定 visualMapContinuous 组件的允许的最大值
            seriesIndex: [1], //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
            inRange: { //定义 在选中范围中 的视觉元素
                color: ['#00467F', '#A5CC82'] // 蓝绿
            }
        },
        geo: {
            // show: true, //是否显示
            map: 'yunnan', //地图类型
            aspectScale: 1, // 地图倾斜度
            zoom: 1, // 地图放大倍数
            z: 2,
            label: { //图形上的文本标签，说明图形的数据信息，比如值，名称
                normal: {
                    show: true, //是否在普通状态下显示标签
                },
                emphasis: {
                    show: false, //是否在高亮状态下显示标签
                }
            },
            roam: true, //是否开启鼠标缩放和平移漫游
            itemStyle: {
                normal: {
                    borderColor: "#3fdaff",
                    borderWidth: 1,
                    // areaColor: {
                    //     type: "radial",
                    //     x: 0.5,
                    //     y: 0.5,
                    //     r: 0.8,
                    //     colorStops: [{
                    //             offset: 0,
                    //             color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                    //         },
                    //         {
                    //             offset: 1,
                    //             color: "rgba(147, 235, 248, .4)", // 100% 处的颜色
                    //         },
                    //     ],
                    //     globalCoord: false, // 缺省为 false
                    // },
                    shadowColor: "#030f24",
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowBlur: 12, // 阴影的模糊大小
                    shadowOffsetX: 0, //阴影水平方向上的偏移距离
                    shadowOffsetY: 12, // 阴影垂直方向上的偏移距离
                },
                emphasis: {
                    show: true,
                    // areaColor: '#3fdaff', //hover高亮时的颜色
                    areaColor: '#E6F1FF', //hover高亮时的颜色
                }
            },
            regions: regions
        },
        series: [
            // {
            //     type: 'map',
            //     map: 'yunnan',
            //     geoIndex: 1,
            //     aspectScale: 1, //长宽比
            //     // zoom:1,
            //     top: '10%',
            //     left: '17%',
            //     showLegendSymbol: false, // 存在legend时显示
            //     label: {
            //         normal: {
            //             show: true
            //         },
            //         emphasis: {
            //             show: false,
            //             textStyle: {
            //                 color: '#black'
            //             }
            //         }
            //     },
            //     itemStyle: {
            //         normal: {
            //             borderColor: '#2980b9',
            //             borderWidth: 1,
            //             areaColor: '#E6F1FF'
            //         },
            //         emphasis: {
            //             areaColor: '#E6F1FF',
            //             borderWidth: 0,
            //             color: 'green'
            //         }
            //     },
            //     zlevel: 1,
            //     roam: false,
            //     animation: true,
            //     data: dataTooltip
            // },
            {
                name: '项目闪点',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(dataTooltip),
                symbolSize: 15, //基点
                showEffectOn: 'render',
                rippleEffect: {
                    //涟漪特效相关配置。
                    period: 5, //动画的周期，秒数。
                    scale: 5, //波纹的最大缩放比例。
                    brushType: "stroke", //波纹的绘制方式，可选 'stroke' 和 'fill'。
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        color: 'black',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(0,210,122)', //修改圆圈的颜色
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                animation: true,
                zlevel: 1
            },

        ]
    };
    myChart.setOption(option);
});
myChart.on('click', function(param) {
    console.log(param);
    if (param.componentType == 'series') {
        console.log('闪点点击事件');
        window.open(encodeURI('https://www.baidu.com/'))
    }
})