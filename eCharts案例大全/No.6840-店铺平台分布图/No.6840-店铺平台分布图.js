option = {
    title: {
        text: '店铺平台分布图',
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        // 修改legend的高度宽度
        itemHeight: 5,
        itemWidth: 24,
        data: [
            {
                name: '订单下载量',
                icon: 'rect'
            }
        ],
        textStyle: {
            color: '#B4B4B4'
        },
        top: '7%',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        // type:'category',
        data: ["淘宝", '天猫', '京东', '拼多多', '苏宁', '唯品会'],
        boundaryGap: true,
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
        //	margin:15,
        textStyle: {
            color: '#1B253A',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        },
        //rotate:50,
        },
        axisTick:{//坐标轴刻度相关设置。
            show: false,
        },
        axisLine:{//坐标轴轴线相关设置
            lineStyle:{
                color:'#E5E9ED',
                // opacity:0.2
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
            lineStyle: {
                color: '#f7f7f7',
            // 	opacity:0.1
            }
        }
    }],
    yAxis: [
            {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#a8aab0',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            axisLine:{
                show: false
            },
            axisTick:{
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#e6e6e6',
                // 	opacity:0.1
                }
            }

        }
    ],
    series: [{
        name: '订单下载量',
        type: 'bar',
        barWidth: 30,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(58,132,255,0.1)'
                }, {
                    offset: 1,
                    color: 'rgba(58,132,255,0.65)'
                }]),
                //柱状图圆角
                // barBorderRadius: [30,30,0,0],
            }
        },

        data: [25, 65, 125, 152, 62, 57]
    }]
};