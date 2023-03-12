let myColor = ['#2d8cf0', '#5cadff', '#ff9900', '#ed4014'];

var option = {
  animation: false,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: true
    },
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    type: 'bar',
    itemStyle: {
      normal: {
        show: true,
        color: function (params) {
          if (params.data >= 75) {
            return myColor[0]
          }
          if (params.data >= 50) {
            return myColor[1]
          }
          if (params.data >= 25) {
            return myColor[2]
          }
          if (params.data < 25) {
            return myColor[3]
          }
        },
      }
    },
    data: [20, 30, 40, 50, 60, 70, 80],
  }]
};
