option = {
    backgroundColor:'#252525',
 // tooltip（提示框组件）
                tooltip: {
                    //trigger(触发类型)，可选'item','axis','none'
                    trigger: 'axis',
                    axisPointer: {
                        //指示器类型,可选'line','shadow','cross'
                        type: 'shadow'
                        }
                },
               //echarts图表的相对于容器的布局,
               grid: {
                   top: 30,
                },
                xAxis: {
                    type: 'category',
                    //axisTick 坐标轴刻度相关设置
                    axisTick: {
                        show: false
                        },
                    //axixLine 坐标轴轴线相关设置
                    axisLine: {
                        lineStyle: {
                            color: '#0e9aef',
                            }
                        },
                    data: ['资产一', '资产二', '资产三', '资产四', '资产五'],
                    //axisLabel 坐标轴刻度标签的相关设置
                    axisLabel: {
                        // show: true,
                        color: '#9cc8f6',
                        fontSize: 12,
                        //rotate 坐标轴刻度标签的显示偏移角度
                         rotate: 0,
                         fontSize: 10
                        }
                    },
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            show: true,
                            color: '#9cc8f6',
                            fontSize: 12,
                        },
                        splitLine: {
                        lineStyle: {
                //type: 'dashed',
                        color: 'rgba(12, 156, 240, 0.2)'
            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#0e9aef'
                                }
                        },
                        axisTick: {
                              lineStyle: {
                                color: 'rgba(12, 156, 240, 0.2)'
                                }
                        },
                    }],
                    series: [{
                        name: '数量',
                        //type决定图表类型
                        type: 'bar',
                        data: [2, 3, 4, 4, 5],
                        barWidth: '60%',
                        itemStyle: {
                            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                            //设置渐变色
                            color: function (params) {
                                var colorList = [
                                    ['#3fc9fb', '#002c55'],
                                    ['#3b3cc1', '#0b173d'],
                                    ['#3fc9fb', '#002c55'],
                                    ['#3b3cc1', '#0b173d'],
                                    ['#3fc9fb', '#002c55'],
                                    ];
                                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: colorList[params.dataIndex][0]
                                    },
                                    {
                                        offset: 1,
                                        color: colorList[params.dataIndex][1]
                                    }]);
                                },
                                barBorderRadius: 0,//柱状角圆角半径
                        }
                    }
                    ]
};