option = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            //修改指识线的颜色
            lineStyle: {
                color: "transparent"
            }
        },
        formatter: function(params) {
            console.log(params)
        },
    },
    title: {
        text: "测试", //标题内容
        left: 50, //居中
        textStyle: {
            fontSize: 14, //文字大小
            color: "#666666", //文字颜色
            fontWeight: 300, //文字粗细
        }
    },
    grid: {
        top: 30,
        bottom: 50
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        boundaryGap: false,
        axisLine: {
            onZero: false,

            lineStyle: {
                // color: colors[2]
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }, ],
    yAxis: [{
        type: 'value'
    }],
    //手势放大柱状图折线图
    dataZoom: {
        type: "inside"
    },
    series: [{
            type: 'bar',
            barWidth: '20',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'transparent'
                    }, {
                        offset: 0,
                        color: 'transparent'
                    }], false)
                },
                // 移入当前的柱状图时改变颜色
                emphasis: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(2, 196, 251,1)'
                    }, {
                        offset: 0,
                        color: 'rgba(2, 196, 251,.1)'
                    }], false)
                }
            },
            data: [5.9, 6.9, 10.1, 11.7, 4.3, 6.2, 21.6, 43.6, 51.4, 10.4, 17.3, 0.7],
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
            }
        },
        {
            name: '2017 降水量',
            type: 'line',
            itemStyle: {
                normal: {
                    show: false,
                    color: "#3282FF", //改变折线点的颜色
                    lineStyle: {
                        color: "#3282FF" //改变折线颜色
                    },
                    label: {
                        show: false, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#999999',
                            fontSize: 10
                        }
                    },

                },
                emphasis: {
                    show: true,
                    color: "#3282FF",
                    borderColor: "#ffffff",
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#fff',
                            fontSize: 16,
                            padding: [10, 10, 10, 10],
                            backgroundColor: "rgba(24, 71, 185, .6)",
                            borderRadius: 4,
                        }
                    }
                }
            },
            data: [5.9, 6.9, 10.1, 11.7, 4.3, 6.2, 21.6, 43.6, 51.4, 10.4, 17.3, 0.7]
        }
    ]
};