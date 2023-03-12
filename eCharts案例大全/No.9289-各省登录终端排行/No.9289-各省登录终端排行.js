var barData=[
            {
                "name": "上海",
                "value": 1
            },
            {
                "name": "河南",
                "value": 3
            },
            {
                "name": "江苏",
                "value": 1
            },
            {
                "name": "吉林",
                "value": 0
            },
            {
                "name": "广东",
                "value": 0
            },
            {
                "name": "黑龙江",
                "value": 0
            },
            {
                "name": "广西",
                "value": 0
            },
            {
                "name": "海南",
                "value": 0
            },
            {
                "name": "重庆",
                "value": 0
            },
            {
                "name": "四川",
                "value": 0
            },
            {
                "name": "贵州",
                "value": 0
            },
            {
                "name": "云南",
                "value": 0
            },
            {
                "name": "西藏",
                "value": 0
            },
            {
                "name": "北京",
                "value": 0
            },
            {
                "name": "浙江",
                "value": 0
            },
            {
                "name": "天津",
                "value": 0
            },
            {
                "name": "安徽",
                "value": 0
            },
            {
                "name": "河北",
                "value": 0
            },
            {
                "name": "福建",
                "value": 0
            },
            {
                "name": "山西",
                "value": 0
            },
            {
                "name": "江西",
                "value": 0
            },
            {
                "name": "内蒙",
                "value": 0
            },
            {
                "name": "山东",
                "value": 0
            },
            {
                "name": "陕西",
                "value": 0
            },
            {
                "name": "甘肃",
                "value": 0
            },
            {
                "name": "青海",
                "value": 0
            },
            {
                "name": "湖北",
                "value": 0
            },
            {
                "name": "宁夏",
                "value": 0
            },
            {
                "name": "辽宁",
                "value": 0
            },
            {
                "name": "湖南",
                "value": 0
            },
            {
                "name": "新疆",
                "value": 0
            }
        ]
      
barData = barData.sort(function(a, b) {
        return b.value - a.value;
      });
      var xData = [],
        option = null;
      for (var j = 0; j < barData.length; j++) {
        if (j < 10) {
          xData.push("0" + j + barData[j].name);
        } else {
          xData.push(j + barData[j].name);
        }
      }
      var option = {
          backgroundColor:'#000',
        title: [
          {
            show: true,
            text: "各省登录终端排行",
            subtext: "时间频率：1min",
            subtextStyle: {
              color: "rgba(255,255,255,0.8)",
              lineHeight: 20
            },
            textStyle: {
              color: "rgba(0,244,255,0.9)",
              fontSize: 18
            },
            right: 20,
            top: 20
          }
        ],
        grid: {
          left: 25,
          top: 33,
          bottom: 0,
          height: "100",
          width: "98%"
        },
        yAxis: {
          show: false
        },
        xAxis: {
          type: "category",
          inverse: false,
          nameGap: 16,
          axisLine: {
            //轴线
            show: true,
            lineStyle: {
              color: "#ddd"
            }
          },
          axisTick: {
            //刻度
            show: false,
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: {
            interval: 0,
            margin: 8,
            textStyle: {
              color: "#fff",
              align: "center",
              fontSize: 14
            },


            formatter: function(params) {
              if (parseInt(params.slice(0, 2)) < 3) {
                var aa = [
                  params
                    .slice(2)
                    .split("")
                    .join("\n")
                ].join("\n");
                //console.log("11111111", aa);
                return aa;
              } else {
                return [
                  params
                    .slice(2)
                    .split("")
                    .join("\n")
                ].join("\n");
              }
            }
          },
          data: xData
        },

        series: [
          {
            name: "barSer",
            type: "bar",
            roam: false,
            visualMap: false,
            zlevel: 2,
            barMaxWidth: 16,
            barGap: 0,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,244,255,1)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(0,77,167,1)" // 100% 处的颜色
                    }
                  ],
                  false
                ),
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: "rgba(0,160,221,1)",
                shadowBlur: 4
              }
            },
            label: {
              normal: {
                show: true,
                lineHeight: 10,
                width: 80,
                height: 30,
                //backgroundColor: "rgba(0,160,221,0.1)",
                borderRadius: 200,
                position: ["-30", "-13"],
                distance: 1,
                formatter: ["{a|{c}}"].join(","),
                rich: {
                  d: {
                    color: "#3CDDCF"
                  },
                  a: {
                    color: "#fff",
                    align: "center"
                  },
                  b: {
                    width: 1,
                    height: 30,
                    borderWidth: 1,
                    borderColor: "#234e6c",
                    align: "left"
                  }
                }
              }
            },
            data: barData
          }
        ]
      };