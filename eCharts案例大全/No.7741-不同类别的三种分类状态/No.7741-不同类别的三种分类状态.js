
  var yData = ['','不达标','基本保障','品质提升']

option = {
    backgroundColor:"#fff",
    title: {
        text: 'Weather Statistics'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
    legend: {
        data: ['City Alpha', 'City Beta', 'City Gamma']
    },
    grid: {
        left: 100,
        width: 784,
        height:304,
        backgroundColor:"red",
        containLabel: true
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [
         {
              type: "category",
              data: ["交通服务", "购物服务", "健身服务", "休闲服务", "阅读服务", "教育服务", "就医服务", "养老服务", "餐饮服务", "政务服务", "娱乐服务", "生活服务"],
              name: "",
              axisLabel: {
                //将汉字竖起来排列
                formatter: function(value) {
                  return value.split("").join("\n");
                },
                textStyle: {
                  fontSize: 12,
                  color: "#999999"
                },
                  padding:[-15,0,0,0]
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#fff"
                }
              }
            }    
    ],
    yAxis:  [
      {
        type: 'category',
        name: '',
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: '#999999'
          }
        },
        splitLine: {
          show: false
        }, //去掉网格背景
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff'
          }
        },
        data:yData
      }
    ],
    series: [
            {
              barWidth: 14,
              name: "人口",
              type: "bar",
              stack: "广告",
              data: [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
              itemStyle: {
                normal: {
                  color: function(params) {
                    var colorList = ["", "#c9caea", "#ff8690", "#5e81f4"];
                    return colorList[params.value];
                  },
                  barBorderRadius: 7
                }
              }
            },
            {
              type: "bar",
              barWidth: 14,
              xAxisIndex: 0,
              barGap: "-100%",
              data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //这个是控制背景的长度的
              itemStyle: {
                normal: {
                  color: "#f1f1f9",
                  barBorderRadius: 7
                }
              },
              zlevel: -1
            }
          ]
};
