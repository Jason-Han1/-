function renderItem(params, api) {
    const topCenter = api.coord([api.value(0), api.value(1)])
    const height = api.size([0, api.value(1)])[1]
    const width = api.size([0, 1])[0] * 0.3;
    const ceilHeight = 10

    return {
        type: 'group',
        children: [{
                type: 'rect',
                shape: {
                    x: topCenter[0] - width / 2,
                    y: topCenter[1],
                    width: width,
                    height: height
                },
                style: api.style({
                    opacity: 0.5
                })
            },
            {
                type: 'rect',
                shape: {
                    x: topCenter[0] - width / 2,
                    y: topCenter[1],
                    width: width,
                    height: ceilHeight
                },
                style: api.style()
            }

        ]
    }
}

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [60, 90, 100, 50, 70, 33, 80],
        type: 'custom',
        renderItem: renderItem,
    }]
};