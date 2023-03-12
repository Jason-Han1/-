option = {
    title: {
        text: '',
        subtext: '2019.12.30至2019.1.5\r\n访问量环比上升16%',
        x: '82%',
        y: '85%',

    },
    grid: [{
            top: '3%'
        },

    ],
    backgroundColor: "white",
    series: [{
            name: '模块',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            itemStyle: {
                borderWidth: 1,
                borderColor: "white"
            },
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
                    name: '备付金保证金',
                    value: 7
                }, {
                    name: '财务持仓',
                    value: 47
                },
                {
                    name: '净值发布',
                    value: 22
                },
                {
                    name: '实时估值',
                    value: 71
                }, {
                    name: '现金流管理',
                    value: 25
                },
                {
                    name: '费用统计',
                    value: 8
                },
                {
                    name: '公司领航',
                    value: 60
                },

            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
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
                    name: '固定收益部',
                    value: 64
                }, {
                    name: '公司领导',
                    value: 5
                }, {
                    name: '金融市场部',
                    value: 31
                },
                {
                    name: '基金投资部',
                    value: 1
                },
                {
                    name: '智能投资部',
                    value: 34
                },
                {
                    name: '组合投资部',
                    value: 40
                },
                {
                    name: '直接投资部',
                    value: 1
                },
                {
                    name: '股票投资部',
                    value: 41
                },
                {
                    name: '研究部',
                    value: 14
                },
            ]
        }
    ]
};