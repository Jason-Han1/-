var seriesName = ['学生获省级以上竞赛奖励','学生毕业率','专业学生数']
var seriesValue = [1700,1512,1512]
var color = {
  type:'linear',
  colorStops:[
    {
      offset:0,
      color:'rgba(255, 151, 123, 1)'
    },
    {
      offset:1,
      color:'rgba(251, 106, 102, 1)'
    }
  ]
}

var lineY2 = seriesName.map((item,index)=>{
    return {
        name: item,
        color:color,
        value:seriesValue[index],
        itemStyle:{
            normal:{
                show:true,
                color: color,
                borderRadius:[4,4,4,4]
            }
        }
    }
})
console.log(lineY2)
option= {
  title: {
    show: false
  },
  tooltip: {
    trigger: 'item'
  },
  grid: {
    borderWidth: 0,
    top: '10%',
    left: '5%',
    right: '15%',
    bottom: '3%'
  },
  yAxis: [
      {
    type: 'category',
    inverse: true,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false,
      inside: false
    },
    data: seriesName
  }, 
  {
    type: 'category',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    inverse:true,
    axisLabel: {
      show: true,
      inside: false,
      textStyle: {
        color: 'rgba(202, 238, 255, 1)',
        fontSize: '14',
        fontFamily: 'PingFangSC-Regular'
      },
      formatter: function (val) {
        return `${val}`
      }
    },
    splitArea: {
      show: false
    },
    splitLine: {
      show: false
    },
    data: seriesValue
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
  series: [{
    name: '',
    type: 'bar',
    zlevel: 2,
    barWidth: '10px',
    data: lineY2,
    animationDuration: 1500,
    yAxisIndex:1,
    label: {
      normal: {
        color: 'rgba(202, 238, 255, 1)',
        show: true,
        position: [0, '-24px'],
        textStyle: {
          fontSize: 16
        },
        formatter: function (a, b) {
          return a.name
        },
      }
    }
  }],
  animationEasing: 'cubicOut'
}

