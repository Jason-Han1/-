// let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
let color = ['#00B050', '#92D050', '#f5d03a', '#f5853a', '#ff0000'];
let chartData = [
    {
        name: "3-5年",
        value: 57
    },
    {
        name: "1-3年",
        value: 22
    },{
        name: "1年以下",
        value: 15
    },
    {
        name: "10年",
        value: 24
    },
    {
        name: "5-10年",
        value: 24
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
    // console.log(v,i, v.value,sum - v.value)
    let chartnewData = chartData.slice(0, i)

    let newValue = chartnewData.reduce((a, b) => {
        return a + b.value
    }, 0)
    v.startAngle = newValue / sum * 360
    // console.log("1111",v.startAngle)
    pieSeries.push({
        name: '学历',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [60 - i * 12 + '%', 58 - i * 12 + '%'],
        center: ["30%", "50%"],
        label: {
            show: false
        },
        startAngle: v.startAngle + 90,
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
        radius: [60 - i * 12 + '%', 59 - i * 12 + '%'],
        // radius: ['20%', '50%'],
        center: ["30%", "50%"],
        label: {
            show: false
        },
        data: [{
                value: sum,
                itemStyle: {
                    color: "#013561" //圆环颜色
                }
            },
            {
                value: 0,
                name: '',
                itemStyle: {
                    color: "red"
                }
            }
        ]
    });
    v.percent = (v.value / sum * 100).toFixed(0) + "%";
    v.percent1 = v.value;
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
    backgroundColor: '#000',
    color: color,
    legend: {
        itemWidth: 14,
        itemHeight: 8,
        itemGap: 32,
        show: true,
        // icon: "circle",
        // top: "center",
        left: "72%",
        top: "18%",
        formatter: (name) => {
            return (
                // {name|' + item.name + '}
                "{name|" + name + "} {percent|" + chartData.find((item) => {
                    return item.name == name
                }).percent + "} {percent|" + chartData.find((item) => {
                    return item.name == name
                }).percent1 + "}"
            );
        },
        textStyle: {
            color: "#beceff", //元字颜色
            fontSize: 14,
            rich: {
                name: {
                    color: '#a6acba',
                    fontSize: 20,
                },
                percent: {
                    color: '#FFFFFF',
                    fontSize: 20,
                }
            }
        },
    },
    grid: {
        top: '15%',
        bottom: '15%',
        left: "15%",
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
            show: false
        },
        data: lineYAxis
    }],
    xAxis: [{
        show: false
    }],
    series: pieSeries
};