var uploadedDataURL = "/asset/get/s/data-1595473893338-SpJOkOU_l.json";

// var uploadedDataURL = "/asset/get/s/data-1595468790318-hKTS8IYn1.json";

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

// var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('guizhou', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '黔南信创项目2020001': [107.369999, 26.758219],
        '黔南信创项目2020002': [107.517196, 25.858119],
        '黔南信创项目2020003': [106.917156, 25.658219]
    }
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
            top: 20,
            text: '项目概览',
            subtext: '', //二级标题
            x: 'center', //横坐标居中
            textStyle: {
                color: 'rgb(29, 134, 238)' //字体颜色
            }
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
            show: true, //是否显示
            map: 'guizhou', //地图类型
            zoom: 1,
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
                // normal: {
                //     // areaColor: 'transparent',//地图颜色，透明
                //     // borderColor: '#3fdaff',//地图边框颜色
                //     // borderWidth:2,//边框宽度
                //     // shadowColor: 'rgba(63, 218, 255, 0.5)',//阴影
                //     areaColor: '#E6F1FF', //地图颜色，透明
                //     borderColor: '#4395FF', //地图边框颜色
                //     borderWidth: 1, //边框宽度
                //     shadowColor: 'rgba(63, 218, 255, 0.5)', //阴影
                //     // shadowOffsetX: -1,
                //     // shadowOffsetY: 1,
                // },
                 normal: {
                    borderColor: "#3fdaff",
                    borderWidth: 1,
                    areaColor: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                                offset: 0,
                                color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(147, 235, 248, .4)", // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: "rgba(128, 217, 248, 1)",
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
                },
                emphasis: {
                    // areaColor: '#3fdaff', //hover高亮时的颜色
                    areaColor: '#E6F1FF', //hover高亮时的颜色
                }
            }
        },
        series: [
            // {
            //     type: 'map',
            //     map: 'guizhou',
            //     geoIndex: 1,
            //     aspectScale: 0.75, //长宽比
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
            //     roam: true,
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
                        color:'black',
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
                zlevel: 1
            },

        ]
    };
    myChart.setOption(option);
});
myChart.on('click',function(param){
    console.log(param);
    if(param.componentType =='series'){
        console.log('闪点点击事件');
        window.open(encodeURI('https://www.baidu.com/'))
    }
})