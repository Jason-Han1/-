app.title = '嵌套环形图';

option = {
    title: {
        text: "学历",
        left: 'center'
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                backgroundColor: "rgb(0,0,0,0)"
            }
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['']
    },
    series: [{
            name: '学历',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 30,
                    name: '有',
                    selected: true
                },
                {
                    value: 70,
                    name: '无'
                }
            ]
        },
        {
            name: '学历',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: [{
                    value: 129,
                    name: '高中'
                },
                {
                    value: 15,
                    name: '本科',
                    selected: true
                },
                {
                    value: 5,
                    name: '硕士'
                },
                {
                    value: 1,
                    name: '博士'
                }
            ]
        }
    ]
};