  const colorList = ['#02d6fc', '#367bec', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF']
  var option = {
      backgroundColor: '#fff',
      title: [{
          text: '通行车次',
          x: '20%',
          y: '20%',
          textStyle: {
              fontSize: 16,
              color: '#000'
          }
      }, {
          text: '交易金额（元）',
          x: '70%',
          y: '20%',
          textStyle: {
              fontSize: 16,
              color: '#000'
          }
      }],
      tooltip: {
          trigger: 'item'
      },
      legend: {
          left: '0',
        //   y:'center',
          orient:'vertical',
          data: [
              "ETC通行",
              "现金",
              "ETC刷卡",
              "移动支付"
          ]
      },
      series: [{
          name: '通行交易介质占比',
          type: 'pie',
          center: ['25%', '50%'],
          radius: ['15%','30%'],
          clockwise: true,
          avoidLabelOverlap: true,
          hoverOffset: 15,
          itemStyle: {
              normal: {
                  color: function(params) {
                      return colorList[params.dataIndex]
                  }
              }
          },
          label: {
              show: true,
              position: 'outside',
              formatter: '{a|{b}：{d}%}\n{hr|}',
              rich: {
                  hr: {
                      backgroundColor: 't',
                      borderRadius: 3,
                      width: 3,
                      height: 3,
                      padding: [3, 3, 0, -12]
                  },
                  a: {
                      fontSize: 16,
                      color: '#000',
                      padding: [-30, 15, -20, 15]
                  }
              }
          },
          labelLine: {
              normal: {
                  length: 20,
                  length2: 30,
                  lineStyle: {
                      width: 1
                  }
              }
          },
          data: [{
                  name: 'ETC通行',
                  value: 66
              },
              {
                  name: '现金',
                  value: 10
              },
              {
                  name: 'ETC刷卡',
                  value: 16
              },
              {
                  name: '移动支付',
                  value: 75
              }
          ]
      }, {
          name: '通行交易介质占比',
          type: 'pie',
          center: ['75%', '50%'],
          radius: ['15%','30%'],
          clockwise: true,
          avoidLabelOverlap: true,
          hoverOffset: 15,
          itemStyle: {
              normal: {
                  color: function(params) {
                      return colorList[params.dataIndex]
                  }
              }
          },
          label: {
              show: true,
              position: 'outside',
              formatter: '{a|{b}：{d}%}\n{hr|}',
              rich: {
                  hr: {
                      backgroundColor: 't',
                      borderRadius: 3,
                      width: 3,
                      height: 3,
                      padding: [3, 3, 0, -12]
                  },
                  a: {
                      fontSize: 16,
                      color: '#000',
                      padding: [-30, 15, -20, 15]
                  }
              }
          },
          labelLine: {
              normal: {
                  length: 20,
                  length2: 30,
                  lineStyle: {
                      width: 1
                  }
              }
          },
          data: [{
                  name: 'ETC通行',
                  value: 66
              },
              {
                  name: '现金',
                  value: 10
              },
              {
                  name: 'ETC刷卡',
                  value: 16
              },
              {
                  name: '移动支付',
                  value: 75
              }
          ]
      }]
  }