option = {
    title: {
        text: '动态显示数据',
        subtext: '作者 : 花自飘凌水自流'
    },
    
    color:['red','green'],
    
    tooltip: {
        trigger: 'axis',
        textStyle:{
            formatter:'parseInt({value})'
        }
    },
    
    grid:{
        left:6,
        top:60,
        right:20,
        bottom:20,
        containLabel:true
    },
    
    legend: {
        data:['收入','支出']
    },
    
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data:['第1天','第2天','第3天','第4天','第5天','第6天','第7天']
    },
    
    yAxis: {
        type: 'value',
        boundaryGap: [0,0.1],
    },
    
    series: [
        {
            name:'收入',
            type:'line',
            z:10,
            areaStyle:{
	            // 渐变
	            normal: {
					color: {
					    type: 'linear',
					    x: 0,
					    y: 0,
					    x2: 0,
					    y2: 1,
					    colorStops: [{
					        offset: 0, color:'red'
					    }, {
					        offset: 1, color:'rgba(255,255,255,0.8)'
					    }],
					    globalCoord: false 
					}
				}
	        },
            data:[10,30,30,90,30,30,60]
           
        },
        
        {
            name:'支出',
            type:'line',
            areaStyle:{
	            // 渐变
	            normal: {
					color: {
					    type: 'linear',
					    x: 0,
					    y: 0,
					    x2: 0,
					    y2: 1,
					    colorStops: [{
					        offset: 0, color:'green'
					    }, {
					        offset: 1, color:'rgba(255,255,255,0.8)'
					    }],
					    globalCoord: false 
					}
				}
	        },
            data:[10,50,80,10,70,70,50]
           
        },
    ]
};


var i=8;
// 循环控制数据
setInterval(function(){
    
    option.xAxis.data.shift();
    option.xAxis.data.push('第'+i+'天');
    
    option.series[0].data.shift();
    option.series[0].data.push(Math.random()*100);
    
    option.series[1].data.shift();
    option.series[1].data.push(Math.random()*100);
    
    myChart.setOption(option);
    
    if(i==365){
        i=0;
    }else{
        i++;   
    }
    
},2000)
