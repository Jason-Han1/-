let beginColor = 'rgb(255,140,0,0.1)',  endColor = 'rgb(255,140,0,1)',  endPix = '';
let endZom = 25;

option = {
  //backgroundColor: '#003366',
  title: {
    show: false
  },
  dataZoom:[{
      type:'inside',
      start: 0,
      end: endZom,
      orient: 'vertical',
      zoomOnMouseWheel:false,   ////滚轮是否触发缩放
            //moveOnMouseMove:true,  //鼠标滚轮触发滚动
            //moveOnMouseWheel:true
  }],
  tooltip: {
    trigger: 'axis',
    axisPointer:{
      type:'shadow',
    },
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
    data:['郑州市','驻马店市','商丘市','周口市','洛阳市','南阳市','信阳市','新乡市','开封市','安阳市','平顶山市','焦作市','许昌市','濮阳市','漯河市','三门峡市','鹤壁市','济源市']
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
      name: '累计',
      type: 'bar',
      barWidth: '10px',
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color:beginColor
                    }, {
                        offset: 1,
                        color: endColor
                    }]),
            /*color:'#00ffff',*/
          barBorderRadius: [0,5,5,0]
        },
        emphasis: {
          shadowBlur: 15,
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        }
      },
      data: [131441,97468,44773,41968,40756,40590,34926,30423,25541,22607,21380,19922,18826,16319,12134,9320,7052,4093],
      animationDuration: 1500,
      label: {
        normal: {
          color: '#666',
          show: true,
          position: 'right',
            fontSize: 18,
            fontStyle: 'italic',
            //fontFamily: 'DINPro-Light',
            formatter:function(para){
                return para.data + endPix
                //console.log(para)
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
        position: ['0', '-35'],
        fontSize: 20,
        color: '#000',
        formatter: function (param) {
          console.log(param)
          return param.dataIndex+1 +' '+param.name
        }
      },
      data: [131441,97468,44773,41968,40756,40590,34926,30423,25541,22607,21380,19922,18826,16319,12134,9320,7052,4093],
    },
    {
      type: 'bar',
      name:'已人次',
      barGap: '0.2',
      barWidth: 10,
      animation: true,
      itemStyle: {
         normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color:'rgb(240,230,140,0.1)'
                    }, {
                        offset: 1,
                        color: 'rgb(240,230,140,1)'
                    }]),
            /*color:'#00ffff',*/
          barBorderRadius: [0,5,5,0]
        },
        emphasis: {
          shadowBlur: 15,
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        }
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
      data: [82437,17741,33995,18855,32277,22574,23790,22440,25541,17338,15854,17250,16891,11603,9716,7484,6990,2955],
    }
  ],
  animationEasing: 'cubicOut'
}

// myChart.showLoading({  
//             text:'加载中',
//             color:'#3385ff',
//         })




