var uploadedDataURL = "https://geo.datav.aliyun.com/areas_v2/bound/350000_full.json";

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

// var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
myChart.showLoading();
let index = -1;
var timer = setInterval(function() {
    // 隐藏提示框
    myChart.dispatchAction({
        type: 'hideTip',
        seriesIndex: 0,
        dataIndex: index
    });
    // 显示提示框
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index + 1
    });
    // 取消高亮指定的数据图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index
    });
    // 高亮指定的数据图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index + 1
    });
    index++;
    if (index > 13) {
        index = -1;
    }
}, 2000);


myChart.on('mousemove', function(e) {
    clearInterval(timer);
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: e.dataIndex
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: e.dataIndex
    });
}); //---------------------------------------------鼠标移入静止播放
myChart.on('mouseout', function(e) {
    clearInterval(timer);
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: e.dataIndex
    }); //鼠标移出后先把上次的高亮取消
    timer = setInterval(function() {
        // 隐藏提示框
        myChart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 0,
            dataIndex: index
        });
        // 显示提示框
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index + 1
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
        });
        // 高亮指定的数据图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index + 1
        });
        index++;
        if (index > 13) {
            index = -1;
        }
    }, 2000);
});
$.getJSON(uploadedDataURL, function(geoJson) {

    echarts.registerMap('fujian', geoJson);
    myChart.hideLoading();
    var mapDate = [{
            name: '福州市',
            value: [119.306239, 26.075302, 29999]
        },
        {
            name: '厦门市',
            value: [118.11022, 24.490474, 29999]
        },
        {
            name: '泉州市',
            value: [118.589421, 24.908853, 29999]
        },
        {
            name: '漳州市',
            value: [117.661801, 24.510897, 29999]
        },
        {
            name: '宁德市',
            value: [119.527082, 26.65924, 29999]
        },
        {
            name: '莆田市',
            value: [119.007558, 25.431011, 29999]
        },
        {
            name: '南平市',
            value: [118.178459, 26.635627, 29999]
        },
        {
            name: '三明市',
            value: [117.635001, 26.265444, 29999]
        },
        {
            name: '龙岩市',
            value: [117.02978, 25.091603, 29999]
        }
    ];


    option = {
        backgroundColor: '#020933',
        title: {
            top: 20,
            text: '福建省',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#FFF'
            }
        },



        geo: {
            map: 'fujian',
            aspectScale: 0.75, //长宽比
            zoom: 1.1,
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#013C62',
                    shadowColor: '#182f68',
                    shadowOffsetX: 0,
                    shadowOffsetY: 25
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
        series: [{
                type: 'map',
                roam: true,
                label: {
                    normal: {
                        show: true,
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

                itemStyle: {
                    normal: {
                        borderColor: '#2ab8ff',
                        borderWidth: 1.5,
                        areaColor: '#0e0e0e' //地图色块颜色
                    },
                    emphasis: {
                        areaColor: '#2AB8FF', //地图色块选中色
                        borderWidth: 0,
                        color: 'green'
                    }
                },
                zoom: 1.1,
                roam: false,
                map: 'fujian' //使用
                // data: this.difficultData //热力图数据   不同区域 不同的底色
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#ffff',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: mapDate
            }

        ]
    };
    myChart.setOption(option);
});