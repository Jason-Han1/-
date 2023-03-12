// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

option = {
    title:{
        text:'水球图',
        left:'center'
    },
    series: [{
        type: 'liquidFill',
        data: [0.8,0.7,0.6, 0.5, 0.4, 0.3],//水球内部水量
        radius: '70%' // 水球大小
    }]
};
