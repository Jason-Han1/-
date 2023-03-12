var colorListArr = ["#00AC49", "#389AFF", "#A258EC", "#FF9806"];
var option =  {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '8%',
      containLabel: true
    },
    xAxis: {
        type: 'category',
        data:['试验机','对比机','标准谱','Tye-123','Tye-2323'],
       
        splitLine: {
            show: false
        },
   
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    dataZoom: [
      {
        type: "slider",
        filterMode: "filter",
        bottom: "20",
      },
      {
        type: "inside",
      },
    ],
    yAxis: {
        type: 'value',
        splitNumber: 4,
         name: "功\n率\nkW",
        nameLocation: "left",
        nameTextStyle: {
          fontSize: 14,
          padding: [200, 70, -30, 0],
        },
      axisLine: {
        show: true,
      },
      axisLabel: {
        show: true,

        textStyle: {
          color: "#737373",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(131,101,101,0.2)",
          type: "dashed",
        },
      },
    },
      series: {
        z: 2,
        name: "功率",
        type: "bar",
        barWidth: 35,
        data: [12,23,44,54,23].map((item, i) => {
          let itemStyle = {
            color: i > 3 ? colorListArr[3] : colorListArr[i],
          };
          return {
            value: item,
            itemStyle: itemStyle,
          };
        }),
        label: {
          show: true,
          position: "top",
          color: "#333333",
          fontSize: 14,
          // offset: [0, 0]
        },
      },
};