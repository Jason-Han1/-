option = {
    title: {
        text: '工资区间分布',
        left: 38,
        top: 18,
        textStyle: {
            color: '#111',
            fontWeight: 'lighter',
            fontSize: 18
        }
    },
    //提示框
    tooltip: {
        trigger: 'axis',
        showDelay: 0,
        extraCssText: 'padding:15px;font-size:10px',
        formatter: function(params) {
            return '工资区间' + ' : ' + params[0].name + '<br/>' + '占比' + ' : ' + params[0].value + '%'
        },
        axisPointer: {
            show: true,
            type: 'shadow',
        }
    },
    // 直角坐标系内绘图网格
    grid: {
        left: '20',
        right: '40',
        top: '90',
        bottom: '20',
        containLabel: true
    },
    xAxis: {
        show: false,
    },
    yAxis: [{
        show: true,
        data: ["0k-2k", "2k-4k", "4k-6k", "6k-8k", "8k-10k"],
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            rich: {
                lg: {
                    backgroundColor: "#339911",
                    color: "#fff000",
                    borderRadius: 15,
                    // padding: 5,
                    align: "center",
                    width: 15,
                    height: 15
                }
            }
        }
    }, {
        show: true,
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: [702, 350, 610, 793, 664],
        axisLabel: {
            textStyle: {
                fontSize: 12,
            }
        }
    }],
    series: [{
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: [70, 34, 60, 78, 69],
        barCategoryGap: 50,
        barWidth: 20,
        itemStyle: {
            normal: {
                barBorderRadius: 10,
                color: function(params) {
                    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
                    var num = myColor.length;
                    return myColor[params.dataIndex % num];
                }
            }
        },
        label: {
            normal: {
                show: true,
                position: "inside",
                formatter: "{c}%"
            }
        }
    }, {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 25,
        itemStyle: {
            normal: {
                color: "none",
                borderColor: "#00c1de",
                borderWidth: 1,
                barBorderRadius: 5
            }
        }
    }]
}