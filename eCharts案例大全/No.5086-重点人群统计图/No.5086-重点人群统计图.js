let colorArr =  ["#88d4ff", "#3a89ff"]
let unit = '千人'
let dataArr = [
        {
            "code":"1003",
            "name":"刑释解教人员",
            "num":4
        },
        {
            "code":"1009",
            "name":"社区矫正人员",
            "num":5
        },
        {
            "code":"1011",
            "name":"精神病患者",
            "num":3
        },
        {
            "code":"1012",
            "name":"信教人员",
            "num":4
        }
    ]
let TData = dataArr.map(item => Number(item.num));
let max = Math.max(...TData);
let dataShadow = [];
for (var i = 0; i < dataArr.length; i++) {
    dataShadow.push((max * 100 + 100) / 100); //最大值+1
}

option = {
    backgroundColor: '#080b30',
    title: {
        text: '重点人群',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '3%',
        left: 'center'
    },
    grid: {
          left: '5%',
          right: 10,
          top: '15%',
          bottom: 25,
          containLabel: true
        },
    tooltip: {
          formatter: "{b}: {c}" + unit
        },
    xAxis: [
          {
            type: "category",
            data: dataArr.map(item => item.name),
            axisLabel: {
              interval: 0,
              rotate: dataArr.length > 5 ? 15 : 0, //数据大于5条时切斜显示
              color: "rgba(255,255,255,.8)",
              fontSize: 14,
              align: "center",
              padding: dataArr.length > 5 ? [30, 0, 0, -24] : [0, 0, 0, -24]
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(135,142,148,0.5)"
              }
            }
          }
        ],
    yAxis: {
          type: "value",
          name: "单位（" + unit + "）",
          nameTextStyle: {
            fontSize: 14,
            color: "#9ca2a8",
            padding: [0, 0, 10, -30]
          },
          scale: false,
          axisLabel: {
            color: "#a0a5ab",
            fontSize: 12,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
    series: [{
            type: "bar",
            data: TData,
            zlevel: 2, //修改层级，确保鼠标可移入
            barMaxWidth: 30,
            itemStyle: {
              normal: {//默认渐变
                barBorderRadius: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: colorArr[0] },
                  { offset: 1, color: colorArr[1] }
                ])
              },
              emphasis: {//高亮时渐变
                barBorderRadius: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: colorArr[1] },
                  { offset: 1, color: colorArr[0] }
                ])
              }
            },
            label: {
              normal: {
                show: true,
                position: "top",
                color: "#fff",
                fontSize: "16"
              },
              emphasis: {
                color: colorArr[0]
              }
            }
          },
          { //背景条
            type: "bar",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(0,196,255,0.2)" },
                { offset: 1, color: "rgba(0,0,0,0)" }
              ])
            },
            barMaxWidth: 30 * 2.8,
            barGap: "-190%",
            tooltip: {
              show: false
            },
            cursor: "default",
            data: dataShadow,
            animation: false
          }]
};