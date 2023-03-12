option = {
    backgroundColor:'',
    grid: {
        containLabel: true,
        left: 0,
        right: 0,
        bottom: 0,
        top: 10
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            shadowStyle: {
                color: "rgba(255,255,255,0.3)",
            }

        },
        formatter: ':00-{b}:00<br/>{c}% 通过率',
        textStyle: {
            color: "#000000"
        },
        backgroundColor: "rgba(255,255,255,1)"
    },
    xAxis: {
        type: 'category',
        data: [
            '01', '02',
            '03', '04',
            '05', '06',
            '07', '08',
            '09', '10',
            '11', '12',
            '13', '14',
            '15', '16',
            '17', '18',
            '19', '20',
            '21', '22',
            '23', '24'
        ],
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgb(237, 232, 249)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#e1e2e9',
            },
        },
        axisLabel: {
            color: '#c3c6d0',
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#e0e0e8',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#c3c6d0',
        }
    },
    series: [{
        data: [70, 78, 82, 82, 12, 9, 2, 2, 5, 24, 36, 36, 41, 45, 32, 59],
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 4,
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        }
    }],
    visualMap: [{
        show: false,
        pieces: [{
            gt: 0,
            lt: 20,
            color: '#e14647',
        }],
        outOfRange: {
            color: '#6a75c3',
        },
    }, ],
}