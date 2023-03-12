option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '各机构实付统计图',
        left: 'center',
        subtextStyle: {
            fontSize: 18
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: false,
                readOnly: false
            },
            saveAsImage: {
                show: true
            }
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}元 ({d}%)"
    },
    series: [{
        name: '机构名称',
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        label: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: '10',
                },
                formatter: '{b} : {d}%',
                position: 'outer'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        data: [{
            name:'风华正茂',
            value:30
        },
        {
            name:'奏效奏效',
            value:90
        },{
            name:'耳日耳日',
            value:350
        },
        {
            name:'你好年后',
            value:210
        }]
    }]
};