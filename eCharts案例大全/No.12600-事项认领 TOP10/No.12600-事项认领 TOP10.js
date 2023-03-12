option = {
    title: {
        text: '事项认领 TOP10',
        textStyle: {
            color: '#fff',
        },
    },
    backgroundColor: '#141845',
    color: ['#00A2E2'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['住房城乡建设厅', '省食品药品监管局', '省工商局', '省质监局', '人力资源和社会保障厅', '农业厅', '文化厅', '省安全监管局', '司法厅', '省发展改革委'],
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            interval: 0,
            rotate: -40
        },
        splitLine: {
            show: false
        }

    }],
    yAxis: [{
        splitLine: {
            show: false
        },
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        }
    }, ],
    grid: {
        top: '18%',
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    series: [

        {
            type: 'bar',
            barWidth: '60%',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00A2E2'
                    }
                }
            },
            data: [1382, 218, 176, 171, 170, 143, 140, 132, 122, 103]
        }
    ]
};