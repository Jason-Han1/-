var colorList = ["#034079", "#49DFF0", "#DFB141", "#00FEB5", "#7081DB", "#FDFEFF", "#2385E0"];
option = {
    title: {
        text: '学生各学年消费细则分析',
        textStyle: {
            color: '#fff',
        },
    },
    backgroundColor: '#141845',
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    grid: {
        top: '1%',
        containLabel: true
    },
    series: [{
        type: 'pie',
        radius: ['27%', '53%'],
        // roseType: 'radius',
        clockwise: false,
        z: 5,
        itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.
                    return colorList[params.dataIndex]
                },
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
        },
        label: {
            normal: {
                formatter: '{d|{b}}\n{hr|}\n{d|({d}%)}',
                rich: {
                    b: {
                        fontSize: 12,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                    },
                    hr: {
                        //		                            borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    d: {
                        fontSize: 12,
                        color: '#fff',
                        align: 'left',
                        padding: 1
                    },
                    c: {
                        fontSize: 12,
                        color: '#fff',
                        align: 'center',
                        //		                            padding: 4
                    }
                }
            }
        },

        labelLine: {
            normal: {
                length: 22,
                length2: 0,
                lineStyle: {
                    width: 2
                }
            }
        },
        data: [{
                value: 50,
                name: '吃饭'
            },
            {
                value: 50,
                name: '学费'
            },
            {
                value: 50,
                name: '买护理品'
            },
            {
                value: 40,
                name: '买衣服'
            },
            {
                value: 30,
                name: '买文具'
            },
            {
                value: 10,
                name: '其他'
            },
            {
                value: 20,
                name: '买零食'
            },
        ]
    }]
};