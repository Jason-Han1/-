 var option = {
        tooltip: {
            trigger: 'axis',       
            backgroundColor:"rgba(255,255,255,0.1)",
            axisPointer:{type:'line',lineStyle:{color:'rgba(255,255,255,0.1)'}},
            textStyle:{
                fontSize:'10',
                },
                padding:[8,8,8,8],
                formatter: function(params){
                    var respon = ""
                    var num = 0
                    var nums = ""
                    var date = ['2019-06', '2019-07', '2019-08', '2019-09', '2019-10','2019-11']
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
               left:395,
               top:10,
               itemWidth: 20,
               itemHeight: 10,
               textStyle: {
                          color: '#999999'
               },
            //   right: "2%",
              data: ['固网总用户','固网IPv6用户','固网IPv6活跃用户','LTE总用户 ','LTE IPv6用户','LTE IPv6活跃用户'],
          },
          grid: {
              top:'15%',
              left: '3%',
              right: '3%',
              bottom: '8%',
              containLabel: true
          },
        
          xAxis: [{
              type: 'category',
              data: ['2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11'],
                          axisLine: {
                              lineStyle: {
                                    color: "#868fb3"
                              }
                          },
                          axisLabel:{textStyle:{color:'#999999',fontSize:'10',fontFamily:'Microsoft?YaHei'}},
                          axisTick:{length:0},
      
          },{
              show:  false,
              type: 'category',
              data: ['2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11'],
              axisLine: {
                  lineStyle: {
                   color: "#868fb3"
                  }
              },
              axisLabel:{textStyle:{color:'#999999',fontSize:'10',fontFamily:'Microsoft?YaHei'}},
              axisTick:{length:0},
          }],
          yAxis: [{
              type: 'value',
              name:'万',
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
              axisLabel: {textStyle:{color:'#8c99a8',fontSize:'10',fontFamily:'Microsoft?YaHei'},
                  formatter: function(value, index) {
                      var val = Math.abs(value);
                      return val;
                  }
              }
          }],
          series: [
            {
            id:"leftchart1",
            name:"固网总用户",
            type: 'bar',
            stack: '合并',
            barGap: "-100%",
            itemStyle: {
                normal: {
                    color: "#f5b662"
                }
            },
             xAxisIndex: 0,
            barWidth: 15,
            data: [157.84, 157.84, 165.2, 165.2,165.2],   
        },
        {
            id:"rightchart2",
            name:"固网IPv6用户",
            type: 'bar',
            barGap: 0,
            itemStyle: {
                normal: {
                    color: "#f39d29"
                }
            },
            xAxisIndex: 0,
            barWidth: 15,
            data: [18.0, 17.3, 16.6, 16.6,22.5],
        },
    
        {
            id:"middlechart3",
            name:"固网IPv6活跃用户",
            type: 'bar',
            barGap: 0,
            itemStyle: {
                normal: {
                    color: "#f37229"
                }
            },
            xAxisIndex: 0,
            barWidth: 15,
            data: [14.2, 13.9, 13.9, 13.9,17.7],
        },
        {
            id:"leftchart",
            name:"LTE总用户 ",
            type: 'bar',
            stack: '合并',
            barGap: "-100%",
            itemStyle: {
                normal: {
                    color: "#93d7f5"
                }
            },
            xAxisIndex: 1,
            barWidth: 15,
            data: [-149.9, -149.8, -369, -176.8,-161.5],
        },
        {
            id:"rightchart",
            name:"LTE IPv6用户",
            type: 'bar',
            barGap: 0,
            itemStyle: {
                normal: {
                    color: "#37b9f4"
                }
            },
            xAxisIndex: 1,
            barWidth: 15,
            data: [-141.6, -141.6, -152.1, -146.7,-155.3],
        },
        {
              id:"middlechart",
            name:"LTE IPv6活跃用户",
            type: 'bar',
            barGap: 0,
            itemStyle: {
                normal: {
                    color: "#29a6f3"
                }
            },
            xAxisIndex: 1,
            barWidth: 15,
            data: [-116, -116, -116, -147.7,-154.6],
        }
          ]
      };