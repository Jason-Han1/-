option = {
    color: [
        "#00bcd5", "#eef4f7"
    ],
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '500'
    },
    title: [{
        left: '10%',
        top: '20%',
        text: 'Total Earned',
        subtext: '$571,324',
        textStyle: {
            color: '#fff',
            fontSize: '30'
        },
        subtextStyle: {
            color: '#fff',
            fontSize: '40'
        }
    }, {
        top: '20%',
        left: '60%',
        text: 'Total Spent',
        subtext: '$784,166',
        textStyle: {
            color: '#849da9',
            fontSize: '30'
        },
        subtextStyle: {
            color: '#849da9',
            fontSize: '40'
        }
    }],
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        containLabel: false
    },
    xAxis: [{
        show: false,
        type: 'value'
    }, {
        show: false,
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        type: 'category',
        boundaryGap: false,
        data: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '16',
            '17',
            '18'
        ]
    }],
    yAxis: [{
        show: false,
        type: 'category',
        data: ['Money']
    }, {
        show: false,
        type: 'value'
    }],
    series: [{
        name: 'Earned',
        type: 'bar',
        stack: '1',
        data: ["1000"],
        barWidth: '100%',
        barMinHeight: '100%'
    }, {
        name: 'Spent',
        type: 'bar',
        stack: '1',
        data: ["1500"],
        barWidth: '100%',
        barMinHeight: '100%'
    }, {
        name: 'Sales',
        type: 'line',
        smooth: false,
        xAxisIndex: 1,
        yAxisIndex: 1,
        lineStyle: {
            normal: {
                width: 0
            }
        },
        symbolSize: 0,
        areaStyle: {
            normal: {}
        },
        itemStyle: {
            normal: {
                color: '#dae6ec'
            }
        },
        data: [
            1,
            4,
            3,
            2,
            4,
            2,
            3,
            1,
            4,
            5,
            3,
            2,
            4,
            5,
            2,
            3,
            4,
            2,
            10
        ]
    }]
}