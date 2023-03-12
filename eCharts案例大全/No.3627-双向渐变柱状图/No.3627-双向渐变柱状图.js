option = {
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var str = ''; //声明一个变量用来存储数据
            const [a, b] = params;
            console.log(params);
            var a1 = `${a.seriesName}: ${a.value > 0 ? a.value : -a.value}`;
            var b1 = `${b.seriesName}: ${b.value > 0 ? b.value : -b.value}`;
            str = a1 + '</br>' + b1;
            return str;
        },
    },
    color: ['#4472C5', '#ED7C30'], //图例颜色
    legend: {
        show: true,
        icon: 'circle',
        top: 20,
        data: ['流入', '流出'],
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgba(107,107,107,0.37)',
                    type: 'dashed',
                },
            },
            axisTick: {
                show: false,
            },
            data: ['周一', '周二', '周三', '周四', '周五'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: 'rgba(131,101,101,0.2)',
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            name: '流入',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorArr = params.value > 0 ? ['#FF9A22', '#FFD56E'] : ['#FFD56E', '#FF9A22']; //渐变颜色
                        return new echarts.graphic.LinearGradient(
                            0,0,0,1,
                            [
                                {
                                    offset: 0,
                                    color: colorArr[0],
                                },
                                {
                                    offset: 1,
                                    color: colorArr[1],
                                },
                            ],
                            false
                        );
                    },
                },
            },
            label: {
                normal: {
                    show: true,
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#10D3F2', //柱状图上的数字颜色
                    position: 'top',
                },
            },
            data: [19.7, 34.7, 17.6, 8.1, 19.9],
        },
        {
            name: '流出',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: '#AD5A6B',
            },
            label: {
                normal: {
                    show: true,
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#AD5A6B',
                    position: 'bottom',
                },
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorArr = params.value > 0 ? ['#AD5A6B', '#388BFF'] : ['#388BFF', '#AD5A6B']; //渐变颜色
                        return new echarts.graphic.LinearGradient(
                            0,0,0,1,
                            [
                                {
                                    offset: 0,
                                    color: colorArr[0], // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: colorArr[1], // 100% 处的颜色
                                },
                            ],
                            false
                        );
                    },
                },
            },
            data: [-37.6, -31.9, -11.4, -6.6, -12.9],
        },
    ],
};
