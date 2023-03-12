option = {
    title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        // data: ['展现','点击','访问','咨询','订单']
        data: ['访问', '点击', '展现']
    },
    calculable: true,
    series: [{
        name: '漏斗图',
        type: 'funnel',
        left: '10%',
        // top: 60,
        //x2: 80,
        // bottom: 60,
        // width: '80%',
        // height: {totalHeight} - y - y2,
        // min: 0,
        // max: 100,
        // minSize: '0%',
        // maxSize: '100%',
        // sort: 'descending',
        sort: 'ascending',
        // gap: 2, // 三角形之间的间距
        // label: {
        //     show: true,
        //     position: 'inside',
        // },
        label: {
            normal: {
                position: 'inside',
                padding: [0,0,-80,0],
                formatter: function(params) {
                    var text = '';
                    switch (params.name) {
                //         formatter: [
                //     '    {d|●}',
                //     ' {a|{c}%}     \n',
                //     '    {b|}'
                // ].join(','),
                        case '个人完税证明开具':
                            text = '{a|779}{b|笔}\n{c|个人完税证明开具}'
                            break;
                        case '自然人登记':
                            text = '{a|32652}{b|笔}\n{c|自然人登记}'
                            break;
                        case '申报总量':
                            text = '{a|217966}{b|笔}\n{c|申报总量}'
                            break;
                    }
                    return text
                },
                rich: {
                    a: {
                        color: '#fdde2c',
                        fontSize: '28',
                        align: 'center',
                        border: 0
                    },
                    b: {
                        fontSize: '14',
                        color: '#fff',
                        border: 0
                    },
                    c: {
                        color: '#fff',
                        fontSize: '14',
                        align: 'center',
                        border: 0
                    },
                }
                // textStyle: {
                //     color: 'blue'
                // }
            },
            // emphasis: {
            //     position:'inside',
            //     formatter: '{b}实际: {c}%'
            // }
        },
        // labelLine: {
        //     show: false,
        //     length: 10,
        //     lineStyle: {
        //         width: 1,
        //         type: 'solid'
        //     }
        // },
        // itemStyle: {
        //     // show: false,
        //     borderColor: 'red',
        //     borderWidth: 0
        // },
        // emphasis: {
        //     label: {
        //         fontSize: 20
        //     }
        // },
        data: [
            // {value: 20, name: '订单'},
            // {value: 40, name: '咨询'},
            {
                value: 30,
                name: '个人完税证明开具',
                itemStyle: {
                    color: '#4BC4A2'
                }
            },
            {
                value: 60,
                name: '自然人登记',
                itemStyle: {
                    color: '#4E6EDF'
                }
            },
            {
                value: 90,
                name: '申报总量',
                itemStyle: {
                    color: '#3E4C9E'
                }
            }
        ]
    }]
};