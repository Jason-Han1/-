var option = {
    title: [ //文本数值显示
        { //饼图
            text: '车辆类型统计',
            x: '18%',
            y: '10%',
            textAlign: 'center',
            textStyle: {
                fontSize: 20
            }
        },
        { //饼图
            text: '车辆报警统计',
            x: '40.5%',
            y: '10%',
            textStyle: {
                fontSize: 20
            }
        }, { //饼图
            text: '车辆报警统计',
            x: '70.5%',
            y: '10%',
            textStyle: {
                fontSize: 20
            }
        },
        { //堆积柱状图
            text: '车辆状态统计',
            x: '25%',
            y: '58%',
            textAlign: 'center',
            textStyle: {
                fontSize: 20
            }
        },
        {
            text: '车辆行驶数量',
            x: '67.5%',
            y: '58%',
            textStyle: {
                fontSize: 20
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    // backgroundColor: 'rgba(20,20,100,1)', // 背景色
    grid: [{
            left: '5%',
            right: '55%', // 网格部分
            top: '65%',
            bottom: '5%',
            containLabel: true
        },
        {
            gridindex: 1,
            left: '50%',
            right: '5%',
            top: '65%',
            bottom: '5%',
            containLabel: true
        }
    ],
    xAxis: [{
            type: 'value', // x轴
            axisLabel: {
                formatter: '{value} 辆'
            },
            boundaryGap: [0, 0.02]
        },
        {
            gridIndex: 1,
            type: 'category',
            boundaryGap: false,
            data: ['0时', '1时', '2时', '3时', '4时',
                '5时', '6时', '7时', '8时', '9时',
                '10时', '11时', '12时', '13时', '14时',
                '15时', '16时', '17时', '18时', '19时',
                '20时', '21时', '22时', '23时'
            ]
        }
    ],
    yAxis: [{
            type: 'category', // y轴
            data: ['2020-05-10', '2020-05-23', '2020-05-25', '2020-06-03', '当前课程'],
            axisLabel: {
                interval: 0
            }
        },
        {
            gridIndex: 1,
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    legend: {
        data: ['稳定时长', '中位数以上', '中位数以下'], // 图例
        x: '12%',
        y: '62%',
        textStyle: {
            color: '#FCFCFC'
        }
    },
    series: [{ //饼图
            type: 'pie',
            center: ['25%', '42%'],
            radius: ['', '25%'],
            label: {
                normal: {
                    formatter: '{b} :\n{c}({d}%)'
                }
            },
            data: [
                {
                    value: 10096,
                    name: '中位数以上'
                },
                {
                    value: 1240,
                    name: '中位数以下'
                },{
                    value: 1032,
                    name: '稳定时长'
                },
                
            ]
        },
        { //饼图
            type: 'pie',
            center: ['73%', '42%'],
            radius: ['', '25%'],
            label: {
                normal: {
                    formatter: '{b} :\n{c}({d}%)'
                }
            },
            data: [{
                    value: 512,
                    name: '超速'
                },
                {
                    value: 302,
                    name: 'SOS'
                },
                {
                    value: 743,
                    name: '偏移'
                },
                {
                    value: 205,
                    name: '其他'
                }
            ]
        },
        { //饼图
            type: 'pie',
            center: ['45%', '42%'],
            radius: ['', '25%'],
            label: {
                normal: {
                    formatter: '{b} :\n{c}({d}%)'
                }
            },
            data: [
                {
                    value: 10096,
                    name: '中位数以上'
                },
                {
                    value: 1240,
                    name: '中位数以下'
                },{
                    value: 1032,
                    name: '稳定时长'
                },
                
            ]
        },
        { // 堆积柱状图
            name: '停车',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [320, 302, 301, 334, 390]
        },
        {
            name: '行驶',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [120, 132, 101, 134, 90]
        },
        {
            name: '熄火',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '离线',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [150, 212, 201, 154, 190]
        },
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [820, 932, 901, 934, 1290, 1330,
                1320, 1200, 1134, 1034, 1123, 1290,
                1384, 1136, 984, 843, 934, 1034,
                1204, 1345, 1423, 1320, 1104, 873
            ],
            type: 'line',
            smooth: true
        }
    ]
};