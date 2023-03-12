var dataStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
        shadowBlur: 40,
        borderWidth: 10,
        shadowColor: 'rgba(0, 0, 0, 0)', //边框阴影
    },
};
var placeHolderStyle = {
    normal: {
        color: '#043958',
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
    },
    emphasis: {
        color: '#043958',
    },
};
var data = [
    {
        name: '标题1',
        value: 10,
        sum: 10,
    },
    {
        name: '标题2',
        value: 20,
        sum: 10,
    },
    {
        name: '标题3',
        value: 23,
        sum: 50,
    },
];
var getArrByKey = (data, k) => {
    let key = k || 'value';
    let res = [];
    if (data) {
        data.forEach(function (t) {
            res.push(t[key]);
        });
    }
    return res;
};
var getSymbolData = (data) => {
    let arr = [];
    for (var i = 0; i < data.length; i++) {
        arr.push({
            value: data[i].value,
            symbolPosition: 'end',
        });
    }
    return arr;
};
option = {
    backgroundColor: '#081c47',
    title: [
        //文本数值显示
        {
            text: '标题1',
            x: '22%',
            y: '13%',
            textStyle: {
                fontSize: 20,
                color: '#ffffff',
            },
        },
        {
            text: '43%',
            x: '26%',
            y: '22%',
            textStyle: {
                fontSize: 20,
                color: '#29EEF3',
            },
        },
        {
            text: '标题2',
            x: '52%',
            y: '13%',
            textStyle: {
                fontSize: 20,
                color: '#ffffff',
            },
        },
        {
            text: '43%',
            x: '56%',
            y: '22%',
            textStyle: {
                fontSize: 20,
                color: '#29EEF3',
            },
        },
    ],
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: '{b} : <br/>{d}%',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    grid: [
        {
            left: '20%',
            right: '17%', // 网格部分
            top: '41%',
            bottom: '5%',
            containLabel: true,
        },
    ],
    xAxis: { show: false },
    yAxis: [
        {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: getArrByKey(data, 'name'),
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
            axisLabel: { show: false },
        },
        {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: getArrByKey(data, 'name'),
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                interval: 0,
                shadowOffsetX: '-20px',
                color: ['#fff'],
                align: 'right',
                margin: 50,
                lineHeight: 50,
                fontSize: 13,
                formatter: function (value, index) {
                    return (data[index].value / data[index].sum) * 100 + '%';
                },
            },
        },
    ],
    series: [
        //横向柱形图
        {
            name: 'XXX',
            type: 'pictorialBar',
            symbolSize: [3, 3],
            symbolOffset: [-3, 0],
            symbol: 'emptyCircle',
            z: 13,
            itemStyle: {
                normal: {
                    color: '#fdfdfd',
                },
            },
            data: getSymbolData(data),
        },
        {
            name: 'XXX',
            type: 'pictorialBar',
            symbolSize: [7, 7],
            symbolOffset: [-1, 0],
            symbol: 'emptyCircle',
            z: 12,
            itemStyle: {
                normal: {
                    color: '#a1ffda',
                },
            },
            data: getSymbolData(data),
        },
{
            name: 'XXX',
            type: 'pictorialBar',
            symbolSize: [10, 10],
            // symbolOffset: [2, 0],
            symbol: 'emptyCircle',
            z: 11,
            itemStyle: {
                normal: {
                    color: '#16f8f7',
                },
            },
            data: getSymbolData(data),
        },
        {
            name: '条',
            type: 'bar',
            showBackground: true,
            barBorderRadius: 30,
            yAxisIndex: 0,
            data: data,
            barWidth: 5,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [
                            { offset: 0, color: '#583cad' },
                            { offset: 0.2, color: '#474abd' },
                            { offset: 0.4, color: '#3757d2' },
                            { offset: 0.6, color: '#1e69e6' },
                            { offset: 0.6, color: '#1573ed' },
                            { offset: 1, color: '#0b77f3' },
                        ],
                        false
                    ),
                    barBorderRadius: 10,
                },
                barBorderRadius: 4,
            },
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-25'],
                    textStyle: {
                        fontSize: 13,
                    },
                    formatter: function (a, b) {
                        return a.name;
                    },
                },
            },
        },
    ],
};
