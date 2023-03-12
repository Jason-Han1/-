var data = [{
    "name": "短信",
    "value": 18
}, {
    "name": "客服",
    "value": 78
}, {
    "name": "外呼",
    "value": 96
}, {
    "name": "网厅",
    "value": 69
}].sort(function(a, b) {
    return b.value - a.value
})
var max = 100;


//圆环的颜色
var colorList = ['rgb(73, 193, 210)', 'rgb(103, 176, 255)', 'rgb(235, 149, 76)', 'rgb(0, 175, 109)', ' rgb(239, 147, 134)'],
    colorList2 = ['rgb(208,228,235)', 'rgba(103, 176, 255,0.2)', 'rgba(235, 149, 76,0.2)', 'rgba(0, 175, 109,0.2)', ' rgba(239, 147, 134,0.2)'];
// 单独输入值 控制标线显示位置
var dataList = [30, 80, 130, 180];
//控制线的颜色
var labelLineColorList = ['rgb(98,174,250)', 'rgb(98,174,250)', 'rgb(239,148,77)', 'rgb(239,148,77)'];
//length1、length2的长度
var pieLenggth1 = [40,40,60,60],
    pieLenggth2 = [60,60,60,60];

function getData(data) {
    let res = {
        series: [],
        yAxis: []
    };
    //这个意识整个pie图的青色背景
    res.series.push({
            name: '外层背景',
            type: 'pie',
            zlevel: 0 ,
            z: 0 ,
            clockWise: false,
            hoverAnimation: false,
            radius: ['0%', '35%'],
            center: ["50%", "50%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
            },
            data: [{
                value: 100,
                name: '00',
                itemStyle: {
                    color: 'rgb(244,249,252)'
                },
                emphasis:
                {
                   itemStyle: {
                    color: 'rgb(244,249,252)'
                }
                }
            }]
        }

    );
    for (let i = 0; i < data.length; i++) {
        res.series.push({
                name: i,
                type: 'pie',
                // zlevel: 1 ,
                // z: 1 ,
                clockWise: false,
                hoverAnimation: false,
                radius: [28 - i * 5 + '%', 25 - i * 5 + '%'],
                center: ["50%", "50%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    }
                },
                data: [{
                    value: data[i].value,
                    name: data[i].name,
                    itemStyle: {

                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 1,
                                color: colorList[i]
                            },
                            {
                                offset: 0,
                                color: colorList2[i]
                            }
                        ])
                    },
                }, {
                    value: max - data[i].value,
                    name: '',
                    itemStyle: {
                        color: "#ccc",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            }, {
                name: i,
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [28 - i * 5 + '%', 25 - i * 5 + '%'],
                center: ["50%", "50%"],
                label: {
                    show: false
                },
                tooltip: {
                    show: false
                },
                data: [{
                    value: dataList[i],
                    name: data[i].name,
                    labelLine: {
                        show: true,
                        length: pieLenggth1[i],
                        length2: pieLenggth2[i],
                        lineStyle: {
                            color: labelLineColorList[i]
                        }
                    },
                    label: {
                        color: "#000",
                        fontSize: 14,
                        show: true,
                        position: 'outside',
                        formatter: '客户满意度\n{a|'+data[i].value+'%}{b|个}',
                        rich: {
                            a: {
                                color: "#3a3a3a",
                                fontSize: 20,
                                lineHeight: 30
                            },
                            b: {
                                color: "green",
                                fontSize: 20,
                                fontWeight:'bold',
                                lineHeight: 30
                            }
                        }
                    },
                    itemStyle: {
                        color: 'transparent'
                    },
                }, {
                    value: max - dataList[i],
                    name: '',
                    itemStyle: {
                        color: "transparent",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            }

        );
    }
    
    return res;
}

var optionData = getData(data)
option = {
    backgroundColor: '#fff',
    legend: {
        show: false
    },
    color: ['rgb(14, 109, 233)', 'rgb(172, 78, 211)', 'rgb(230, 175, 8)', 'rgb(0, 175, 109)', ' rgb(211, 78, 106)'],
    grid: {
        top: '0',
        left: "50%",
        containLabel: false
    },
    series: optionData.series
}