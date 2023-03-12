option = {
        title: {
          show: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            },
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        legend: {
        },
        grid: {
          top: 50,
          left: '2%',
          bottom: 10,
          right: '2%',
          textStyle: {
            color: '#fff'
          },
          containLabel: true
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0,
            color: '#333',
            fontSize: 12
          },
          data: ['普通住宅', '非普通住宅', '其他类型房产']
        }],
        yAxis: [{
          type: 'value',
          name: '金额',
          splitLine: {
            'show': false
          },
          axisLine: {
            'show': false
          },
          axisTick: {
            'show': false
          },
          axisLabel: {
            interval: 0,
            color: '#333',
            fontSize: 12

          },
          splitArea: {
            show: false
          }
        }, {
          type: 'value',
          name: '税率',
          splitLine: {
            'show': false
          },
          axisLine: {
            'show': false
          },
          axisTick: {
            'show': false
          },
          axisLabel: {
            interval: 0,
            color: '#333',
            fontSize: 12,
            formatter: '{value} %'
          },
          splitArea: {
            show: false
          }
        }],
        series: [
          {
            name: '转让房地产收入总和',
            type: 'bar',
            barWidth: '40', // 柱状宽度
            itemStyle: {
              normal: {
                color: '#4c98dc',
                barBorderRadius: 0
              }
            },
            data: [890085481.41, 376481401.95, 80450402.81]
          }, {
            name: '扣除项目金额',
            type: 'bar',
            barWidth: '40', // 柱状宽度
            itemStyle: {
              normal: {
                color: '#ea717a',
                barBorderRadius: 0
              }
            },
            data: [661036540.32, 254806783.83, 60608710.4]
          }, {
            name: '增值额',
            type: 'bar',
            barWidth: '40', // 柱状宽度
            itemStyle: {
              normal: {
                color: '#6dcbb3',
                barBorderRadius: 0
              }
            },
            data: [229048941.09, 121674618.12, 19841692.41]
          }, {
            name: '增值率%',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 5, // 圆点大小
            symbol: 'circle',
            smooth: false, // 是否平滑曲线
            itemStyle: { // 折线圆点设置
              normal: {
                color: '#eb8060',
                barBorderRadius: 0
              }
            },
            lineStyle: { // 折线设置
              normal: {
                width: 2,
                color: '#eb8060'
              }
            },
            data: [34.65, 47.75, 32.74]
          }, {
            name: '适用税率%',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 5, // 圆点大小
            symbol: 'circle',
            smooth: false, // 是否平滑曲线
            itemStyle: { // 折线圆点设置
              normal: {
                color: '#f4cd18',
                barBorderRadius: 0
              }
            },
            lineStyle: { // 折线设置
              normal: {
                width: 2,
                color: '#f4cd18'
              }
            },
            data: [30, 30, 30]
          }, {
            name: '应纳税额',
            type: 'bar',
            barWidth: '40', // 柱状宽度
            itemStyle: {
              normal: {
                color: '#66cafe',
                barBorderRadius: 0
              }
            },
            data: [68714682.33, 36502385.44, 5952507.72]
          }, {
            name: '已纳税额',
            type: 'bar',
            barWidth: '40', // 柱状宽度
            itemStyle: {
              normal: {
                color: '#db96a5',
                barBorderRadius: 0
              }
            },
            data: [60343897.76, 25523790.36, 5454185]
          }, {
            name: '减免税额',
            type: 'bar',
            barWidth: '40', // 柱状宽度
            itemStyle: {
              normal: {
                color: '#9ffce5',
                barBorderRadius: 0
              }
            },
            data: [0, 0, 0]
          }, {
            name: '应补退税额',
            type: 'bar',
            barWidth: '40', // 柱状宽度
            itemStyle: {
              normal: {
                color: '#f1b292',
                barBorderRadius: 0
              }
            },
            data: [8370784.57, 10978595.08, 498322.72]
          }, {
            name: '税负率%',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 5, // 圆点大小
            symbol: 'circle',
            smooth: false, // 是否平滑曲线
            itemStyle: { // 折线圆点设置
              normal: {
                color: '#feff4c',
                barBorderRadius: 0
              }
            },
            lineStyle: { // 折线设置
              normal: {
                width: 2,
                color: '#feff4c'
              }
            },
            data: [7.72, 9.7, 7.4]
          }
        ]
      }
