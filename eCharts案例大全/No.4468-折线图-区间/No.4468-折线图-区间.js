var x = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
var max = [20, 40, 10, -5, 10, 20, 10]
var min = [-10, 5, -10, -20, 0, 10, -10]

var data = []
for (var i = 0; i < max.length - 1; i++) {
    data.push([x[i], x[i + 1], max[i], max[i + 1], min[i], min[i + 1]])
}
option = {
    xAxis: {
        type: 'category'
    },
    yAxis: {},
    series: [{
        type: 'custom',
        data: data,
        renderItem: function renderItem(params, api) {
            const x1 = data[params.dataIndexInside][0]
            const x2 = data[params.dataIndexInside][1]
            const topLeft = api.coord([x1, api.value(2)])
            const topRight = api.coord([x2, api.value(3)])
            const bottomRight = api.coord([x2, api.value(5)])
            const bottomLeft = api.coord([x1, api.value(4)])
            return {
                type: 'polygon',
                shape: {
                    points: [topLeft, topRight, bottomRight, bottomLeft]
                },
                style: {
                    fill: '#c0504d'
                }
            }
        },
        encode: {
            x: [0, 1],
            y: [2, 3, 4, 5]
        }
    }]
};