var uploadedDataURL = "/asset/get/s/data-1513679966648-SkPD2w8zf.js";

// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

option = {
    series: [{
        type: 'liquidFill',
        data: [{
            value: 0.5,
            itemStyle: {
                normal: {
                    color: "#91E6FF",
                    opacity: 0.3,
                }
            }
        }, {
            value: 0.4,
            itemStyle: {
                normal: {
                    color: '#39B3F6',
                    opacity: 0.3,
                }
            }
        }],
        radius: '60%',
        outline: {
            show: true,
            borderDistance: 0,
            itemStyle: {
                color: 'none',
                borderColor: '#26A7F9',
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
        },
        backgroundStyle: {
            borderColor: 'rgba(0,0,0,0.8)',
            borderWidth: 1,
            color: "#fff",
            shadowColor: '26A7F9',
            opacity: 0.1,
            shadowBlur: 80
        },
        itemStyle: {
            normal: {
                opacity: 0.4,
                shadowBlur: 80,
                shadowColor: 'blue'
            }
        },

    }]
};