let todayPersonList = [
    {
        time: '2021-08-10 09:20:03',
        value: 30,
    },
    {
        time: '2021-08-10 10:28:48',
        value: 34,
    },
    {
        time: '2021-08-10 13:34:35',
        value: 33,
    },
    {
        time: '2021-08-10 14:20:03',
        value: 36,
    },
    {
        time: '2021-08-10 15:23:40',
        value: 32,
    },
    {
        time: '2021-08-10 16:30:35',
        value: 30,
    },
    {
        time: '2021-08-10 18:00:13',
        value: 28,
    },
];
var ydata = [];
var xdata = [];
todayPersonList.forEach((item, index) => {
    ydata.push(item.value);
    
    let time = item.time.split(' ')[1].split(':')
    xdata.push(time[0]+':'+time[1])
    
    
});

option = {
    backgroundColor: '#fff',
    grid: {
        show: false,
    },
    tooltip: {
        formatter: '{b}: {c}',
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'rgba(245,166,38,1)',
                type: 'dashed',
            },
        },
        backgroundColor: 'rgba(245,166,38,1)',
        padding: [5, 10],
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        right: 20,
        orient: 'vertical',
        data: ['出勤人数'],
        show:false
    },
    xAxis: {
        type: 'category',
        data: xdata,
        boundaryGap: false,
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            interval: 'auto',
            lineStyle: {
                color: 'rgba(0,0,0,0.06)',
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.06)',
            },
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#666',
            },
        },
    },
    yAxis: {
        type: 'value',
        minInterval: 1, // 横坐标值为整数
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: 'rgba(0,0,0,0.06)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.06)',
            },
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#666',
            },
        },
    },
    series: [
        {
            name: '出勤人数',
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
            data: ydata,
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    color: 'rgba(252, 157, 116,1)',
                    borderColor: '#fff',
                },
            },
            lineStyle: {
                globalCoord: false, // 缺省为 false
                normal: {
                    width: 3,
                    color: 'rgba(252, 157, 116,1)',
                    shadowColor: 'rgba(252, 157, 116, 0.8)',
                    shadowBlur: 5,
                    shadowOffsetY: 5,
                },
            },
        },
    ],
};
