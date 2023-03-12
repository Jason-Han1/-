let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF'];
let nameList = [2016, 2017, 2018, 2019, 2020];
let valueList = [51.77, 62.33, 66.28, 73.43, 79.15];
let colorList = [
    {
        type: 'linear',
        // 两端添加透明度,模拟两端线收缩
        colorStops: [
            {
                offset: 0,
                color: '#008AFF', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#21F7FF',
            },
        ],
    },
    {
        type: 'linear',
        // 两端添加透明度,模拟两端线收缩
        colorStops: [
            {
                offset: 0,
                color: '#06CA70', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#43F2B6',
            },
        ],
    },
    {
        type: 'linear',
        // 两端添加透明度,模拟两端线收缩
        colorStops: [
            {
                offset: 0,
                color: '#867DFF', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#A59EFF',
            },
        ],
    },
    {
        type: 'linear',
        // 两端添加透明度,模拟两端线收缩
        colorStops: [
            {
                offset: 0,
                color: '#4186FF', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#7BB2FF',
            },
        ],
    },
    {
        type: 'linear',
        // 两端添加透明度,模拟两端线收缩
        colorStops: [
            {
                offset: 0,
                color: '#FFA531', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#FFC949',
            },
        ],
    },
];
// let chartData = [{
//         name: "2020年",
//         value: 13211,
//     },
//     {
//         name: "2019年",
//         value: 42111,
//     },
//     {
//         name: "2018年",
//         value: 81711,
//     },
//     {
//         name: "2017年",
//         value: 121711,
//     },
//     {
//         name: "2016年",
//         value: 121711,
//     }
// ];
let chartData = [];
nameList.map((item, idx) => {
    chartData.push({
        name: item + '年',
        value: valueList[idx],
    });
});
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
});

function getRadius(i) {
    return [67 - i * 12 + '%', 59 - i * 12 + '%'];
}

// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '生均占地面积（平方米）',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: getRadius(i),
        center: ['50%', '50%'],
        itemStyle: {
            color: colorList[i],
        },
        label: {
            show: false,
        },
        data: [
            {
                value: v.value,
                name: v.name,
            },
            {
                value: sum - v.value,
                name: 'no',
                itemStyle: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        ],
    });
    // pieSeries.push({
    //     name: '',
    //     type: 'pie',
    //     silent: true,
    //     z: 1,
    //     clockWise: true, //顺时加载
    //     hoverAnimation: false, //鼠标移入变大
    //     radius: getRadius(i),
    //     center: ["50%", "50%"],
    //     label: {
    //         show: false
    //     },
    //     data: [{
    //         value: 7.5,
    //         itemStyle: {
    //             color: "#E3F0FF"
    //         }
    //     }, {
    //         value: 2.5,
    //         name: '',
    //         itemStyle: {
    //             color: "rgba(0,0,0,0)"
    //         }
    //     }]
    // });
    v.percent = ((v.value / sum) * 100).toFixed(2);
    lineYAxis.push({
        value: i,
        textStyle: {
            rich: {
                circle: {
                    color: color[i],
                    padding: [0, 5],
                },
            },
        },
    });
});

console.log('pieSeries', pieSeries);

option = {
    tooltip: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        trigger: 'item',
        formatter: (item) => {
            console.log(item);
            if (item['name'] == 'no') {
                return;
            } else {
                return `<div style='width:289px;height:107px;background:url("data:image/png;base64,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") no-repeat center center'>
                    <div style='color:#CAEEFF;font-size:14px;padding-left:25px;padding-top:30px'>${item.marker}${item.name}</div> 
                    <div style='color:#31C2FF;font-size:16px;padding-left:25px;'>${item.seriesName}：${item.value}</div>
                  </div>`;
            }
        },
        extraCssText:'box-shadow: none;'
    },
    color: color,
    grid: {
        top: '15%',
        bottom: '54%',
        left: '50%',
        containLabel: false,
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: function (params) {
                    let item = chartData[params];
                    console.log(item);
                    return '{name|' + item.name + '-}{percent|' + item.value + '}';
                },
                interval: 0,
                inside: false,
                textStyle: {
                    color: '#333',
                    fontSize: 14,
                    rich: {
                        name: {
                            color: 'rgba(202, 238, 255, 1)',
                            fontSize: 14,
                        },
                        bd: {
                            color: '#ccc',
                            padding: [0, 5],
                            fontSize: 14,
                        },
                        percent: {
                            color: 'rgba(202, 238, 255, 1)',
                            fontSize: 14,
                        },
                        value: {
                            color: '#333',
                            fontSize: 16,
                            fontWeight: 500,
                            padding: [0, 0, 0, 20],
                        },
                    },
                },
                show: true,
            },
            data: lineYAxis,
        },
    ],
    xAxis: [
        {
            show: false,
        },
    ],
    series: pieSeries,
};
