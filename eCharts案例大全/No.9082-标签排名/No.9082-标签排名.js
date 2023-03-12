var colorArray = [{
        top: '#ffa800', //黄
        bottom: 'rgba(11,42,84,.3)'
    }, {
        top: '#1ace4a', //绿
        bottom: 'rgba(11,42,84, 0.3)'
    },
    {
        top: '#4bf3ff', //蓝
        bottom: 'rgba(11,42,84,.3)'
    }, {
        top: '#4f9aff', //深蓝
        bottom: 'rgba(11,42,84,.3)'
    },
    {
        top: '#b250ff', //粉
        bottom: 'rgba(11,42,84,.3)'
    }
];
option = {
    backgroundColor: '#0E2A43',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        show: true,
        // formatter: "#{b} 引用 {c}次数",
        formatter: function(params, ticket, callback) {
            console.log(params)
            return `#${params[0].data[1]} ${params[0].data[0]}次数`
        },
    },
    grid: {
        // left: '5%',
        // top: '12%',
        // right: '1%',
        // bottom: '8%',
        // containLabel: true
    },
    xAxis: {
        type: 'value',
        show: false,
        position: 'top',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

            },
            inverse: 'true', //排序
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            // data: ['标签', '标签', '标签', '标签', '标签']
        }

    ],
    series: [{
            name: '引用次数',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: '',
                    // position: 'right',
                    formatter: function(params, ticket, callback) {
                        console.log(params)
                        return `#${params.data[1]} ${params.data[0]}次数`
                    },
                    textStyle: {
                        color: 'white' //color of value
                    }
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
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
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: 30,
            barCategoryGap: '50%',
            data: [
                [100, 5, '标签1', 1],
                [120, 4, '标签2', 1],
                [120, 3, '标签2', 1],
                [120, 2, '标签2', 1],
                [120, 1, '标签2', 1]
            ]
        }

    ]
};