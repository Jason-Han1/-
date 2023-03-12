option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    legend: {
        data: ["已展示", "未展示"],
        left: 0,
        icon: "rect",
        itemWidth: 30,
        itemHeight: 10,
        textStyle: {
            color: "#fff"
        }
    },
    grid: {
        left: "10%",
        right: "10%",
        bottom: 20,
        top: '10%',
        containLabel: true
    },
    xAxis: [{
        type: "category",
        data: ['周一', '周二', '周三名字过长换行'],
        axisLabel: {
            color: "#fff"
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#fff"
            }
        },
        axisLabel: {
            formatter: value => {
                if (value.length > 10) {
                    value = value.substr(0, 7) + '...';
                }
                let result = "";
                for (let i = 0; i < value.length; i++) {
                    if (i !== 0 && i % 5 === 0) {
                        result = result + "\n";
                    }
                    result = result + value[i];
                }
                return result;
            }
        }
    }],
    yAxis: [{
        type: "value",
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            lineStyle: {
                opacity: 0.5
            }
        }
    }],
    series: [{
            name: "未展示",
            type: "bar",
            stack: "group",
            barWidth: "35%",
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#6374FE"
                    },
                    {
                        offset: 1,
                        color: "#699DFD"
                    }
                ])
            },
            data: [20, 39, 10]
        },
        {
            name: "已展示",
            type: "bar",
            stack: "group",
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#AEE71B"
                    },
                    {
                        offset: 1,
                        color: "#DBEC28"
                    }
                ])
            },
            showBackground: true,
            data: [100, 200, 150]

        }
    ]
};