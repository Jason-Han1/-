var img = 'data:image/png;base64,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'
    var data = [{
        name: '2020',
        value: 120
    }, {
        name: '2019',
        value: 85
    },];    
    let color2 = ['rgba(0,150,254,1)', 'rgba(0,204,254,0.3)', 'rgba(0,255,217,0.3)', 'rgba(138,255,0,0.3)', 'rgba(29, 246, 255, 0.3)'];
    let color1 = ['rgba(0,150,254,.2)', 'rgba(0,204,254,0)', 'rgba(0,255,217,0)', 'rgba(138,255,0,.3)', 'rgba(29, 246, 255,.3)'];
    let baseData1 = [];
    let baseData2 = [];
    for (var i = 0; i < data.length; i++) {
        baseData1.push({
            value: data[i].value,
            name: data[i].name,
            itemStyle: {
                normal: {
                    color: color1[i],

                }
            }
        }, {
            value: 1,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: 'transparent',

                }
            }
        });
    }
    for (var i = 0; i < data.length; i++) {
        baseData2.push({
            value: data[i].value,
            name: data[i].name,
            itemStyle: {
                normal: {
                    color: color2[i],

                }
            }
        }, {
            value: 1,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: 'transparent',

                }
            }
        });
    }
    option = {
        backgroundColor: "black",
        graphic: {
            elements: [{
                name: '中间图片',
                type: "image",
                z: 3,
                style: {
                    image: img,
                    width: 250,
                    height: 250
                },
                position: [420, 300]
            }]
        },
        series: [{
                type: 'pie',
                hoverAnimation: false,
                radius: ['68%', '-100%'],
                center: ['50%', '50%'],
                tooltip: {
                    show: false
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                data: baseData1
            },
            {
                type: 'pie',
                hoverAnimation: false,
                color: color1,
                radius: ['68%', '70%'],
                center: ['50%', '50%'],
                tooltip: {
                    show: false
                },
                label: {
                    show: false,
                    position: 'center'
                },
                data: baseData2
            },
        ]
    };