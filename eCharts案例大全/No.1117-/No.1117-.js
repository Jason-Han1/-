option = {
     legend: {
        show: true,
       icon: "roundRect",//形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
     itemWidth: 12,  // 设置宽度
itemHeight: 2, // 设置高度
itemGap: 16, // 设置间距
        top: 5,
        left: 20,
        textStyle: {
            fontSize: 12,
            color: '#7270A6',
             fontFamily: 'OPPOSans-M'
        },
     },
     tooltip: {
    show: true,  
     trigger: 'axis', 
     axisPointer:{
          lineStyle: {
	    	color: '#C9CDD4',	//显示竖线颜色
	    	type: "solid",
	    	width:1
	    }
       
     },
       backgroundColor:'rgba(255, 255, 255, 0.96)',	//tooltip背景色
     borderColor:'#EBEBF2',		//tooltip边框颜色
      borderWidth:1,
       textStyle: {
      width: 160,
      height: 220,
      lineHeight: 24,
      color: '#7270A6',
      fontSize: '16',
      fontFamily: 'OPPOSans-M'
    },
    formatter: params => {
      // 获取xAxis data中的数据
      let dataStr = `<div><p style="font-size: 16px;
font-family: OPPOSans-M;
font-weight: 500;
color: #353280;
line-height: 20px;margin:0 5px 5px;">
    
        ${params[0].name}年
   
    
      </p></div>`
      params.forEach(item => {
        dataStr += `<div>
          <div style="margin: 0 8px;">

            <span style="display:inline-block;width: 12px;
            margin-bottom:3px;
height: 2px;background-color:${item.color};"></span>
            <span style="font-size: 12px;
font-family: OPPOSans-M;

color: #7270A6;
line-height: 14px;">${item.seriesName}</span>
        
            <span style="font-size: 14px;
font-family: Roboto-R;
font-weight: 400;
color: #49478D;
line-height: 16px;margin-left:20px;">${item.data}%</span>
          </div>
        </div>`
      })
      return dataStr
  }


     },


  xAxis: {
    type: 'category',
     boundaryGap:false,
    data: ['2017','2017','2017','2017', '2018','2018','2018','2018' ,'2019' ,'2019','2019','2019','2020','2020','2020','2020', '2021',],
     axisTick: {
        
      show: false
    }, 
    axisLabel: {
          interval:3,
            inside: false,
            textStyle: {
                color: '#49478D',
                fontSize:'13',
                fontFamily: 'OPPOSans-M'
                
            }
        },
        axisLine: {
                        lineStyle: {
                            width:1,
                            color: '#E5E6EB',
                        
                        }
                    },
                     splitLine: {
              //x网格样式
              show: true,
              
              lineStyle: {
                color: "#F7F8FA",
                type: "solid",
                width: "1",
              },
            },

  },
  yAxis:[ {
     
     min:0,
     max:40,
    type: 'value',
    nameTextStyle: {
        fontSize: 22,
         color:'rgba(243, 246, 252, 0.8)',
    verticalAlign: 'top', // top名称显示在坐标轴外，bottom显示在坐标轴内部
    padding: [-30,60,0,0]
   },
     interval: 10, //设置坐标轴的分割段数
    axisLine: {
          show:false
        },
    axisTick: {
      show: false
    },
    splitLine: {
        show: true,
        lineStyle:{
           color: '#F7F8FA',
           width: 1,
           type: 'dashed'
      }
　　},
　　  axisLabel: {
            inside: false,
              formatter: "{value} %",
            textStyle: {
                color: '#C9CDD4',
                fontSize:'10',
               
                
            }
        },

  },
  
],
  series: [
     
    {
        name:'公司空置率',
        smooth: false,
      
         symbol:'circle', // 折线点设定为实心点
symbolSize: 1, // 设定折线点的大小
      data: [9,9.5,10,10.5,12,13.5,15,14,13,12,11,12,13,14,15,15.6,16.2],
      type: 'line',
        yAxisIndex: 0,
        itemStyle: {
				normal: {
				 color: "#FF5722",
            borderColor: '#FF5722',
            borderWidth: 1,
             
					
				}
			},//在单个图表实例中存在多个y轴的时候有用
			 lineStyle: {
           color: "#FF5722",//折线的颜色,
           width:2,
          },
         areaStyle: {//区域填充渐变颜色
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(255, 221, 211, 0.6)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(255, 221, 211, 0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }



    },
     {
        name:'集团空置率',
        smooth: false,
        symbol:'circle', // 折线点设定为实心点
symbolSize: 1, // 设定折线点的大小
      data: [10.5,10.3,10.1,9.9,12,15,18,17,16,15,14,15,16,17,17.3,17.6,17.9],
      type: 'line',
        yAxisIndex: 0, //在单个图表实例中存在多个y轴的时候有用
         itemStyle: {
				normal: {
				 color: "#7270A6",
            borderColor: '#7270A6',
            borderWidth: 1,
				
				}
			},//在单个图表实例中存在多个y轴的时候有用
     }
     
  ]
};