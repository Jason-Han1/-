// 原图https://www.echartsjs.com/examples/editor.html?c=watermark


var data = [3237, 2164, 7561, 7778, 7355, 2405, 1842, 2090, 1762, 1593, 2060, 1537, 1908, 2107, 1692, 1568]
var color = ['#3063FF', '#2EC7E6', '#FF5500', '#FFDD33', '#2FC25B','#3063FF', '#2EC7E6', '#FF5500', '#FFDD33', '#2FC25B','#3063FF', '#2EC7E6', '#FF5500', '#FFDD33', '#2FC25B']
option = {
    backgroundColor: '#fff',
    tooltip: {},
    grid: [{
        top: 50,
        left: 10,
        containLabel: true
    },],
    xAxis: [{
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            show: false, //隐藏y轴坐标轴线
            lineStyle: {
                color: '#909396',

            }
        },
        type: 'value',
    }],
    yAxis: [{
        axisTick: {
            show: false,
        },
        splitLine: {
            // show: false,
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            show: false, //隐藏y轴坐标轴线
            lineStyle: {
                color: '#909396',

            }
        },
        type: 'category',
        data: ["map","lines","bar","line","pie","scatter","candlestick","radar","heatmap","treemap","graph","boxplot","parallel","gauge","funnel","sankey"],
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        barMaxWidth: 20, //柱状宽度
        data: data.map(function(item,i) {
            return {
                value: item,
                itemStyle: {
                    color: color[i],
                }
            }
        })
    }]
}