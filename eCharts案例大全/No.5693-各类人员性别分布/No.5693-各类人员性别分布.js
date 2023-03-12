option = {
    color: [
        "#F7B502",
        "#148AC5"
    ],
    legend: {
        orient: "vertical",
        data: [{
                name: "男",
                icon: "circle",
            },
            {
                name: "女",
                icon: "circle"
            }
        ],
        right: 0,
        top: "4%",
        textStyle: {
            color: "#000000"
        }
    },
    grid: {
        left: "4%",
        right: "8%",
        bottom: "10%",
        top: "14%",
        color: "#FFFF",
        containLabel: true
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        textStyle: {
            align: 'left'
        },
        formatter: function(params) { //这里就是控制显示的样式
            var relVal = params[0].name;
            var value = 0;
            for (var i = 0, l = params.length; i < l; i++) {
                value += params[i].value;
            }
            for (var i = 0, l = params.length; i < l; i++) {
                //marker 就是带颜色的小圆圈 seriesName x轴名称  value  y轴值 后面就是计算百分比
                relVal += '<br/>' + params[i].marker + params[i].seriesName + '  : 数量 : ' + parseFloat(params[i].value) + ', 百分比 : ' + (100 *
                    parseFloat(params[i].value) / parseFloat(value)).toFixed(2) + "%";
            }
            return relVal;
        }
    },

    xAxis: [{
        type: "category",
        data: [
            "确诊人员",
            "体征异常上报者",
            "密切接触者",
            "高危地区返回人员",
            "高频活动者"
        ],
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 14
            },
        },
        axisLine: {
            show: true
        }
    }],
    yAxis: [{
        type: "value",
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: { //网格线
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.2)"
            }
        }
    }],
    series: [{
            name: "男",
            type: "bar",
            stack: "总量",
            barWidth: "20%",
            data: [
                80, 55, 114, 46, 70
            ]
        },
        {
            name: "女",
            type: "bar",
            stack: "总量",
            barWidth: "100%",
            data: [
                120, 45, 83, 54, 30
            ]
        }
    ]
};