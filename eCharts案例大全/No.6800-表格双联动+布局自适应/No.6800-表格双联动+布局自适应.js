
const seriesBar = new Array(5).fill({
    type: 'bar',
    stack: 'total',
    smooth: true,
    seriesLayoutBy: 'row',
    label: {
        show: true,
        position: 'inside'
    }
});
let lastBarDataIndex = 0

setTimeout(function() {

    option = {
        baseOption: {
            legend: {
                show: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(0, 0, 0, 0.08)'
                    }
                },
                showContent: false
            },
            dataset: {
                source: [
                    ['year', '2017', '2018', '2019', '2020'],
                    ['Matcha Latte', 41.1, 30.4, 65.1, 98.7],
                    ['Milk Tea', 86.5, 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 24.1, 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 55.2, 72.4, 53.9, 39.1],
                    ['Walnut sdfd', 55.2, 67.1, 86.2, 48.1],
                ]
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                gridIndex: 0
            },
            series: [
                ...seriesBar,
                {
                    type: 'pie',
                    id: 'pie',
                    tooltip: {
                        trigger: 'item',
                        showContent: true
                    },
                    label: {
                        position: 'center',
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '23',
                            fontWeight: 'bold',
                            formatter: '{d}%'
                        }
                    },
                    encode: {
                        itemName: 'year',
                        value: '2017',
                        tooltip: '2017'
                    }
                }
            ]
        },
        // 添加移动端适配配置
        media: [{
                option: {
                    legend: {
                        right: 'center',
                        top: 0,
                        orient: 'horizontal',
                        itemWidth: 25,
                        itemHeight: 14,
                        itemGap: 10
                    },
                    grid: {
                        top: '15%',
                        left: '8%',
                        bottom: '10%',
                        right: '50%'
                    },
                    series: [
                        ...seriesBar,
                        {
                            radius: ['20%', '50%'],
                            center: ['76%', '50%']
                        }
                    ]
                }
            },
            {
                query: {
                    // 宽度为容器宽度，并非window宽度
                    maxWidth: 900
                },
                option: {
                    legend: {
                        right: '12%',
                        top: '62%',
                        orient: 'vertical',
                        itemWidth: 20,
                        itemHeight: 11,
                        itemGap: 6
                    },
                    grid: {
                        top: '8%',
                        left: '15%',
                        bottom: '55%',
                        right: '12%'
                    },
                    series: [
                        ...seriesBar,
                        {
                            radius: ['25%', '45%'],
                            center: ['35%', '72%'],
                            emphasis: {
                                label: {
                                    fontSize: '18'
                                }
                            }
                        }
                    ]
                }
            }
        ]
    };

    myChart.on('mouseover', function({
        seriesIndex,
        dataIndex,
        seriesType
    }) {
        if (seriesType === 'bar') {
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}'
                    },
                    encode: {
                        value: dataIndex + 1,
                        tooltip: dataIndex + 1
                    }
                }
            });
            
            lastBarDataIndex = dataIndex

            //高亮显示饼图
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 5, // 第5个固定是饼图
                dataIndex: seriesIndex
            });
        }

    });

    // 当鼠标离开柱状图每个堆叠项时
    myChart.on('mouseout', function({
        seriesType
    }) {
        if (seriesType === 'bar') {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 5,
                dataIndex: [0, 1, 2, 3, 4] //鼠标移出时取消全部高亮
            });
        }
    });

    // 当鼠标在饼图时，高亮显示柱状图
    myChart.on('mousemove', function({
        seriesType
    }) {
        if (seriesType === 'pie') {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: lastBarDataIndex
            });
        }
    });

    myChart.setOption(option);

});