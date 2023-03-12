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
    grid: {
        top: 20,
        bottom: 20,
        left: 30,
        right: 20
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false,
            alignWithLabel: true, //true 的时候有效，可以保证刻度线和标签对齐
        },
        axisLine: {
            lineStyle: {
                color: "#889fcc"
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }, ],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(136, 159, 204, .2)"
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#889fcc"
            }
        },
        axisTick: {
            show: false
        },
    }],
    //手势放大柱状图折线图
    dataZoom: {
        type: "inside"
    },
    series: [{
        //给折线图下方添加阴影
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: 'rgba(59, 34, 201,.4)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(16, 25, 112,0.2)'
                        }
                    ],
                    false
                ),
                shadowColor: 'rgba(59, 34, 201,1)',
                shadowBlur: 10
            }
        },
        name: '2017 降水量',
        type: 'line',
        smooth: true,
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
    }]
};