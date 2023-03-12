

//什么数据可以用上这个图表？

var dimensions = [];
var dataval = [];
for (var i = 0; i < 50; i++) {
    dataval.push((Math.sin(i / 10) * (i / 1 - 10) + i - 16) / 5);
}

var option = {
    backgroundColor: '#fff',
    tooltip: {
        show: true,
        formatter: "{a}:{c}"
    },
    visualMap: {
        show: false,
        // min: 0,
        // max: 50,
        dimension: 0,
        inRange: {
            color: ['#e11d8e', '#4e44e7', '#e11d8e', '#4e44e7', 
            '#e11d8e', '#4e44e7','#e11d8e', '#4e44e7','#e11d8e', '#4e44e7','#e11d8e', '#4e44e7','#e11d8e', '#4e44e7','#e11d8e', '#4e44e7', 
            ]
        }
    },
    xAxis: {
        data: dimensions,
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#000'
            },
        }
    },
    series: [{
        name: 'TIT',
        type: 'bar',
        itemStyle: {
            normal: {
                barBorderRadius: 5
            }
        },
        data: dataval
    }]
};