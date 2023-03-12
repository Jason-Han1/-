let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF'];
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
    },{
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
    },{
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
    },{
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
    },{
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
    }  
]
let chartData = [{
        name: "教学班规模",
        value: 13211,
    },
    {
        name: "专业课平均课堂规模",
        value: 42111,
    },
    {
        name: "开设全外语课程门数",
        value: 81711,
    },
    {
        name: "开设双语课程门数",
        value: 121711,
    },
    {
        name: "开设课程总学时",
        value: 121711,
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

function getRadius(i){
    return [67 - i * 12 + '%', 60 - i * 12 + '%']
}

// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '学历',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: getRadius(i),
        center: ["50%", "50%"],
        itemStyle:{
            color:colorList[i]  
        },
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
    color: color,
    grid: {
        top: '15%',
        bottom: '54%',
        left: "50%",
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
                return '{name|'+ item.name +'-}{percent|'+item.percent+'}'
            },
            interval: 0,
            inside: false,
            textStyle: {
                color: "#333",
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
                    percent:{
                        color: 'rgba(202, 238, 255, 1)',
                        fontSize: 14,
                    },
                    value: {
                        color: '#333',
                        fontSize: 16,
                        fontWeight: 500,
                        padding: [0, 0, 0, 20]
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