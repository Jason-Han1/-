const hours = ['1.0', '1.5', '2.0', '2.5', '3.0'];
      const days = ["2021/09/27", "2021/09/28", "2021/09/29", "2021/09/30"];
      option = {
        title: {
          text: "Velocity vs.Date",
        },
        legend: {
          left: "right",
        },
        backgroundColor: "white",
        tooltip: {
          position: "top",
          formatter: function(params) {
            return (
                // params.value[1] +
                " Liquid level: " +
                hours[params.value[1]] +'</br>' +
                " Data: " +
                days[params.value[0]]+'</br>' +
                " Building: " +
                option.series[0].name
            );
          }
        },
        grid: {
          left: 2,
          bottom: 10,
          right: 30,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: days,
          // boundaryGap: false,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
          },
        },
        yAxis: {
          type: "category",
          data: hours,
          axisLine: {
            show: true,
          },
        },
        series: [
          {
            name: "Building A",
            type: "scatter",
            itemStyle: {
              normal: {
                color: "#623ce7",
              },
            },
            data: [
              // 第一个参数是x轴 第二个参数是y轴
              [0, 1],
              [1, 2],
              [2, 3],
              [3, 4]
            ],
            animationDelay: function(idx) {
              return idx * 5;
            },
            markLine: {
              show:true,
              symbol: ["none", "none"],
              lineStyle: {
                type: "solid",
                color: '#34f309'
              },
              data: [{ yAxis: '2.0' }],
            }
          },
          {
            name: "Building B",
            type: "scatter",
            itemStyle: {
              normal: {
                color: "rgba(32,52,4,0.6)",
              },
            },
            data: [
              [0, 4],
              [1, 3],
              [2, 2],
              [3, 1]
            ],
            markLine: {
              show:true,
              symbol: ["none", "none"],
              lineStyle: {
                type: "solid",
                color: '#34f309'
              },
              data: [{ yAxis: '2.0' }],
            },
            animationDelay: function(idx) {
              return idx * 5;
            }
          },
          {
            name: "Building C",
            type: "scatter",
            itemStyle: {
              normal: {
                color: "#64AD59",
              },
            },
            data: [
              [0, 1],
              [1, 4],
              [2, 2],
              [3, 3]
            ],
            markLine: {
              show:true,
              symbol: ["none", "none"],
              lineStyle: {
                type: "solid",
                color: '#34f309'
              },
              data: [{ yAxis: '2.0' }],
            },
            animationDelay: function(idx) {
              return idx * 5;
            }
          },
          {
            name: "Building D",
            type: "scatter",
            itemStyle: {
              normal: {
                color: "#EAD84C",
              },
            },
            data: [
              [0, 1],
              [1, 3],
              [2, 2],
              [3, 4]
            ],
            markLine: {
              show:true,
              symbol: ["none", "none"],
              lineStyle: {
                type: "solid",
                color: '#34f309'
              },
              data: [{ yAxis: '2.0' }],
            },
            animationDelay: function(idx) {
              return idx * 5;
            }
          },
          {
            name: "Building E",
            type: "scatter",
            itemStyle: {
              normal: {
                color: "#0e0101",
              },
            },
            data: [
              [0, 4],
              [1, 1],
              [2, 2],
              [3, 3]
            ],
            markLine: {
              show:true,
              symbol: ["none", "none"],
              lineStyle: {
                type: "solid",
                color: '#34f309'
              },
              data: [{ yAxis: '2.0' }],
            },
            animationDelay: function(idx) {
              return idx * 5;
            }
          },
          {
            name: "Building F",
            type: "scatter",
            itemStyle: {
              normal: {
                color: "red",
              },
            },
            data: [
              [0, 3],
              [1, 3],
              [2, 3],
              [3, 4]
            ],
            markLine: {
              show:true,
              symbol: ["none", "none"],
              lineStyle: {
                type: "solid",
                color: '#34f309'
              },
              data: [{ yAxis: '2.0' }],
            },
            animationDelay: function(idx) {
              return idx * 5;
            }
          },
          {
            name: "Building G",
            type: "scatter",
            itemStyle: {
              normal: {
                color: "blue",
              },
            },
            data: [
              [0, 2],
              [1, 2],
              [2, 3],
              [3, 4]
            ],
            markLine: {
              show:true,
              symbol: ["none", "none"],
              lineStyle: {
                type: "solid",
                color: '#34f309'
              },
              data: [{ yAxis: '2.0' }],
            },
            animationDelay: function(idx) {
              return idx * 5;
            }
          },
        ],
      };
      option && myChart.setOption(option);