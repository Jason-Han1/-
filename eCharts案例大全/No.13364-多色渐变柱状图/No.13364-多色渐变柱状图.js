option = {

   
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
  
   
    grid: {
        left: '1%',
        top:'10%',
        right: '5%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        position:'bottom',
        splitLine: {show: false},
        boundaryGap: [0, 0.01],
         axisLabel: {
            textStyle: {
                color: '#ffa800',
                fontSize: 16,
            }
        },
        axisLine:{
            lineStyle:{
                color:'#2386D3'
                
            }
        },
        axisTick:{
          show:false  
        },
    },
    
    yAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#ffa800',
                fontSize: 16,
            }
        },
        axisLine:{
           show:false 
        },
        axisTick:{
          show:false  
        },
        data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','南宁市','贵港市','南宁市']
    },
    series: [
        {
            name: '办理事项数',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [];
                        for(var i=0;i<10;i++){
                            if(i==7){
                                 colorList.push( new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#173B6C'}, {offset: 1,color: '#4ABBE8'
                                }]))
                            }else if(i==8){
                                colorList.push( new echarts.graphic.LinearGradient(0,1, 0,  0, [{
                                    offset: 0,
                                    color: '#173B6C'}, {offset: 1,color: '#F7BC2D'
                                }]))
                              
                            }else if(i==9){
                                colorList.push( new echarts.graphic.LinearGradient(0,1, 0,  0, [{
                                    offset: 0,
                                    color: '#173B6C'}, {offset: 1,color: '#F06648'
                                }]))
                              
                            }else {
                                 colorList.push( new echarts.graphic.LinearGradient(0,1, 0,  0, [{
                                    offset: 0,
                                    color: '#173B6C'}, {offset: 1,color: '#235890'
                                }]))
                            }
                           
                        }
                        
                        return colorList[params.dataIndex]
                    },
                    // color:'#ffa800',
                    barBorderRadius:[0,10,10,15],
                    
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                
            },
              barWidth: '50%',
            type: 'bar',
              label: {
                normal: {
                    show: true,
                    position: 'right',
                    color:'#ffa800'
                }
            },
            data: [9263,13203,14203,18103,21203,28903,38203, 71744, 80230, 80230]
        }
    ]
};
