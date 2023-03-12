var option = {
    tooltip: {
        trigger: 'axis',       
        backgroundColor:"rgba(255,255,255,0.1)",
        width:'15',
        axisPointer:{type:'line',lineStyle:{color:'rgba(255,255,255,0.1)'}},
        textStyle:{
        fontSize:'10',
         },
        formatter: function(params){
            var respon = ""
            var num = 0
            var nums = ""
            var date = ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05','2019-06', '2019-07', '2019-08', '2019-09', '2019-10','2019-11']
            for (var key in params){
                num = option.series[key].data[date.indexOf(params[key].name)];
                respon =params[key].seriesName;
                if (num == undefined) {
                    num = 0
                } else {
                    
                    if (num + 100 < 100 ){

                        num = -num

                    } else {
                        num = num
                    }
                }
                nums =nums+respon+"："+String(num)+"万" + "<br/>" 
            }
            return params[0].name+"<br/>"+nums 
          },
            },
      legend: {
           icon: 'circle',
           // left:680,
           top:15,
           itemWidth: 15,
           itemHeight: 10,
           textStyle: {
                 color: '#ccc'   
           },
          right: "2%",
          data: ['固网用户数', '电信','移动','联通'],
      },
      grid: {
        top:'15%',
        left: '3%',
        right: '3%',
        bottom: '8%',
        height:'80%',
        containLabel: true
    },
    //   grid: {
    //       top:'17%',
    //       left: '3%',
    //       right: '3%',
    //       bottom: '1%',
    //       height:'83.5%',
    //       containLabel: true
    //   },
      xAxis: [{
          type: 'category',
          data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-5','2019-06', '2019-07', '2019-08', '2019-09', '2019-10','2019-11'],
                      axisLine: {
                          lineStyle: {
                                color: "#868fb3"
                          }
                      },
                      axisLabel:{ textStyle:{color: '#999999', fontSize:'10', fontFamily: 'Microsoft YaHei'}},
                      axisTick:{length:0},
  
      },{
          show:  false,
          type: 'category',
          data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05','2019-06', '2019-07', '2019-08', '2019-09', '2019-10','2019-11'],
          axisLine: {
              lineStyle: {
               color: "#868fb3"
              }
          },
          axisLabel:{ textStyle:{color: '#999999', fontSize:'10', fontFamily: 'Microsoft YaHei'}},
          axisTick:{length:0},
      }],
      yAxis: [{
          type: 'value',
          name:'万',
        //   max:1000,
        //   min:0,
        axisTick: {
                  show: false,
                  length: 15,
                  lineStyle: {
                      color: "#e4e4e4",
                  }
              },
              splitLine: {
                  show:true,
                  lineStyle: {
                      type: 'bolid',
                      color: '#50556b'

                  }
              },
              axisLine: {
                  show: false,
                  lineStyle: {
                      type:'bolid',
                      color: "#50556b"
                  },
              },
               nameTextStyle: {
                          color: "#999"
                      },
          axisLabel: {textStyle:{color: '#8c99a8',fontSize:'10',fontFamily: 'Microsoft YaHei'},
              formatter: function(value, index) {
                  var val = Math.abs(value)
                  return val;
              }
          }
      }],
      series: [{
          id:"topchart",
              name:"固网用户数",
              type: 'bar',
              stack: '合并',
              itemStyle: {
                  normal: {
                      color: "#1fd2d2"
                  }
              },
               xAxisIndex: 0,
              barWidth: 45,
              data: [36.43,37.82,39.53,41.85,53.80,64.16,72.04,78.91,89.66,100],
              
            
              
          },
          {
              id:"leftchart",
              name:"电信",
              type: 'bar',
              stack: '合并',
              barGap: "-100%",
              itemStyle: {
                //    normal: { 
                //       color: "#7c5cfe "
                //   },
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0.4,
                         color: "#7c5cfe"
                     },
                     {
                         offset: 1,
                         color: "#9c5dff"
                     }
                 ])
             },
               xAxisIndex: 1,
              barWidth: 15,
              data: [-3.1,-3.9,-4.5,-5.2,-8.6,-18.06,-17.31, -16.63, -16.63,-22.47],
          },
          {
                id:"rightchart",
              name:"移动",
              type: 'bar',
              barGap: 0,
              itemStyle: {
                //   normal: {
                //       color: "#2a9af4"
                //   },
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0.4,
                    color: "#2a9af4"
                },
                {
                    offset: 1,
                    color: "#38b8f4"
                }
            ])
              },
              xAxisIndex: 1,
              barWidth: 15,
              data: [-3.3,-3.4,-3.5,-3.5,-3.8,-46.10, -54.73, -58.76, -67.24,-71.48],
          },
          {
                id:"middlechart",
              name:"联通",
              type: 'bar',
              barGap: 0,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0.4,
                    color: "#f47629"
                },
                {
                    offset: 1,
                    color: "#f39b28"
                }
            ])
              },
              xAxisIndex: 1,
              barWidth: 15,
              data: [-0.2,-0.15,-0.11,-0.1,-0.05,-0,-0,-3.5,-5.7,-6.07],
          }
      ]
  };