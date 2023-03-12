// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    title: {
        text: '静止的水球图'
    },
    series: [{
        type: 'liquidFill',
        waveAnimation: false, // 禁止左右波动
        animationDuration: 0, // 初始动画时长
        animationDurationUpdate: 0, // 更新动画时长
        data: [0.6, 0.5, 0.4, 0.3]
    }]
};