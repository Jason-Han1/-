var option = {
    backgroundColor:'rgba(011, 023, 059)',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(list) {
            var msg = "";
            for (let i in list) {
                if (i == 0) {
                    msg += list[i].name + "<br>";
                }
                msg += list[i].seriesName + "：" + list[i].data + "万元<br>";
                if (i > 0 && list[i].seriesName == "不可用余额" && list[i - 1].seriesName == "可用余额") {
                    msg += "总存款余额" + "：" + (list[i].data + list[i - 1].data) + "万元<br>";
                }
                if (i > 0 && list[i].seriesName == "支出" && list[i - 1].seriesName == "收入") {
                    msg += "净收入" + "：" + (list[i - 1].data - list[i].data) + "万元<br>";
                }
            }
            return msg;
        }
    },
    legend: {
        textStyle: {
            color: '#fff',
        },
        data: ['可用余额', '不可用余额', '收入', '支出']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#808eb7',
                width: 2
            }
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#808eb7',
                width: 2
            }
        },
        splitLine: { //分割线配置
            lineStyle: {
                color: "#AAAAAA56",
            }
        },
    },
    series: [{
            name: '可用余额',
            type: 'bar',
            stack: '余额',
            barMaxWidth: 30,
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#00ffff" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#3893e5" // 100% 处的颜色
                        }
                    ], false),
                },
            },
        },
        {
            name: '不可用余额',
            type: 'bar',
            stack: '余额',
            barMaxWidth: 30,
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#bab3bd69" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#bab3bd69" // 100% 处的颜色
                        }
                    ], false),
                },
            },
        },
        {
            name: '收入',
            data: [220, 453, 301, 354, 290, 330, 320],
            type: 'line',
            itemStyle: {
                normal: {
                    color: "#0088D4",
                },
            },
        },
        {
            name: '支出',
            data: [213, 356, 123, 225, 78, 123, 354],
            type: 'line',
            itemStyle: {
                normal: {
                    color: "#DB3233",
                },
            },
        },
    ]
};