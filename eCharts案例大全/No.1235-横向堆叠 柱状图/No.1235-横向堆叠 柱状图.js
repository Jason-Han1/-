var data1 = [320, 600, 901, 934, 1290, 1330, 1320];
var data2 = [430, 182, 191, 234, 290, 250, 310];
for (var i = 0; i < data1.length; i++) {
     data1[i] = {
                value: data1[i],
                itemStyle: {
                    barBorderRadius: [2.5, 0, 0, 2.5],
                },
            };
}
for (var i = 0; i < data2.length; i++) {
     data2[i] = {
                value: data2[i],
                itemStyle: {
                    barBorderRadius: [0, 2.5, 2.5, 0],
                },
            };
}
option = {
    backgroundColor: "#fff",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            shadowStyle: {
                color: "rgba(210,219,238,0.2)"
            }
        },
    },
    legend: {
        x:'right', 
        padding:[20,50,0,0],
        itemWidth: 18,
        itemHeight: 6,
        borderRadius:3,
        data: ["男", "女"],
    },
    xAxis: {
        name:"人",
        nameTextStyle: {
            padding: [0, 0, -25, 15]
        },
        type: "value",
        axisTick: {
            show: false,
        },
        splitLine: {     //网格线
          show: false
        },
    },
    yAxis: {
        name: "年龄段",
        nameTextStyle: {
            padding: [0, 0, -20, -30]
        },
        type: "category",
        realtimeSort: true,
        data: [
            "11~20",
            "21~30",
            "31~40",
            "41~50",
            "51~60",
            "61~70",
            "70+",
        ],
        axisLine: {
            show: false,
        },
        splitLine: {     //网格线
          show: false
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: "#555",
            letterSpacing: "5",
        },
    },
    grid: {
        left: "5%",
        right: "10%",
        bottom: "3%",
        containLabel: true
    },
    series: [{
            name: "男",
            type: "bar",
            stack: "总量",
            barMaxWidth: 5,
            itemStyle: {
                normal: {
                    color: "#2295FF",
                },
            },
            label: {
                    normal: {
                    show: false,
                },
            },
            data: data1,
        },
        {
            name: "女",
            type: "bar",
            stack: "总量",
            barMaxWidth: 5,
            itemStyle: {
                normal: {
                    color: "#D3EAFF",
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            data: data2,
        },
    ],
};