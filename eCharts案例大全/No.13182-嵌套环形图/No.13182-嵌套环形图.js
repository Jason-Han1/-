var giftImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoge2Z7ZGCMBRFLcEStgRLoARLoAPpYNOBdrB2sHawdAAdSAfawdkfCbMRDQmQF2DHO5M/Du9yz+QbN5u33oojoCSeKuAT2K0VwNYX8LFmAIAbsF8zQKt87QAg1RMJAW7ANiVANsBjB1wCINQiASyv3NcLiwYwfsoDEXcuCABsgXsPgFo0gPHsmw/neOk3YgB9w6iMl34zSw9cIsYXmwO3HgC1dIBTT3hY8iqEfx8gavhYAOid+NsXntgrkAegAn4CWt94t3Un8VkotvLo4RMCKJHwiQBysfDCACUpLveRARr0PpCJBw8AKIAssH0kCzwAIIv4juPIHj3ODsDj7lyb9/labdXkcwNcjV8xsK4wdZXvQTEA9BEDGHcGsrK4VzNhgLPxKkfWt9lOIQ9JALTnJDWyvr3Zub9mSAHwOHlHeaGX6Fav7xESAOhbWeXwHauKV6dZIYDC4TlVzyuZEIDtWaPHcv36NU41ps72KlMDNJhuRw+rIdpafs1cAFXn92toeodfcgCAA3pDG3oeOpq6g/VbMgDfp5Wxet7QhAAyh+dUPWeSADC++45fQ9hJtG1Npz7dRmZ8u72gBtaroDz/AeDk6MJJF3L0un82Xpehfvz971Yan/gfxd6aoF+Wa+m2l3YWQgAAAABJRU5ErkJggg==";
var startColor = ['#FC9315', '#FC5515', '#FC3415', '#FC2415', '#FC1121'];
var middleColor = ['#FDB721', '#FD8E21', '#FD6921', '#FD4A21', '#FD4A21'];
var endColor = ['#54432E', '#855A27', '#864F2A', '#89462C', '#853930'];
var StartData = [{
        value: 100,
        name: ''
    },
    {
        value: 100,
        name: ''
    },
    {
        value: 100,
        name: ''
    },
    {
        value: 100,
        name: ''
    },
    {
        value: 100,
        name: ''
    }
];
var MiddleData = [{
        value: 100,
        name: ''
    },
    {
        value: 100,
        name: ''
    },
    {
        value: 100,
        name: ''
    },
    {
        value: 100,
        name: ''
    },
    {
        value: 100,
        name: ''
    }
];
var EndData = [{
        value: 100,
        name: '停车15分钟',
        itemStyle: {
            color: '#54432E'
        }
    },
    {
        value: 100,
        name: '停车15-60分钟',
        itemStyle: {
            color: '#855A27'
        }
    },
    {
        value: 100,
        name: '停车1-2小时',
        itemStyle: {
            color: '#864F2A'
        }
    },
    {
        value: 100,
        name: '停车2-4小时',
        itemStyle: {
            color: '#89462C'
        }
    },
    {
        value: 100,
        name: '停车4小时以上',
        itemStyle: {
            color: '#853930'
        }
    }
];
StartData.map(function(item, index) {
    item.itemStyle = {
        normal: {
            color: startColor[index]
        }
    }
});
MiddleData.map(function(item, index) {
    item.itemStyle = {
        normal: {
            color: middleColor[index]
        }
    }
});
EndData.map(function(item, index) {
    item.itemStyle = {
        normal: {
            color: endColor[index]
        }
    }
});
option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: giftImageUrl,
                width: 50,
                height: 50
            },
            left: 'center',
            top: 'center'
        }]
    },
    title: {
        text: '平均停车时长',
        left: 'center',
        top: '55%',
        padding: [24, 0],
        textStyle: {
            color: '#fff',
            fontSize: 20,
            align: 'center'
        }
    },
    series: [{
            name: '平均停车时长',
            type: 'pie',
            radius: ['25%', '35%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,


            },

            data: StartData
        },
        {
            name: '平均停车时长',
            type: 'pie',
            radius: ['35%', '50%'],
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,


            },

            data: MiddleData
        },
        {
            name: '平均停车时长',
            type: 'pie',
            radius: ['43%', '50%'],
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{d|{d}%}\n{hr|}\n{b|{b}}',
                    rich: {
                        b: {
                            fontSize: 20,
                            color: '#6164B2',
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
                            fontSize: 20,
                            color: '#FF9615',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        }
                    }
                }
            },
            data: [{
                    value: 100,
                    name: '停车15分钟',
                    itemStyle: {
                        color: '#54432E'
                    }
                },
                {
                    value: 100,
                    name: '停车15-60分钟',
                    itemStyle: {
                        color: '#855A27'
                    }
                },
                {
                    value: 100,
                    name: '停车1-2小时',
                    itemStyle: {
                        color: '#864F2A'
                    }
                },
                {
                    value: 100,
                    name: '停车2-4小时',
                    itemStyle: {
                        color: '#89462C'
                    }
                },
                {
                    value: 100,
                    name: '停车4小时以上',
                    itemStyle: {
                        color: '#853930'
                    }
                }
            ]
        }
    ]
};