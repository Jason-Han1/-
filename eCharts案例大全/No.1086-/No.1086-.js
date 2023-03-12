let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
let color = ['#ffc300', '#00e473'];
let chartData = [
    {
        name: "高中",
        value: 42111,
        unit: '元'
    },
    {
        name: "初中及以下",
        value: 81711,
        unit: '元'
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
        name: '学历',
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
    graphic: {
          elements: [{
            type: 'image',
            style: {
                image: dashedPic,
                width: 150,
                height: 150
            },
            left: '20%',
            top: 'center'
          }]
        },
    color: color,
    grid: {
        top: '0%',
        bottom: '4%',
        left: "0%",
        containLabel: false
    },
    series: pieSeries
};