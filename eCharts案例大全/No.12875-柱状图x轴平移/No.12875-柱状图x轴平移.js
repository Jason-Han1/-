var data1 = [1, 2, 3, 4, 5, 6, 7];
var num = 5; // 显示几个bar
for (var i = 0; i < num; i++) {
    data1.push(data1[i])
}
option = {
    color: ['#00c9c9'],
    grid: {
        top: '7%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    dataZoom: [
        {
            type: 'inside',
            show: 'false',
            startValue: 0,
            endValue: num - 1,
            bottom: '0%'
        }
    ],
    xAxis: [
        {
            type: 'category',
            data: data1,
            axisTick: {show: false},
            axisLabel: {
                show: true,
                // 横轴信息全部显示
                interval: 0,
                textStyle: {
                    color: '#a6c7e9'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#00c9c9'
                }
            },
            animationEasing: 'linear'
        }
    ],
    yAxis: [
        {
            show: false
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '30%',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#a6c7e9'
                }
            },
            data: data1
        }
    ]
};
setTime ();
function setTime () {
    setTimeout(function () {
        var start = option.dataZoom[0].startValue;
        var end = option.dataZoom[0].endValue;
        end++;
        option.series[0].animation = true;
        if (end >= data1.length) {
            end = num - 1;
            option.series[0].animation = false;
        }
        start = end - (num - 1);
        option.dataZoom[0].startValue = start;
        option.dataZoom[0].endValue = end;
        myChart.setOption(option);
        setTime();
    }, 500);
}