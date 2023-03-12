let sData = [{
    name: "徐汇区",
    value: 4.00
}, {
    name: "金山区",
    value: 22.00
}, {
    name: "嘉定区",
    value: 12.67
}, {
    name: "浦东新区",
    value: 19.00
}, {
    name: "闵行区",
    value: 7.52
}, {
    name: "松江区",
    value: 8.00
}, {
    name: "长宁区",
    value: 17.92
}, {
    name: "宝山区",
    value: 5.96
}, {
    name: "静安区",
    value: 5.99
}];
let angle = 0;
let data = [];
let color = ['#35D2FD', '#F56B3C', '#F2A936', '#D8F754', '#76F738', '#40C02D', '#6AE8FE', '#389AFD','#285BF5']
for (var i = 0; i < sData.length; i++) {
    data.push({
        value: sData[i].value,
        name: sData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 6,
                // shadowBlur: 20,
                borderColor: color[i],
                // shadowColor: color[i]
            }
        }
    }, {
        value: 1,
        name: '',
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
            }
        }
    });
}

function _pieDashed() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "rgb(126,190,255)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }
    }
    return dataArr
}

let labelData = [];
for (var i = 0; i < 100; ++i) {
    labelData.push({
        value: 1,
        name: i,
        itemStyle: {
            normal: {
                color: 'rgba(0,209,228,0)',
            }
        }
    });
}
for (var i = 0; i < labelData.length; ++i) {
    if ((labelData[i].name >= 25 && labelData[i].name < 50)||(labelData[i].name >= 75 && labelData[i].name < 100)) {
        if (labelData[i].name % 2 === 0) {
            labelData[i].itemStyle = {
                normal: {
                    color: "rgb(126,190,255)",
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)"
                }
            }
        } else {
            labelData[i].itemStyle = {
                normal: {
                    color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                }
            }
        }
    }
}

let seriesOption = [{
    name: '',
    type: 'pie',
    clockWise: true,
    radius: ['64%', '67%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < sData.length; i++) {
                        total += sData[i].value;
                    }
                    
                    percent = ((params.value / total) * 100).toFixed(2);
                    if (params.name !== '') {
                        return params.name + '\n' + '\n' + percent + '%';
                    } else {
                        return '';
                    }
                },
            },
            labelLine: {
                // length: 30,
                // length2: 100,
                show: true,
                color: '#00ffff'
            }
        }
    },
    data: data
},{
    name: '第三层环',
    type: 'pie',
    z: 1,
    tooltip: {
        show: false
    },
    center: ['50%', '50%'],
    radius: ['74%', '76%'],
    hoverAnimation: false,
    clockWise: false,
    itemStyle: {
        normal: {
            borderWidth: 5,
            shadowBlur: 10,
            borderColor:'rgba(53,139,255,.3)',
            shadowColor: 'rgba(53,139,255,.3)',
            color: 'rgba(30,84,120,.95)',
        },
        emphasis: {
            color: 'rgba(30,84,120,.95)',
        }
    },
    label: {
        show: false
    },
    data: [100]
},{
    name: '第二层环',
    type: 'pie',
    z: 1,
    tooltip: {
        show: false
    },
    center: ['50%', '50%'],
    radius: ['54%', '56%'],
    hoverAnimation: false,
    clockWise: false,
    itemStyle: {
        normal: {
            borderWidth: 5,
            // borderColor:'rgba(98,200,249,.3)',
            shadowBlur: 15,
            shadowColor: 'rgba(98,200,249,.3)',
            color: 'rgba(98,200,249,.95)',
        },
        emphasis: {
            color: 'rgba(98,200,249,.95)',
        }
    },
    label: {
        show: false
    },
    data: [100]
},
    {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function(params, api) {
            return {
                type: 'arc',
                shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.50,
                    startAngle: (275+-angle) * Math.PI / 180,
                    endAngle: (0+-angle) * Math.PI / 180
                },
                style: {
                    stroke: "#4CA9DD",
                    fill: "transparent",
                    lineWidth: 1.5
                },
                silent: true
            };
        },
        data: [0]
    }, 
    {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function(params, api) {
            return {
                type: 'arc',
                shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.50,
                    startAngle: (90+-angle) * Math.PI / 180,
                    endAngle: (180+-angle) * Math.PI / 180
                },
                style: {
                    stroke: "#4CA9DD",
                    fill: "transparent",
                    lineWidth: 1.5
                },
                silent: true
            };
        },
        data: [0]
    },
    {
        hoverAnimation: false,
        type: 'pie',
        z: 2,
        data: labelData,
        radius: ['50%', '49%'],
        zlevel: -2,
        label: {
            normal: {
                show: false,
            }
        },
    },
    {
            name: "ring5",  //绿点
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                let x0 = api.getWidth() / 2 - 10;
                let y0 = 0.245*api.getHeight();
                let x1 = x0;
                let y1 = y0 + 10;
                let x2 = x0 + 10;
                let y2 = y0 + 5;
                return {
                  type: 'path',
                    shape: {
                      d: 'M'+x0+' '+y0+' L'+x1+' '+y1+' L'+x2+' '+y2+'  Z', 
                    },
                    style: {
                        stroke: "#4CA9DD",      //绿
                        fill: "#4CA9DD"
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "ring5",  //绿点
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                
                let x0 = api.getWidth() / 2 + 5;
                let y0 = 0.745*api.getHeight();
                let x1 = x0 + 10;
                let y1 = y0 - 6;
                let x2 = x0 + 10;
                let y2 = y0 + 5;
                return {
                  type: 'path',
                    shape: {
                      d: 'M'+x0+' '+y0+' L'+x1+' '+y1+' L'+x2+' '+y2+'  Z', 
                    },
                    style: {
                        stroke: "#4CA9DD",      //绿
                        fill: "#4CA9DD"
                    },
                    silent: true
                };
            },
            data: [0]
        },
];
option = {
    backgroundColor: '#0A2E5D',
    color: color,
    series: seriesOption
}