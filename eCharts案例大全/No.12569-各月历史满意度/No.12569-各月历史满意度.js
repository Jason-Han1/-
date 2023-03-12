option = {
    backgroundColor: '#141845',
    color: '#06DF39',
    title: {
        text: '各月历史满意度',
        textStyle: {
            color: '#fff',
        },
    },
    grid: {
        top: '15%',
        left: '1%',
        right: '5.6%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        }
    },
    yAxis: {
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                color: '#fff',

                fontWeight: 'bold'

            }
        },
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        }
    },
    series: [{
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        data: [90, 80, 85, 90, 92, 88, 87, 92, 83, 84, 86, 88],
        type: 'line'
    }]
};