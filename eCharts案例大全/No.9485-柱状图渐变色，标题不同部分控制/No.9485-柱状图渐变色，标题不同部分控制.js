option = {
        // title: {
        //   subtext: '单位： 吨',
        //   right: 20,
        //   top: "15%",
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'cross',
            crossStyle: {
              color: '#999'
            },
          }
        },
        title: {
          text: [`{a|100}`, '{b|船舶总载重（万吨）}'].join(''),
          top: '2%',
          left: "5%",
          textStyle: {
            rich: {
              a: {
                fontSize: 36,
                fontWeight: 'bold',
                color: 'rgba(56, 56, 56, 1)',
                lineHeight: 42,

              },
              b: {
                color: 'rgba(56, 56, 56, 1)',
                fontSize: 13,
                fontWeight: 400,
                padding: 10,
                lineHeight: 0,
                verticalAlign: 'bottom',
                // verticalAlign:'middle',
              },
            }
          }
        },
        grid: {
          top: "24%",
          right: "5%",
          left: "5%",
          bottom: "3%",
          containLabel: true
        },
        legend: {
          data: ["2019年", `2018年`],
          right: 10,
          icon: 'circle',
          top: 12,
          textStyle: {
            color: "#000"
          },
          itemWidth: 12,
          itemHeight: 10,
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: [1,2,3,4,5,6,7,8,9,10],
          axisLine: {
            symbol: ['none', 'arrow'],
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
        },

        yAxis: {
          type: 'value',
          min: 0,
          axisLabel: {
            formatter: '{value}',
          },
          axisLine: {
            symbol: ['none', 'arrow'],
          },
          axisTick: {
            show: true
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: 'rgba(103,103,103,0.2)'
            }
          }
        },

        series: [{
          name:  '2019年',
          type: 'bar',
          barWidth: '25%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#1171C9'
              }, {
                offset: 1,
                color: '#61C4FA'
              }]),
              barBorderRadius: 2,
            },
          },
          data: [11,22,33,22,23,43,55,67,133,55]
        },
        {
          name: `2018年`,
          type: 'bar',
          barWidth: '25%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#F76B1C'
              }, {
                offset: 1,
                color: '#FAD961'
              }]),
              barBorderRadius: 2,
            }

          },
          data: [44,13,32,42,51,12,25,35,24,166]
        },
        ]
      };