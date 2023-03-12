const dataList=[
              { name: "固定占比", value: 70 },
              { name: "浮动占比", value: 5 },
              { name: "浮动占比1", value: 10 },
              { name: "浮动占比2", value: 20 },
              { name: "浮动占比3", value: 50 }
            ]
option = {
        backgroundColor: "#fff",
        color: ["#3AA0FF", "#D0FF23","#FAD337","#F2637B","#5164FE","#B37BF"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          }
        },
        legend: {
          data: ["固定占比", "浮动占比", "浮动占比1", "浮动占比2", "浮动占比3"],
          icon: "circle",
          itemWidth: 8,
          itemHeight: 8,
          width: "50%",
          textStyle: {
            lineHeight: 50,
            padding: [0, 30, 0, 0],
            rich: {
              a: {
                fontSize: 16,
                fontWeight: "bold"
              },
              b: {
                fontSize: 12,
                color: "rgba(0,0,0,0.65)"
              }
            }
          },

          top: "center",
          right: 50,
          formatter: name => {
            const item = dataList[dataList.findIndex(item => item.name === name)];
            return `{a|${item.value}%}  {b|${item.name}}`;
          }
        },
        series: [
          {
            type: "pie",
            animationType: "scale",
            center:['20%',"50%"],
             radius:['20%', '30%'],
             label:{
                 show: false
             },
              itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 4
            }
        },
        startAngle:-45,
            data: [
              { name: "固定占比", value: 70 },
              { name: "浮动占比", value: 5 },
              { name: "浮动占比1", value: 10 },
              { name: "浮动占比2", value: 20 },
              { name: "浮动占比3", value: 50 }
            ]
          }
        ]
      };