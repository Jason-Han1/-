// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        animationDuration: 0,
        animationDurationUpdate: 2000,
        animationEasingUpdate: 'cubicOut'
    }]
};

setTimeout(function () {
    myChart.setOption({
        series: [{
            type: 'liquidFill',
            data: [0.8, 0.6, 0.4, 0.2]
        }]
    })
}, 1000);
