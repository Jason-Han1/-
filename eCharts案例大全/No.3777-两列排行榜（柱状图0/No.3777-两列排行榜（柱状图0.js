var data = [{
        name: '杭州市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '宁波市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '温州市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '嘉兴市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '湖州市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '绍兴市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '金华市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '衢州市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '舟山市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '台州市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '丽水市',
        value: (Math.random() * 100).toFixed(2)
    }

]

var data = data.sort((a, b) => b.value - a.value);
var max = Math.max(...data.map(item => item.value));
var len = Math.ceil(data.length / 2);
var otherLen = data.length - len;
var datas = [data.slice(0, len), data.slice(len)]
var xAxis = [],
    yAxis = [],
    series = [];
for (var i = 0; i < 2; i++) {
    xAxis.push({
        gridIndex:i,
        show: false,
        type: 'value'
    })
    yAxis.push({
        gridIndex:i,
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            align: 'right',
            textStyle: {
                fontSize: 14,
                color: '#333'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: datas[i].map(item => item.name)
    })
    yAxis.push({
        gridIndex:i,
        type: 'category',
        inverse: true,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            margin:0,
            textStyle: {
                color: '#3196fa',
                fontSize: '12'
            },
            formatter: '{value}%'
        },
        data: datas[i].map(item => item.value)
    })
    series.push({
        type: 'bar',
        barWidth: 10,
        xAxisIndex: i,
        yAxisIndex: [2 * i, 2 * (i + 1) - 1],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#72AEFF' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#0084FF' // 100% 处的颜色
            }], false),
            barBorderRadius: 5
        },
        zlevel: 1,
        data: datas[i]
    })
    series.push({
        type: 'bar',
        barWidth: 10,
        xAxisIndex: i,
        yAxisIndex: [2 * i, 2 * (i + 1) - 1],
        itemStyle: {
            color: '#263877',
            barBorderRadius: 5
        },
        barGap: '-100%',
        zlevel: 0,
        data: (new Array(datas[i].length)).fill(max)
    })
}
option = {
    legend: {
        show: false
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [{
        x: 0,
        y: 0,
        width: '45%',
        height: '100%',
        containLabel: true
    }, {
        x2: 0,
        y: 0,
        left: '50%',
        width: '45%',
        height: otherLen / len * 100 + '%',
        containLabel: true
    }],
    yAxis: yAxis,
    xAxis: xAxis,
    series: series
}
