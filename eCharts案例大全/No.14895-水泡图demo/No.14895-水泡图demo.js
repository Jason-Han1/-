//引自: 花自飘凌水自流
// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill
/*
    @songcxa
    @2017/9/14
    @借用网友水泡图插件，方便使用，共享，暂存
    @水泡图
    @qq546803970
*/

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}%",
        position: ['50%', '45%']
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%'
    },
    title: {
        show: false,
        text: "ww",
        left: '10%',
        top: '10%',
        textStyle: {
            fontSize: 12,
            color: "#fff"
        }
    },

    series: [{
        type: 'liquidFill',
        center: ['50%', '50%'],
        radius: '50%',
        backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        itemStyle: {
            normal: {
                color: '#6b31aa'
            }
        },
        outline: {
            show: false
        },
        label: {
            normal: {
                color: "#2fc3e1", //transprant
                show: false,
                fontSize: 16,
                formatter: '{b}: {c}'
            }
        },
        data: [{
            name: "电力",
            value: 0.27
        }]
    }]
};