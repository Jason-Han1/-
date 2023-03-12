let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
let color = ['#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4'];
let chartData = [{
        name: "农       界",
        value: 1865,
    },
    {
        name: "苦       力",
        value: 1066,
    }, {
        name: "商       界",
        value: 676,
    }, {
        name: "未       详",
        value: 664,
    }, {
        name: "工       界",
        value: 608,
    }, {
        name: "无       业",
        value: 353,
    }, {
        name: "防疫人员",
        value: 73,
    },
    {
        name: "绅       学",
        value: 62,
    },
    {
        name: "军       人",
        value: 33,
    }
];
let arrName = [];
let arrValue = [];
let sum = 0;
let pieSeries = [],
    lineYAxis = [];

// 数据处理
chartData.forEach((v, i) => {
    arrName.push(v.name);
    arrValue.push(v.value);
    sum = sum + v.value;
})

// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '',
        type: 'pie',
        clockWise: false,
        hoverAnimation: true,
        radius: [80 - i * 7 + '%', 75 - i * 7 + '%'],
        center: ["23%", "45%"],
        label: {
            show: false
        },
        data: [{
            value: v.value,
            name: v.name
        }, {
            value: sum - v.value,
            name: '',
            itemStyle: {
                color: "rgba(0,0,0,0)"
            },
            tooltip: {
                show: false
            }
        }]
    });
    pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [79 - i * 7 + '%', 76 - i * 7 + '%'],
        center: ["23%", "45%"],
        label: {
            show: false
        },
        data: [{
            value: 2.5,
            itemStyle: {
                color: 'rgba(0,0,0,0.1)'
            },
            tooltip: {
                show: false
            }
        }, {
            value: 2.5,
            name: '',
            itemStyle: {
                color: "rgba(0,0,0,0)"
            },
            tooltip: {
                show: false
            },
        }]
    });

    v.percent = (v.value / sum * 100).toFixed(1) + "%";
    lineYAxis.push({
        value: i,
        textStyle: {
            rich: {
                circle: {
                    color: color[i],
                    padding: [0, 5]
                }
            }
        }
    });
})


option = {
    backgroundColor: '#363636',
    title: [{
        text: '奉天各属疫毙人数职业比较',
        subtext: '数据来源：《东三省疫事报告书》奉天防疫总局，1911年',
        textAlign: "center",
        left: "32%",
        bottom: '3%',
        textStyle: {
            color: '#fff',
            fontSize: 25,
        },
        subtextStyle: {
            fontSize: 15,
        }
    }, {
        text: '备注',
        subtext: '一、奉天全省统辖 51 属，右表仅列有疫之 28 属，余则从略。\n\n二、右表绅学一栏，统士绅学生各项上流社会而言之。\n\n三、右表既就职业上区分疫死之多寡，故妇女疫毙者未为列入。\n\n       统计男子死者 5400 人，妇女死者 1558 人，共 6958 人。\n\n       就此表观之，农及苦力占最多数，其次工商无业者占 1/20 ，\n\n       防疫人员居 1/100 ，绅学军人占最少数。\n\n       若以男女比较，则女占 1/4 而弱，男占 3/4 而强。',
        //textAlign: "center",
        left: "27%",
        bottom: '18%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
        padding: 18,
        textStyle: {
            color: '#fff',
            fontSize: 20,
        },
        subtextStyle: {
            fontSize: 15,
        }
    }],
    tooltip: {
        show: true,
        trigger: "item",
        formatter: "{b}<br>{c}人 ({d}%)",
        fontSize: 18
    },
    color: color,
    grid: {
        top: '4.5%',
        bottom: '64%',
        left: "27%",
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function(params) {
                let item = chartData[params];
                console.log(item)
                return '{line|}{circle|●}{name|' + ' ' + item.name + ' ' + '}{bd||}{percent|' + ' ' + item.percent + ' ' + '}{value|' + item.value + '}'
            },
            interval: 0,
            inside: true,
            textStyle: {
                color: "#333",
                fontSize: 14,
                rich: {
                    line: {
                        width: 200,
                        height: 3,
                        backgroundColor: {
                            image: dashedPic
                        }
                    },
                    name: {
                        color: 'white',
                        fontSize: 16,
                    },
                    bd: {
                        color: 'white',
                        padding: [0, 5],
                        fontSize: 15,
                    },
                    percent: {
                        color: 'white',
                        fontSize: 16,
                    },
                    value: {
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 500,
                        padding: [0, 0, 0, 20]
                    },
                }
            },
            show: true
        },
        data: lineYAxis
    }],
    xAxis: [{
        show: false
    }],
    series: pieSeries
};