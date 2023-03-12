  var obj = {
      peakList: [1, 2, '309.21'], //调峰受阻
      aisleList: ['12', '121', '309.21'], //通道受阻
      timeList: [
          '09-04',
          '09-05',
          '09-06'
      ]
  }

  //legend角标
  var optionLegendData = ['调峰受阻', '通道受阻'];
  var optionSeriesData = [];

  optionSeriesData.push({
      name: "通道受阻",
      type: 'bar',
      stack: '总量',
      barMaxWidth: '20px',
      barCategoryGap: '50%',
      itemStyle: {
          normal: {
              color: '#EEA028'
          }
      },

      data: obj.peakList

  }, {
      name: "调峰受阻",
      type: 'bar',
      stack: '总量',
      barMaxWidth: '20px',
      barCategoryGap: '50%',
      itemStyle: {
          normal: {
              color: 'rgb(255,51,51)'
          }
      },

      data: obj.aisleList

  });

  var option = {

      tooltip: {
          trigger: 'axis',

      },
      legend: {
          data: optionLegendData,
          textStyle: {
              color: '#BEC0C3',
              fontSize: 16,
              fontFamily: '微软雅黑'
          },
          top: '5%',
          icon: 'rect'
      },
      grid: {
          left: 'center',
          bottom: '5%',
          width: '90%',
          height: "75%",
          containLabel: true
      },
      xAxis: {
          type: 'category',
          //boundaryGap : false,
          data: obj.timeList,
          axisLine: {
              show: true,
              lineStyle: {
                  color: '#BEC0C3',
                  width: 1, //这里是为了突出显示加上的
              }
          },

          axisLabel: {
              textStyle: {
                  color: '#BEC0C3',
                  fontSize: 16
              },
              interval: 'auto'
          }
      },
      yAxis: [{
              type: 'value',
              name: '单位：万千瓦时',
              nameTextStyle: {

                  fontSize: 16
              },
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: '#BEC0C3',
                      width: 1, //这里是为了突出显示加上的
                  }
              },
              axisLabel: {
                  formatter: '{value}',
                  textStyle: {
                      color: '#BEC0C3',
                      fontSize: 16
                  }
              },

              splitLine: {
                  lineStyle: {
                      color: "#313E4B"
                  }
              }
          }

      ],
      series: optionSeriesData


  };