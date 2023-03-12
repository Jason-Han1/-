// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.55, 0.4, 0.25],
        radius: '80%',
        outline: {
            show: false
        },
        shape: 'run',
        backgroundStyle: {
            color: '#ffffff1f'
        },
        label: {
            normal: {
                position: ['38%', '40%'],
                formatter: function() {
                    return '水量';
                },
                textStyle: {
                    fontSize: 20,
                    color: '#000000'
                }
            }
        }
    }]

};
