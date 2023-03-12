// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 20; i++) {
    var date = new Date((dottedBase += 1000 * 3600 * 24));
    category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
    var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
}

// option
option = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333',
            },
        },
    },
    legend: {
        data: ['line', 'bar'],
        textStyle: {
            color: '#ccc',
        },
    },
    xAxis: {
        type: 'category',
        data: category,
        // boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: '#ccc',
            },
        },
        axisLabel: {
            textStyle: {
                align: 'left',
            },
        },
    },
    yAxis: {
        splitLine: { show: false },
        axisLine: {
            lineStyle: {
                color: '#ccc',
            },
        },
    },
    series: [
        {
            name: 'line',
            type: 'line',
            smooth: true,
            // showSymbol: ,
            symbol: (e, index) => {
                console.log('aaaa', index)
                if (index.name === '2021-12-24') {
                  
                    return 'circle';
                }
                return 'none';
            },
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: 'orange',
                    borderColor: '#fff',
                    borderWidth: 1,
                    lineStyle: {
                        color: 'lightblue',
                    },
                },
            },
            data: lineData,
        },
        {
            name: 'bar',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#14c8d4' },
                        { offset: 1, color: '#43eec6' },
                    ]),
                },
            },
            data: barData,
        },
        {
            name: 'line',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(20,200,212,0.5)' },
                        { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                        { offset: 1, color: 'rgba(20,200,212,0)' },
                    ]),
                },
            },
            z: -12,
            data: lineData,
        },
        {
            name: 'dotted',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#0f375f',
                },
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData,
        },
    ],
};
