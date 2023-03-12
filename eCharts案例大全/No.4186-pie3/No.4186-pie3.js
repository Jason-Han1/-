var sData = [{
    name: "验收通过",
    value: 40
},{
    name: "已支付",
    value: 46
}, {
    name: "已拒收",
    value: 14
}];

var data = [];
var dataRotate = [];
var color = ['#10B4A8', '#26C755', '#BBBC19'];
function angleText(i) {
    let totalValue = 0;
    let initValue = 0;
    for (var j = 0; j < sData.length; j++){
        totalValue += sData[j].value;
    }
    for(var k=0; k< sData.length; k++){
        if(k<i){
            initValue += sData[k].value;
        }
    }
    //每个元素的角度
    var everyAngle = 360 / totalValue;
    //文字现在所在的角度
    var currentAngle = (sData[i].value/2+initValue) * everyAngle;

    if (currentAngle <= 90) {
        return -currentAngle;
    } else if (currentAngle <= 180 && currentAngle > 90) {
        return -currentAngle;
    } else if (currentAngle < 270 && currentAngle > 180) {
        return -currentAngle;
    } else if (currentAngle < 360 && currentAngle >= 270) {
        return -currentAngle;
    }
}

for (var i = 0; i < sData.length; i++) {
    data.push({
        value: sData[i].value,
        name: sData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 6,
                borderColor: color[i],
            }
        },
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
    dataRotate.push({
        value: sData[i].value,
        name: sData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 6,
                borderColor: color[i],
            }
        },
        label:{
            rotate:angleText(i),
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
var legendData = [];
for (var i = 0; i < sData.length; i++) {
    legendData.push(sData[i].name)
}
function Pie() {
    let dataArr = [];
    for (var i = 0; i < 300; i++) {
        if (i % 5 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,255,255,.3)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 30,
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



var seriesOption = [{
    name: '',
    type: 'pie',
    clockWise: true,
    radius: ['64%', '67%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                // position: 'outside',
                distanceToLabelLine: 30,
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < sData.length; i++) {
                        total += sData[i].value;
                    }
                    
                    percent = ((params.value / total) * 100).toFixed(2);
                    if (params.name !== '') {
                        return percent + '%';
                    } else {
                        return '';
                    }
                },
            },
            labelLine: {
                length: 20,
                length2: 20,
                show: false,
                color: '#00ffff'
            }
        }
    },
    data: data
},
{
        
        type: 'pie',
        silent: true, //取消高亮
        radius: ['64%', '67%'],
        // center: ["50%", "50%"],
        labelLine: {
            normal: {
                length: 20,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return '{cir|▴}';
                },
                rich: {
                    cir: {
                        fontSize: 40,
                    },
                }
            },
        },
        data: dataRotate,
        z: -1
    },
{
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: -147.5,
            radius: ['59%', '58%'],
            z: 1,
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: Pie()
        },{
        type: 'gauge',
        radius: '48%',
        startAngle:'0',
		endAngle:'-359.99',
        splitNumber: 30,
        center: ['50%', '50%'],
        pointer: {
            show: false
        },
        title: {
            show: false
        },
        detail: {
            show: false
        },
        axisLine: {
            lineStyle: {
                width: 30,
                color: [
                    [0, '#5fa7ca'],
                    [1, '#5fa7ca']
                ],
                opacity: 0
            }
        },
        axisTick: {
            length: 16,
            lineStyle: {
                color: 'auto'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,
        }
    },{
    name: '第二层环',
    type: 'pie',
    z: 1,
    tooltip: {
        show: false
    },
    center: ['50%', '50%'],
    radius: ['36%', '37%'],
    hoverAnimation: false,
    clockWise: false,
    itemStyle: {
        normal: {
            borderWidth: 5,
            shadowBlur: 15,
            borderColor:'rgba(38,51,93,.3)',
            shadowColor: 'rgba(38,51,93,.3)',
            color: 'rgba(38,51,93,.95)',
        },
        emphasis: {
            color: 'rgba(38,51,93,.95)',
        }
    },
    label: {
        show: false
    },
    data: [100]
},{
    name: '第一层环',
    type: 'pie',
    z: 1,
    tooltip: {
        show: false
    },
    center: ['50%', '50%'],
    radius: ['29%', '33%'],
    hoverAnimation: false,
    clockWise: false,
    itemStyle: {
        normal: {
            borderWidth: 5,
            shadowBlur: 15,
            borderColor:'rgba(255,255,255,.3)',
            shadowColor: 'rgba(255,255,255,.3)',
            color: 'rgba(255,255,255,.95)',
        },
        emphasis: {
            color: 'rgba(255,255,255,.95)',
        }
    },
    label: {
        show: false
    },
    data: [100]
},{
    name: '最内层环',
    type: 'pie',
    z: 1,
    tooltip: {
        show: false
    },
    center: ['50%', '50%'],
    radius: ['26%', '29%'],
    hoverAnimation: false,
    clockWise: false,
    itemStyle: {
        normal: {
            borderWidth: 5,
            shadowBlur: 15,
            borderColor:'rgba(38,51,93,.3)',
            shadowColor: 'rgba(38,51,93,.3)',
            color: 'rgba(38,51,93,.95)',
        },
        emphasis: {
            color: 'rgba(38,51,93,.95)',
        }
    },
    label: {
        show: false
    },
    data: [100]
}];
option = {
    backgroundColor: '#0A2E5D',
    color: color,
    title: {
        text: '',
        top: '48%',
        textAlign: "center",
        left: "49%",
        textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: '400'
        }
    },
    graphic: {
        elements: [{
            type: "image",
            z: 3,
            style: {
                width: 178,
                height: 178
            },
            left: 'center',
            top: 'center',
            position: [100, 100]
        }]
    },
    tooltip: {
        show: false
    },
    legend: {
        itemWidth: 20,
        itemHeight: 10,
        orient: 'vertical',
        data: legendData,
        right: '8%',
        align: 'right',
        top: 'center',
        textStyle: {
            color: "#fff",
            padding: [0,10,0,0]
        },
        itemGap: 40,
        borderRadius:5,
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}