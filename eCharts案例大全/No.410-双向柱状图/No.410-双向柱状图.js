var data = [
    {
        name: 'A镇',
        value1: 4,
        value2: -4,
    },
    {
        name: 'B镇',
        value1: 9,
        value2: -9,
    },
    {
        name: 'C镇',
        value1: 20,
        value2: -20,
    },
    {
        name: 'D镇',
        value1: 32,
        value2: -32,
    },
    {
        name: 'E镇',
        value1: 13,
        value2: -13,
    },
    {
        name: 'F镇',
        value1: 43,
        value2: -43,
    },
    {
        name: 'G镇',
        value1: 62,
        value2: -62,
    },
    {
        name: 'H镇',
        value1: 4,
        value2: -4,
    },
    {
        name: 'I镇',
        value1: 13,
        value2: -13,
    },
    {
        name: 'J镇',
        value1: 70,
        value2: -70,
    },
];
var xData = [],
    list1 = [],
    list2 = [];
data.forEach(({ name, value1, value2 }) => {
    xData.push(name);
    list1.push(value1);
    list2.push(value2);
});

option = {
    backgroundColor: '#fff',
    grid: [
        {
            show: false,
            left: '120px',
            top: '10%',
            bottom: '55%',
            width: '80%',
        },
        {
            show: false,
            left: '120px',
            top: '50%',
            bottom: '55%',
            width: '80%',
        },
        {
            show: false,
            left: '120px',
            top: '55%',
            bottom: '10%',
            width: '80%',
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000',
                },
            },
            splitLine: {
                show: false,
            },
        },
        {
            gridIndex: 1,
            show: false,
        },
        {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000',
                },
            },
            splitLine: {
                show: false,
            },
        },
    ],
    xAxis: [
        {
            gridIndex: 0,
            show: false,
            data: xData,
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
            gridIndex: 1,
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                interval: 0,
                align: 'auto',
                verticalAlign: 'middle',
                textStyle: {
                    color: '#000',
                    fontSize: 16,
                    align: 'center',
                },
            },
            data: xData,
        },
        {
            gridIndex: 2,
            show: false,
            data: xData,
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
    ],
    series: [
        {
            name: 'val1',
            type: 'bar',
            showBackground: false,
            backgroundStyle: {
                barBorderRadius: 30,
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: list1,
            barWidth: 20,
        },
        {
            name: 'val2',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            showBackground: false,
            backgroundStyle: {
                barBorderRadius: 30,
            },
            data: list2,
            barWidth: 20,
        },
    ],
};
