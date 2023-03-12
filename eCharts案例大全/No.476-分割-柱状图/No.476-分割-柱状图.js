var x = ['F>24', '18<F≤24', '12<F≤18', '6<F≤12', '0<F≤6'];
var y = ['R≤30', '30<R≤60', '60<R≤90', '90<R≤180', 'R>180'];

var data = [];
var min = Infinity;
var max = -Infinity;
var total = 0;

for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
        const v = Math.trunc(Math.random() * 1e3);
        if (v < min) {
            min = v;
        }
        if (v > max) {
            max = v;
        }
        data.push([i, j, v]);
        total += v;
    }
}

option = {
    tooltip: {},
    grid: [
        {
            containLabel: false,
            top: '15%',
            right: '30%',
            bottom: '30%',
            left: '10%',
        }
    ],
    xAxis: [
        {
            type: 'category',
            name: '到站次数(F)',
            gridIndex: 0,
            nameGap: 0,
            nameTextStyle: {
                align: 'center',
                verticalAlign: 'top',
                padding: [14, 0, 0, 0],
                color: '#444',
            },
            data: x,
            axisLabel: {
                margin: 14,
                color: '#666',
            },
            splitArea: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        }
    ],
    yAxis: [
        {
            type: 'category',
            name: '最新到站(R)',
            gridIndex: 0,
            nameGap: 0,
            nameTextStyle: {
                align: 'right',
                verticalAlign: 'bottom',
                padding: [0, 14, 0, 0],
                color: '#444',
            },
            data: y,
            axisLabel: {
                margin: 14,
                color: '#666',
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        }
    ],
    visualMap: [
        {
            min: 0,
            max: max,
            seriesIndex: 0,
            padding: 0,
            calculable: true,
            orient: 'horizontal',
            inverse: true,
            top: '5%',
            right: '30%',
            itemWidth: 18,
            itemHeight: 114,
            inRange: {
                color: ['#99d7ff', '#007bcb'],
                symbolSize: [100, 100],
            },
            text: ['高', '低'],
            textGap: 8,
            textStyle: {
                color: '#666',
            },
        },
    ],
    series: [
        {
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            gridIndex: 0,
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                show: true,
                formatter: (p) => {
                    const v = p.value[2];
                    return `${v} | ${((v / total) * 100).toFixed(2)}%`;
                },
                color: '#333',
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: '#fff',
            },
        }
    ],
    backgroundColor: '#fff',
};
