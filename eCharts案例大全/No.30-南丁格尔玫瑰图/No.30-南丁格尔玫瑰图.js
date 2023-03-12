option = {
    backgroundColor: 'rgb(43, 51, 59)',
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true,
            },
            dataView: {
                show: true,
                readOnly: false,
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                show: true,
            },
        },
    },
    calculable: true,
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}千万元',
    },
    title: {
        show: true,
        text: '南丁格尔玫瑰图',
        left: 'center',
        top: 40,
        textStyle: {
            color: '#fff',
        },
    },
    calculable: true,
    legend: {
        show: true,
        icon: 'circle',
        x: 'center',
        y: '15%',
        data: ['医疗业务成本', '财政项目补助支出', '科教项目支出', '管理费用', '其他支出'],
        textStyle: {
            color: '#fff',
        },
    },
    series: [
        {
            name: '总支出',
            type: 'pie',
            radius: [37, 155],
            avoidLabelOverlap: false,
            startAngle: 0,
            center: ['50.1%', '34%'],
            roseType: 'area',
            selectedMode: 'single',
            label: {
                normal: {
                    show: true,
                    formatter: '{c}千万元',
                },
                emphasis: {
                    show: true,
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    smooth: false,
                    length: 20,
                    length2: 10,
                },
                emphasis: {
                    show: true,
                },
            },
            data: [
                {
                    value: 600.58,
                    name: '医疗业务成本',
                    itemStyle: {
                        normal: {
                            color: '#f845f1',
                        },
                    },
                    label: {
                        color: '#f845f1',
                    },
                },
                {
                    value: 1100.58,
                    name: '财政项目补助支出',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3',
                        },
                    },
                    label: {
                        color: '#ad46f3',
                    },
                },
                {
                    value: 1200.58,
                    name: '科教项目支出',
                    itemStyle: {
                        normal: {
                            color: '#5045f6',
                        },
                    },
                    label: {
                        color: '#5045f6',
                    },
                },
                {
                    value: 1300.58,
                    name: '管理费用',
                    itemStyle: {
                        normal: {
                            color: '#4777f5',
                        },
                    },
                    label: {
                        color: '#4777f5',
                    },
                },
                {
                    value: 1400.58,
                    name: '其他支出',
                    itemStyle: {
                        normal: {
                            color: '#44aff0',
                        },
                    },
                    label: {
                        color: '#44aff0',
                    },
                },
                {
                    value: 0,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 0,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 0,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 0,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 0,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            ],
        },
    ],
};
