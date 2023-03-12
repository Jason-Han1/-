      let res = [{
              value: 81.53,
              name: '好评'
          },
          {
              value: 17.56,
              name: '中评'
          }, {
              value: 0.91,
              name: '差评'
          }
      ]

      let a = parseInt(Math.random() * (2 + 1), 10);
      let arr = [];
      arr.push(res[a]);
      let option = {
          backgroundColor: '#7E7979',
          tooltip: {
              formatter: "{a} <br/>{b} : {c}%"
          },

          series: [{
              name: "舆论占比",
              type: "gauge",
              // detail: { formatter: "{value}%" },
              axisLine: {
                  // 坐标轴线
                  lineStyle: {
                      // 属性lineStyle控制线条样式
                      color: [
                          [0.1, "#91c7ae"],
                          [0.2, "#3366ff"],
                          [1, "#00b5ff"]
                      ]
                  }
              },
              axisLabel: {
                  show: false
              },
              // data: [{ value: 50, name: "完成率" }]
              data: arr,
              title: {

                  color: 'white'

              },
              detail: {
                  formatter: "{value}%",
                  offsetCenter: [0, "90%"] // x, y，百分比下移 就是下面的那个百分比
              }
          }]
      };

      this.protimer = setInterval(() => {
          option.series[0].data[0] = res[parseInt(Math.random() * (2 + 1), 10)];
          myChart.setOption(option, true);
      }, 2000);
      //   这个就是定时器去取res里面的一个数据进行渲染，取0-2之间的随机数，res[随机数]，
      // myChart.setOption(option, true);这里不重新渲染true去掉也行