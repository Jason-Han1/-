var option = {
    backgroundColor: '#000',
    tooltip: { //提示
        trigger: "axis",
    },
    grid: {
        top: '30%',
        left: '10%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    color: ['rgb(1, 208, 254)'],
    legend: {
        show: true,
        top: '8%',
        right: '8%',
        icon: 'bar',
        itemWidth: 15,
        itemHeight: 3,
        textStyle: {
            color: '#d6d6d6',
            fontSize: '16'
        },
        data: ['其他']
    },
    xAxis: {
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: { //x轴线
            lineStyle: {
                color: '#032737'
            }
        },
        axisLabel: {
            color: '#d6d6d6',
            fontSize: 16
        },
        axisTick: { //x轴线的突出线
            show: false
        },
    },
    yAxis: {
        name: "",
        nameTextStyle: {
            color: '#d6d6d6',
            fontSize: 16
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#A5A5A5'
            }
        },
        axisLabel: {
            color: '#d6d6d6',
            fontSize: 16
        },
        splitLine: { //y轴分割线
            show: true,
            lineStyle: {
                color: '#032737'
            }
        },
        axisTick: {
            show: false
        },
        interval: 10, //以10为分割距离
    },
    series: [{
        name: '其他',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: function(params) {
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(67, 211, 244,1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(67, 211, 244,0)"
                        }
                    ]);

                },
                barBorderRadius: 10
            }
        },
        data: [25, 32, 16, 24, 27, 21, 11, 25, 32, 16, 24, 37]
    }]
};