   let dataArr = [
          {
            name: "1#电站",
            value: 215,
            unit: ""
          },
          {
            name: "2#电站",
            value: 168,
            unit: ""
          },
          {
            name: "3#电站",
            value: 84,
            unit: ""
          }
        ]
   let data = [];
   let total = 0;
   let colorList = ["#2dea9c", "#00ffff", "#eec700", "#b9b9b9", "#009ff1"];
   let placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0
        }
   };
      for (let i = 0; i < dataArr.length; i++) {
        total += dataArr[i].value;
      }
      for (let i = 0; i < dataArr.length; i++) {
        data.push(dataArr[i]);
        data.push({
          value: parseInt(total * 0.015),
          name: "",
          itemStyle: placeHolderStyle
        });
      }

      
option = {
    backgroundColor: '#080b30',
    title: {
        text: '饼状图',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '23%',
        left: 'center'
    },
    tooltip: {
          show: true,
          trigger: "item",
          formatter: function(data) {
            return (
              data.name +
                "：" + "<br/>" +
                " 数量： " +
                data.value +
                "<br/> 占比： " + 
                data.percent +
                "%" 
            );
          }
        },
    legend: {
          orient: "vertical",
          top:  '32%',
          itemWidth: 10,
          itemHeight: 10,
          x: "center",
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
          show: true
        },
    graphic: {
          elements: [
            {
              type: "group",
              left: "center",
              top: "48%",
              children: [
                {
                  type: "text",
                  z: 100,
                  top: -22,
                  left: "center",
                  style: {
                    fill: "rgba(255,255,255,0.7)",
                    fontWeight: "normal",
                    fontSize: 16,
                    textAlign: "center",
                    text: ['电站总数', ""].join("\n")
                  }
                },
                {
                  type: "text",
                  z: 101,
                  left: "center",
                  top: 0,
                  style: {
                    fill: "#1ee3c5",
                    fontSize: 24,
                    textAlign: "center",
                    text: [total].join("\n")
                  }
                }
              ]
            }
          ]
        },
     series: [
          {
            hoverOffset: 0,
            startAngle: 90,
            type: "pie",
            radius: [78, 76],
            color: colorList,
            center: ["50%", "50%"],
            tooltip: {
              show: false
            },
            labelLine: {
              show: false
            },
            label: {
              show: false
            },
            data: data
          },
          {
            hoverOffset: 1,
            startAngle: 90,
            type: "pie",
            radius: [80, 97],
            center: ["50%", "50%"],
            color: colorList,
            label: {
              normal: {
                formatter: datas => {
                  // var unit = datas.data.unit ? datas.data.unit : "%";
                  if (datas.name) {
                    return "{d|" + datas.data.value + "}";
                  } else {
                    return "";
                  }
                },
                rich: {
                  b: {
                    fontSize: 12,
                    color: "#fff",
                    align: "left",
                    padding: [-12, 0, 0, 0]
                  },
                  d: {
                    fontSize: 18,
                    align: "left",
                    fontFamily: "DINOT",
                    padding: [-5, 4, 0, 0],
                    lineHeight: 24
                  },
                  c0: {
                    fontSize: 14,
                    align: "left",
                    padding: [2, 10, 4, 10],
                    borderColor: colorList[0],
                    borderWidth: 1
                  }
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 10,
                length2: 20
              }
            },
            data: data
          }
        ]
};