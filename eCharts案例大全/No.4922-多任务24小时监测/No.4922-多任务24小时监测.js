function makeXAxis() {
    const axis = []
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            const str = (i >= 10 ? i : ('0' + i)) + ':' + (j >= 10 ? j : ('0' + j))
            axis.push(str)
        }
    }
    return axis
}
const types = ['任务一', '任务二', '任务三', '任务四']
const series = [
    [
        ["00:01~00:35", "00:01", "00:35"],
        ["08:00~10:35", "08:00", "10:35"],
        ["11:10~12:35", "11:10", "12:35"],
        ["14:00~15:20", "14:00", "15:20"],
    ],
    [
        ["06:00~07:35", "06:00", "07:35"],
        ["09:01~09:35", "09:01", "09:35"],
        ["10:00~16:35", "10:00", "16:35"],
        ["18:49~23:35", "18:49", "23:35"],
    ],
    [
        ["00:00~04:45", "00:00", "04:45"],
        ["05:09~07:35", "05:09", "07:35"],
        ["09:01~16:35", "09:01", "16:35"],
        ["22:10~23:59", "22:10", "23:59"],
    ],
    [
        ["02:16~13:35", "02:16", "13:35"],
        ["16:18~22:10", "16:18", "22:10"],
        ["22:15~23:59", "22:15", "23:59"]
    ]
]
const colors = ['#4C8EC3', '#003366', '#E25E79', '#CBD570']

function renderItem(params, api) {
    const start = api.coord([api.value(1), params.seriesName])
    const end = api.coord([api.value(2), params.seriesName])
    const height = api.size([1, 1])[1]
    const width = end[0] - start[0]

    var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1] - height / 2,
        width: width,
        height: height
    }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
    });

    return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style()
    }
}

const dataSeries = types.map((item, index) => {
    return {
        type: 'custom',
        name: item,
        label: {
            show: true
        },
        encode: {
            x: [1, 2],
            label: [0]
        },
        itemStyle: {
            color: colors[index]
        },
        data: series[index],
        renderItem: renderItem
    }
})

option = {
    title: {
        text: '多任务24小时监测'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: makeXAxis()
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: true
        },

        data: types
    },
    series: dataSeries,
    dataZoom: [{
        type: 'inside',
        filterMode: 'weakFilter',
        minValueSpan: 60
    }, {
        type: 'slider',
        show: true,
        filterMode: 'weakFilter',
        backgroundColor: '#fafafa',
        minValueSpan: 60
    }]
};