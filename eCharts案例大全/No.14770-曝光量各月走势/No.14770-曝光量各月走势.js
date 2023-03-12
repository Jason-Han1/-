option = {
    backgroundColor: "#111",
    title: {
        text: '曝光量各月走势',
        left: '50%',
        textAlign: 'center',
        top: '5%',
        textStyle: {
            color: '#fff'
        }
    },
    color: ["#3ab427", "#ffa218", "#0370c8", "#eb3240"],
    textStyle: {
        color: "#ffffff",

    },
     grid: {
        top: '30%',
        containLabel: true
    },
    legend: {
        left: '40%',
        top: '15%',
        width: 500,
        itemWidth: 40,
        textStyle: {
            color: "#d7d7d7"
        },
        data: ['安居客', '搜房','58', '新浪']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#fff"
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#fff"
            }
        },
        splitLine: {
            show: false,
            
        },
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    series: [{
        name: '安居客',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 6
            }
        },
        data: [12350, 54440, 63450, 5340, 23415,7990]
    }, {
        name: '搜房',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 6
            }
        },
        data: [6456, 32345, 34558, 6660, 43330,4440]
    },
     {
        name: '58',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 6
            }
        },
        data: [64256, 13345, 34558, 63660, 3330,4440]
    },
     {
        name: '新浪',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 6
            }
        },
        data: [62456, 12345, 4558, 66560, 43330,41240]
    },
    ]
};