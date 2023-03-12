
var data0 = [1, 1, 1,];
var data1 = [40, 50, 30 ]; //化肥
var data2 = [45, 35, 60]; //农药
var data4 = [3, 5, 3, ]; //农服
var data6=[12,0,6];
var data3 = [];
var data5 = [];
var data_zui =[];
for (let i = 0; i < data1.length; i++) {
    data3.push(data1[i] + data2[i] + data4[i]);
}
for (let i = 0; i < data1.length; i++) {
    data_zui.push(data1[i] + data2[i] + data4[i]+data6[i]);
}
for (let i = 0; i < data1.length; i++) {
    data5.push(data1[i] + data2[i]);
}
option = {
    backgroundColor: "#1a2439", 
    textStyle: {
        color: "#C9C9C9",
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        selectedMode: false, 
        right: "40%",
        top: "15%",
        textStyle: {
            color: "#ffffff",
            fontSize: 14,
        },
    },
    grid: {
        containLabel: true,
        left: "10%",
        top: "20%",
        bottom: "10%",
        right: "30%",
    },
    xAxis: {
        type: "category",
        data:[
    "2021-01",
    "2021-02",
    "2021-03",

],
        axisLine: {
            show: false,
            lineStyle: {
                color: "#B5B5B5",
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            margin: 20, //刻度标签与轴线之间的距离。
            textStyle: {
                fontFamily: "Microsoft YaHei",
                color: "#FFF",
            },
            fontSize: 14,
            fontStyle: "bold"
        },
    },
    yAxis: {
        type: "value",
        axisLine: {
            show: false,
            lineStyle: {
                color: "#B5B5B5",
            },
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                fontFamily: "Microsoft YaHei",
                color: "#FFF",
            },
            fontSize: 14,
        },
    },
    series: [
        {
            type: "bar",
            name: "春天",
            data:[60,20,10],
            barMaxWidth: "auto",
            barWidth: 50,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                            offset: 0,
                            color: "#00a0fe",
                        },
                        {
                            offset: 1,
                            color: "#0c42be",
                        },
                    ],
                },
            },
        }
        ,{
            type: "bar",
            name: "化肥",
            data: data1,
            stack: "zs",
            barMaxWidth: "auto",
            barWidth: 50,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                            offset: 0,
                            color: "#a393ff",
                        },
                        {
                            offset: 1,
                            color: "#6148f1",
                        },
                    ],
                },
            },
        },
        {
            "name": "农药",
            "type": "bar",
            data: data2,
            stack: "zs",
            barMaxWidth: "auto",
            barWidth: 50,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                            offset: 0,
                            color: "#339bb9",
                        },
                        {
                            offset: 1,
                            color: "#187a96",
                        },
                    ],
                },
            },
        },
        {
            "name": "农服",
            "type": "bar",
            data: data4,
            stack: "zs",
            barMaxWidth: "auto",
            barWidth: 50,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                            offset: 0,
                            color: "#d08f62",
                        },
                        {
                            offset: 1,
                            color: "#b86c38",
                        },
                    ],
                },
            },
        },
    {
            "name": "夏天",
            "type": "bar",
            data: data6,
            stack: "zs",
            barMaxWidth: "auto",
            barWidth: 50,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                            offset: 0,
                            color: "#d1616f",
                        },
                        {
                            offset: 1,
                            color: "#c43144",
                        },
                    ],
                },
            },
        },
        // color: [, "#018bc1", "#96e092", "#DE9FB1", "#f06e90", "#f89e92",],
          {//一蓝底
            data: data0,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbol: "diamond",
             color:"#0954cb",
            symbolOffset: ['-65%', "50%"],
            symbolSize: [50, 20],
            zlevel: 2,
        },
          {//一蓝盖
            data:[60,20,10],
            type: "pictorialBar",
            barMaxWidth: "20",
            symbol: "diamond",
            symbolPosition: "end",
             color:"#0672df",
            symbolOffset: ['-65%', "-45%"],
            symbolSize: [50, 20],
            zlevel: 2,
        }, 
        {
            data: data0,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbol: "diamond",
             color:"#4f32f2",
            symbolOffset: ['65%', "50%"],
            symbolSize: [50, 20],
            zlevel: 2,
        },
        {
            data: data1,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
             color:"#b1a6f4",
            symbol: "diamond",
            symbolOffset: ['65%', "-50%"],
            symbolSize: [50, 20],
            zlevel: 2,
        },
        {
            data: data5,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            symbol: "diamond",
             color:"#0c6882",
            symbolOffset: ['65%', "-50%"],
            symbolSize: [50, 20],
            zlevel: 2,
        },
          {
            data: data3,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",//f89e92
                  color:"#b25d23",
            symbol: "diamond",
            symbolOffset: ['65%', "-50%"],
            symbolSize: [50, 20],
            zlevel: 2,
        },
           {
            data: data_zui,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            symbol: "diamond",
             color:"#c43144",
            symbolOffset: ['65%', "-50%"],
            symbolSize: [50, 20],
            zlevel: 2,
        },
    ],
};
