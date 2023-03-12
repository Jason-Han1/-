let localdata = {
    rain: [8, 18, 8, 12, 0, 19, 21, 19, 24.8, 23, 29.7],
    tmp: [12, 13, 9.7, 8, -6, 15, 25, 15, 23, 14, 23],
    winds: [3, 2.8, 5, 6.8, 6.4, 8, 7, 8.4, 7, 8, 10],
    pre: [600, 400, 550, 580, 400, 500, 700, 500, 600, 700, 650]
};

let colors = ['#4BC946', '#FDA975', '#27D3E2', '#FF0014'];
let splitNumber = 5; // 分割段数

//计算最大值
function calMax(arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let interval = (max - min) / splitNumber; // 平均值
    max = Math.ceil(max + interval); // 向上取整
    // console.log(min, max, interval);
    return max;
}

//计算最小值
function calMin(arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let interval = (max - min) / splitNumber; // 平均值
    min = min === 0 ? min : Math.floor(min - interval); // 向下取整
    // console.log(min, max, interval);
    return min;
}

option = {
    color: colors,
    backgroundColor: '#fff',
    title: {
        text: '2020年2月4日某站雷暴天气时序图',
        subtext: '灾害时间：2020/2/4 08:30-20202/4 10:20',
        top: '1%',
        x: 'center',
        textStyle: { color: '#2D527C', fontSize: '20', fontWeight: 'bold'},
        subtextStyle: { color: '#2D527C', fontSize: '14', fontWeight: 'bold' }
    },
    grid: {
        top: '15%',
        bottom: '10%',
        left: '15%',
        right: '15%',
    },
    legend: {
        top: '9%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
    },
    xAxis: {
        type: 'category',
        axisTick: { show: false },
        axisLabel: {
            textStyle: { color: '#333333', fontSize: 14 }
        },
        axisLine: {
            show: false,
            lineStyle: { color: '#707070' }
        },
        data: ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    },
    yAxis: [{
        // name: '降水(mm)',
        type: 'value',
        position: 'left',
        min: calMin(localdata.rain),
        max: calMax(localdata.rain),
        splitNumber: splitNumber,
        interval: (calMax(localdata.rain) - calMin(localdata.rain)) / splitNumber,
        splitLine: {
            lineStyle: { type: 'dashed', color: '#707070' }
        },
        axisLabel: {
            // formatter: '{value}mm',
            formatter: function(value, index) {
                return (value + '').indexOf('.') != -1 ? value.toFixed(1) + 'mm' : value + 'mm';
            },
            textStyle: { color: colors[0], fontSize: 14 }
        },
        axisLine: { show: false },
        axisTick: { show: false }
    }, {
        // name: '气温(°C)',
        type: 'value',
        position: 'left',
        offset: 65,
        min: calMin(localdata.tmp),
        max: calMax(localdata.tmp),
        splitNumber: splitNumber,
        interval: (calMax(localdata.tmp) - calMin(localdata.tmp)) / splitNumber,
        splitLine: { show: false },
        axisLine: { show: false },
        axisLabel: {
            // formatter: '{value}°C',
            formatter: function(value, index) {
                return parseInt(value) + '°C';
            },
            textStyle: { color: colors[1], fontSize: 14 }
        },
        axisTick: { show: false }
    }, {
        // name: '风速(m/s)',
        type: 'value',
        position: 'right',
        min: calMin(localdata.winds),
        max: calMax(localdata.winds),
        splitNumber: splitNumber,
        interval: (calMax(localdata.winds) - calMin(localdata.winds)) / splitNumber,
        splitLine: { show: false },
        axisLine: { show: false },
        axisLabel: {
            // formatter: '{value}m/s',
            formatter: function(value, index) {
                return parseInt(value) + 'm/s';
            },
            textStyle: { color: colors[3], fontSize: 14 }
        },
        axisTick: { show: false }
    }, {
        // name: '气压(hPa)',
        type: 'value',
        position: 'right',
        offset: 54,
        min: calMin(localdata.pre),
        max: calMax(localdata.pre),
        splitNumber: splitNumber,
        interval: (calMax(localdata.pre) - calMin(localdata.pre)) / splitNumber,
        splitLine: { show: false },
        axisLine: { show: false },
        axisLabel: {
            // formatter: '{value}hPa',
            formatter: function(value, index) {
                return parseInt(value) + 'hPa';
            },
            textStyle: { color: colors[2], fontSize: 14 }
        },
        axisTick: { show: false }
    }],
    series: [{
            name: '降水',
            type: 'bar',
            barWidth: '40%',
            data: localdata.rain
        },
        {
            name: '温度',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            yAxisIndex: 1,
            data: localdata.tmp
        },
        {
            name: '气压',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            yAxisIndex: 3,
            data: localdata.pre
        },
        {
            name: '风速',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            yAxisIndex: 2,
            data: localdata.winds
        }
    ]
};
