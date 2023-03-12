var getxsbl = [0, 26.5, 32.5, 27.5, 43]; //学士比例
var getssbl = [0, 42.5, 47.5, 42.5, 47]; //硕士比例
var getbsbl = [0, 30, 20, 30, 10]; //博士比例
var getjslb = ['', '校内专任', '校内兼课', '校外兼职', '校外兼课']; //教师类别

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
        data: ['学士', '硕士', '博士'],
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
            interval: 0,
            formatter: function(value) {
                return value.split("").join("\n");
            },
            textStyle: {
                color: '#666666',
                fontSize: 13
            }
        }
    },
    color: ["#4E7BFE", "#26D080", '#F6C137'],
    series: [{
            name: '学士',
            type: 'bar',
            stack: '学位',
            coordinateSystem: "polar",
            barWidth: 17, //宽度
            data: getxsbl
        },
        {
            name: '硕士',
            type: 'bar',
            stack: '学位',
            coordinateSystem: "polar",
            barWidth: 17, //宽度
            data: getssbl
        },
        {
            name: '博士',
            type: 'bar',
            stack: '学位',
            coordinateSystem: "polar",
            barWidth: 17, //宽度
            data: getbsbl
        }
    ]
};