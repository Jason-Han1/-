var top2URL = "/asset/get/s/data-1604298243112-wVMFKjFRU.png";
var top1URL = "/asset/get/s/data-1604298213716-BI27ZxE4S.png";
var imgURL = "/asset/get/s/data-1604297660027-BIglMnvCQ.png";
var piePatternImg = new Image();
piePatternImg.src = imgURL;

var top1Img = new Image();
top1Img.src = top1URL;
var top2Img = new Image();
top2Img.src = top2URL;


var i_data = 7;
var deg = 360 / i_data;
var angdeg = ((2*Math.PI)/360)*deg;
var r = 1;


var series_data = [];
for (var i = 0; i < i_data; i++) {
    var ideg = i * deg;
    var iangdeg = i*angdeg-90;
    var x = r * Math.cos(iangdeg);
    var y = r * Math.sin(iangdeg);
    console.log('====================',x,y);
    var x1 = 0,
        y1 = 0,
        x2 = 0,
        y2 = 0;
    if (x > 0) {
        x2 = x
    } else {
        x1 = Math.abs(x)
    }
    if (y > 0) {
        y2 = y
    } else {
        y1 = Math.abs(y)
    }
    // var x1 = r * Math.cos(iangdeg);
    // var y1 = r * Math.sin(iangdeg);
    // var x2 = r * Math.cos(iangdeg);
    // var y2 = r * Math.sin(iangdeg);
    console.log(x1, y1, x2, y2);
   
    series_data.push({
        stack: "fenshu",
        type: "bar",
        roundCap: true,
        barWidth: 40,
        label: {
            show: true,
            position: 'inside',
            formatter: (params) => {
                return 'aaa'
            }
        },
        data: [{
                value: i_data,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(x1, y1, x2, y2, [{
                                offset: 0,
                                color: "rgba(101,15,36,0)",
                            }, {
                                offset: 0.05,
                                color: "rgba(101,15,36,0)",
                            },
                            {
                                offset: 1,
                                color: "rgba(116,27,49,1)",
                            },
                        ]),
                    }
                },
            },
            {
                value: i_data,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(x1, y1, x2, y2, [{
                                offset: 0,
                                color: "rgba(14,63,95,0)",
                            }, {
                                offset: 0.05,
                                color: "rgba(14,63,95,0)",
                            },
                            {
                                offset: 1,
                                color: "rgba(20,73,107,1)",
                            },
                        ]),
                    }
                },
            },
        ],
        coordinateSystem: "polar",
        name: i + 'red',
        label: {
            show: true,
        },
    });

}


series_data.push({
    type: 'pie', //涟漪效果环
    zlevel: 20,
    silent: true,
    radius: ['45.9%', '46%'],
    hoverAnimation: false,
    // color: 'rgba(13,243,171,1)',
    color: '#fff',
    // animation:false,
    data: [1],
    labelLine: {
        normal: {
            show: false
        }
    },
    itemStyle: {
        normal: {
            color: 'rgba(13,243,171,0.1)',
            borderColor: 'rgba(13,243,171,0.01)',
        }
    }
});
series_data.push({
    type: 'pie',
    zlevel: 20,
    silent: true,
    radius: ['44.8%', '44.9%'],
    hoverAnimation: false,
    // color: 'rgba(13,243,171,1)',
    color: '#fff',
    // animation:false,
    data: [1],
    labelLine: {
        normal: {
            show: false
        }
    },
    itemStyle: {
        normal: {
            color: 'rgba(13,243,171,0.3)',
            borderColor: 'rgba(13,243,171,0.3)',
        }
    }
});
series_data.push({
    type: 'pie',
    zlevel: 20,
    silent: true,
    radius: ['43.7%', '43.8%'],
    hoverAnimation: false,
    // color: 'rgba(13,243,171,1)',
    color: '#fff',
    // animation:false,
    data: [1],
    labelLine: {
        normal: {
            show: false
        }
    },
    itemStyle: {
        normal: {
            color: 'rgba(13,243,171,0.5)',
            borderColor: 'rgba(13,243,171,0.5)',
        }
    }
});
series_data.push({
    type: 'pie',
    zlevel: 20,
    silent: true,
    radius: ['42.5%', '42.7%'],
    hoverAnimation: false,
    // color: 'rgba(13,243,171,1)',
    color: '#fff',
    // animation:false,
    data: [1],
    labelLine: {
        normal: {
            show: false
        }
    },
    itemStyle: {
        normal: {
            color: 'rgba(13,243,171,0.8)',
            borderColor: 'rgba(13,243,171,0.8)',
        }
    }
});
series_data.push({
    type: 'pie',
    zlevel: 20,
    silent: true,
    radius: ['41%', '41.5%'],
    hoverAnimation: false,
    // color: 'rgba(13,243,171,1)',
    color: '#fff',
    // animation:false,
    data: [1],
    labelLine: {
        normal: {
            show: false
        }
    },
    itemStyle: {
        normal: {
            color: 'rgba(13,243,171,1)',
            borderColor: 'rgba(13,243,171,1)',
        }
    }
});



