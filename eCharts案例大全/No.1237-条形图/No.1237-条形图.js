var name2 = ['昨日用电量','昨日补水量','昨日热量']
var data2 = [3900,5086,933]
var colorList = [ 
    'rgba(79, 129, 189, 1)',
    'rgba(192, 80, 70, 1)',
    'rgba(155, 187, 89, 1)', 
];
option =  {
      grid: {
          top: '25%',
          left: '17%',
          right: '10%',
          bottom: '8%'
      },
      title: {
          show: true,
          text: '昨日统计数据',
          textStyle: {
              color: '#000',
              fontSize: 14,
              fontWeight: 'bold'
          },
          left: '6%',
          top: '20%'
      },
      xAxis: {
          type: 'value',
          min: 0,
          //inverse: true,
          axisLine: {
              show: false,
          },
          splitLine: {
              show: false,
          },
          axisLabel: {
              show: false,
          },
          axisTick: {
              show: false,
          },
          max: 'dataMax',
      },
      yAxis: {
          //show: false,
          type: 'category',
          inverse: true ,
          splitLine: {
              show: false,
          },
          axisLine: {
              show: false,
          },
          axisLabel: {
              show: true,
              align: 'left',
              color: '#333',
              fontSize: 14,
              fontWeight: 'bold',
              margin: 80 ,
          },
          axisTick: {
              show: false
          },
          data: name2
      },
      series: {
          name: '统计数据',
          type: 'bar',
          barWidth: 20 ,
          itemStyle: {
              normal: {
                  color: function(params) {
                    var num = colorList.length;
                    return colorList[params.dataIndex % num]
                },
              }
          },
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  color: '#333',
                  fontSize: 14,
                  formatter: '{c}'
              }
          },
          z: 0,
          data: data2
      }
  }