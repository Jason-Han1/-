var xData = ['2021年1月', '2021年2月', '2021年3月', '2021年4月', '2021年5月'];
   var data = [2000, 1800, 2800, 900, 1600];
option ={
    backgroundColor: 'none',
    grid: {
      top: '9%',
      bottom: '19%',
      left: '12%',
      right: '4%'
    },
    tooltip: {
   trigger: 'axis',
       axisPointer:{
            type:'line',
            lineStyle:{
                color:'#FF8736'
            },
        }
    },
    xAxis: {
      boundaryGap: true, // 默认，坐标轴留白策略
      axisLine: { // 坐标轴轴线相关设置。数学上的x轴
        show: true,
        lineStyle: {
          color: '#85B1B4'
        }
      },
      axisLabel: { // 坐标轴刻度标签的相关设置
        textStyle: {
          color: '#709FD9',
          margin: 15
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false,
        alignWithLabel: true
      },
      data: xData
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisLabel: { // 坐标轴刻度标签的相关设置
      show:true,
        textStyle: {
          color: '#709FD9',
          margin: 15
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [{
        type: 'scatter',
        symbolSize: 10,
        itemStyle: {
            color:'#FF8736'
        },
        silent: true,
        tooltip:{
          show:false
        },
        data:[2000, 1800, 2800, 900, 1600]
    },{
      type: 'line',
      symbol: 'circle',
      symbolSize: 20,
        symbol:'path://M488 187.381L242.872 328.906a48 48 0 0 0-24 41.57v283.049a48 48 0 0 0 24 41.569L488 836.619a48 48 0 0 0 48 0l245.128-141.525a48 48 0 0 0 24-41.57V370.476a48 48 0 0 0-24-41.569L536 187.381a48 48 0 0 0-48 0z m32 27.713l245.128 141.525a16 16 0 0 1 8 13.856v283.05a16 16 0 0 1-8 13.856L520 808.906a16 16 0 0 1-16 0L258.872 667.381a16 16 0 0 1-8-13.856v-283.05a16 16 0 0 1 8-13.856L504 215.094a16 16 0 0 1 16 0z',
      lineStyle: {
        color: '#FF8736'
      },
      itemStyle: {
        color: '#FF8736',
        borderWidth: 1,
        borderColor: '#FF8736'
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: '#fff'
        }
      },
  
      data: data
    }]
  };