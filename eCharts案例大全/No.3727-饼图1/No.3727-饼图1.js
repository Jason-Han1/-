let color = ['#A468F3', '#2FB3FF', '#FFD42B'];
let chartData = [{
        name: "行政复议诉讼",
        value: 34,
    },
    {
        name: "诉转案",
        value: 286,
    },
    {
        name: "投诉举报",
        value: 26115,
    },
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
    if (i === 2) {
        console.log('v',sum)
        pieSeries.push({
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [90 - i * 22 + '%', 77 - i * 22 + '%'],
            center: ["50%", "55%"],
            label: {
                show: false
            },
            data: [{
                value: v.value-25160,
                name: v.name
            }, {
                value: sum - v.value,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)"
                }
            }]
        });
    } else {
        pieSeries.push({
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [90 - i * 22 + '%', 77 - i * 22 + '%'],
            center: ["50%", "55%"],
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
    }
    pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [90 - i * 22 + '%', 77 - i * 22 + '%'],
        center: ["50%", "55%"],
        label: {
            show: false
        },
        data: [{
            value: 7.5,
            itemStyle: {
                color: "#013159" //圆环颜色
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
                    padding: [0, 0]
                }
            }
        }
    });
})

option = {
    backgroundColor: 'black',
    title: {
        text: 26115,
        textStyle: {
            color: '#5EC8FF',
            fontSize: 16,
            align: 'center',
        },
        top: '50%',
        left: '40%'
    },
    color: color,
    grid: {
        top: '8%',
        bottom: '60%',
        left: "50%",
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
                return '{name|' + item.name + '}'
            },
            interval: 0,
            inside: true,
            textStyle: {
                rich: {
                    name: {
                        color: '#DDDDDD',
                        fontSize: 12,
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