var data = [
    [10, 16, 0.3, 'A'],
    [16, 18, 0.15, 'B'],
    [18, 26, 0.12, 'C'],
    [26, 32, 0.22, 'D'],
    [32, 56, 0.077, 'E'],
    [56, 62, 0.17, 'F']
];
var colorList = ['#4f81bd', '#c0504d', '#9bbb59', '#604a7b', '#948a54', '#e46c0b'];

data = echarts.util.map(data, function(item, index) {
    return {
        value: item,
        itemStyle: {
            normal: {
                color: colorList[index]
            }
        }
    };
});

function renderItem(params, api) {
    var yValue = api.value(2);
    var start = api.coord([api.value(0), yValue]);
    var size = api.size([api.value(1) - api.value(0), yValue]);
    var style = api.style();

    return {
        type: 'rect',
        shape: {
            x: start[0],
            y: start[1],
            width: size[0],
            height: size[1]
        },
        style: style
    };
}

option = {
    title: {
        text: '利润池',
        left: 'center'
    },
    tooltip: {},
    xAxis: {
        scale: true,
        show: true
    },
    yAxis: {},
    series: [{
        type: 'custom',
        renderItem: renderItem,
        label: {
            normal: {
                show: true,
                formatter: function(params) {
                    return params.data.value[3] + ":" + params.data.value[2] * 100 + "%"
                },
                color: '#000000',
                position: 'top'
            }
        },
        dimensions: ['from', 'to', 'profit'],
        encode: {
            x: [0, 1],
            y: 2,
            tooltip: [0, 1, 2],
            itemName: 3
        },
        data: data
    }]
};