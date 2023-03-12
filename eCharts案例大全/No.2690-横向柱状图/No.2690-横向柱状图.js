option = {
    backgroundColor:'rgba( 9, 12, 32, .5)',
    tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: [
                    {
                        name: '设备达标',
                        textStyle: {
                            color: '#50B6FA'
                        },
                        itemStyle: {
                            color: '#50B6FA'
                        },
                    }, 
                    {
                        name: '数据达标',
                        textStyle: {
                            color: '#50FAAB'
                        },
                        itemStyle: {
                            color: '#50FAAB'
                        },
                    }
                ],
                left: '66',
                itemWidth: 8,             // 图例图形宽度
                itemHeight: 8,
                padding: [
                    15,  // 上
                    0, // 右
                    15,  // 下
                    0, // 左
                ],
                textStyle: {
                    fontFamily: 'PingFangSC-Regular',
                    fontSize: 14,
                    color: '#50B6FA',
                    lineHeight: 20,
                    fontWeight: '400',
                },
                
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisTick: {
                    show: true,
                    inside: true,
                    alignWithLable: true
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#6A97FF",
                    },
                },
                axisLabel: {
                    color: "#D0DEFF",
                    fontSize: 14,
                    fontFamily: "PingFangSC-Regular",
                    align: "center",
                    fontWeight: "400",
                },
                boundaryGap: [0, 0.01],
                splitLine: {//x轴分割线
                    show: false,
                },
            },
            yAxis: {
                type: 'category',
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: "#D0DEFF",
                    fontSize: 14,
                    fontFamily: "PingFangSC-Regular",
                    align: "right",
                    fontWeight: "400",
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#6A97FF",
                    },
                },
                data: ['南京', '徐州', '扬州', '常州', '连云港', '盐城', '宿迁',
                    '泰州', '南通', '镇江', '苏州', '无锡', '淮安']
            },
            series: [
                {
                    name: '设备达标',
                    type: 'bar',
                    color: '#50B6FA',
                    data: [18, 29, 34, 170, 134,803, 289, 170, 144,234, 100, 134, 63],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                            1,
                            0,
                            0,
                            0,
                            [
                                {
                                offset: 0,
                                color: 'rgba(80, 182, 250, 1)'
                                },
                                {
                                offset: 1,
                                color: 'rgba(80, 182, 250, 0)'
                                }
                            ],
                            false
                            )
                        }
                    },
                },
                {
                    name: '数据达标',
                    type: 'bar',
                    color: '#50FAAB',
                    data: [125, 438, 300, 194, 141,183, 234, 234, 490, 104, 131, 144, 687],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                            1,
                            0,
                            0,
                            0,
                            [
                                {
                                offset: 0,
                                color: 'rgba(80, 250, 171, 1)'
                                },
                                {
                                offset: 1,
                                color: 'rgba(80, 250, 171, 0)'
                                }
                            ],
                            false
                            )
                        }
                    },
                }
            ]
};
