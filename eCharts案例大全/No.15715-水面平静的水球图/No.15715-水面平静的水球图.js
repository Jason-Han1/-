// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    title: {
        text: '水面平静的水球图'
    },
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        amplitude: 0,
        waveAnimation: false // disable wave from moving left and right, for performance consideration
    }]
};
