var xAxisData = ['选址意见书', '用地规划条件', '用地规划条件变更', '用地规划许可证', '用地规划许可变更', '方案审查', '工程规划许可证', '工程规划许可变更', '规划验线', '规划条件核实']
      var dataArr = [1403, 32884, 10229, 9969, 8456, 11262, 58846, 8100, 20676, 33563]
      var maxData = []
      dataArr.sort(function (a, b) {
        return a - b
      })
      var max = dataArr[dataArr.length - 1]
      dataArr.forEach((item, index) => {
        maxData[index] = max
      })

option =  {
        grid: {
          top: '25%',
          left: '5%',
          right: '10%',
          bottom: '8%',
          containLabel: true
        },
        tooltip: {//提示信息
          show: 'true',
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
              color: 'rgba(112,112,112,0)'
            }
          },
          formatter: function(params) {
            var unit = params[0].name.substring(params[0].name.indexOf('(') + 1, params[0].name.indexOf(')'))
            return params[0].name + '：' + params[0].value + '条数据'
          },
          backgroundColor: 'rgba(0,0,0,0.7)', // 背景
          padding: [8, 10], //内边距
          extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);' //添加阴影
        },
        xAxis: [{//x轴相关设置
          show: true,
          name: '来源',
          nameTextStyle: {
            fontSize: 14,
            fontFamily: 'Microsoft YaHei',
            color: '#fff'
          },
          type: 'category',
          nameLocation: 'end',
          nameGap: 8,
          z: 5,
          axisLabel: {
            show: true,
            fontSize: 16,
            fontFamily: 'Microsoft YaHei',
            color: '#fff',
            interval: 0,
            margin: 16,
            formatter: function(val) {
              var strs = val.split('') //字符串数组
              var str = ''
              for (var i = 0, s; s = strs[i++];) { //遍历字符串数组
                str += s
                if (!(i % 3)) {
                  str += '\n'
                }
              }
              return '{title|' + str + '} '
            },
            rich: {
              title: {
                fontSize: 12
              }
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: xAxisData
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: xAxisData
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            color: '#fff'
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: xAxisData
        }],
        yAxis: {
          type: 'value',
          name: '数量',
          minInterval: 1,
          nameLocation: 'end',
          nameGap: 10,
          splitLine: { //网格线
            lineStyle: {
              type: 'dashed' //设置网格线类型 dotted：虚线   solid:实线
            },
            show: true //隐藏或显示
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            fontSize: 12,
            fontFamily: 'Arial',
            color: '#BFBFBF'
          },
          axisLine: {
            show: false
          }
        },
        series: [{//中间的细柱条
          type: 'bar',
          stack: 1,
          xAxisIndex: 0,
          barWidth: 10,
          barGap: 5,
          z: 2,
          itemStyle: {
            normal: {
              barBorderRadius: [50, 50, 0, 0],
              color: function (params) {
                var colorList = ['#D2D5FF', '#C1FAFF']
                if (params.dataIndex % 2 === 0) {
                  return colorList[0]
                } else {
                  return colorList[1]
                }
              }
            }
          },
          data: (function() {
            var itemArr = []
            for (var i = 1; i < (dataArr.length + 1); i++) {
              var item = {
                value: dataArr[i - 1]

              }
              itemArr.push(item)
            }
            return itemArr
          }())
        },
        {//圆柱中的空隙部分
          type: 'bar',
          xAxisIndex: 1,
          barGap: '140%',
          data: maxData,
          //   [60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000],
          barWidth: 22,
          itemStyle: {
            normal: {
              barBorderRadius: [50, 50, 0, 0],
              color: '#fff'
            }
          },
          z: 1
        },
        {//柱状图的外层边框
          type: 'bar',
          xAxisIndex: 2,
          barWidth: 25,
          barGap: 1,
          z: 0,
          itemStyle: {
            normal: {
              barBorderRadius: [50, 50, 0, 0],
              color: function (params) {
                var colorList = ['#7882FF', '#51CFDA']
                if (params.dataIndex % 2 === 0) {
                  return colorList[0]
                } else {
                  return colorList[1]
                }
              }
            }
          },
          data: maxData
        },
        {//底部圆圈部分
          type: 'scatter',
          hoverAnimation: false,
          xAxisIndex: 2,
          symbolOffset: [0, 30], //相对于原本位置的偏移量
          symbolSize: 60,
          z: 1,
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = [ '#7882FF', '#42BFCA']
                if (params.dataIndex % 2 === 0) {
                  return colorList[0]
                } else {
                  return colorList[1]
                }
              }
            }
          },
          data: (function() {
            var itemArr = []
            for (var i = 1; i < (dataArr.length + 1); i++) {
              var item = {
                value: 0
              }
              itemArr.push(item)
            }
            return itemArr
          }())
        }
        ]
      }
      function translateColor(index) {
        if (index > 5) {
          return translateColor(index - 5)
        }
        return index
      }