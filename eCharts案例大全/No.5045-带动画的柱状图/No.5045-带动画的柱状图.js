    var xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大强']
    var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]
    const colorArray = [{
            top: '#ffa800', //黄
            bottom: 'rgba(248,195,248,.3)'
        }, {
            top: '#1ace4a', //绿
            bottom: 'rgba(100,255,249, 0.3)'
        },
        {
            top: '#4bf3ff', //蓝
            bottom: 'rgba(135,183,255,.3)'
        }, {
            top: '#4f9aff', //深蓝
            bottom: 'rgba(11,42,84,.3)'
        },
        {
            top: '#b250ff', //粉
            bottom: 'rgba(100,255,249,.3)'
        }
    ];



    var option = {
        backgroundColor: '#000E1A',
        animation: true, // 控制动画是否开启
        // animationDuration: 10000, // 动画的时长, 它是以毫秒为单位
        animationDuration: function(arg) {
            console.log(arg)
            return 1000 * arg
        },
        animationEasing: 'bounceOut', //linear 缓动动画
        animationThreshold: 8, // 动画元素的阈值
        xAxis: {
            type: 'category',
            data: xDataArr
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            type: 'bar',
            data: yDataArr,
            markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                }, {
                    type: 'min',
                    name: '最小值'
                }]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            },
            label: {
                show: true,
                rotate: 60
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }]
                        }
                    },
                    // barBorderRadius: 20,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: '30%'
        }]
    };