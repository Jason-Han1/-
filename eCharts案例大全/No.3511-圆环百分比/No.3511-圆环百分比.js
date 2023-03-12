var getxsbl = [0, 45, 42, 40, 33]; //党员比例
var getbsbl = [0, 55, 58, 60, 67]; //非党员比例
var getjslb = ['', '2016级', '2017级', '2018级', '2019级']; //年份

option = {
    tooltip: {
        trigger: 'item',
        formatter: " {b}<br/>{a}占比：{c}%",
    },
    legend: {
        type: "scroll",
        height: '88%',
        right: '20',
        top: '10',
        itemWidth: 12,
        itemHeight: 12,
        data: ['党员', '非党员'],
        color: '#fff',
        textStyle: {
            color: '#666',
        }
    },
    polar: {
        center: ['50%', '70%'],
        radius: '90%' //图形大小
    },
    angleAxis: {
        type: 'value',
        startAngle: 180,
        min: 0,
        max: 200,
        splitNumber: 15, //坐标轴分割段数
        axisLine: { //坐标轴轴线设置
            lineStyle: {
                color: 'transparent',
            }
        },
        axisTick: { //坐标轴刻度设置
            show: false
        },
        splitLine: { //分割线设置
            show: false,
        },
        axisLabel: { //刻度标签设置
            margin: 0,
            formatter: function(value) {
                if (value <= 100) {
                    return value + '%'
                } else {
                    return ''
                }
            },
            textStyle: {
                color: '#999999'
            }
        },
    },
    radiusAxis: {
        type: 'category',
        data: getjslb,
        axisLine: { //坐标轴轴线设置
            show: false,
        },
        axisTick: { //坐标轴刻度设置
            show: false
        },
        axisLabel: { //刻度标签设置
            margin: 5, //刻度与坐标轴之间的距离
            //interval: 0,
            formatter: function(value) {
                return value.split("").join("\n");
            },
            textStyle: {
                color: '#666666',
                fontSize: 13
            }
        }
    },
    color: ['#FFBB4E', "#4D96FF" ],
    series: [{
            name: '党员',
            type: 'bar',
            stack: '1',//堆名
            coordinateSystem: "polar",
            barWidth: 17, //宽度
            data: getxsbl
        },
        {
            name: '非党员',
            type: 'bar',
            stack: '1',//堆名
            coordinateSystem: "polar",
            barWidth: 17, //宽度
            data: getbsbl
        }
    ]
};
return option; 