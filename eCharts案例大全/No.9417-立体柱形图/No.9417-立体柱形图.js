const data = [220, 182, 191, 234, 290, 330, 310]
const sideData = data.map(item => item + 4.5)

option = {
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        barWidth: 8,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#01285a" // 0% 处的颜色
                }, {
                    offset: 0.6,
                    color: "#065986" // 60% 处的颜色
                }, {
                    offset: 1,
                    color: "#10b3e0" // 100% 处的颜色
                }], false)
            }
        },
        barGap: 0,
        data: sideData
    }, {
        name: 'a',
        tooltip: {
            show: false
        },
        type: 'bar',
        barWidth: 24.5,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#003ac4" // 0% 处的颜色
                }, {
                    offset: 0.6,
                    color: "#0772d1" // 60% 处的颜色
                }, {
                    offset: 1,
                    color: "#10b3e0" // 100% 处的颜色
                }], false)
            }
        },
        data: data,
        barGap: 0
    }, {
        name: 'b',
        tooltip: {
            show: false
        },
        type: 'pictorialBar',
        itemStyle: {
            borderWidth: 1,
            borderColor: '#10b3e0',
            color: '#0095ce'
        },
        symbol: 'path://m240.2975,208.71808l-30.20001,-92l-120.80001,0l30.20001,92l120.80001,0z',
        symbolSize: ['30', '10'],
        symbolOffset: ['0', '-10'],
        symbolPosition: 'end',
        data: data,
        z: 3
    }]
};