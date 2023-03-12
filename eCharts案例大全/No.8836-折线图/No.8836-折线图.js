option = {
    grid: {
        // width:315 //调整折线图的宽度
        top: 20,
        x: 50,
        x2: 100,
        y2: 30
    },
    backgroundColor: '#011a33',
    tooltip: {
        backgroundColor: 'rgb(255,153,255,0.5)',
        padding: [10, 20, 10, 8],
        textStyle: {
            fontSize: 12,
            lineHeight: 24
        },
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'dashed',
                color: '#ff99ff'
            }
        }
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        // 改变x轴颜色
        axisLine: {
            lineStyle: {
                color: "#009cff",
                width: 0.3
            }
        },
        data: ["", "周市再生资源综合利用项目", "", "", "周市镇美吉特", "", "", "陆家镇美吉特", ""].map(function(str) {
            return str.replace(' ', '\n');
        }),
        // 轴刻度
        axisTick: {
            show: false
        },
        // 轴网格
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: 0, //横轴信息全部显示
            textStyle: {
                color: "#009cff",
                fontSize: 15
            }
        }
    },
    yAxis: {
        axisTick: {
            show: false //轴刻度不显示
        },
        max: 100,
        min: 0,
        // 改变y轴颜色
        axisLine: {
            lineStyle: {
                color: "#009cff",
                width: 0.3
            }
        },
        // 轴网格
        splitLine: {
            show: true,
            lineStyle: {
                color: "#009cff",
                width: 0.3
            }
        },
        //坐标轴文字样式
        axisLabel: {
            show: true,
            textStyle: {
                color: "#009cff",
                fontSize: 14
            }
        }
    },
    series: [{
            name: '邮件营销',
            type: 'line',
            areaStyle: {

                color: "#0c325b"
            },
            symbol: 'none', // 折线无拐点
            lineStyle: {
                normal: {
                    width: 0 //折线宽度
                }

            },
            smooth: true,
            data: [0, 35, 30, 60, 20, 50, 28, 35, 0]

        },
        {
            name: '联盟广告',
            type: 'line',
            areaStyle: {
                color: "#30bade"
            },
            symbol: 'none', // 折线无拐点
            lineStyle: {
                normal: {

                    width: 0 //折线宽度
                }

            },
            smooth: true,
            data: [0, 25, 20, 50, 10, 40, 18, 25, 0]

        }
    ]
};