
var xdata = ["0时","1时","2时","3时","4时","5时","6时","7时","8时","9时","10时","11时","12时"];
var ydata  = [10,20,15,10,9,16,13,21,14,17,5,9,11];
option = {
        backgroundColor: "#ffffff",
        tooltip: {
            show: true,
            formatter: "{b}: {c}人",
            trigger: "axis",
            axisPointer: {
                type:'shadow',
                shadowStyle :{
                    color:'rgba(48,95,237,0.1)'
                }
          },
          backgroundColor: "rgba(255,255,255,1)",
          padding: [5, 10],
          textStyle: {
            color: "#7588E4"
          },
          extraCssText: "box-shadow: 0 0 5px rgba(0,0,0,0.3)"
        },
         legend: {
          right: 20, 
          orient: "vertical",
          data: ["在场人数"]
        },
        xAxis: {
          data: xdata,
          axisLine: {
            lineStyle: {
              color: "#EDEDED"
            }
          },
          axisLabel: {
            color: "#666666",
            fontSize: 14
          }
        },
        yAxis: {
          nameTextStyle: {
            color: "#666666",
            fontSize: 14
          },
          axisLine: {
            lineStyle: {
              color: "#EDEDED"
            }
          },
          axisLabel: {
            color: "#666666",
            fontSize: 14
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#EDEDED"
            }
          },
          minInterval : 1
        },
        series: [
          {
            name : '在场人数',
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                     /* 4364F7*/
                    {
                      offset: 0,
                      color: "#6FB1FC"
                    },
                    
                    {
                      offset: 0.8,
                      color: "#0052D4"
                    }
                  ],
                  false
                )
              }
            },
            data: ydata,
             animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }
        ]
      }