option = {
    backgroundColor: '#373a54',
    radar: [{
        indicator: [{
            text: '停车次数'
        }, {
            text: '排队长度'
        }, {
            text: '延误时间'
        }, {
            text: '行车速度'
        }],
        center: ['50%', '50%'],
        radius: 120,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        name: {
            textStyle: {
                color: '#ffffff'
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(0, 0, 0, 0)'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#B8BCC0',
                type: 'dotted',
                opacity: 0.6
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(64,183,255,0.6)'
            }
        }
    }, ],
    series: [{
        name: '雷达图',
        type: 'radar',
        data: [{
            value: [100, 8, 0.40, -80],
            name: '图一',
            symbol: 'rect',
            symbolSize: 5,
            lineStyle: {
                normal: {
                    color: '#00FFC6'
                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,255,197,0.22)'
                }
            }
        }, {
            value: [60, 5, 0.30, -100],
            name: '图二',
            lineStyle: {
                normal: {
                    color: "#F8E81C"
                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(248,230,27,0.21)'
                }
            }
        }]
    }]
}