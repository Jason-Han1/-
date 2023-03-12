let colors = ['#00adff', '#ff5722'];
let yNameOne = '售出（kg）';
let yNameTwo = '比例（%）';
let xData = ['苹果', '香蕉', '橘子'];
let yData = {
    one: [5, 2, 7],
    two: [52, 39, 68],
};
let splitNumber = 5; // 分割段
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
    // console.log(min, max, interval);
    return min;
}
option = {
    backgroundColor:"#000a40",
    title: {
        text: 'title',
        top: '0',
        x: 'center',
        textStyle: { color: '#000', fontSize: '20', fontWeight: 'bold' },
    },
    color: colors,
    grid: {
        top: '7%',
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
        data: xData,
    },
    yAxis: [
        {
            name: yNameOne,
            type: 'value',
            position: 'left',
            min: 0,
            max: calMax(yData.one),
            splitNumber: splitNumber,
            interval:
                (calMax(yData.one) - (calMin(yData.one) > 0 ? 0 : calMin(yData.one))) / splitNumber,
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
            name: yNameTwo,
            type: 'value',
            position: 'right',
            min: 0,
            max: calMax(yData.two),
            splitNumber: splitNumber,
            interval:
                (calMax(yData.two) - (calMin(yData.two) < 0 ? calMin(yData.two) : 0)) / splitNumber,
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
            name: yNameOne,
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: {
                            //数值样式
                            color: colors[0],
                            fontSize: 12,
                            fontWeight: 400,
                        },
                    },
                },
            },
            data: yData.one,
        },
        {
            name: yNameTwo,
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: {
                            //数值样式
                            color: colors[1],
                            fontSize: 12,
                            fontWeight: 400,
                        },
                    },
                },
            },
            data: yData.two,
        },
    ],
};
