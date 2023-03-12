// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    series: [{
        type: 'liquidFill',
        center: ['15%', '50%'],
        radius: '30%',
        color: ['#A859FF', '#A859FF'], //水波颜色
        data: [0.6],
        itemStyle: {
            normal: {
                shadowBlur: 0
            }
        },
        label: {
            normal: {
                formatter: function(item) {
                    return (item.value * 100).toFixed(1) + '%'
                },
                color: '#A859FF',
                insideColor: '#fff',
                fontSize: 50
            }
        },
        backgroundStyle: {
            borderWidth: 2,
            borderColor: '#A859FF',
            color: 'rgb(255,0,255,0.01)'
        },
        outline: {
            borderDistance: 30,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#A859FF',
                borderType: 'dashed',
            }
        },
    }, {
        type: 'liquidFill',
        center: ['50%', '50%'],
        radius: '30%',
        color: ['#FF9745', '#FF9745'], //水波颜色
        data: [0.4],
        itemStyle: {
            normal: {
                shadowBlur: 0
            }
        },
        label: {
            normal: {
                formatter: function(item) {
                    return (item.value * 100).toFixed(1) + '%'
                },
                // textStyle: {
                color: '#FF9745',
                insideColor: '#fff',
                fontSize: 50
                // }
            }
        },
        backgroundStyle: {
            borderWidth: 2,
            borderColor: '#FF9745',
            color: 'rgb(255,0,255,0.01)'
        },
        outline: {
            borderDistance: 30,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#FF9745',
                borderType: 'dashed',
            }
        },
    }, {
        type: 'liquidFill',
        center: ['85%', '50%'],
        radius: '30%',
        color: ['#409eff', '#409eff'], //水波颜色
        data: [0.4],
        itemStyle: {
            normal: {
                shadowBlur: 0
            }
        },
        label: {
            normal: {
                formatter: function(item) {
                    return (item.value * 100).toFixed(1) + '%'
                },
                color: '#409eff',
                insideColor: '#fff',
                fontSize: 50
            }
        },
        backgroundStyle: {
            borderWidth: 2,
            borderColor: '#409eff',
            color: 'rgb(255,0,255,0.01)'
        },
        outline: {
            borderDistance: 30,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#409eff',
                borderType: 'dashed',
            }
        },
    }]
}