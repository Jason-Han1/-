var data = [
    {
        name: '足球',
        value: 23,
    },
    {
        name: '篮球',
        value: 18,
    },
    {
        name: '兵乓球',
        value: 15,
    },
    {
        name: '羽毛球',
        value: 11,
    },
    {
        name: '排球',
        value: 6,
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
    grid: {
        top: '10%',
        bottom: '10%',
        right: '10%',
        left: '10%',
        containLabel: true,
    },
    xAxis: {
        show: false,
    },
    yAxis: [
        {
            inverse: true,
            data: getArrByKey(data, 'name'),
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        {
            inverse: true,
            data: getArrByKey(data, 'name'),
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: ['#FD7F0E'],
                align: 'right',
                verticalAlign: 'bottom',
                lineHeight: 20,
                fontSize: 16,
                formatter: function (value, index) {
                    console.log(data, 'echarts');
                    return data[index].value;
                },
            },
        },
    ],
    series: [
        {
            // name: 'XXX',
            type: 'pictorialBar',
            symbolSize: [0, 0],
            data: getSymbolData(data),
        },
        {
            name: '条',
            type: 'bar',
            showBackground: true,
            barBorderRadius: 10,
            yAxisIndex: 0,
            data: data,
            barWidth: 5,
            itemStyle: {
                normal: {
                    color: '#FD7F0E',
                    barBorderRadius: 2,
                },
            },
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-20px'],
                    textStyle: {
                        fontSize: 14,
                    },
                    formatter: function (a, b) {
                        return a.name;
                    },
                },
            },
        },
    ],
};
