option = {
    backgroundColor: "#000f1d",
    tooltip: { //鼠标悬浮弹出提示框
        trigger: 'axis' //提示框弹出的触发时间，折线图和柱状图为axis
    },
    grid: {
        top: '20%',
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2018.2', '2018.3', '2018.4', '2018.5', '2018.6', '2018.7', '2018.8', '2018.9', '2018.10', '2018.11'],
        axisLabel: {
            color: '#ffffff63'
        },
        axisLine: {
            show: true
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: "#ffffff1f"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ffffff1f'
            },
            interval: 0
        },
        axisTick: { show: false}  //刻度点数轴
    },
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ffffff1f'
            }
        },
        axisLabel: { show: false },
        axisTick: { show: false}  //刻度点数轴
    }],
    series: [{
        name: '注册总量',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        symbolSize:0,//数据点的大小，[0,0]//b表示宽度和高度
        tooltip: {
            show: true
        },
        itemStyle: {
            opacity: 1,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#16d2c0' // 0% 处的颜色
                }, {
                    offset: 0.5,
                    color: '#309af0' // 50% 处的颜色
                }, {
                    offset: 1,
                    color: '#6A45B4' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        areaStyle: {
            opacity: 1,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#16d2c0' // 0% 处的颜色
                }, {
                    offset: 0.5,
                    color: '#309af0' // 50% 处的颜色
                }, {
                    offset: 1,
                    color: '#6A45B4' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        data: [593, 438, 485, 631, 689, 324, 987, 214, 1100, 1213]
    }]
};