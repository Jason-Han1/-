var ydata = ['重大事项决策', '重大项目安排', '三重一大', '大额度资金使用', '重要人事任免'];
var vdata1 = [0.1, 0.2, 0.3, 0.4, 0.1];

option = {
    backgroundColor: '#0a1a38',
    title: {
        text: '制度数量统计',
        textStyle: {
            color: '#fff',
        },
        top:60,
        left:70
    },
    color: '#2bbfb2',
    // legend: {
    //     data: xdata,
    //     textStyle: {
    //         color: fontColor
    //     },
    //     bottom: '45%'
    // },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#202630',
        borderColor: '#202630',
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'solid',
            },
        },

        textStyle: {
            color: '#fff',
        },
        formatter: function (params) {
            return params[0].name + '<br/>' + params[0].marker + params[0].value;
        },
    },
    xAxis: {
        type: 'value',
        max: 1,
        axisLabel: {
            color: '#869bba',
            fontSize: 10,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#679cbf',
            },
        },
    },
    yAxis: {
        data: ydata,
        axisLabel: {
            color: '#fff',
            fontSize: 10,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
            },
        },
        boundaryGap: true,
         minInterval:30
    },
    grid: [
        {
            bottom: '45%',
            top: '17%',
            left: '15%',
            right: '15%',
        },
    ],
    series: [
        {
            name: '制度数量统计',
            type: 'bar',
            barWidth: '40%',
            data: vdata1,
        },
    ],
};
