var uploadedDataURL = "/asset/get/s/data-1592564187268-VhgDQWxGM.json";

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

    echarts.registerMap('kunming', geoJson);
    myChart.hideLoading();
    var mapDate = [{
            name: '安宁市',
            value: [102.267345, 24.553843, 400]
        },
        {
            name: '富民县',
            value: [102.397345, 25.213843, 358]
        },
        {
            name: '晋宁县',
            value: [102.362967558594, 24.428843, 266]
        },
        {
            name: '石林彝族自治县',
            value: [103.517345, 24.523843, 4700]
        },
        {
            name: '宜良县',
            value: [103.177345, 24.523843, 367]
        },
        {
            name: '呈贡区',
            value: [102.987345, 24.983843, 2890]
        },
        {
            name: '东川区',
            value: [103.082345, 25.911059796875, 326]
        },
        {
            name: '禄劝彝族苗族自治县',
            value: [102.457345, 25.423843, 346]
        },
        {
            name: '寻甸回族彝族自治县',
            value: [103.267345, 25.343843, 367]
        },
        {
            name: '官渡区',
            value: [102.69041061401367, 24.954779310754688, 2999]
        },
        {
            name: '盘龙区',
            value: [102.71534442901611, 25.036463114777977, 3459]
        },
        {
            name: '西山区',
            value: [102.70734339952469, 24.883847593224083, 4678]
        },
        {
            name: '五华区',
            value: [102.7215403318405, 25.259248915484154, 5279]
        },
        {
            name: '嵩明县',
            value: [103.06037575006485, 25.13741270059397, 534]
        }
    ];


    option = {
        backgroundColor: '#020933',
        title: {
            top: 20,
            text: '昆明市微博签到热点区域',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },

        // tooltip: {
        //     trigger: 'item',
        //     formatter: function(params) {
        //         console.log(params)
        //             return params.name + ' : ' + params.value[2];
        //     }
        // },
        visualMap: {
            min: 0,
            max: 1000000,
            right: 100,
            seriesIndex: 1,
            type: 'piecewise',
            bottom: 100,
            textStyle: {
                color: '#FFFF'
            },
            splitList: [{
                    gt: 5000,
                    color: '#F5222D',
                    label: '签到人数大于5千人'
                }, //大于5万人
                {
                    gte: 3000,
                    lte: 5000,
                    color: '#FA541C ',
                    label: '签到人数3-5千人'
                }, //3-5万人
                {
                    gte: 1000,
                    lte: 3000,
                    color: '#FA8C16',
                    label: '签到人数1-3千人'
                }, //1-3万人
                {
                    lte: 1000,
                    color: '#fbe1d6',
                    label: '签到人数小于1千人'
                }
            ]
        },

        geo: {
            map: 'kunming',
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
                        areaColor: '#12235c'
                    },
                    emphasis: {
                        areaColor: '#2AB8FF',
                        borderWidth: 0,
                        color: 'green'
                    }
                },
                zoom: 1.1,
                roam: false,
                map: 'kunming' //使用
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