// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

option = {
    title: {
        text: '多个数据的水球图',
        subtext: '可以用作显示多个数据，或仅作为波涛纹理的装饰作用（推荐）'
    },
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3]
    }]
};
