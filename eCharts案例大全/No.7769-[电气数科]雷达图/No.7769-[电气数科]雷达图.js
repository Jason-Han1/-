option = {
    "tooltip": {
        "trigger": "item"
    },
    radar: [
        {
            indicator: [
                { text: '指标一' ,max: 100},
                { text: '指标二' ,max: 100},
                { text: '指标三' ,max: 100},
                { text: '指标四' ,max: 100},
                { text: '指标五' ,max: 100},
                { text: '指标六' ,max: 100},
                { text: '指标七' ,max: 100},
                { text: '指标八' ,max: 100},
                { text: '指标九' ,max: 100},
                { text: '指标十' ,max: 100}
            ],
            //shape: 'circle',
            name: {
                formatter: '【{value}】',
                textStyle: {
                    color: '#000'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['transparent'],
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#d2d2d4'
                }
            }
        }
    ],
    series: [
        {
            type: 'radar',
            "lineStyle": {
                "normal": {
                    "color": "#5b9bd5",
                    "width": 4
                }
            },
            itemStyle: {
                color: "#5b9bd5",//顶点的颜色
            },
            data: [
                {
                    value: [80, 60, 70, 60, 60,50, 60, 70, 80, 90],
                    name: '图一',
                    symbolSize: 10,
                    symbol: 'circle',
                }
            ]
        }
    ]
}



/*参考链接
https://echarts.apache.org/examples/zh/editor.html?c=radar-custom
https://echarts.apache.org/examples/zh/editor.html?c=radar
https://gallery.echartsjs.com/editor.html?c=xS1sKZMUg7
https://gallery.echartsjs.com/editor.html?c=xS1sKZMUg7
*/







