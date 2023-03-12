var dataActual = 100;
var dataPlan = 200;
option = {
    title: {
        text: '完成进度',
        subtext: '50%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: 'rgba(153,153,153,1)',
            fontSize: 14,
            fontWeight: 'normal',
        },
        subtextStyle: {
            color: '#008fff',
            fontSize: 14,
            fontWeight: 'normal',
        },
    },
    tooltip: {
        trigger: 'item',
        show: false,
    },
    legend: {
        orient: 'vertical',
        bottom: 30,
        itemHeight:5,
        itemWidth:20,
        selectedMode: false,
        formatter: function (name) {
            if (name == '实际计划入厂量') {
                return name + ': ' + dataActual;
            } else {
                return name + ': ' + dataPlan;
            }
        },
    },
    series: [
        {
            name: '',
            type: 'pie',
            legendHoverLink: false,
            hoverAnimation: false, //鼠标悬浮是否有区域弹出动画，false:无 true:有
            avoidLabelOverlap: false,
            radius: ['70%', '75%'],
            data: [
                {
                    value: 1048,
                    name: '月度计划入厂量',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#5089FE',
                            },
                            {
                                offset: 1,
                                color: '#52C5FF',
                            },
                        ]),
                    },
                },
                {
                    value: 735,
                    name: '实际计划入厂量',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#FE7150',
                            },
                            {
                                offset: 1,
                                color: '#FFB852',
                            },
                        ]),
                    },
                },
            ],
            label: {
                show: false,
                normal: {
                    show: false,
                    position: 'center',
                },
            },
            labelLine: {
                show: false,
            },
        },
    ],
};
