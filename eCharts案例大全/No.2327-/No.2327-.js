let beginColor = 'rgb(255,140,0,0.1)',  endColor = 'rgb(255,140,0,1)',  endPix = '';
let endZom = 25;

option = {
  title: {
    show: false
  },
  legend:{
    bottom:20,
    right:0,
    textStyle:{
      color:'#666',
      fontSize:18,
    },
    orient:'vertical',
  },
  grid: {
    borderWidth: 0,
    top: '8%',
    left: '1%',
    right: '8%',
    bottom: '2%'
  },
  color: '#fff',
  yAxis: [{
    type: 'category',
    inverse: true,
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    data:['告警','告警','告警','告警']
  }],
  xAxis: {
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      name: '当前告警',
      type: 'bar',
      barGap: '0',
      barWidth: '10px',
      itemStyle: {
        normal: {
          show: true,
          color:'#2F90EA',
          // barBorderRadius: [0,5,5,0]
        },
      },
      data: [20,30,40,50],
      label: {
        normal: {
          color: '#666',
          show: true,
          position: 'right',
            fontSize: 18,
            formatter:function(para){
                return para.data + endPix

            }
        }
      }
    },
    {
      type: 'bar',
      barGap: '0',
      barWidth: 10,
      animation: false,
      itemStyle: {
        //color: 'rgba(0,0,0,0.2)'
        color: 'transparent'
      },
      tooltip: {
        show: false
      },
      label: {
        show: true,
        position: ['0', '-20'],
        fontSize: 12,
        color: '#000',
        formatter: function (param) {
          console.log(param)
          return param.dataIndex+1 +' '+param.name
        }
      },
      data: [20,55,75,54],
    },
    {
      type: 'bar',
      name:'历史告警',
      barGap: '-45%',
      barWidth: 10,
      animation: true,
      itemStyle: {
         normal: {
          show: true,
          color: '#00ffff',
          // barBorderRadius: [0,5,5,0]
        },
      },
      tooltip: {
        //show: false
      },
      label: {
        normal: {
          color: '#666',
          show: true,
          position: 'right',
            fontSize: 18,
            fontStyle: 'italic',
            formatter:function(para){
                return para.data + endPix
                //console.log(para)
            }
        }
      },
      data: [20,55,75,54],
    }
  ],

}





