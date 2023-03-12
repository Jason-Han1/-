// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '40%',
        shape: 'diamond',
        center: ['25%', '25%']
    }, {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        direction: 'left',
        radius: '40%',
        shape: 'rect',
        center: ['75%', '25%']
    }, {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '40%',
        shape: 'roundRect',
        center: ['25%', '75%'],
        backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        outline: {
            show: false
        },
        waveAnimation: false, // 禁止左右波动
    }, {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '50%',
        shape: 'pin',
        center: ['75%', '75%'],
        amplitude: 0,
        waveAnimation: false,
        outline: {
            show: false
        },
        backgroundStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        
    }]
};