
 var colorList = ['248,162,69', '102,157,254', '104,199,254', '131,216,165', '194,89,255']
  var xdata = ['NO.1盗窃罪', '抢劫罪', '故意伤害罪', '诈骗罪', '危险驾驶罪']
  var data = [556, 560, 333, 877, 228]
  data = data.map((item, index) => {
    return {
      value: item,
      label: {
        normal: {
          show: true,
          position: 'top',
          textStyle: {
            color: `rgb(${colorList[index]},1)`,
            fontSize: 14
          }
        }
      }
    }
  })
option = {
    backgroundColor: 'transparent',
    color: ['#22b8ed', '#ffd54f', '#fb8f8e', '#8fc31f'],
    tooltip: {
      trigger: 'axis',
      borderRadius: 5,
      // borderColor: "#6baab2",
      borderWidth: 1,
      formatter: function(params) {
        // return (
        //   params[0].data.nameCode +
        //   "<br>" +
        //   "杆塔数量(基数) :" +
        //   params[0].value
        // );
      }
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '2%',
      top: '22%',
      containLabel: true
    },
    xAxis: {
      data: xdata,
      triggerEvent: true,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        // rotate: 15,
        interval: 0,
        textStyle: {
          color: 'rgb(95,109,119)'
        }
      }
    },
    yAxis: {
      name: '单位：个数',
      triggerEvent: true,
      nameTextStyle: {
        color: '#909399',
        fontSize: 12
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgb(148,159,167)',
          fontSize: 16
        }
      }
    },
    // color: ["#e54035"],
    series: [{
      name: 'hill',
      barMinHeight: 10,
      type: 'pictorialBar',
      barCategoryGap: '10',
      // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      itemStyle: {
        normal: {
          // barBorderRadius: 5,
          // 渐变色
          color: function(params) {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: `rgb(${colorList[params.dataIndex]},1)`
            }, {
              offset: 1,
              color: `rgb(${colorList[params.dataIndex]},0.4)`
            }])
          }
        }
      },
      data: data,
      z: 10
    }
    ]
};