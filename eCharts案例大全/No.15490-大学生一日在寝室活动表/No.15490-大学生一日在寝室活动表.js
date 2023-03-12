option = {
    title: {
        text: '大学生一日在寝室活动表',
        subtext: ' '
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['寝室里打游戏','追剧','做作业','看书','打扫寝室']
    },
    series: [
        {
            name: ' ',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}'
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}预期: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [
                {value: 60, name: '做作业'},
                {value: 40, name: '看书'},
                {value: 20, name: '打扫卫生'},
                {value: 80, name: '追剧'},
                {value: 100, name: '寝室打游戏'}
            ]
        },
        {
            name: '',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}: {c}%'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            data: [
                {value: 30, name: '提前做作业'},
                {value: 10, name: '有关专业书'},
                {value: 5, name: '订单'},
                {value: 50, name: '狗血剧'},
                {value: 80, name: 'LOL'}
            ]
        }
    ]
};
