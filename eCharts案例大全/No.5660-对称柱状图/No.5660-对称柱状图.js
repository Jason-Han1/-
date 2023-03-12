var data = {
        etc: {
          name: '数据贡献（条）',
          data: [{
            value: 4,
            label: '4'
          }, {
            value: 23,
            label: '23'
          }, {
            value: 22,
            label: '22'
          }, {
            value: 32,
            label: '32'
          }, {
            value: 56,
            label: '56'
          }]
        },
        notEtc: {
          name: '数据订阅（条）',
          data: [{
            value: 5,
            label: '5'
          }, {
            value: 19,
            label: '19'
          }, {
            value: 23,
            label: '23'
          }, {
            value: 34,
            label: '34'
          }, {
            value: 43,
            label: '43'
          }]
        }
      }

      var legendData = [data.etc.name, data.notEtc.name]
      var yAxisDataN = data.etc.data.map(e => e.label)
      var yAxisDataV = data.notEtc.data.map(e => e.label)
      var yAxisLabelN = data.etc.data.map(e => e.value).sort((a, b) => a - b)
      var yAxisLabelV = data.notEtc.data.map(e => e.value).sort((a, b) => a - b)

      const top = 10
      const bottom = 10
      var labelSetting = {
        label: '16',
        yLabel: '16'
      }
      option = {
          backgroundColor: '#000',
        title: {
          show: false
        },
        tooltip: {
          show: false,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          left: 'center',
          bottom: 0,
          itemWidth: 10, // 图例标记的图形宽度
          itemHeight: 10, // 图例标记的图形高度
          borderRadius: 0,
          // inactiveColor: '#FFF',
          data: legendData,
          textStyle: {
            color: '#fff'
          },
          icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEWXg/qXg/qXg/qXg/qX g/qXg/qXg/qXg/r///+OjQi/AAAAB3RSTlMAcxBEmDyU29UKNQAAAAFiS0dECIbelXoAAAAHdElN RQfkCRkJLi/OB4aqAAAAIklEQVQI12MQBAEGAQYGBkYYyWRsbMIgwFpeXo6TFBQDkgDLwQoSYoCm MAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wOS0yNVQwOTo0Njo0NyswMzowMBWwIEkAAAAldEVY dGRhdGU6bW9kaWZ5ADIwMjAtMDktMjVUMDk6NDY6NDcrMDM6MDBk7Zj1AAAAAElFTkSuQmCC'
        },
        grid: [{
          left: '6%',
          right: '50.2%',
          containLabel: false,
          bottom,
          top
        }, {
          left: '50%',
          width: 0,
          top: top,
          bottom: bottom
        }, {
          right: '6%',
          left: '50.2%',
          containLabel: false,
          bottom,
          top
        }],
        xAxis: [{
          type: 'value',
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          show: false
        }, {
          gridIndex: 2,
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        yAxis: [
          {
            show: true,
            position: 'left',
            axisLabel: {
              color: '#9783fa',
              fontSize: labelSetting.yLabel
            },
            axisLine: {
              show: false
            },
            type: 'category',
            inverse: false,
            axisTick: {
              show: false
            },
            data: yAxisDataN
          },
          {
            show: false,
            gridIndex: 1,
            position: 'center',
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              margin: 0,
              color: '#67b0fa',
              fontSize: labelSetting.yLabel
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: []
          },
          {
            show: true,
            gridIndex: 2,
            position: 'right',
            axisLabel: {
              color: '#67b0fa',
              fontSize: labelSetting.yLabel
            },
            axisLine: {
              show: false
            },
            type: 'category',
            inverse: false,
            axisTick: {
              show: false
            },
            data: yAxisDataV
          }
        ],
        series: [
          {
            name: legendData[0],
            type: 'bar',
            barWidth: 10,
            showBackground: true,
            backgroundStyle: {
              barBorderRadius: [10, 0, 0, 10],
              color: '#122f5e'
            },
            label: {
              show: false,
              fontFamily: 'Rubik-Medium',
              fontSize: labelSetting.label,
              distance: 10,
              color: '#fff',
              position: 'top',
              formatter: function(params) {
                return params.value + '%'
              }
            },
            itemStyle: {
              color: '#9783fa',
              barBorderRadius: [10, 0, 0, 10]
            },
            data: yAxisLabelN
          },
          {
            type: 'bar',
            barWidth: 10,
            showBackground: true,
            backgroundStyle: {
              barBorderRadius: [0, 10, 10, 0],
              color: '#122f5e'
            },
            label: {
              show: false,
              fontFamily: 'Rubik-Medium',
              fontSize: labelSetting.label,
              distance: 10,
              color: '#fff',
              position: 'right',
              formatter: function(params) {
                return params.value + '%'
              }
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: legendData[1],
            itemStyle: {
              color: '#67b0fa',
              barBorderRadius: [0, 10, 10, 0]
            },
            data: yAxisLabelV
          }
        ]
      }