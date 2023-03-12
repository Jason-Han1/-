option = {
    backgroundColor:"#001037",
    color: ['#D0A00E', '#EB8D6C', '#0096F3'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        top: '4%',
        right: '4%',
        itemWidth: 17,
        itemHeight: 12,
        textStyle: {
            color: '#ADD6FF',
            fontSize: 10
        },
        data: ['待考', '通过', '不通过']
    },
    grid: { //图表的位置
        top: '10%',
        left: '2%',
        right: '2%',
        bottom: '10%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            color: '#ADD6FF',
            interval: 'auto',
            formatter: '{value} '
        },
        axisLine: {
            lineStyle: {
                color: '#0a4980'
            }
        },
        splitLine: {
            show: false,
        },
    }],
    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 10,
                color: '#ADD6FF'
            },
        },
        axisLine: {
            lineStyle: {
                color: '#0a4980'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    }],
    series: [{
            name: '待考',
            type: 'bar',
            stack: 'sum',
            barWidth: '45%',
            data: [20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30]
        },
        {
            name: '通过',
            type: 'bar',
            barWidth: '45%',
            stack: 'sum',
            data: [9, 30, 9, 60, 70, 20, 59, 20, 49, 20, 20, 30]
        },
        {
            name: '不通过',
            type: 'bar',
            stack: 'sum',
            barWidth: '45%',
            data: [20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30]
        }
    ]
};