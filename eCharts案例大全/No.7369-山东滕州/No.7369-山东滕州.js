var uploadedDataURL = "/asset/get/s/data-1591428766582-F1T8HaJu8.json";


/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/




$.getJSON(uploadedDataURL, function(geoJson) {

    echarts.registerMap('tengzhou', geoJson);
    myChart.hideLoading();
    var mapDate = [{
            name: '和家园',
            value: [117.185391, 35.110089]
        },
        {
            name: '翔宇经典',
            value: [117.175861, 35.115679]
        }

    ];


    option = {
        backgroundColor: 'transparent',
        title: {
            top: 0,
            // text: '滕州市-中心城区',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip: {
            showContent: true,
            showDelay: 0,
            hideDelay: 0,
            transitionDuration: 0,
            enterable: true, //鼠标可以进入
            backgroundColor: '#FA8C16', //提示框别景色
            // triggerOn: 'click', //可可点击
            textStyle: {
                color: '#fff',
            },
            // trigger: 'item',
            formatter: function(params) {

                var name = params.name;
                // if (name != '荆河街道' && name != '北辛街道' && name != '龙泉街道' && name != '善南街道') {
                //     var tipHtml = '<div>' + params.name +
                //         '&nbsp;&nbsp;&nbsp;&nbsp;' +
                //         '<button id="mapid" style="background:#fff;color:#000;font-size:12px;" onclick="aa" >' +
                //         '点击查看</button></div>' +
                //         '<div><div>';
                //     return tipHtml;
                // } else {
                //     return '';
                // }
                return name;

            }
        },

        geo: {
            map: 'tengzhou',
            aspectScale: 1, //长宽比

            // aspectScale: 1, //长宽比
            zoom: 1.1,
            roam: true,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}',
                    textStyle: {
                        color: '#FFF',
                        fontSize: 20
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    // areaColor: '#013C62',
                    // shadowColor: '#182f68',
                    // shadowOffsetX: 0,
                    // shadowOffsetY: 25
                    borderColor: '#00FFFF',
                    borderWidth: 2,
                    // areaColor: '#12235c'
                    areaColor: '#00B2ED'
                },
                emphasis: {
                    areaColor: '#2AB8FF',
                    borderWidth: 0,
                    color: 'green',
                    label: {
                        show: false
                    }
                }
            }
        },
        series: [
            //     {
            //     type: 'map',
            //     roam: false,
            //     label: {
            //         normal: {
            //             show: true,
            //             formatter: '{b}',
            //             textStyle: {
            //                 color: '#fff'
            //             }
            //         },
            //         emphasis: {
            //             textStyle: {
            //                 color: '#fff'
            //             }
            //         }
            //     },

            //     itemStyle: {
            //         normal: {
            //             borderColor: '#2ab8ff',
            //             borderWidth: 1.5,
            //             areaColor: '#12235c'
            //         },
            //         emphasis: {
            //             areaColor: '#2AB8FF',
            //             borderWidth: 0,
            //             color: 'green'
            //         }
            //     },
            //     zoom: 1.2,
            //     roam: true,
            //     map: 'tengzhou' //使用
            //     // data: this.difficultData //热力图数据   不同区域 不同的底色
            // },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: mapDate,
                symbolSize: function(val) {
                    return 15;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'top',
                        show: true
                    }
                },
                itemStyle: {
                    color: '#fff',
                    normal: {
                        color: '#00FFFF',
                        shadowBlur: 20,
                        shadowColor: '#00FFFF'
                    }
                },
                zlevel: 1
            },
        ]
    };
    myChart.setOption(option);
});
myChart.on('click', function(param) {
    console.log(param);
    var seriesIndex = param.seriesIndex;
    var dataIndex = param.dataIndex;
    option.series[seriesIndex].itemStyle = {
        color: function(params) {
            if (dataIndex === params.dataIndex) {
                return '#FA8C16'
            }else{
                return '#fff'
            }
        }
    }
    myChart.setOption(option)
});