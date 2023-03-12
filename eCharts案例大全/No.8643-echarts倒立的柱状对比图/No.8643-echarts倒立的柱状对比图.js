var xAxisData = ['全部', '轿车', 'SUV', 'MPV'];
var data1 = [1.03, 0.44, 0.88, 0.67];
var data2 = [-0.4, -0.56, -0.67, -0.53]; //环比
var emphasisStyle = {
    itemStyle: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    backgroundColor: '#eee',
    legend: {
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        left: 10
    },
    brush: {
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0
    },

    tooltip: {},
    xAxis: {
        data: xAxisData,
        name: 'X Axis',
        axisLine: {
            onZero: true
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    yAxis: {
        inverse: true,
        splitArea: {
            show: false
        }
    },
    grid: {
        left: 100
    },

    series: [{
            name: 'bar',
            type: 'bar',
            stack: 'one',
            emphasis: emphasisStyle,
            data: data1
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            emphasis: emphasisStyle,
            data: data2
        },

    ]
};



function renderBrushed(params) {
    var brushed = [];
    var brushComponent = params.batch[0];

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    }

    myChart.setOption({

    });
}