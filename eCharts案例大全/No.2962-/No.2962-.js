// xdata
let xData = ['海拉尔区', '满洲里市', '扎兰屯市', '牙克石市', '根河市', '阿荣旗', '额尔古纳市', '陈巴尔虎旗']
    // ydata
let yData = [11, 7, 7, 7, 5, 5, 6, 5]

option = {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: {
        left: '3%',
        right: '2   %',
        bottom: '5%',
        width: '95%',
        height: '85%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xData,
        axisLabel: { rotate: 30, textStyle: { fontSize: '90%', color: "#fff" } },
        axisLine: { show: false },
        axisTick: false
    }],
    yAxis: [{
        type: 'value',
        name: '家',
        nameTextStyle: { color: '#fff', fontSize: '90%', padding: [0, 0, 0, 0] },
        splitLine: { lineStyle: { color: '#1b2e51' } },
        axisLabel: { textStyle: { fontSize: '90%', color: "#fff" } },
        axisLine: { show: true, lineStyle: { color: "#1b2e51" } },
        axisTick: false
    }],
    series: [{
        type: 'pictorialBar',
    }, {
        type: 'bar',
        barWidth: 20,
        data: yData,
        itemStyle: {
            color: params => {
                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FFAF79'
                }, {
                    offset: 1,
                    color: '#FF8C59'
                }])
            }
        },

    }]
};
