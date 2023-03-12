option = {
        tooltip: {},
        legend: [{
          name: '项目数量',
          textStyle: {
            color: '#FFFFFF'
          }
        }, {
          name: '投资金额(万)',
          textStyle: {
            color: '#FFFFFF'
          }
        }],
        grid: {
          top: "15%",
          left: "3%",
          right: "3%",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#404A90',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: '#32ABCC',
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#404A90'
            }
          }
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#404A90',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: '#FFFFFF',
          },
          data: [2017, 2018, 2019, 2020, 2021]
        },
        series: [
          {
            name: "项目数量",
            type: "bar",
            barWidth: "20",
            itemStyle: {
              color: '#1AACFF',
              barBorderRadius: 10,
            },
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#1AACFF',
              },
              formatter: (params) => {
                if (params.value === 0) {
                  return '';
                } else {
                  return params.value;
                }
              }
            },
            data: [10, 20, 23, 10, 20],
          },
          {
            name: "投资金额(万)",
            type: "bar",
            barWidth: "20",
            itemStyle: {
              color: '#7A4AE8',
              barBorderRadius: 10,
            },
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: 'rgb(76, 166, 202)',
              },
              formatter: (params) => {
                if (params.value === 0) {
                  return '';
                } else {
                  return params.value;
                }
              }
            },
            data: [15, 12, 16, 20, 10],
          },
        ],
      }