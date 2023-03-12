var data = {
    title: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    FY18: [160000, 170000, 180000, 168000, 155000, 167000, 179000, 170000, 165000, 170000, 179000, 168000],
    FY19: [173000, 185000, 195000, 185000, 178000, 180000, 196000, 182000, 179000, 182000, 192000, 194000]
};

function formatNumber(number) {
    var _data = number.toString().split('')
    var data = []
    for (var i = _data.length-1 ;i >= 0; i--) {
        data.unshift(_data[i])
        if (i % 3 === 0 && i !== 0) {
            data.unshift(',')
        }
    }
    return data.join('')
}

function getTableLine(num) {
    var list = [];
    var bottom = 122;
    var height = 20;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            bottom: bottom - i * height,
            right: 80,
            style: {
                fill: '#333'
            },
            shape: {
                x1: 0,
                y1: 0,
                x2: 3200,
                y2: 0
            }

        });
    }
    return list;
}
var lineList = getTableLine(3);


option = {
    backgroundColor: '#fff',
    color: ['#9bbb59', '#4f6228'],
    title: [{
        text: ' \nFY18\nFY19',
        bottom: 96,
        left: 10,
        textStyle: {
            lineHeight: 20,
            fontSize: 13,
            fontWeight: 'normal',
            formatter: function(value) {
                return '{table|' + value + '}';
            },
            rich: {
                table: {
                    align: 'center'
                }
            }
        }
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data: ['FY18', 'FY19']
    },
    grid: {
        bottom: 150,
        left: 80,
        right: 80
    },
    dataZoom: {
        show: true,
        start: 0,
        end: 50,
        maxSpan: 80
        // zoomLock: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: data.title,
        axisTick: {
            length: 68
        },
        axisLabel: {
            formatter: function(value, index) {
                return '{table|' + value +
                    '}\n{table|' + formatNumber(data.FY18[index]) +
                    '}\n{table|' + formatNumber(data.FY19[index]) + '}';
            },
            rich: {
                table: {
                    lineHeight: 20,
                    align: 'center'
                }
            }
        },
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        minInterval: 1,
        name: '销售额',
        splitLine: {
            show: false
        },
        min: 150000
    }],
    series: [{
        name: 'FY18',
        type: 'bar',
        yAxisIndex: 0,
        data: data.FY18,
        itemStyle: {
            normal: {
                barBorderRadius: 3,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
            }
        },
    }, {
        name: 'FY19',
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            formatter: function(params) {
                return '+' + Math.floor((params.data / data.FY18[params.dataIndex] - 1) * 100) + '%'
            }
        },

        itemStyle: {
            normal: {
                barBorderRadius: 3,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
            }
        },
        yAxisIndex: 0,
        data: data.FY19
    }],
    graphic: lineList
};