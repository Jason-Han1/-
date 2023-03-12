var renderItem = function(params, api) {
    var cateIndex = params.dataIndex
    var min = api.value(0)
    var max = api.value(1)
    var minCoord = api.coord([cateIndex, min])
    var maxCoord = api.coord([cateIndex, max])
    var size = api.size([cateIndex, max - min])

    return {
        type: 'group',
        children: [{
                type: 'rect',
                shape: {
                    x: maxCoord[0] + 5,
                    y: maxCoord[1],
                    width: 10,
                    height: size[1]
                },
                style: api.style()
            },
            {
                type: 'text',
                style: {
                    text: min,
                    x: minCoord[0] + 20,
                    y: minCoord[1] - 15
                }
            },
            {
                type: 'text',
                style: {
                    text: max,
                    x: maxCoord[0] + 20,
                    y: maxCoord[1] + 5
                }
            }
        ]

    };
}

var renderYAxis = function(params, api) {

    var cateIndex = params.dataIndex
    var min = api.value(0)
    var max = api.value(1)

    console.log(params, min, max)
    return {
        type: 'group',
        children: [{

        }]
    }
}


option = {
    color: ['#28a5c6'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['物理', '化学', '生物', '政治', '历史', '地理'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [{
        type: 'value',
        min: 54,
        max: 86,
        show: false,
        splitNumber: 9,
        position: 'right',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: '分数段',
        type: 'custom',
        data: [
            [82, 87],
            [76, 79],
            [75, 78],
            [76, 79],
            [78, 82],
            [75, 79]
        ],
        renderItem
    }, {
        name: 'Y轴',
        type: 'custom',
        encode: {
            y: [1, 2]
        },
        data: [
            ['A+', 86],
            ['A', 80]
            //   ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'E']
            //   [86, 80, 77, 74, 71, 69, 63, 60, 54]
        ],
        renderItem: renderYAxis
    }]
};