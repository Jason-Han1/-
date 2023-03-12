
function labelFormat(rate, color) {
    var labelData = []
    const basic = 100
    for (let i = 0; i < basic; ++i) {
        labelData.push({
            value: 1,
            name: i,
            itemStyle: {
                normal: {
                    color: 'rgba(0,209,228,0)'
                }
            }
        })
    }
    for (let i = 0; i < labelData.length; ++i) {
        if (labelData[i].name < basic * rate && !color) {
            labelData[i].itemStyle = {
                normal: {
                    color: 'rgba(0,209,228,' + (i + 20) / labelData.length + ')'
                    // color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    //     {
                    //         offset: 0,
                    //         color: '#02aeff'
                    //     },
                    //     {
                    //         offset: 1,
                    //         color: '#02aeff'
                    //     }
                    // ])
                }
            }
        }
        if (labelData[i].name === Math.ceil(basic * rate) && color) {
            labelData[i].itemStyle = {
                normal: {
                    color: color
                }
            }
        }
    }
    return labelData
}
function pie() {
    let dataArr = []
    for (var i = 0; i < 4; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: '#1a4050',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)'
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)'
                    }
                }
            })
        }
    }
    return dataArr
}

let rate = 0.8

option = {
    backgroundColor: '#0E1327',
    series: [
        {
            //内圆
            type: 'pie',
            radius: '90%',
            center: ['50%', '50%'],
            z: 0,
            silent: true,
            itemStyle: {
                normal: {
                    color: '#0F2535'
                    // color: 'rgba(0, 43, 68, 0.3)',
                    // color: new this.$echarts.graphic.RadialGradient(.5, .5, 1, [{
                    //         offset: 0,
                    //         color: 'rgba(17,24,43,0)'
                    //     },
                    //     {
                    //         offset: .5,
                    //         // color: '#1E2B57'
                    //         color: 'rgba(28,42,91,.6)'
                    //     },
                    //     {
                    //         offset: 1,
                    //         color: '#141C33',
                    //         // color:'rgba(17,24,43,0)'
                    //     }
                    // ], false),
                }
            },
            hoverAnimation: false,
            data: [100]
        },
        {
            hoverAnimation: false,
            type: 'pie',
            z: 2,
            center: ['50%', '50%'],
            radius: ['66%', '82%'],
            data: labelFormat(rate),
            itemStyle: {
                normal: {
                    borderColor: '#0F2535',
                    borderWidth: 1
                }
            },

            label: {
                normal: {
                    position: 'inside',
                    show: false
                }
            }
        },
        {
            hoverAnimation: false,
            type: 'pie',
            z: 2,
            center: ['50%', '50%'],
            radius: ['64%', '84%'],
            data: labelFormat(rate, '#24ffdf'),
            itemStyle: {
                normal: {
                    borderColor: '#0F2535',
                    borderWidth: 1
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    show: false
                }
            }
        },
        {
            type: 'pie',
            zlevel: 2,
            silent: true,
            center: ['50%', '50%'],
            radius: ['90%', '95%'],
            startAngle: 45,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: pie()
        }
    ]
};
