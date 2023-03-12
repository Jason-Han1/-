var arr = ['20', '50', '80', '58', '83', '68', '57', '80'];
var datalist = [];
var obj = {
    xAxis: 3,
    label: {
        show: true,
        formatter: '90'
        // formatter: '{c}'
    }
}
arr.forEach((item, index) => {
    var obj2 = {
        xAxis: 3,
        label: {
            show: true,
            formatter: '90'
            // formatter: '{c}'
        }
    }
    obj2.xAxis = index
    obj2.label.show = true
    obj2.label.formatter = item + '%'
    datalist.push(obj2)
})
console.log(datalist)
var option = {
    backgroundColor: '#FAFAFA',
    title: {
        text: '节目收视率',
        textStyle: {
            color: '#888',
            fontSize: 24
        }
    },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     }
    // },
    color: ['#b2f4f8', '#ffcb4d', '#12fffe'],
    legend: {
        data: ['大学教育程度', '所有观众'],
        right: 10,
        top: 10,
        textStyle: {
            // color: "#000",
            fontSize: 16
        },
        icon: 'circle',
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 35
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '5%',
        top: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['19:00',
            '19:10',
            '19:20',
            '19:30',
            '19:40',
            '19:50',
            '20:00',
            '20:10',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#666",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,

            textStyle: {
                color: "#666",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        name: '%',
        nameTextStyle: {
            color: '#000'
        },
        offset: 0,
        axisLabel: {
            formatter: '{value} %',
            color: '#666'

        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#999",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#076969",
                width: 1,
            }
        }
    }],
    series: [{
        name: '大学教育程度',
        type: 'line',
        data: [20, 50, 80, 58, 83, 68, 57, 80, ],
        smooth: true,
        symbolSize: 8,
        itemStyle: {
            color: 'rgb(91, 106, 174)',

            borderColor: 'rgb(91, 106, 174)',
            borderWidth: 2,


        },

        lineStyle: {
            color: 'rgb(91, 106, 174)',
            width: 2
        },
        areaStyle: {
            // 区域填充样式
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: 'rgba(86, 132, 240, 0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(143, 186, 249, 0)'
                        }
                    ],
                    false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        markLine: {
            symbol: [0, 'circle'],
            // symbolSize: ,
            lineStyle: {
                normal: {
                    color: "#5684F0",
                    type: 'solid',
                    width: 2,
                    opacity: 0.3
                },
                emphasis: {
                    color: "#d9def7"
                }
            },
            data: datalist
        }
    }, {
        name: '所有观众',
        type: 'bar',
        z: 10,
        data: [1, 48, 73, 68, 53, 47, 50, 72],
        barWidth: 10,
        barGap: 1,
        itemStyle: {
            normal: {
                barBorderRadius: 0,
                color: '#5865A8'
            }
        },
        label: {
            show: true,
            position: 'right',
            textStyle: {
                color: '#f90'
            },
            formatter: '{c}%'
        }
    }]
};