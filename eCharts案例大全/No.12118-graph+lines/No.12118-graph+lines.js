 
// 点数据


option = {
    polar: {
        center:['50%', '50%'],
        radius:[100]
    },
	    tooltip: {
	        axisPointer:{
	            type:"line",
	            snap:true,
	            lable:{
	                show: false
	            }
	        }
	    },
	    angleAxis: {
	        type: 'value',
	        startAngle: 0,
	        min: 0,
	        max: 360,
	        interval:  22.5, 
	       axisTick:{
	           show: false,
	           
	           
	       },
	       axisLabel:{
	           show: false
	        
	       },
	       splitLine:{
	           lineStyle:{
	               type: "dashed",
	               color:"#CDCDCD"
	               
	           }
	       },
	       axisLine:{
	           lineStyle:{ 
	               type: "dashed",
	               color:'#CDCDCD'
	            
	           }
	       }
	       
	    },
	    radiusAxis: {
	        interval: 100,   
	        axisLine:{                      //坐标 轴线
                show:false,                  //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
            
            },
            splitLine:{                     //坐标轴在 grid 区域中的分隔线。
                show:true,                  //是否显示分隔线。默认数值轴显示，类目轴不显示。
                interval:"auto",            //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
                lineStyle: {
                    type: "dashed",
                    color:"#CDCDCD"
                },
            
            }, 
            axisTick :{                     //坐标轴刻度相关设置
                show:false,              //坐标轴刻度的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
                 
            }, 
            axisLabel:{                     //坐标轴刻度标签的相关设置
                show: false            
                
        },
 
 
	    },
	     
    series: [
        {
            type: 'graph',
            coordinateSystem: 'polar', 
            symbolSize: 1,
		  	edgeSymbol: ['', 'arrow'],  
             links: [{
  	            source:0,
  	            target:1
  	        }],
            label: {
  	            normal: {
  	                show: true
  	            }
  	        },
  	          tooltip:{
		  			            formatter: function(params){
		  			                return 130;
		  			            }
		  			        },
  	        itemStyle: {
              normal: {
                  label: {
                      position: ['500%', '500%'],
                      textStyle: {
                          fontSize: 16
                      }
                  }
              }
          },
          lineStyle: {
              normal: {
                  width: 3,
                  color:'#e5e639',
              }
          }, 
            data:[ [0,0], {name:'A',value:[200,120]}]
        }, 
        {
            type: 'graph',
            coordinateSystem: 'polar', 
            symbolSize: 1,
		  	edgeSymbol: ['', 'arrow'], 
            symbolOffset: [0, 0],
             links: [{
  	            source:0,
  	            target:1
  	        }],
            label: {
  	            normal: {
  	                show: true
  	            }
  	        },
  	          tooltip:{
		  			            formatter: "{value}"
		  			        },
  	        itemStyle: {
              normal: {
                  label: {
                      position: ['500%', '500%'],
                      textStyle: {
                          fontSize: 16
                      }
                  }
              }
          },
          lineStyle: {
              normal: {
                  width: 3,
                  color : 'green'
              }
          }, 
            data:[ [0,0], {name:'B',value:[100,240]}]
        }, 
         {
            type: 'graph',
            coordinateSystem: 'polar', 
            symbolSize: 1,
		  	edgeSymbol: ['', 'arrow'], 
            symbolOffset: [0, 0],
             links: [{
  	            source:0,
  	            target:1
  	        }],
            label: {
  	            normal: {
  	                show: true
  	            }
  	        },
  	         
  	        itemStyle: {
              normal: {
                  label: {
                      position: ['500%', '500%'],
                      textStyle: {
                          fontSize: 16
                      }
                  }
              }
          },
           tooltip:{
		  			            formatter: function(params){
		  			                return 105
		  			            }
		  			        },
          lineStyle: {
              normal: {
                  width: 3,
                  color:'red'
              }
          }, 
            data:[ [0,0], {name:'C',value:[105,0]}]
        }, 
    ]
};










