var barWidth = 20
      var symbolSize = [barWidth, 10]
      var symbolOffsetT = ['-75%', -5] // 修改蓝色柱子头部椭圆位置
      var symbolOffsetB = [-15, 5] // 修改蓝色柱子底部椭圆位置
      var normalColor = '#A7D1F2'
      var fontSize = 12
      const sum = (...arr) => [].concat(...arr).reduce((acc, val) => Number(acc) + Number(val), 0)
      var totallist = [286, 199, 13, 26]
      var yData1total = sum(totallist)
      var datas = {
        xdata: [
          '满意',
          '较满意',
          '不满意',
          '未接听'
        ],
        yData1: totallist,
        yData2: [(totallist[0] / yData1total * 100).toFixed(0), (totallist[1] / yData1total * 100).toFixed(0), (totallist[2] / yData1total * 100).toFixed(0), (totallist[3] / yData1total * 100).toFixed(0), (totallist[4] / yData1total * 100).toFixed(0), (totallist[5] / yData1total * 100).toFixed(0)],
        legendData: ['回访人数', '所占百分比']
      }
option = {
          animation: false, // 去除加载时缓动动画
          grid: {
            top: '12%',
            right: '10%',
            left: '10%',
            bottom: '15%'
          },
          legend: {
            top: -5,
            right: 70,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              fontSize: 12,
              color: '#A7D1F2',
              padding: [3, 8, 0, 2]
            },
            data: datas.legendData
          },
          xAxis: {
            axisLine: {
              lineStyle: {
                color: normalColor
              }
            },
            axisTick: {
              'show': false
            },
            axisLabel: {
              textStyle: {
                color: normalColor,
                fontSize: fontSize
              },
              margin: 15
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: normalColor
              }
            },
            data: datas.xdata
          },
          yAxis: [{
            type: 'value',
            name: '单位:人次：',
            nameTextStyle: {
              fontSize: fontSize
            },
            color: normalColor,
            axisTick: {
              'show': false
            },
            splitLine: {
              'show': true,
              lineStyle: {
                'color': '#384267',
                'type': 'dashed'
              }
            },
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: normalColor,
                fontSize: fontSize
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: normalColor
              }
            }
          },
          {
            type: 'value',
            name: '百分比',
            nameTextStyle: {
              fontSize: fontSize
            },
            color: normalColor,
            axisTick: {
              'show': false
            },
            splitLine: {
              show: false
            },
            max: 100,
            axisLabel: {
              formatter: '{value} %',
              textStyle: {
                color: normalColor,
                fontSize: fontSize
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: normalColor
              }
            }
          }
          ],
          series: [{ // 蓝色柱子
            name: datas.legendData[0],
            tooltip: {
              show: true
            },
            type: 'bar',
            barWidth: barWidth, // 柱子宽度
            barGap: 0.5, // 柱子之间间距
            emphasis: {
              itemStyle: { // 填充部分鼠标移上去颜色
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(42, 118, 255,0.8)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 216, 255,0.8)'
                  }
                  ])
              }
            },
            label: {
              show: true,
              color: '#FFFFFF',
              position: 'top',
              padding: 10,
              textStyle: {
                fontSize: fontSize
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(42, 118, 255, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 216, 255, 1)'
                  }
                  ]),
                borderWidth: '1',
                borderColor: 'rgba(42, 118, 255, 1)'
              }
            },
            data: datas.yData1,
            legendHoverLink: false
          }, {
            // 蓝色柱子底部椭圆
            name: datas.legendData[0],
            tooltip: {
              show: true
            },
            type: 'pictorialBar',
            itemStyle: {
              normal: { // 未填充部分鼠标移上去颜色
                color: '#00ABFF',
                borderWidth: 1,
                borderColor: '#00ABFF'
              }
            },
            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAA/ElEQVQ4ja2VOw7CMBBEHyEV4iAUdIC4BxId3xbOk5qAoEIcBNFSUHAGKkQJaKUYmfgTJ8pISbHr3Zkd20ljdPoQiDaQ3B+8gTXwCimLjYgdXeAIdLJsHxgDN+tqDZERMbEAzlpzMsILMDNWlyAQS7bABmgZ2eK8lyBYoWNCL4G3wAElaOojkJF3RSN7YK1XBE4FFfDnQFTRkiL8BNv2oC5I71heKdADrjU2lws4lP2IcoHUWFoeB2CgBOsWybdlmT3PCo1V/USvt+1BqisIhNMBGwG+Agv2PkEuAn3kucMylZe747Q05JjK7cwrDJ4w9H+gGiZAE1gFHQTgC/m7OlXDmboLAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: symbolSize,
            symbolOffset: symbolOffsetB,
            symbolPosition: 'start',
            data: datas.yData1,
            z: 3
          },
          {
            // 蓝色柱子头部椭圆
            name: datas.legendData[0],
            tooltip: {
              show: false
            },
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: '#008ED7',
                borderWidth: 1,
                borderColor: '#008ED7'
              }
            },

            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAABIElEQVQ4jaWVMWoCQRSGv0iKFIm3MLVFYshFbGxMEwTTeQxrBTuFVMkRPMBWhhQpAh5CEBEJhMgjb2T0ze7Mrh8sLPNm5h++nZm9GMz/SKQOjLVrD9ikDLs0LWGawBvQ0GoLaAOfwd4eNdNieQYyb3L0PdNaIUUBN8ArMAGuTPW/baJ9rk1VyQsQJQugYyoW6fOhYwyhgJCSGLnK/ICYkhhBZS6gjJIYHZ2r6QKqKIlx65RJwAr4iQyowq/MKwHvwF3KoSnBl845dd9gCTx6V8E5TIEH4JuTXbQD+noFrCsEyN30pM/WNYbOQRVlouReV39EKABP2chULEdKUgNQZS8FykRJ91RJmQBHSJlTMosNTv0fOGVDvQZkM+Su+gCwB/qVO5cbNt4bAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: symbolSize,
            symbolOffset: symbolOffsetT,
            symbolPosition: 'end',
            data: datas.yData1,
            z: 3
          }, {
            // 黃色柱子
            name: datas.legendData[1],
            type: 'bar',
            // stack: 1,
            barWidth: barWidth, // 柱子宽度
            barGap: 0.5, // 柱子之间间距
            yAxisIndex: 1, // 选择第二个y轴 不写的话 双y轴无法实现
            emphasis: {
              itemStyle: { // 左侧未填充部分鼠标移上去颜色
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(246, 226, 3,0.8)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(235, 228, 150,0.8)'
                  }
                  ]),
                barBorderColor: 'rgba(246, 226, 3,0.8)'
              }
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{c}%',
              padding: 10,
              color: '#FFFFFF',
              textStyle: {
                fontSize: fontSize
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(246, 226, 3, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(235, 228, 150, 1)'
                  }
                  ]),
                barBorderColor: 'rgba(246, 226, 3,1)'
              }
            },
            data: datas.yData2
          }, {
            // 黃色柱子底部椭圆
            name: datas.legendData[1],
            tooltip: {
              show: false
            },
            type: 'pictorialBar',
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: 'rgba(214, 207, 122, 1)',
                borderWidth: 1,
                borderColor: 'rgba(214, 207, 122, 1)'
              }
            },
            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAA/ElEQVQ4ja2VOw7CMBBEHyEV4iAUdIC4BxId3xbOk5qAoEIcBNFSUHAGKkQJaKUYmfgTJ8pISbHr3Zkd20ljdPoQiDaQ3B+8gTXwCimLjYgdXeAIdLJsHxgDN+tqDZERMbEAzlpzMsILMDNWlyAQS7bABmgZ2eK8lyBYoWNCL4G3wAElaOojkJF3RSN7YK1XBE4FFfDnQFTRkiL8BNv2oC5I71heKdADrjU2lws4lP2IcoHUWFoeB2CgBOsWybdlmT3PCo1V/USvt+1BqisIhNMBGwG+Agv2PkEuAn3kucMylZe747Q05JjK7cwrDJ4w9H+gGiZAE1gFHQTgC/m7OlXDmboLAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: symbolSize,
            symbolOffset: [15, 5],
            symbolPosition: 'start',
            data: datas.yData2,
            z: 7
          },
          {
            // 黃色柱子头部椭圆
            name: datas.legendData[1],
            tooltip: {
              show: false
            },
            type: 'pictorialBar',
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: 'rgba(214, 207, 122, 1)',
                borderWidth: 1,
                borderColor: 'rgba(214, 207, 122, 1)'
              }
            },
            symbolRotate: 0,
            symbolSize: symbolSize,
            symbolOffset: ['15', '-5'],
            symbolPosition: 'end',
            data: datas.yData2,
            z: 7
          }
          ]
};