series_data.push({
    type: 'pie',
    zlevel: 20,
    silent: true,
    radius: ['38%', '40%'],
    hoverAnimation: false,
    // color: 'rgba(13,243,171,1)',
    color: '#fff',
    // animation:false,
    data: [1],
    labelLine: {
        normal: {
            show: false
        }
    },
    itemStyle: {
        normal: {
            color: 'rgba(13,243,171,1)',
            borderColor: 'rgba(13,243,171,0.1)',
            borderWidth: 20,
            // shadowColor:'rgba(13,243,171,0.1)',
            // shadowBlur:50,
            // shadowOffsetX:10,
            // shadowOffsetY:50,
        }
    }
});



series_data.push({
    name: '中间环形图',
    type: 'pie',
    radius: ['0%', '30%'],
    avoidLabelOverlap: false,
    hoverAnimation: false,
    itemStyle: {
        normal: {
            color: 'rgba(13,243,171,0.5)',
            borderColor: 'rgba(13,243,171,1)',
            // color: {
            //     image: piePatternImg,
            //     repeat: 'no-repeat'
            // },
        }
    },
    label: {
        normal: {
            show: true,
            position: 'inside',
            rotate: true

        },
        emphasis: {
            show: false,
            textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
            }
        }
    },
    labelLine: {
        normal: {
            show: false
        }
    },
    data: [{
            value: 5,
            name: '直接访问'
        },
        {
            value: 5,
            name: '邮件营销'
        },
        {
            value: 5,
            name: '联盟广告'
        },
        {
            value: 5,
            name: '视频广告'
        },
        {
            value: 5,
            name: '搜索引擎'
        },
        {
            value: 5,
            name: '直接访问'
        },
        {
            value: 5,
            name: '邮件营销'
        },
        {
            value: 5,
            name: '联盟广告'
        },
        {
            value: 5,
            name: '视频广告'
        },
        {
            value: 5,
            name: '搜索引擎'
        },
        {
            value: 5,
            name: '直接访问'
        },
        {
            value: 5,
            name: '邮件营销'
        },

    ]
});



option = {
    backgroundColor: 'rgba(0,46,32,1)',
    angleAxis: {
        max: i_data * i_data,
        show: true,
        // startAngle: 0,
        axisLabel: {
            show: true,
        },
        axisTick: {
            show: true,
        },
    },
    radiusAxis: {
        type: "category",
        show: true,
        axisLabel: {
            show: true,
        },
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
    },
    polar: {
        radius: ["70%", "100%"],
        center: ["50%", "50%"],
    },
    series: series_data
};

function _pie1() {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {

        dataArr.push({
            name: (i + 1).toString(),
            value: 20,
            itemStyle: {
                normal: {
                    color: "rgba(88,142,197,0.4)",
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)"
                }
            }
        })

    }
    return dataArr

}

function _pie2() {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "rgba(88,142,197,0.5)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,1)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,1)"
                    }
                }
            })
        }

    }
    return dataArr

}


var timer;
var pie_index = 11;

function doing() {
    if (pie_index < 6) {
        pie_index = 11;
    }
    let option = myChart.getOption();
    console.log('pie_index:', pie_index);
    console.log('111111', option);
    console.log('111111', option.series[pie_index]);
    option.angleAxis[0].startAngle = option.angleAxis[0].startAngle + 1;
    for (var i = 11; i > 6; i--) {
        if (i == pie_index) {
            option.series[pie_index].itemStyle.opacity = 0.5;
        } else {
            option.series[i].itemStyle.opacity = 1;
        }

    }


    myChart.setOption(option);
    pie_index -= 1;

}

function startTimer() {

    // timer = setInterval(doing, 300);

}

setTimeout(startTimer, 500);