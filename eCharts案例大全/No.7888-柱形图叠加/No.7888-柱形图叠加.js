var xData = ["1月", "2月", "3月", "4月", "5月", "6月"],
    yData1 = [104, 56, 136, 86, 98, 86],
    yData2 = [100, 206, 236, 106, 80, 160],
    yData3 = [90, 106, 236, 96, 180, 100],
    legend = ["1", "2", "3"],
    colorArr = ["#008ECE",
        "#51FFD8",
        "#fff",
    ];
var normalColor = "rgba(255,255,255,0.5)";
let seriesData = [];
let total=[];
yData1.forEach((item,i)=>{
    let item2=yData2[i];
    let item3=yData3[i];
    total.push(item+item2+item3);
});
[yData1, yData2, yData3].forEach((item, index) => {
    var  obj = {
        name: legend[index],
        type: "bar",
        stack: "1",
        data: item,
        barWidth: "40%",
        itemStyle: {
            normal: {
                color: colorArr[index]
            }
        },
        label:{
            show:true,
            formatter:function(params,i){
              return total[params.dataIndex]  
            },
            position:"top"
        }
    };

    seriesData.push(obj);
});
console.log(seriesData);
option = {
    backgroundColor: "#000",
    grid: {
        left: "3%",
        top: "16%",
        right: "3%",
        bottom: 0,
        containLabel: true
    },
    legend: {
        show: true,
        icon: "rect",
        itemWidth: 20,
        itemHeight: 3,
        right: "15%",
        top: "0%",
        textStyle: {
            color: "#fff"
        },
        data: legend
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            var str = "";
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName !== "") {
                    str +=
                        params[i].name +
                        ":" +
                        params[i].seriesName +
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
                color: normalColor,
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: normalColor
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
            name: "",
            nameTextStyle: {
                color: normalColor,
                fontSize: 12
            },
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: normalColor
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: normalColor
                }
            }
        },
    ],
    series: seriesData
};