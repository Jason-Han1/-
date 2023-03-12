//https://gallery.echartsjs.com/editor.html?c=x14NkVNxVR
//https://jshare.com.cn/demos/R4SsqQ
//https://antv.alipay.com/zh-cn/vis/chart/bullet.html
//https://antv.alipay.com/zh-cn/g2/3.x/demo/other/bullet-graph.html
//https://gallery.echartsjs.com/editor.html?c=x8sFKkLF1B

option = {
    dataset: {
        source: [
            ["province", "actual", "target", "range1", "range2", "range3"],
            ["KPI1", 110, 95, 45, 25, 30],
            ["KPI2", 94, 90, 45, 25, 30],
            ["KPI3", 97, 90, 45, 25, 30],
            ["KPI4", 78, 90, 45, 25, 30],
            ["KPI5", 68, 85, 45, 25, 30]
        ]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        //formatter: '{a0}: {c0}<br />{a1}: {c1}'
    },
    // legend: {
    //     icon: 'roundRect'
    // },
    xAxis: {
        type: 'category',
        axisTick: {
            show: true,
            alignWithLabel: true
        },
        axisLine: {
            show: false
        },
        //data: ['KPI1', 'KPI2', 'KPI3', 'KPI4', 'KPI5']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        }
    },
    series: [{
            name: 'actual',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: ['100%', '100%'],
            barWidth: 12,
            z: 10,
            itemStyle: {
                color: '#223273',
                opacity: 0.85
            },
            //data: [110, 94, 97, 78, 68]
        },
        {
            name: 'target',
            type: 'scatter',
            silent: true,
            symbol: 'rect',
            symbolSize: [24, 3],
            z: 20,
            itemStyle: {
                color: '#262626',
                opacity: 0.85
            },
            //data: [95, 90, 90, 90, 85]
        },
        {
            name: 'range1',
            type: 'bar',
            barGap: '-100%',
            barWidth: 38,
            itemStyle: {
                color: '#FFA39E',
                opacity: 0.85
            },
            emphasis: {
                itemStyle: {
                    color: '#FFA39E',
                    opacity: 0.85
                }
            },
            stack: true,
            //data: [45, 45, 45, 45, 45]
        },
        {
            name: 'range2',
            type: 'bar',
            barGap: '-100%',
            barWidth: 38,
            itemStyle: {
                color: '#FFD591',
                opacity: 0.85
            },
            emphasis: {
                itemStyle: {
                    color: '#FFD591',
                    opacity: 0.85
                }
            },
            stack: true,
            //data: [25, 25, 25, 25, 25]
        },
        {
            name: 'range3',
            type: 'bar',
            barGap: '-100%',
            barWidth: 38,
            itemStyle: {
                color: '#A7E8B4',
                opacity: 0.85
            },
            emphasis: {
                itemStyle: {
                    color: '#A7E8B4',
                    opacity: 0.85
                }
            },
            stack: true,
            //data: [30, 30, 30, 30, 30]
        }
    ]
};