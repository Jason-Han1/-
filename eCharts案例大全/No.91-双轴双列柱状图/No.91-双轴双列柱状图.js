let echartsData = {
    echartsTitle: '',
    xData: ['2020', '2021'],
    yNameOne: '2020',
    yNameTwo: '2021',
    yData: {
        one: [120, 185],
        two: [15,36],
    },
};
let colors = ['#00adff', '#ff9800'];
let splitNumber = 5; // 分割段数
//计算最大值
function calMax(arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let interval = (max - min) / splitNumber; // 平均值
    max = Math.ceil(max + interval); // 向上取整
    return max;
}

//计算最小值
function calMin(arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let interval = (max - min) / splitNumber; // 平均值
    min = min > 0 ? min : Math.floor(min - interval); // 向下取整
    return min;
}
var option = {
    backgroundColor:"#000a3f",
    title: {
        text: echartsData.echartsTitle,
        top: '0',
        x: 'center',
        textStyle: { color: '#fff', fontSize: '20', fontWeight: 'bold' },
    },
    color: colors,
    grid: {
        top: '10%',
        bottom: '5%',
        left: '80',
        right: '80',
    },
    legend: {
        top: '2%',
        textStyle: {
            color: '#00ffff',
            margin: '10',
        },
    },
    toolbox: {
        feature: {
            saveAsImage: {
                backgroundColor: '#243a55',
            },
        },
        iconStyle: {
            borderColor: '#fff',
            fontSize: '22px',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
    },
    xAxis: {
        type: 'category',
        axisTick: { show: false },
        axisLabel: {
            textStyle: { color: '#fff', fontSize: 14 },
            rotate: 0,//倾斜度
        },
        axisLine: {
            show: true,
            lineStyle: { color: '#fff' },
        },
        data: echartsData.xData,
    },
    yAxis: [
        {
            name: echartsData.yNameOne,
            type: 'value',
            position: 'left',
            min: calMin(echartsData.yData.one) > 0 ? 0 : calMin(echartsData.yData.one),
            max: calMax(echartsData.yData.one),
            splitNumber: splitNumber,
            interval:
                (calMax(echartsData.yData.one) -
                    (calMin(echartsData.yData.one) > 0 ? 0 : calMin(echartsData.yData.one))) /
                splitNumber,
            splitLine: {
                lineStyle: { type: 'dashed', color: '#707070' },
            },
            axisLabel: {
                // formatter: '{value}mm',
                formatter: function (value, index) {
                    return (value + '').indexOf('.') != -1 ? value.toFixed(1) : value;
                },
                textStyle: { color: colors[0], fontSize: 14 },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[0],
                    width: 2,
                },
            },
            axisTick: { show: false },
        },
        {
            name: echartsData.yNameTwo,
            type: 'value',
            position: 'right',
            min: calMin(echartsData.yData.two) < 0 ? calMin(echartsData.yData.two) : 0,
            max: calMax(echartsData.yData.two),
            splitNumber: splitNumber,
            interval:
                (calMax(echartsData.yData.two) -
                    (calMin(echartsData.yData.two) < 0 ? calMin(echartsData.yData.two) : 0)) /
                splitNumber,
            splitLine: { show: false },
            axisLabel: {
                // formatter: '{value}°C',
                formatter: function (value, index) {
                    return (value + '').indexOf('.') != -1 ? value.toFixed(1) : value;
                    //return parseInt(value) + '%';
                },
                textStyle: { color: colors[1], fontSize: 14 },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[1],
                    width: 2,
                },
            },
            axisTick: { show: false },
        },
    ],
    series: [
        {
            name: echartsData.yNameOne,
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: {
                            //数值样式
                            color: '#00adff',
                            fontSize: 12,
                            fontWeight: 400,
                        },
                    },
                },
            },
            data: echartsData.yData.one,
        },
        {
            name: echartsData.yNameTwo,
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '30%',
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: {
                            //数值样式
                            color: '#fff700',
                            fontSize: 12,
                            fontWeight: 400,
                        },
                    },
                },
            },
            data: echartsData.yData.two,
        },
    ],
};
