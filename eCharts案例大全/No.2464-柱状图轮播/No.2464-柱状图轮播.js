option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    dataZoom: {
        show: false, //为true滚动条出现
        type: 'slider', //type:'inside'，滚动条在最下面，鼠标点击滚动
        startValue: 0, // 从头开始。
        endValue: 3, //end百分比显示范围，endValue具体显示几个数值
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 40,
        },
    ],
};
setInterval(() => {
    let x0 = option.xAxis.data[0];
    let s0 = option.series[0].data[0];
    option.xAxis.data.shift();
    option.xAxis.data.push(x0);
   option.series[0].data.shift();
   option.series[0].data.push(s0);
   myChart.setOption(option);
}, 2100);
