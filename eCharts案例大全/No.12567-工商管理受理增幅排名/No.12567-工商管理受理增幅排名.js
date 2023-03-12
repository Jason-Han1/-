option = {
    backgroundColor: '#141845',
    title: {
        text: '工商管理受理增幅排名',
        textStyle: {
            color: '#fff',
        },
    },
    color: ['#E7536B', '#D9C701', '#F38051', '#339AE5', '#89ED3A'],
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    calculable: true,
    series: [

        {
            name: '面积模式',
            type: 'pie',
            radius: [45, 70],
            roseType: 'radius',
            data: [{
                    value: 100,
                    name: '商标管理'
                },
                {
                    value: 120,
                    name: '信息公开'
                },
                {
                    value: 100,
                    name: '广告管理'
                },
                {
                    value: 400,
                    name: '消费维权'
                },
                {
                    value: 50,
                    name: '市场管理'
                },
            ],
            labelLine: {
                normal: {
                    show: true,
                    length: 5,
                    length2: 5,
                    lineStyle: {
                        color: '#3983FC',
                        width: 1
                    }
                }
            },
            label: {
                normal: {
                    // formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
                    formatter: '{b} ({d})%',
                    rich: {
                        b: {
                            fontSize: 12,
                            color: '#12EABE',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        }
                    }
                }
            }
        }
    ]
};