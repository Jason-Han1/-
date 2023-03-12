option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['本期金额', '同期金额', '环比'],
        align: 'left',
        left: '40%',
        textStyle: {
            color: "#737a83"
        },
        itemWidth: 15,
        itemHeight: 15,
        itemGap: 35,
         icon: 'circle',
    },
    grid: {
        top: '50',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['3.21',
            '3.22',
            '3.23',
            '3.24',
            '3.25',
            '3.26',
            '3.27',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#e9ebeb",
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
                color: "#3e4856",
                fontSize:13
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: false,
            formatter: '{value}'
        },
        axisTick: {
            show: false,
        },
        min: 0,
        max: 100,
        interval: 10,
        axisLine: {
            show: false,
            lineStyle: {
                
                color: "#3c3c3c",
                width: 3,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#e9ebeb",
            }
        }
    }],
    series: [{
        name: '恶意占座',
        type: 'bar',
        data: [20, 50, 80, 58, 83, 68, 57],
        barGap: '50%',
        barWidth: '16',
        label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#9099a3'
                    }
                }
            },
        itemStyle: {
            normal: {
                color: '#8bd1d1'
            }
        }
    }, {
        name: '恶意注册',
        type: 'bar',
        data: [50, 70, 60, 61, 75, 87, 60],
        barGap: '60%',
        barWidth: '16',
        label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#9099a3'
                    }
                }
            },
        itemStyle: {
            normal: {
               color: '#3a8fd7'
            }
        }
    }, 
    
    {
        name: '恶意扒取',
        type: 'bar',
        data: [70, 48, 73, 68, 53, 47, 50],
        barGap: '60%',
        barWidth: '16',
        label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#9099a3'
                    }
                }
            },
        
           itemStyle: {
            normal: {
               color: '#3032bb'
            }
        }
        
    }]
};