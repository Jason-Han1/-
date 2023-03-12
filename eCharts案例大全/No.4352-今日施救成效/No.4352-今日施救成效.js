var data = {
    "legend": ["平均到达时间", "平均处置时间", "施救次数"],
    "list": [{
        "name": "湖州段",
        "yData1": 104,
        "yData2": 100,
        "yData4": 90,
    },{
        "name": "杭绍段",
        "yData1": 56,
        "yData2": 206,
        "yData4": 56,
    }]
}
var xData = [],yData1 = [],yData2 = [],yData4 = [],legend = data.legend,
colorArr = ['rgba(0, 171, 255, 1)','rgba(255, 136, 31, 1)','rgba(17, 221, 220, 1)']
data.list.forEach(item=>{
    xData.push(item.name)
    yData1.push(item.yData1)
    yData2.push(item.yData2)
    yData4.push(item.yData4)
})
var normalColor = "rgba(255,255,255,0.5)",backgroundColor= "#333";
//   var fontSize = 20;
let seriesData = [];
xData.forEach(element => {
});
[yData1, yData2, yData4].forEach((item, index) => {
    var obj1 = {};
    var obj2 = {};
    if (index < 2) {
        obj1 = {
            name: legend[index],
            type: "bar",
            stack: legend[index],
            data: item,
            barWidth: 16,
            itemStyle: {
                normal: {
                    color: colorArr[index]
                }
            }
        };
        obj2 = {
            name: "",
            type: "bar",
            stack: legend[index],
            itemStyle: {
                normal: {
                    color: colorArr[index]
                }
            },
        };
        seriesData.push(obj1);
        seriesData.push(obj2);
    } else {
        var obj3 = {
            name: legend[index],
            type: "line",
            yAxisIndex: 1,
            smooth: false,
            symbol: "circle",
            symbolSize: 8,
            lineStyle: {
                normal: {
                    width: 4
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(17, 221, 220, 1)',
                    borderColor: "rgba(17, 221, 220, 1)",
                    borderWidth: 1
                }
            },
            data: item,
            label: {
                normal: {
                    show: false
                }
            }
        };
        seriesData.push(obj3);
    }
});
console.log(seriesData);
option = {
    backgroundColor: backgroundColor,
    grid: {
        left: "3%",
        top: "16%",
        right: "3%",
        bottom: '3%',
        containLabel: true
    },
    legend: {
        show: true,
        itemWidth: 24,
        itemHeight: 12,
        right: "center",
        top: "3%",
        textStyle: {
            color: "rgba(255, 255, 255, 0.6)"
        },
        data: legend
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            var str = '';
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName !== "") {
                    if(i===0){
                        str = params[i].name +":<br>";
                    }
                    str += params[i].seriesName +
                        params[i].value +
                        "<br/>";
                }
            }
            return str;
        }
    },
    xAxis: [{
        type: "category",
        data: xData,
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: 16
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(49, 137, 203, 1)'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
            type: "value",
            name: "(起)",
            nameTextStyle: {
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: 14
            },
            // "min": 0,
            // "max": 50,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: 14
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(49, 137, 203, 1)'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            }
        },
        {
            type: "value",
            name: "(次)",
            nameTextStyle: {
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: 14
            },
             axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: 14
                }
            },
            axisLine: { 
                lineStyle: {
                    color: 'rgba(49, 137, 203, 1)'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: "rgba(231, 235, 239, 0.2)"
                }
            }
        }
    ],
    series: seriesData
};