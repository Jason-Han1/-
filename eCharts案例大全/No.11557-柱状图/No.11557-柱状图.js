var data = [3237, 2164, 7561, 7778, 7355, 2405, 1842, 2090, 1762, 1593, 2060, 1537, 1908, 2107, 1692, 1568]
var color = ['#3063FF', '#2EC7E6', '#FF5500', '#FFDD33', '#2FC25B', '#3063FF', '#2EC7E6', '#FF5500', '#FFDD33', '#2FC25B', '#3063FF', '#2EC7E6', '#FF5500', '#FFDD33', '#2FC25B']

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(objs, index) {
            let obj = objs[0];
            return `${obj.name}<br/>${obj.marker}${obj.seriesName} : ${obj.value}`;
        },
    },
    grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        splitLine: {
            // show: false,
            lineStyle: {
                // 去掉与y轴重叠的网格线----第一种颜色跟背景色一样
                color: ['#fff','#ddd','#ddd','#ddd','#ddd','#ddd','#ddd','#ddd','#ddd','#ddd','#ddd','#ddd'],
                type: 'dashed'
            }
        },
        axisLine: {
            show: false, //隐藏y轴坐标轴线
            lineStyle: {
                color: '#909396',

            }
        },
        axisTick: {
            show: false,
        }
    },
    yAxis: {
        type: 'category',
        boundaryGap: true,
        axisTick: { //y轴刻度线
            show: false
        },        
        axisLabel: {   //y轴文本旋转角度
            rotate: 30
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#909396',

            }
        },
        data: ["map", "lines", "bar", "line", "pie", "scatter", "candlestick", "radar", "heatmap", "treemap", "graph", "boxplot", "parallel", "gauge", "funnel", "sankey"],
    },
    series: [{
            name: 'Scoring Attributes',
            barMaxWidth: 20, //柱状宽度
            type: 'bar',
            data: data.map(function(item, i) {
                return {
                    value: item,
                    itemStyle: {
                        color: color[i],
                    }
                }
            })
        },

    ]
};