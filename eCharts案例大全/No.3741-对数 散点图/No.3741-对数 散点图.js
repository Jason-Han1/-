var data = [
    [
        [17160, 40],
        [219550, 19],
        [308420, 25],
        [433270, 22],
        [337460, 21],
        [344275, 20],
        [2953470, 20],
        [20540, 40],
        [31260, 45],
        [40940, 30],
    ],
    [
        [47560, 40],
        [52040, 35],
        [110150, 30],
        [142840, 28],
        [121730, 22],
        [3560, 94.288],
        [323460, 32.23],
        [265680, 29.284],
        [1077060, 30.296],
        [13250, 98.172],
        [13090, 83.787],
    ],
];
var series = [
    {
        type: 'scatter',
        name: '数据333',
        data: data[0],
    },
    {
        type: 'scatter',
        name: '数据2',
        data: data[1],
    },
];
var title = '名义应力';
var legend = [series[0].name, series[1].name];

option = {
    title: {
        text: title,
        x:'center',      //可设定图例在左、右、居中
        y:'top',     //可设定图例在上、下、居中
         padding:[20,0,0,0]
    },
    grid:{
                    left:'10',
                    right:'15%',
                    bottom:'8%',
                    containLabel:true
                },

    legend: {
        data: legend,
        orient: 'horizontal',
        x:'center',      //可设定图例在左、右、居中
        y:'bottom',     //可设定图例在上、下、居中
        padding:[0,0,25,0]
    },

    xAxis: {
        type: 'log',
        name: 'Coefficient',
        minorSplitLine: {
            show: true,
        },
        logBase: 10,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
    },

    yAxis: {
        type: 'log',
        logBase: 10,
        minorSplitLine: {
            show: true,
        },
        name: 'LifeCycles',
        splitLine: { show: true },
    },
    series: series,
};
