let charts = ['circle', 'rectangle', 'triangle', 'diamond', 'emptyCircle', 'emptyRectangle', 'emptyTriangle', 'emptyDiamond']
let data = {
    title: ['女性', '男性'],
    data: [{
            name: '女性',
            type: 'scatter',
            data: [
                ['2018-10-22', '10'],
                ['2018-10-23', "22"]
            ],
            symbol: charts[1], //设置不同形状
        },
        {
            name: '男性',
            type: 'scatter',
            data: [
                ['2018-10-22', '20'],
                ['2018-10-23', '12']
            ],
            symbol: charts[2]
        }
    ]
}

option = {
    color: ['#4C84FF', '#9A47FF', '#FF884C', '#13C2C2', '#F04864', '#FACC14', '#2FC25B', '#66B5FF'],
    grid: {
        containLabel: false
    },
    grid: {
        x: 60,
        y: 44,
        x2: 60,
        y2: 64,
    },
    tooltip: {
        trigger: 'item',
        showDelay: 0,
        formatter: function(params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>' +
                    params.value[0] + ' ' +
                    params.value[1] + ':00';
            } else {
                return params.seriesName + ' :<br/>' +
                    params.name +
                    params.value;
            }
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    legend: {
        data: data.title,
        bottom: 0,
    },
    xAxis: [{
        type: 'category',
        scale: true,
        axisLabel: {
            formatter: function(value, index) {
                return value
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        axisLabel: {
            formatter: '{value}'
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        max: 23,
        min: 0
    }],
    series: data.data
};