option = {
    backgroundColor: '#FFF',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    graphic: {
        elements: [{
            type: 'image',
            style: {
                //image: ImageUrl,
                width: 100,
                height: 100
            },
            left: 'center',
            top: 'center'
        }]
    },
    legend: {
        orient: 'horizontal',
        icon: 'circle',
        bottom: 20,
        x: 'center',
        textStyle: {
            color: '#fff'
        },
        data: ['大理石', '仿古', '外墙', '瓷片', '抛光', '木纹']
    },
    series: [{
        type: 'pie',
        radius: ['40%', '50%'],
        center: ['50%', '50%'],
        color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
        data: [{
                value: 335,
                name: '数据异常'
            },
            {
                value: 310,
                name: '环境异常'
            },
            {
                value: 234,
                name: '行为异常'
            },
            {
                value: 235,
                name: '违反业务模型'
            }

        ],
        labelLine: {
            normal: {
                show: true,
                length: 40,
                length2: 80,
                lineStyle: {
                    color: '#12EABE',
                    width: 2
                },
                emphasis: {
                    show: true,
                }
            }
        },
        label: {
            normal: {
                formatter: '{b|{b}：}{c|{c}}  {per|{d}%}  ',
                backgroundColor: 'rgba(255, 147, 38, 0)', //#eee
                borderColor: '#17367c',
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
                        fontSize: 18,
                        lineHeight: 33
                    },
                    c: {
                        fontSize: 14,
                        color: '#eee',
                    },
                    per: {
                        color: '#FDF44E', //#eee
                        fontSize: 14,
                        backgroundColor: '#293646', //#334455
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },

        },
        emphasis: {
            label: {
                show: true,
                formatter: '{b|{b}：}{c|{c}}  {per|{d}%}  ',
                backgroundColor: 'rgba(255, 147, 38, 0)', //#eee
                borderColor: '#FF8352',
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
                        color: '#FF8352',
                        fontSize: 18,
                        lineHeight: 33
                    },
                    c: {
                        fontSize: 14,
                        color: '#eee',
                    },
                    per: {
                        color: '#FDF44E', //#eee
                        fontSize: 14,
                        backgroundColor: '#293646', //#334455
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },

        }
    }]
};