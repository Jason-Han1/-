var line = [10, 15, 2, 33, 15, 50, 11, 5, 21]
var xAxis = [1900, 20, 40, 60, 80, 2000, 20, 40, 60]
var bar = new Array(xAxis.length).fill(0)
var index = xAxis.findIndex(item => item === Math.max(...xAxis))
bar = bar.map((item, n) => n > index - 1 ? Math.max(...line) : 0)
option = {
    xAxis: [{
        data: xAxis
    }],
    yAxis: [{
        type: 'value',
        position: 'right',
        max: Math.max(...line)
    }],
    series: [{
            name: '蒸发量',
            type: 'bar',
            barCategoryGap: '0',
            itemStyle: {
                color: '#ddd'
            },
            emphasis: {
                itemStyle: {
                    color: '#ddd'
                }
            },
            data: bar
        },
        {
            name: '降水量',
            type: 'line',
            label: {
                show: true
            },
            data: line
        }
    ]
};