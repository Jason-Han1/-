var data_val=[2220, 1682, 2791, 3000, 4090, 3230, 2910,2220, 1682, 2791, 3000, 4090, 3230, 2910],
    xAxis_val=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var data_val1=[0,0,0,0,0,0,0];
var option = {
    backgroundColor:'#293042',
    grid:{
        left:10,
        top:10,
        bottom:20,
        right:40,
        containLabel:true
    },
    tooltip:{
        show:true,
        backgroundColor:'#384157',
        borderColor:'#384157',
        borderWidth:1,
        formatter:'{b}:{c}',
        extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
    },
    
   
    xAxis: {
        data: xAxis_val,
        boundaryGap:false,
        axisLine:{
            lineStyle: {
                     color:'rgba(255, 255, 255, 0.1)'
                }
        },
         axisLabel: {
            textStyle: {
                color: '#6c717d'
            }  
        },
        axisTick:{
            show:true
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'rgba(255, 255, 255, 0.1)'
            }
        },
        
    },
    yAxis: { 
        ayisLine:{
            show:false
        },
         axisLabel: {
            textStyle: {
                color: '#6c717d'
            }  
        },
        splitLine:{
            show:false,
            
        },
        axisLine: {
                lineStyle: {
                     color:'rgba(255, 255, 255, 0.1)'
                }
            }
    },
    
    series: [
        
        {
            type: 'line',
            name:'linedemo',
            smooth:true,
            symbolSize:15,
            animation:false,
            lineWidth:1.2,
            hoverAnimation:false,
            data:data_val,
            symbol:'circle',
            lineStyle: {
                normal: {//主线
                    width: 5,
                    color: '#01f8f3',
                    shadowColor: '#000',
                    shadowBlur: 15,
                    shadowOffsetY: 5
                }
            },
            itemStyle:{
                normal:{
                    color:'#01f8f3',
                    borderWidth: 3 ,
                    
                    borderColor: "#fff",
                    label:{
                        show:true,
                        position:'top',
                        textStyle:{
                            color:'#06efec',
                    
                        }
                    }
                }
            },
           
           areaStyle:{
                normal:{
                    color:'#06efec',
                    opacity:0.08
                }
            }
            
        }
    ]
};
myChart.setOption(option);

