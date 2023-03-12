var data = [
    [0, 0, 59, '不及格', 3],
    [1, 60, 69, '及格', 15],
    [2, 70, 79, '中等', 12],
    [3, 80, 89, '良好', 22],
    [4, 90, 100, '优秀', 7]
];
var colorList = ['#c0504d', '#e46c0b', '#4f81bd', '#604a7b', '#9bbb59', '#948a54'];

option = {
    title: {
        text: '成绩demo',
        left: 'center'
    },
    xAxis: {},
    yAxis: {},
    tooltip: {},
    series: [{
        type: 'custom',
        data: data,
        renderItem: function(params, api) {
            var yval = api.value(4);
            var start = api.coord([api.value(1), yval]);
            var size = api.size([api.value(2) - api.value(1), yval]);
            return {
                type: 'rect',
                shape: {
                    x: start[0],
                    y: start[1],
                    width: size[0],
                    height: size[1]
                },
                style: {
                    fill: colorList[api.value(0)]
                }
            };
        },
        encode: {
            x: [1 ,2],
            y: [4],
            tooltip: 4,
            itemName: 3
        }
    }]
};