// 根据值来确定显示的颜色
var checkColor = (val) => {
    if (val < 10) {
        return 'red';
    }

    if (val < 100) {
        return 'blue';
    }

    if (val < 1000) {
        return 'green';
    }

    return 'yellow';
}

// X轴 值        
var xAxisData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// Y轴 值
var yAxisData = [0, 1, 2];

// 网格 值
var seriesData = [];
data1 = xAxisData.map((item) => {
    const val = (Math.random() * 1000).toFixed();
    return [item, yAxisData[0], val];

});

data2 = xAxisData.map((item) => {
    let val = (Math.random() * 100).toFixed();
    return [item, yAxisData[1], val];

});

data3 = xAxisData.map((item) => {
    let val = (Math.random() * 10).toFixed();
    return [item, yAxisData[2], val];

});

seriesData = seriesData.concat(data1).concat(data2).concat(data3)

option = {
    title: {
        text: 'heatMap 实现网格区间自定义'
    },
    tooltip: {
        position: 'top'
    },
    visualMap: {
        min: 0,
        max: 1000,
        type: 'piecewise',
        orient: 'horizontal',
        color: ['red', 'blue', 'yellow', 'pink', 'gray'],
        pieces: [{
                gt: 1500,
                label: '(1500, Infinity]'
            },
            {
                gt: 300,
                lte: 1500,
                label: '(300, 1500]'
            },
            {
                gt: 200,
                lte: 300,
                label: '(200, 300]'
            },
            {
                gt: 5,
                lte: 200,
                label: '(5, 200]'
            },
            // {value: 123, label: '123（自定义特殊颜色）', color: 'grey'},  // [123, 123]
            {
                lt: 5,
                label: '(-Infinity, 5)'
            }
        ],
        left: 'center',
        top: 65,
        textStyle: {
            color: '#000'
        }
    },
    animation: false,
    grid: {
        height: '10%',
        y: '10%'
    },
    xAxis: {
        show: false,
        type: 'category',
        data: xAxisData,
        splitArea: {
            show: false
        }
    },
    yAxis: {
        show: false,
        type: 'category',
        data: yAxisData,
        splitArea: {
            show: false
        }
    },
    series: [{
        name: 'Card',
        type: 'heatmap',
        data: seriesData,
        label: {
            show: true
        }
    }]
};