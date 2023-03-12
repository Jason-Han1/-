let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF', '#0034ff'];
let chartData = [{
        name: "早1发",
        value: 40083,
        unit: '列'
    },
    {
        name: "正点发",
        value: 33974,
        unit: '列'
    },
    {
        name: "晚2发",
        value: 15400,
        unit: '列'
    },
    {
        name: "早点",
        value: 11021,
        unit: '列'
    },
    {
        name: "晚点",
        value: 30696,
        unit: '列'
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
        name: '沪昆线到达晚点情况',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [75 - i * 15 + '%', 67 - i * 15 + '%'],
        center: ["40%", "50%"],
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
        radius: [75 - i * 15 + '%',67 - i * 15 + '%'],
        center: ["40%", "50%"],
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
    backgroundColor: '#fff',
    color: color,
    grid: {
        top: '12%',
        bottom: '54%',
        left: "40%",
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
                return '{line|}{circle|●}{name|'+ item.name +'}{bd||}{percent|'+item.percent+'}{value|'+ item.value+'}{unit|列}'
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
                        color: '#666',
                        fontSize: 14,
                    },
                    bd: {
                        color: '#ccc',
                        padding: [0, 5],
                        fontSize: 14,
                    },
                    percent:{
                        color: '#333',
                        fontSize: 14,
                    },
                    value: {
                        color: '#333',
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