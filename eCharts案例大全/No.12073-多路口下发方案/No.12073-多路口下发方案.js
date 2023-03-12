  option = {
        backgroundColor: '#344053', //画布背景
        title: {
            text: '多路口下发方案',
            subtext: '11组',
            x: 'center',
            y: '40',
            itemGap: 80,
            textStyle: {
                fontSize: 16,
                color: '#fff'
            },
            subtextStyle: {
                fontSize: 18,
                color: '#fff',
                fontStyle: 'bold',
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            left: 'center',
            bottom: '0',
            padding: [0, 50],
            data: ['黄浦区', '青浦区', ],
            textStyle: {
                color: '#fff'
            },
            itemGap: 20,
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            clockWise: false, // 默认逆时针
            center: ['50%', '60%'],
            labelLine: {
                normal: {
                    length: 15,
                    length2: 15,
                    lineStyle: {
                        position: 'inside' //默认自适应，水平布局为'top'，垂直布局为'right'，可选为 'inside'|'left'|'right'|'top'|'bottom'
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b|{b}}\n{a|{d}%}',
                    borderWidth: 0,
                    borderRadius: 8,
                    padding: [0, 0],
                    rich: {
                        a: {
                            color: '#fff',
                            fontSize: 12,
                            lineHeight: 20
                        },
                        b: {

                            fontSize: 12,
                            lineHeight: 20,
                            color: '#fff'
                        },
                    }
                }
            },
            data: [{
                    value: 130,
                    name: '黄浦区',
                    itemStyle: {
                        color: '#F1CD16'

                    }
                },
                {
                    value: 330,
                    name: '青浦区',
                    itemStyle: {
                        color: '#009AB1'
                    }
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };