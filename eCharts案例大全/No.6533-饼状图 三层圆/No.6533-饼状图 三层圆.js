
// 过滤掉 非0的数值
let resultList = [{
        "NAME": "未解除",
        "COUNT": 100
    },
    {
        "NAME": "已解除",
        "COUNT": 1
    },
] //后台只返回 数据部位0的数据
// 颜色数组
let colorList = ['rgba(230,0,18,1)', 'rgba(19,181,177,1)'];
let animateBgColor = "#09354d"
let noDataColor = "rgba(9,53,77,0.4)"
let listOut = [] //最外层数据
let listCenter = [] //中间层数据
let listAnimate = [] //动画层数据 
let legendState = true // 图例显示隐藏

let innerRadius = ["0", "30%"]; //内层半径
let centerRadius = ["40%", "68%"]; //中间层半径
let outRadius = ["68%", "72%"]; //最外层半径
let animateRadius = ["74%", "76%"]; //动画半径
let animateSplitNum = 4; //动画拆分数据
let animateState = true; //打开 关闭动画
let total = 0 //数据总数
let labelLineState = true
let labelLength = 10; //label长度
let labelLength2 = 20; //label长度
let legendData = []
for (let i in resultList) {
    total += resultList[i].COUNT
}

// 空白间隔
let placeHolderStyle = {
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
};
// 最外层label 样式
let rich = {
    white: {
        align: 'center',
        padding: [3, 0]
    }
};

let splitNum = 100 //拆分数目
if (resultList.length == 1) {
    splitNum = 10000000000
}

// 饼状图 数据
if (total == 0) {
    // 最外层 数值为0
    let aryOut0 = [{
        value: 0,
        name: "",
        itemStyle: {
            normal: {
                // borderWidth: 5,
                // shadowBlur: 20,
                // borderColor: color[i],
                // shadowColor: color[i],
                color: noDataColor
            }
        }
    }];
    listOut = [...listOut, ...aryOut0];
    listCenter = [...listCenter, ...aryOut0];

} else {
    for (let i in resultList) {
        legendData.push(resultList[i].NAME)
        // 最外层 数值为0
        let aryOut0 = [{
            value: resultList[i].COUNT,
            name: resultList[i].NAME,
            itemStyle: {
                normal: {
                    // borderWidth: 5,
                    // shadowBlur: 20,
                    // borderColor: color[i],
                    // shadowColor: color[i],
                    color: colorList[i]
                }
            }
        }];
        // 最外层 数值为不为0
        let aryOut1 = [{
                value: resultList[i].COUNT,
                name: resultList[i].NAME,
                itemStyle: {
                    normal: {
                        // borderWidth: 5,
                        // shadowBlur: 20,
                        // borderColor: color[i],
                        // shadowColor: color[i],
                        color: colorList[i]
                    }
                }
            },
            {
                value: total / splitNum,
                name: "",
                itemStyle: placeHolderStyle
            }
        ];

        // 最外层 数值为0
        let aryCenter0 = [{
            value: resultList[i].COUNT,
            name: resultList[i].NAME,
            itemStyle: {
                normal: {
                    // borderWidth: 5,
                    // shadowBlur: 20,
                    // borderColor: color[i],
                    // shadowColor: color[i],
                    color: colorList[i],
                    opacity: 0.2
                }
            }
        }];
        // 最外层 数值为不为0
        let aryCenter1 = [{
                value: resultList[i].COUNT,
                name: resultList[i].NAME,
                itemStyle: {
                    normal: {
                        // borderWidth: 5,
                        // shadowBlur: 20,
                        // borderColor: color[i],
                        // shadowColor: color[i],
                        color: colorList[i],
                        opacity: 0.2
                    }
                }
            },
            {
                value: total / splitNum,
                name: "",
                itemStyle: placeHolderStyle
            }
        ];

        if (resultList[i].COUNT == 0) {
            // 外层数据
            listOut = [...listOut, ...aryOut0];
            // // 中间层数据
            listCenter = [...listCenter, ...aryCenter0];
        } else {
            // 外层数据
            listOut = [...listOut, ...aryOut1];
            // 中间层数据
            listCenter = [...listCenter, ...aryCenter1];
        }

    }

}

// 动画部分 数据
for (let i = 0; i < animateSplitNum; i++) {
    listAnimate.push({
        value: 20,
        name: i,
        itemStyle: {
            normal: {
                color: animateBgColor
            }
        }
    }, {
        value: 1,
        name: '',
        itemStyle: placeHolderStyle
    })
}


// 最外层的label
let func = (params) => {
    let percent = ((params.value / total) * 100).toFixed(1)
    let name = params.name.replace(/\n/g, '')
    if (params.name !== '') {
        return name + params.value + '\n{white|' + percent + '%}'
    } else {
        return ''
    }
}



option = {
    backgroundColor: '#04243E',
    tooltip: {
        show: true,
        trigger: "item",
        formatter: e => {
            console.log(e)
            if (e.data.name == "" || e.seriesName == "最内层" ||e.seriesName == "动画部分" || total == 0) {
                return "";
            } else {
                let bgColor = "";
                resultList.map((item, index) => {
                    if (item.NAME == e.name) {
                        bgColor = colorList[index];
                    }
                });
                let percent = (e.value / total * 100)
                if(parseInt(percent) != parseFloat(percent)){
                    percent = percent.toFixed(2)
                }
                let marker = `<div style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${bgColor};'></div>`;
                let str = `${marker}${e.name}<br>${e.value}(${percent}%)`;
                return str;
            }
        }
    },
    legend: {
        show:legendState,
        orient: 'vertical',
        data: legendData,
        icon: 'circle',
        left: '5px',
        top: '10px',
        textStyle: {
            fontSize: 20,
            color: "#fff"
        }
    },
    series: [{
            name: '动画部分',
            type: 'pie',
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
            center: ['50%', '50%'],
            radius: animateRadius,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    }
                }
            },
            data: animateState ? listAnimate : [],
        },
        {
            name: '最外层',
            type: 'pie',
            clockWise: false,
            zlevel: 3,
            center: ['50%', '50%'],
            radius: outRadius,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: labelLineState,
                        position: 'outside',
                        formatter: func,
                        rich: rich
                    },
                    labelLine: {
                        length: labelLength,
                        length2: labelLength2,
                        show: labelLineState,
                    }
                }
            },
            data: listOut,
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return idx * 50;
            }
        },
        {
            name: '中间层',
            type: 'pie',
            clockWise: false,
            center: ['50%', '50%'],
            radius: centerRadius,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    }
                }
            },
            data: listCenter,
        },
        {
            name: '最内层',
            type: "pie",
            hoverAnimation: false,
            radius: innerRadius,
            center: ["50%", "50%"],

            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                // 总数
                value: total,
                name: "",
                label: {
                    normal: {
                        show: true,
                        position: "center",
                        color: "#fff",
                        formatter: params => {
                            return params.value;
                        },
                        fontSize: 28
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.RadialGradient(
                            0.5,
                            0.5,
                            0.99,
                            [{
                                    offset: 0,
                                    color: "rgb(0, 0, 0, 0)"
                                },
                                {
                                    offset: 1,
                                    color: "#d7eaf5"
                                }
                            ],
                            false
                        )
                    }
                }
            }]
        }
    ]
};

// 网站加载缓慢问题
setTimeout(loop, 1000);

function loop() {
    let option = myChart.getOption();
    option.series[0].startAngle = option.series[0].startAngle - 1;
    myChart.setOption(option);
    setTimeout(function() {
        window.requestAnimationFrame(loop);
    }, 50);
}