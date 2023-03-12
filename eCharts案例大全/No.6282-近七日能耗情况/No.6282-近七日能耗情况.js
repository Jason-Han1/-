option = {
    title: {
        text: "近七日能耗情况",
        color: "#A5B0B2FF",
        textStyle: {
            fontSize: '32'
        },
        left: '5%',
    },
    legend: {
        top: 0,
        bottom: 0,
        right: '4%',
        data: ['耗电', '耗水'],
        padding: [5, 10],
        icon: 'none',
        selectedMode: 'single',
        selected: {
            '耗电': true,
            '耗水': false
        },
        textStyle: {
            color: 'rgba(0,220,255,1)',
            borderWidth: '1px',
            borderColor: 'rgba(0,220,255,1)',
            borderRadius: '2',
            padding: [3, 3, 3, 3]
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['8.17', '8.18', '8.19', '8.20', '8.22', '8.23', '8.26'],
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,83,120,0.5)',
            }
        },
        
        axisLabel: {
            show: true,
            color: "#A5B0B2"

        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                width: '0'
            }
        },
        axisLabel: {
            show: true,
            color: "#A5B0B2"

        },
        splitLine: {
            show:true,
            lineStyle: {
                color:"rgba(0,83,120,0.5)",
            }
        },

    },
    series: [{
            name: '耗电',
            data: [1200, 2000, 1500, 800, 700, 1100, 1300],
            itemStyle: {
                normal: {
                    color: 'rgba(0,220,255,1)',
                }
            },
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(143,220,255,0.2)'
            },
            barWidth: "60%"
        },
        {
            name: '耗水',
            data: [600, 700, 450, 800, 650, 1000, 900],
            itemStyle: {
                normal: {
                    color: 'rgba(0,220,255,1)',
                }
            },
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(143,220,255,0.2)'
            },
            barWidth: "40%"
        },
    ]
};