// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

option = {
    backgroundColor: '#04184A',
    series: [{
            type: 'liquidFill',
            center: ['25%', '50%'],
            // 水球颜色
            color: ['#0B5E8B', '#227DB3', '#3F91CC'],
            data: [0.6, 0.5, 0.4],
            radius: '20%',
            label: {
                normal: {
                    fontSize: 20
                }
            },
            // outline  外边
            outline: {
                borderDistance: 5,
                itemStyle: {
                    borderWidth: 5,
                    borderColor: '#00C0FF',
                },
            },
            // 内图 背景色 边
            backgroundStyle: {
                color: 'rgba(0,37,83,0.8)',
            }
        },
        {
            type: 'liquidFill',
            // 水球颜色
            color: ['#49d088', '#38b470', '#2aaf66'],
            center: ['50%', '50%'],
            data: [0.3, 0.2, 0.1],
            radius: '20%',
            label: {
                normal: {
                    fontSize: 20
                }
            },
            // outline  外边
            outline: {
                borderDistance: 5,
                itemStyle: {
                    borderWidth: 5,
                    borderColor: '#00FFB0',
                },
            },
            // 内图 背景色 边
            backgroundStyle: {
                color: 'rgba(0,37,83,0.8)',
            }
        },
        {
            type: 'liquidFill',
            // 水球颜色
            color: ['#E3B340', '#F4B30E', '#EACE36'],
            center: ['75%', '50%'],
            data: [0.1, 0.05, 0.02],
            radius: '20%',
            label: {
                normal: {
                    fontSize: 20
                }
            },
            // outline  外边
            outline: {
                borderDistance: 5,
                itemStyle: {
                    borderWidth: 5,
                    borderColor: '#FFBF11',
                },
            },
            // 内图 背景色 边
            backgroundStyle: {
                color: 'rgba(0,37,83,0.8)',
            }
        }
    ],
};