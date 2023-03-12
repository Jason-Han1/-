var lineData = [2, 5, 6, 9, 3, 1];
var line2Data = [5, 1, 5, 2, 2, 9];
var barData = [2, 1, 5, 2, 2, 1];
var bar2Data = [
    {
        value: 3,
        itemStyle: {
            color: 'rgb(20,170,159)',
        },
    },
    4,
    1,
    7,
    1,
    {
        value: 8,
        itemStyle: {
            color: 'rgb(20,170,159)',
        },
    },
];

option = {
    title: {},
    legend: {
        data: ['line', 'line1', '产销差1', '产销差'],
        textStyle: {
            color: '#ccc',
        },
        formatter: function (name) {
            if (name == '产销差1') return '';
            return name;
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        splitLine: { show: false },
        data: ['0', '5', '15', '20', '25', '30'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            barWidth: '10px',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)',
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)',
                },
            },
            data: barData,
        },
        {
            name: 'bb',
            type: 'bar',
            color: 'rgb(242,109,72)',
            stack: '总量',
            label: {
                show: false,
                position: 'inside',
            },
            data: bar2Data,
        },
        {
            name: 'line',
            type: 'line',
            color: 'rgb(255,204,0)',
            smooth: true,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 15,
            data: lineData,
        },
        {
            name: 'line1',
            type: 'line',
            smooth: true,
            color: 'rgb(130,106,249)',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 15,
            data: line2Data,
        },
        {
            name: '产销差1',
            type: 'bar',
            stack: '总量',
            color: 'rgb(242,109,72)',
            data: [],
        },
        {
            name: '产销差',
            type: 'bar',
            stack: '总量',
            color: 'rgb(20,170,159)',
            data: [],
        },
    ],
};
