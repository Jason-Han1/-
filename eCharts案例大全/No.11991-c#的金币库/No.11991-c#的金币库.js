option = {
    baseOption: {
        timeline: { 
            axisType: 'category', 
            autoPlay: true, 
            playInterval: 1000, 
            data: [
                '猫咪', 'dog', '小兔子',
                {
                    value: 'Java',
                    tooltip: {
                        formatter: '{b} GDP达到一个高度'
                    },
                    symbol: 'diamond',
                    symbolSize: 16
                },
                'c#', 'c++'
            ],
        },
        title: { subtext: '数据来自木可统计局' },
        tooltip: {}, legend: { },
        calculable: true,
        grid: {
            top: 80, bottom: 100,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function(params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: [{
            'type': 'category',
            'axisLabel': {
                'interval': 0
            },
            data: ["a", "b", "c", "d"],
            splitLine: { show: false }
        }],
        yAxis: [{
            type: 'value',
            name: 'GDP（亿元）'
        }],
        series: [ 
            {
                name: '金币1',
                type: 'bar'
            },
            {
                name: '银币',
                type: 'bar'
            },
            {
                name: '同比',
                type: 'bar'
            }, 
        ]
    }, 
    options: [{
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["b", "a", "c", "d"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: '小猫咪的金币库'
            },
            series: [{
                    data: [1, 2, 3, 4]
                },
                {
                    data: [1, 2, 3, 4]
                },
                {
                    data: [1, 2, 3, 4]
                },
            ]
        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["b", "a", "c", "d","散点"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: 'dog的金币库'
            },
            series: [{
                    data: [1, 12, 3, 4,5]
                },
                {
                    data: [12, 2, 3, 4,9]
                },
                {
                    data: [1, 2, 3, 4,3]
                },
            ]
        },{
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["金币1","金币2","金币3","金币4"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: '小兔子的金币库'
            },
            series: [{
                    data: [1, 2,9, 4]
                },
                {
                    data: [1, 2, 4, 4]
                },
                {
                    data: [1, 4, 3, 4]
                },
            ]
        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["b", "a", "c", "d"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: 'Java的金币库'
            },
            series: [{
                    data: [1, 2, 3, 4]
                },
                {
                    data: [1, 2, 3, 4]
                },
                {
                    data: [1, 2, 3, 4]
                },
            ]
        },{
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["b", "a", "c", "d"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: 'c#的金币库'
            },
            series: [{
                    data: [1, 2, 3, 4]
                },
                {
                    data: [1, 2, 3, 4]
                },
                {
                    data: [1, 2, 3, 4]
                },
            ]
        },{
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["b", "a", "c", "d"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: 'c#的金币库'
            },
            series: [{
                    data: [1, 2, 3, 4]
                },
                {
                    data: [1, 2, 3, 4]
                },
                {
                    data: [1, 2, 3, 4]
                },
            ]
        }


    ]

};