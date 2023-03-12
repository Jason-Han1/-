option = {
                    color: ['#FADB71'],
                    title: {
                        top: 13,
                        left: 'center',
                        text: '饮水安全工程供水人口统计（地州）'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '8%',
                        right: '3%',
                        bottom: '13%',
                        top: '13%'
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ["巴州", "喀什地区", "伊犁州", "和田地区", "克拉玛依市", "昌吉州", "克州", "哈密市", "乌鲁木齐市", "吐鲁番市", "阿勒泰地区", "塔城地区", "阿克苏地区", "博州"],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                color: "#FADB71", //刻度线标签颜色
                                rotate:40,
                                show: true,
                                textStyle: {
                                    fontSize: '12'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel: {
                                color: "#FADB71" //刻度线标签颜色
                            }
                        }
                    ],
                    series : [
                        {
                            name:'人口数量',
                            type:'bar',
                            barWidth: '60%',
                            data:[10, 52, 200, 334, 390, 330, 220,52, 200, 334, 390, 330, 220, 220]
                        }
                    ]
                }