// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

option = {
    title: {
        text: '水波晃动的效果'
    },
    series: [{
        type: 'liquidFill',
        data: [0.5, {
            value: 0.5,
            phase: Math.PI
        }],
        phase: 0,
        period: 4000,
        waveLength: '100%',
        animationDurationUpdate: 2000
    }]
};

setInterval(function() {
    myChart.setOption({
        series: [{
            amplitude: Math.random() * 40
        }]
    })
}, 2000);