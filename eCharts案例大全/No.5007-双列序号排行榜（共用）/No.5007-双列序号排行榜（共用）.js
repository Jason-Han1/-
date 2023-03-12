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
data = data.map((item) => {
    item.pm = i + 1;
    return item
})


var data = data.sort((a, b) => b.value - a.value);
var max = Math.max(...data.map(item => item.value));
var len = Math.ceil(data.length / 2);
var otherLen = data.length - len;
var datas = [data.slice(0, len), data.slice(len)]
var xAxis = [],
    yAxis = [],
    series = [];
var startIndex;
for (var i = 0; i < 2; i++) {
    startIndex = (i === 0 ? 0 : len);
    xAxis.push({
        show: false,
        type: 'value',
        gridIndex: i,
        max: max,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    })
    yAxis.push({
        type: 'category',
        gridIndex: i,
        axisLine: {
            show: false
        },
        axisLabel: {
            verticalAlign: 'bottom',
            align: 'left',
            padding: [0, 0, 15, 10],
            color: '#fff',
            fontSize: '16',
            formatter: (p, index) => {
                var sIndex = data.map(item => item.name).indexOf(p);
                return '{index|' + moreThanTen(sIndex + 1) + '} ' + p;
            },
            rich: {
                index: {
                    color: '#26BCFF',
                    fontSize: '26',
                    fontWeight: 'bold'
                }
            }
        },
        axisTick: {
            show: false
        },
        inverse: true,
        data: datas[i].map(item => item.name)
    })
    yAxis.push({
        type: 'category',
        gridIndex: i,
        axisLine: {
            show: false
        },
        axisLabel: {
            verticalAlign: 'bottom',
            align: 'right',
            padding: [0, 0, 15, 10],
            textStyle: {
                color: '#fff',
                fontSize: '26',
            },
            formatter: params => {
                return '{num|' + params + '}%'
            },
            rich: {
                num: {
                    color: '#FF982E',
                    fontSize: '26',
                    fontWeight: 'bold'
                }
            }
        },
        axisTick: {
            show: false
        },
        inverse: true,
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
        x: '5%',
        y: '5%',
        width: '40%',
        height: '100%'
        // containLabel: true
    }, {
        x2: '5%',
        y: '5%',
        left: '50%',
        width: '40%',
        height: otherLen / len * 100 + '%'
        // containLabel: true
    }],
    yAxis: yAxis,
    xAxis: xAxis,
    series: series
}

function moreThanTen(num) {
    return num >= 10 ? num : '0' + num;
}