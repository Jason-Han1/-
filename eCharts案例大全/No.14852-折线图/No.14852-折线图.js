option = {
        backgroundColor: '#ffffff',
        color: ['#4ea6ff','#666666'],
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(245, 245, 245, 0.8)',
          textStyle: {
            align: 'left',
            fontSize: 12,
            color: '#333333',
          },
          padding: 10,
          axisPointer: {
            lineStyle: {
              color: 'none',
            },
          },
          // axisPointer: {
          //   lineStyle: {
          //     color: '#71dfe9',
          //   },
          // },
        //   formatter: function(value) {
        //     let rs = ''
        //     for (let i in value) {
        //       let el = value[i]
        //       let name = el.name
        //       let length = name.length
        //       if (length === 8) {
        //         name = name.substring(0, 4) + '-' + name.substring(4, 6) + '-' + name.substring(6, 8)
        //       } else {
        //         name = name.substring(0, 4) + '年' + name.substring(4, 6) * 1.0 + '月' + name.substring(6, 8)
        //       }
        //       if (i === '0') {
        //         rs += name + '<br/>'
        //       }
        //       rs += el.marker
        //       rs += el.seriesName + ': '
        //       let item = '--'
        //       if (el.value) {
        //         item = el.value
        //         let type = _this.trendData.yData[i].type
        //         if (type === 'float') {
        //           item = (item * 1.0).toFixed(1)
        //         } else if (type === 'int') {
        //           item = Math.round(item * 1.0)
        //         } else if (type === 'percent') {
        //           item = (item * 100).toFixed(2) + '%'
        //         }
        //       }
        //       rs += item + '<br/>'
        //     }
        //     return rs
        //   }
        },
        legend: {
          show: true,
          bottom: '30px',
          left: 'center',
          icon: 'circle',
          orient: 'horizontal',
          data: [],
        },
        grid: {
          left: '4%',
          right: '6%',
          top: '8%',
          bottom: '15%',
          containLabel: true
        },
        textStyle: {
          fontSize: '14',
          fontWeight: 'normal',
          color: '#666666'
        },
        xAxis: {
          name: '',
          show: true,
          type: 'category',
          boundaryGap: false,
          data: ["201609", "201610", "201611", "201612", "201701", "201702", "201704", "201705", "201706", "201707", "201708", "201709"],
          axisLine: {
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
              color: '#eeeeee',
            }
          },
          axisLabel: {
            formatter: function(value) {
              let length = value.length
              if (length === 8) {
                return value.substring(0, 4) + '-' + value.substring(4, 6) + '-' + value.substring(6, 8)
              } else {
                return value.substring(0, 4) + '年' + value.substring(4, 6) * 1.0 + '月' + value.substring(6, 8)
              }
            }
          }
        },
        yAxis: [{
          name: '',
          show: true,
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#eeeeee',
            }
          },
          axisLine: {
            lineStyle: {
              color: '#eeeeee',
            }
          },
          axisLabel: {
            // formatter: function(value) {
            //   if (_this.trendData.yData.length >= 1) {
            //     let type = _this.trendData.yData[0].type
            //     if (type === 'percent') {
            //       value = Math.round(value * 100) + '%'
            //     }
            //   }
            //   return value
            // }
          }
        }, {
          name: '',
          show: false,
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#eeeeee',
            }
          },
          axisLabel: {
            formatter: function(value) {
              return Math.round(value * 100) + '%'
            }
          }
        }],
        series: [{
          name: '',
          type: 'line',
          yAxisIndex: 0,
          smooth: true,
          symbol: 'circle',
          symbolSize: [14, 14],
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 0],
        }],
};