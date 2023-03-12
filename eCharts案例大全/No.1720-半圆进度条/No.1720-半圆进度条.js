let chartData= {
    value: 82,
    total: 100
}
let max = chartData.total;
let value = chartData.value;
option = {
    backgroundColor: '#313131',
    title: {
        text: (value || '-') + '%',
        x: 'center',
        y: '68%',
        textStyle: {
            color: '#fff',
            fontSize: '28',
            fontWeight: 'normal'
        }
    },
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 200,
        startAngle: 180
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true
        },
        data: []
    },
    polar: {
        radius: '255%',
        center: ['50%', '80%']
    },
    series: [
        // 极坐标系下柱状图
        // 实际值
        {
            type: 'bar',
            data: [value],
            z: 1,
            coordinateSystem: 'polar',
            barMaxWidth: 10,
            name: '出租率',
            roundCap: 1,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(22,255,241,.1)'
                },
                {
                    offset: 0.5,
                    color: 'rgba(22,255,241,.5)'
                },
                {
                    offset: 1,
                    color: 'rgba(22,255,241,1)'
                }
            ]),
            z: 2
        },
        // 背景图形
        {
            type: 'bar',
            data: [max],
            z: 0,
            silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 10,
            roundCap: true,
            color: 'rgba(145,145,145,0.4)',
            barGap: '-100%'
        },
        // 尾端小圆点 饼图
        {
            type: 'pie',
            // 饼图大小跟外层极坐标系相同，需手动调试
            radius: ['113%', '140%'],
            center: ['50%', '80%'],
            hoverAnimation: false,
            startAngle: 180,
            endAngle: 0,
            silent: 1,
            z: 10,
            data: [
                // 实际值，背景色透明
                {
                    name: '',
                    value: value / max,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: 'transparent'
                    }
                },
                {
                    // 画中间的图标
                    value: 0,
                    label: {
                        position: 'inside',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderRadius: 8,
                        padding: 6,
                        borderWidth: 12,
                        borderColor: 'rgba(255, 255, 255, 0.4)'
                    }
                },
                // 透明填充 angleAxis 的max相同 max : 2
                {
                    value: 2 - value / max,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: 'transparent'
                    }
                }
            ]
        }
    ]
};