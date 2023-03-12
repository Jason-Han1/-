option = {
    title: {
        text: '年龄统计',
        subtext: '',
        textStyle: {
            fontSize: 14,
            color: '#565656',
        },
        top: 0,
    },
    grid: {
        top: '30',
        left: '15',
        right: '40',
        bottom: '0%',
        containLabel: true
    },
    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                            // 坐标轴指示器，坐标轴触发有效
            label: {
                show: true //显示横坐标文字背景
            }
       
        }
    },
    xAxis: {
        type: 'value',
        name: "数量",
        boundaryGap: false, //false代表是零刻度开始，设置为true代表离零刻度间隔一段距离
        data: [],
        splitNumber: 0,
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisTick: {
            show: false
        },
        axisLine: {
            onZero: false,
            show: true,
            lineStyle: {
                color: "#979797",
                width: 1.2 //这里是为了突出显示加上的
            },
            // 以下属性画箭头的
            symbol: ["none", "arrow"],
            symbolSize: [6, 12],
            symbolOffset: [0, 10]
        },
        axisLabel: {
            interval: 1, //隔几个显示
            rotate: 0,
            showMaxLabel: true,
            showMinLabel: true,
            textStyle: {
                color: "#686868"
            }
        }
    },
    yAxis: [{
        type: 'category',
        nameTextStyle: {
            color: "#686868"
            // fontSize:16,
        },
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: {
                color: "#979797",
                width: 1.2 //这里是为了突出显示加上的
            },
            // 以下属性画箭头的
            symbol: ["none", "arrow"],
            symbolSize: [6, 12],
            symbolOffset: [0, 10]
        },
        axisTick: {
            show: false //显示刻度线
        },
        axisLabel: {
            textStyle: {
                color: "#686868"
            }
        },
        data: ["3~4", "5~11", "12~17", "18~30", "31~40", "41~50", "51~60", "71~80", ">80"],
    }],
    series: [{
        name: '数量',
        type: 'bar',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#cbdafa' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#5883EE' // 100% 处的颜色
                }], false),
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],
                label: {
                    show: true, //是否展示
                    position: 'insideRight',
                    distance: 3,
                    textStyle: {
                        fontSize: '10',
                        align: 'right',
                        color: 'white'
                    }
                }
            },
        },
        barWidth: 10, //柱图宽度
        // barGap: '0%',
        // barCategoryGap: '50%',
        data: [14, 267, 339, 2737, 3227, 3834, 3938, 5641, 1437]
    }]
}