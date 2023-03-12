// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        itemStyle: {
            normal: {
                shadowBlur: 0
            }
        },
        outline: {
            borderDistance: 0,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#156ACF',
                shadowBlur: 20,
                shadowColor: 'rgba(255, 0, 0, 1)'
            }
        }
    }]
}