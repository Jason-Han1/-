// 水球图，需引入第三方插件 
// https://cdn.jsdelivr.net/npm/echarts-liquidfill@2.0.6/dist/echarts-liquidfill.min.js

const series = [
    {
        type: 'liquidFill',
        shape: 'circle',
        radius: '80%',
        center: ['50%', '50%'],
        data: [0.6, 0.5, 0.4],
        // 球体配置
        outline: {
            borderDistance: 0,
            itemStyle: {
                borderWidth: 2,
                borderColor: '#3dfff6',
                shadowBlur: 20,
                shadowColor: '#12786f'
            }
        },
        color: ['rgba(50, 255, 238, .6)', 'rgba(154, 255, 247, .6)'],
        backgroundStyle: {
            color: 'transparent',
        },

        label: {
            show: true,
            textStyle: {
                color: '#12786f',
                insideColor: '#12786f',
                fontSize: 28
            }
        },
        label: {
            show: true,
            textStyle: {
                color: '#12786f',
                insideColor: '#12786f',
                fontSize: 40
            },
            formatter: params => {
                return `${(params.value * 100).toFixed(0)}%\n {a|百分比}`
            },
            rich:{
                a: {
                    fontSize: 24,
                }
            }
        }
    },
]

option = { series,backgroundColor: 'rgba(0, 0, 0, 0.8)' }