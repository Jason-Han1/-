var uploadedDataURL = "/asset/get/s/data-1596509248695-ZzON7CaUd.json";
myChart.showLoading();


$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('xinjiang', geoJson);
    myChart.hideLoading();
    
    let index = -1;
    
    var timer = setInterval(function() {
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
         myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index + 1
        });
        index++;
        if (index > 13) {
            index = -1;
        }
    },2000)
    
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
    });
    
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
            if (index > 21) {
                index = -1;
            }
        }, 2000);
    });
    
    var option = {
        backgroundColor: '#020933',
        title: {
            top: 20,
            text: "“测试”，新疆",
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },
        
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + ':' + '11111';
            }
        },
        
        visualMap: {
            min: 0,
            max: 1000000,
            right: 100,
            seriesIndex: 1,
            type: 'piecewise',
            bottom: 100,
            textStyle: {
                color: '#fff'
            }
        },
        
        geo: {
            map: 'xinjiang',
            aspectScale: 0.75,
            zoom: 1.1,
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#013c62',
                    shadowColor: '#182f68',
                    shadowOffsetX: 0,
                    shadowOffsetY: 25
                },
                emphasis: {
                    areaColor: '#2ab8ff',
                    borderWidth: 0,
                    color: 'green',
                    label: {
                        show: false
                    }
                }
            }
        },
        
        series:[
            {
                type: 'map',
                roam: false,
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
                        areaColor: '#2ab8ff',
                        borderWidth: 1.5,
                        color: 'green'
                    }
                },
                zoom: 1.1,
                roam: false,
                map: 'xinjiang'
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
                }
            }
        ]
    }
    myChart.setOption(option);
})