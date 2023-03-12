var option = {
    backgroundColor: 'rgba(011, 023, 059)',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#808eb7'
            }
        },
        data: ['contract', 'Calling/Approach', 'Appointment', 'Fact-Finding Interview', 'Cases Submitted', 'Referal leads'],
    },
    yAxis: {
        show: false,
    },
    series: [{
            name: 'Actual',
            type: 'bar',
            stack: 'ratio',
            barCategoryGap: 0,
            label: {
                show: true,
                position: 'insideTop',
                formatter: function(list) {
                    const {
                        data,
                        seriesName,
                        name
                    } = list
                    return `${seriesName} \n ${data.value} | ${(Math.round(data.value / data.target * 100))+"%"}`
                    console.log('list', list, data)
                }
            },
            data: [{
                    value: 2000000,
                    target: 4000000,
                    itemStyle: {
                        color: "rgba(217,46,46,1)",
                    }
                },
                {
                    value: 1000000,
                    target: 2000000,
                    itemStyle: {
                        color: "rgba(215,168,120,1)",
                    }
                }, {
                    value: 600000,
                    target: 1000000,
                    itemStyle: {
                        color: "rgba(255,229,184,1)",
                    }
                }, {
                    value: 400000,
                    target: 600000,
                    itemStyle: {
                        color: "rgba(126,186,54,1)",
                    }
                }, {
                    value: 300000,
                    target: 700000,
                    itemStyle: {
                        color: "rgba(21,180,159,1)",
                    }
                }, {
                    value: 800000,
                    target: 2000000,
                    itemStyle: {
                        color: "rgba(97,85,133,1)",
                    }
                }
            ],
        },
        {
            name: 'Goal',
            type: 'bar',
            stack: 'ratio',
            barCategoryGap: 0,
            label: {
                show: true,
                position: 'insideBottom',
                formatter: function(list) {
                    const {
                        data,
                        seriesName,
                        name
                    } = list
                    return `${seriesName} \n ${data.target}`
                }
            },
            data: [{
                    value: 2000000,
                    target: 4000000,
                    itemStyle: {
                        color: "rgba(243,191,193,1)",
                    }
                },
                {
                    value: 1000000,
                    target: 2000000,
                    itemStyle: {
                        color: "rgba(251,218,193,1)",
                    }
                },
                {
                    value: 400000,
                    target: 1000000,
                    itemStyle: {
                        color: "rgba(242,168,0,1)",
                    }
                },
                {
                    value: 200000,
                    target: 600000,
                    itemStyle: {
                        color: "rgba(221,234,146,1)",
                    }
                },
                {
                    value: 400000,
                    target: 700000,
                    itemStyle: {
                        color: "rgba(190,236,234,1)",
                    }
                },
                {
                    value: 1200000,
                    target: 2000000,
                    itemStyle: {
                        color: "rgba(215,210,229,1)",
                    }
                }
            ],
        }
    ]
};