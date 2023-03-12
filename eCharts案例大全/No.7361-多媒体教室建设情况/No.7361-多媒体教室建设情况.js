let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF'];
let chartData = [{
        name: "建设中",
        value: 132,
        unit: '间'
    },
    {
        name: "完成建设",
        value: 421,
        unit: '间'
    },
    {
        name: "投入使用",
        value: 817,
        unit: '间'
    },
    {
        name: "筹建中",
        value: 121,
        unit: '间'
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
        name: '多媒体教室',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
        center: ["30%", "50%"],
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
        radius: [65 - i * 15 + '%',57 - i * 15 + '%'],
        center: ["30%", "50%"],
        label: {
            show: false
        },
        data: [{
            value: 7.5,
            itemStyle: {
                color: "#E3F0FF"
            }
        }, {
            value: 2.5,
            name: '',
            itemStyle: {
                color: "rgba(0,0,0,0)"
            }
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
  backgroundColor: '#0A2E5D',
   title: {
        text: '广州市天河区多媒体教室建设情况',
       
        textAlign: "center",
        left: "49%",
        textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: '400'
        }
    },
    color: color,
    grid: {
        top: '15%',
        bottom: '54%',
        left: "30%",
        containLabel: false
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
                return '{line|}{circle|●}{name|'+ item.name +'}{bd||}{percent|'+item.percent+'}{value|'+ item.value+'}{unit|元}'
            },
            interval: 0,
            inside: true,
            textStyle: {
                color: "#333",
                fontSize: 14,
                rich: {
                    line: {
                        width: 170,
                        height: 10,
                        backgroundColor: {image: dashedPic}
                    },
                    name: {
                        color: 'white',
                        fontSize: 14,
                    },
                    bd: {
                        color: 'white',
                        padding: [0, 5],
                        fontSize: 14,
                    },
                    percent:{
                        color: 'white',
                        fontSize: 14,
                    },
                    value: {
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 500,
                        padding: [0, 0, 0, 20]
                    },
                    unit: {
                        fontSize: 14
                    }
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