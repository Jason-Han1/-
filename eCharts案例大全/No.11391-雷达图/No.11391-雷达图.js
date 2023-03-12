  var indicatorData = ['绝缘子', '电缆', '异地线', '开关柜箱', '电缆附件', '交流变压器', '金具', '低压屏柜箱'];
  var indicatorDataNew = [];
  var legendData = ['60', '60-119', '120-179', '180'];
  var data = [
      [43, 10, 28, 35, 50, 19, 15, 25],
      [50, 14, 28, 31, 42, 21, 26, 36],
      [50, 24, 48, 41, 42, 31, 30, 20],
      [50, 24, 48, 41, 42, 31, 30, 20]
  ]
  var concatData = [];
  data.map((item, index) => {
      concatData = concatData.concat(item)
  })
  var maxData = _.max(concatData)
  indicatorData.map((item, index) => {
      var obj = {
          name: item,
          max: maxData
      };
      indicatorDataNew.push(obj)
  })
  //对数据的处理，根据legend来循环渲染
  var seriesData = []
  legendData.map((item, index) => {
      var obj = {
          areaStyle: {
              normal: {
                  opacity: 0.6,
              }
          },
          lineStyle: {
              normal: {
                  width: 0
              }
          },
          symbolSize: 0,
          value: data[index],
          name: legendData[index]
      }
      seriesData.push(obj)
  })

  option = {
      color: ['#66e7c4', '#49acfd', '#ae98ff', '#ff9159'],
      tooltip: {},
      legend: {
          orient: 'vertical',
          right: 0,
          top: 0,
          itemGap: 0,
          bottom: 0,

          data: legendData,
      },
      radar: {
          "radius": "74%",
          name: {
              textStyle: {


                  lineHeight: 0
              }
          },
          splitArea: {
              areaStyle: {
                  color: ['rgba(128, 128, 128, 0)']
              }
          },
          splitLine: {

          },
          indicator: indicatorDataNew
      },
      series: [{
          name: '',
          type: 'radar',
          data: seriesData
      }]
  };