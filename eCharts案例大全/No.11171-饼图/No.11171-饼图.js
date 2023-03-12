option = {
    color: ['#0FCFF0', '#1FB9AB', '#4880FF', '#9475FF', '#FFC400', '#E15A65'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        width: 200,
        bottom: '10',
        orient: 'horizontal',
        borderRadius: 200,
        itemWidth: 7,
        itemHeight: 7,
        align: 'left',
        itemGap: 20,
        textStyle: {
            color: '#78728B',
        },
        data: ['正式教师', '主动离职', '停薪留职', '试用期', '转正失败', '被解雇']
    },
    series: [{
        name: '老师状态',
        type: 'pie',
        radius: ['40%', '50%'],
        center: ['50%', '35%'],
        itemStyle: {
            normal: {
                shadowBlur: 4,
                shadowColor: ['#0FCFF0', '#1FB9AB', '#4880FF', '#9475FF', '#FFC400', '#E15A65'],
            }
        },
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{c}%'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 100,
                name: '正式教师',
                itemStyle: {
                    normal: {
                        shadowColor: '#0FCFF0'
                    }
                }
            },
            {
                value: 100,
                name: '主动离职',
                itemStyle: {
                    normal: {
                        shadowColor: '#1FB9AB'
                    }
                }
            },
            {
                value: 100,
                name: '试用期',
                itemStyle: {
                    normal: {
                        shadowColor: '#4880FF'
                    }
                }
            },
            {
                value: 100,
                name: '停薪留职',
                itemStyle: {
                    normal: {
                        shadowColor: '#9475FF'
                    }
                }
            },
            {
                value: 100,
                name: '被解雇',
                itemStyle: {
                    normal: {
                        shadowColor: '#FFC400'
                    }
                }
            },
            {
                value: 200,
                name: '转正失败',
                itemStyle: {
                    normal: {
                        shadowColor: '#E15A65'
                    }
                }
            }
        ]
    }]
};