option = {
       	grid: {
          top: '20',
          left: '20',
          right: '35',
          bottom: '5',
          containLabel: true,
        },
        tooltip: {
          //show:false,
          showContent:false,
          axisPointer: {
            lineStyle: {
                color: 'transparent'
            }
        },
          trigger: 'axis',
          position:'top',
          triggerOn:'mousemove',
          formatter: "{c}",
          textStyle: {
            fontFamily: '微软雅黑',
            fontSize: 12,
          }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: false,
              lineStyle: {
                color: '#d9d9d9',
                width:1,
              },
            },
            splitLine: {
                show: false, //网格线开关
                lineStyle: {
                  color: '#e4e9ed'
                }
            },
            axisTick: { show: false,},
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#3a3a3a',
              },
            },
              //data:this.xData,
              data:['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7'],
          },
          yAxis: {
              type: 'value',
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#6093b4',
                  type:'dotted'
                }
              },
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: false,
              lineStyle: {
                color: '#6093b4',
                width:1,
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#3a3a3a',
                width:1,
              },
            },
			        axisTick: { show: false,},  
              ///data: this.datas.yData,
          },
          series: [{
              data: [90, 105, 84, 125, 110, 92, 98],
              type: 'line',
              smooth: true,
              //symbol:'none',
              showSymbol:false,
              symbolSize:4,
              label:{
                color:'#2ae1d5',
              },
              emphasis:{
                label:{
                show: true,
                position: 'top',
                formatter:(data)=>{
                  return '{a|'+ data.value +'}' + '\n' + '{a1|▼}'
                },
                rich:{
                  a: {
                  backgroundColor: '#2ae1d5',
                  color: '#FFF',
                  padding: [4, 4],
                  fontSize: 11,
                },
                a1: {
                    color: '#2ae1d5',
                    height: 5,
                    align: 'center'
                  },
              },
              },
              },
              lineStyle: {
                  normal: {
                    color: "#2ae1d5",   // 线条颜色
                    opacity:1,
                    width:4
                  },

                },
                itemStyle: {
                    normal: {
                        color: '#2ae1d5',
                        borderColor: '#2ae1d5',
                        borderWidth: 4

                    }
                },
              areaStyle: { //区域填充样式
                  color:{
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: 'rgba(42,225,213,.2)' // 0% 处的颜色
                  }, {
                      offset: 1, color: 'rgba(42,225,213,.2)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
              }
                },
          }]
      };