option = {
    backgroundColor:'#1a019b',
    title: {
        text: '魔幻系列圆环图',
        textStyle: {
            color: '#fff',
            fontSize: 35,
            align: 'center'
        },
        x: 'center',
        y: '1%',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
        show:false,
        orient: 'horizontal',
        x: 'center',
        itemWidth: 20,
        itemHeight: 20,
        align: 'left',
        data: ['第一批', '第二批', '第三批', '第四批'],
        textStyle: {
            color: 'blue'
        }
    },
    series: [{
            animation: false,
            type: 'pie',
            radius: ['42%', '51%'],
            data: [1],
            color: ["gray"],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                },

            },
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['38%', '75%'],
            label: {
                normal: {
                    // formatter: '{c}',
                    position:'inside',
                        formatter:(params)=>{
                            return (params.dataIndex % 2) ? '' : params.name + '\n' + params.value+'%'
                        },
                    padding: [0, -80],
                    height: 60,
                    fontSize: 20,
                    rich: {
                        c: {
                            lineHeight: 50,
                        },
                    }
                },
            },
            data: [{
                    value: 48,
                    name: '第一批'
                },
                {
                    value: .5,
                    name: 'border'
                },
                {
                    value: 7,
                    name: '第二批'
                },
                {
                    value: .5,
                    name: 'border'
                },
                {
                    value: 48,
                    name: '第三批'
                },
                {
                    value: .5,
                    name: 'border'
                },
                {
                    value: 35,
                    name: '第四批'
                },
                {
                    value: .5,
                    name: 'border'
                },
            ],
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#55c2d9', '#d56ff0', '#aa81f0', '#74a2e3'];
                        return (params.dataIndex % 2) ? 'rgba(0,0,0,0)' : colorList[params.dataIndex / 2];
                    },
                    label: {
                        show: true,
                    },
                    labelLine: {
                        show: false,
                        length: 80,
                        length2: 120,
                    },


                },
            }
        },
        {
            animation: false,
            type: 'pie',
            radius: ['36%', '38%'],
            data: [{
                    value: 48,
                    name: '第一批'
                },
                {
                    value: .5,
                    name: 'border'
                },
                {
                    value: 7,
                    name: '第二批'
                },
                {
                    value: .5,
                    name: 'border'
                },
                {
                    value: 48,
                    name: '第三批'
                },
                {
                    value: .5,
                    name: 'border'
                },
                {
                    value: 35,
                    name: '第四批'
                },
                {
                    value: .5,
                    name: 'border'
                },
            ],
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#55c2d9', '#d56ff0', '#aa81f0', '#74a2e3'];
                        return (params.dataIndex % 2) ? 'rgba(0,0,0,0.5)' : "rgba(0,0,0,0.5)";
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
        },
        {
            animation: false,
            type: 'pie',
            radius: ['38%', '40%'],
            data: [{
                    value: 48,
                    name: '第一批'
                },
                {
                    value: .5,
                    name: 'border'
                },
                {
                    value: 7,
                    name: '第二批'
                },
                {
                    value: .5,
                    name: 'border'
                },
                {
                    value: 48,
                    name: '第三批'
                },
                {
                    value:.5,
                    name: 'border'
                },
                {
                    value: 35,
                    name: '第四批'
                },
                {
                    value: .5,
                    name: 'border'
                },
            ],
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#55c2d9', '#d56ff0', '#aa81f0', '#74a2e3'];
                        return (params.dataIndex % 2) ? 'rgba(0,0,0,0.5)' : "rgba(0,0,0,0.5)";
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },

            },
        },
    ]
};