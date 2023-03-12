var data = {
    name: '维修任务进度',
    value: 95.2
}
option = {
    backgroundColor: '#07202A',
    title: {
        show: false,
        bottom: 0,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    series: [
        {
            name: '',
            type: 'gauge',
            splitNumber: 15, //刻度数量
            min: 0,
            max: 100,
            radius: '85%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    color: [
                        [data.value / 100, 'rgba(96, 244, 194, 1)'],
                        [1, '#104655']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: 'auto'
                },
                length: 10,
                splitNumber: 3
            },
            splitLine: {
                show: false,
                length: 20,
                lineStyle: {
                    color: 'auto'
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 0,
            },
            detail: {
                show: 0,
            },
            data: data
        },
        {
            name: '',
            type: 'gauge',
            splitNumber: 130, //刻度数量
            min: 0,
            max: 100,
            radius: '70%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    color: [
                        [data.value / 100, 'rgba(12, 40, 68, 1)'],
                        [1, 'rgba(12, 40, 68, 1)']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: 'auto'
                },
                length: 10,
                splitNumber: 3
            },
            splitLine: {
                show: false,
                length: 20,
                lineStyle: {
                    color: 'auto'
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 0,
            },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 2,
                offsetCenter: [0, '20%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'rgba(96, 244, 194, 1)',
                    fontSize: 44,
                },
                formatter: function(){
                    return data.value + '\n{a|%}'
                },
                rich:{
                    a:{
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: 40
                    }
                }
            },
            data: data
        }
    ]
};