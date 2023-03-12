
var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF']
option = {
    legend:{
        bottom:'10%',
        right:'5%',
        orient:'vertical',
        padding:[15,28],
        itemWidth:10,
        itemHeight:10,
        icon:'circle',
        textStyle:{
            fontSize:14,
            color:'#727272',
            padding:[0,0,0,6],
            lineHeight:16,
        },
        backgroundColor:'rgb(245,248,253,0.6)',
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['10%', '36%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 0,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-30, -90, -40, -90]
                }
            }
        },
        labelLine: {
            normal: {
                length: 40,
                length2: 90,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: [{
            'name': '一月',
            'value': 1.45
        }, {
            'name': '二月',
            'value': 2.93
        }, {
            'name': '三月',
            'value': 3.15
        }, {
            'name': '四月',
            'value': 4.78
        }, {
            'name': '五月',
            'value': 5.93
        }, {
            'name': '六月',
            'value': 5.73
        }
        ],
    },{
        name: '外圈',
        type: 'pie',
        radius: ['36%', '37.5%'],
        center: ['50%', '50%'],
        hoverAnimation: false,
        itemStyle: {
            color: 'rgb(21 132 214 / 0.1)',
        },
        emphasis: {
            itemStyle: {
                color: 'rgb(21 132 214 / 0.1)'
            }
        },
        labelLine: {
            show: false
        },
        data: [{
            value: 1
        }],
        zlevel: 1
    }, {
        name: '内圈',
        type: 'pie',
        radius: ['8.5%', '10%'],
        center: ['50%', '50%'],
        hoverAnimation: false,
        itemStyle: {
            color: 'rgb(21 132 214 / 0.1)',
        },
        emphasis: {
            itemStyle: {
                color: 'rgb(21 132 214 / 0.1)'
            }
        },
        labelLine: {
            show: false
        },
        data: [{
            value: 1
        }],
        zlevel: 1
    }]
};