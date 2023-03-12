app.title = '条形图';
option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,1)', //左边线的颜色
                width: '2' //坐标线的宽度
            }
        },
        //网格分割线
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(52,171,255,0.3)',
                width: 1,
            }
        },
        axisLabel: {
            fontSize: 15,
            color: '#00a1e4',
            margin: 8,
            interval: 0,
            formatter: function(val) {
                return val;
            }
        },
        //分割延出线
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'category',
        data: ['JAVA', 'CSS', 'HTML', 'php'],
        //分割延出线
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 15,
            color: '#00a1e4',
            margin: 8,
            interval: 0,
            formatter: function(val) {
                return val;
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,1)', //左边线的颜色
                width: '2' //坐标线的宽度
            }
        },
    },
    series: [
        {
        name: '占比',
        type: 'bar',
        barWidth: 1,
        itemStyle: {
            normal: {
                color: '#fff',
                barBorderRadius: [20, 20, 20, 20],
            }
        },
        z: 10,
        data: [100, 100, 100, 100]
    },
    {
        name: '占比',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        barGap: '-1500%',
        itemStyle: {
            normal: {
                color: '#06d3cd',
                barBorderRadius: [20, 20, 20, 20],
            }
        },
        label: {

            normal: {
                show: true,
            position:'right',
            }
        },
        z: 10,
        data: [20, 35, 50, 30]
    }]
};