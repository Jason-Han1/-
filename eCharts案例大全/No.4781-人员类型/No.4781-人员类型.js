
var xdata = ["消防工","技术人员","模板工","泥瓦工","装饰工","门卫","预算员","质量员","施工员","机管员","材料员"];
var ydata  = [2,8,9,7,9,1,1,2,8,1,2];
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
           nameTextStyle: {
            color: "#666666",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#EDEDED"
            }
          },
          axisLabel: {
            color: "#666666",
            fontSize: 30
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#EDEDED"
            }
          },
        },
        yAxis: {
            name:'人数',
          nameTextStyle: {
            color: "#666666",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#EDEDED"
            }
          },
          axisLabel: {
            color: "#666666",
            fontSize: 30
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
            barWidth: 60,
            label: {
                show: true,
                position: "top",
                fontSize: 30,
                color: '#888'
            },
            itemStyle: {
              normal: {
                  barBorderRadius: 60,
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                     /* 4364F7*/
                    {
                      offset: 0,
                      color: "#51AAFD"
                    },
                    
                    {
                      offset: 0.8,
                      color: "#5F43E3"
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
          },
          {
            name: '平行于x轴的趋势线',
            type: 'line',
            markLine: {
                 lineStyle: {
                    color:'#6A86F7',
                    width:2,
                },
                data: [{
                    yAxis: 9,
                    label:{
                         fontSize: 30,
                    }
                }]
            }
        },
        ]
      }