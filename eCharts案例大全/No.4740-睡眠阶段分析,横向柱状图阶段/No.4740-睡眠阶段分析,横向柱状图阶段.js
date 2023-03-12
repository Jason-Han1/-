
var barWidth = "68%";
var colorList = ["#ff931e","#004a7b","#adadad"]
var data1 = [20,40,60,70,50,60,40];
var data2 = [80,75,80,75,60,70,80];
var data3 = [110,110,100,110,95,120,140];
for(let i =0;i<data1.length;i++){
    data1[i] = data1[i]*100000;
    data2[i] = data2[i]*100000;
    data3[i] = data3[i]*100000;
}
var option = {
     backgroundColor: "#1e213a",
        title: {
          text: "睡眠阶段分析",
          x: "5%",
          textStyle: {
            color: "#e8e7e7",
            fontSize: 11.5
          },
        },
        color: ["#16c2af", "#ffc751", "#4162ff", "#ff6e72", "#9692ff"],
        tooltip: {
          show:false,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          x: "center",
          top: "8%",
          data: ["清醒", "睡眠", "离床"],
          selectedMode:false,
          textStyle:{
            color:"#e8e7e7"
         }
        },
        grid: {
          //图表的位置
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "5%",
          containLabel: true,
        },
        yAxis: [
          {
            type: "category",
            data: [
              "12月1日",
              "12月2日",
              "12月3日",
              "12月4日",
              "12月5日",
              "12月6日",
              "12月7日",
            ],
            splitLine: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
              color: "#e8e7e7",
            },
          },
        ],
        xAxis: [
          {
            show: false,
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#f2f2f2"],
              },
            },
          },
        ],
        series: [
          {
            name: "",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data1,
            itemStyle: {
              color: "rgba(0,0,0,0)",
            },
          },
          {
            name: "清醒",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data1,
            itemStyle: {
              color: colorList[0],
              barBorderRadius: [20, 0, 0, 20],
            },
          },
          {
            name: "睡眠",
            type: "bar",
            stack: "总量",
            data: data2,
            itemStyle: {
              color:  colorList[1]
            },
          },
          {
            name: "离床",
            type: "bar",
            stack: "总量",
            data: data3,
            itemStyle: {
              color:  colorList[2]
            },
          },
          {
            name: "睡眠",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data2,
            itemStyle: {
              color: colorList[1]
            },
          },
          {
            name: "离床",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data3,
            itemStyle: {
              color: colorList[2]
            },
          },
          {
            name: "睡眠",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data2,
            itemStyle: {
              color: colorList[1]
            },
          },
          {
            name: "睡眠",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data2,
            itemStyle: {
              color: colorList[1]
            },
          },
          {
            name: "睡眠",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data2,
            itemStyle: {
              color: colorList[1]
            },
          },
          {
            name: "睡眠",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data2,
            itemStyle: {
              color: colorList[1]
            },
          },
          {
            name: "睡眠",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data2,
            itemStyle: {
              color: colorList[1]
            },
          },
          {
            name: "睡眠",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data2,
            itemStyle: {
              color: colorList[1]
            },
          },
          {
            name: "睡眠",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data2,
            itemStyle: {
              color: colorList[1]
            },
          },
          {
            name: "睡眠",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data2,
            barWidth: "50",
            itemStyle: {
              color: colorList[1]
            },
          },
           {
            name: "清醒",
            type: "bar",
            stack: "总量",
            barWidth: barWidth,
            data: data1,
            itemStyle: {
              color: colorList[0]
            },
          },
           {
            name: "离床",
            type: "bar",
            stack: "总量",
            data: data3,
            itemStyle: {
              color:  colorList[2],
              barBorderRadius: [0, 20, 20, 0]
            }
          }
        ]
    };