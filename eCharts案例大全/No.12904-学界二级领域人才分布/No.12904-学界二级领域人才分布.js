option = {
    title: {
        text: '学界二级领域人才分布',
        subtext: '漏斗图'
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
        data:['基础架构','数据分析','数据处理','数据可视化','行业应用']
    },
    series: [
        {
            name: '预期',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}预期'
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
                    opacity: 1
                }
            },
            data: [
                {value: 100, name: '数据处理'},
                {value: 80, name: '数据分析'},
                {value: 60, name: '基础架构'},
                {value: 40, name: '数据可视化'},
                {value: 20, name: '行业应用'}
            ]
        },
        {
            name: '实际',
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
                    formatter: '{b}实际: {c}%'
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
               {value: 93.6, name: '数据处理936'},
                {value: 45.5, name: '数据分析455'},
                {value: 41, name: '基础架构410'},
                {value: 5.6, name: '数据可视化56'},
                {value: 3.8, name: '行业应用38'}
            ]
        }
    ]
};
