options = [{
    title: {
        text:'全区抽样检验情况分析',
        subtext: '生产环节合格率',
        x: 'center', 
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['合格率']
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [{
        name: '生产环节合格率',
        type: 'pie',
        radius: ['30%', '40%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 20,
            name: '合格率',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize:20
                    }
                }
            }
        }, {
            value: 100,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
},
{
    title: {
        text:'全区抽样检验情况分析',
        subtext: '销售环节合格率',
        x: 'center', 
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['合格率']
    },
    series: [{
        name: '销售环节合格率',
        type: 'pie',
        radius: ['30%', '40%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        color:'#05c83c',
        data: [{
            value: 130,
            name: '合格率',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize:20
                    }
                }
            }
        }, {
            value: 180, 
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
},{
    title: {
        text:'全区抽样检验情况分析',
        subtext: '餐饮环节合格率',
        x: 'center', 
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['合格率']
    },
    series: [{
        name: '餐饮环节合格率',
        type: 'pie',
        radius: ['30%', '40%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        color:'#bdc805',
        data: [{
            value: 300,
            name: '合格率',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize:20
                    }
                }
            }
        }, {
            value: 210,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
}];