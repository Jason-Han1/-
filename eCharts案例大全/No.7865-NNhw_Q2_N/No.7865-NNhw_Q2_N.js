option = {
    animation:false,
    backgroundColor:'white',

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        textStyle:{fontSize:20},
        data:['accuracy']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '7%',
        top:'7%',
        containLabel: true
        
    },
    xAxis: {
        axisTick: {
           show: false
       },
        axisLabel:{ 
            textStyle:{
                fontSize:15,
            },
            interval:0
        },
        type: 'category',
        boundaryGap:['20%', '20%'],
        name:"the number of part N",
        nameTextStyle:{fontSize:20},
        nameGap:26,
        
        nameLocation:'middle',
        data: ["2","4","6", "8",  
        "10", "12","14","16","18","20"]
    },
    yAxis: [{
        axisLabel:{ 
            textStyle:{
                fontSize:15,
            }
        },
        axisLine: {show:false},
        type: 'value',
        name:"accuracy",
        nameLocation:'middle',
        nameGap:26,
        nameTextStyle:{fontSize:20},
        interval:5,
        min:30,
        max:60
    }],
    series: [
        {
            name:'accuracy',
            type:'line',
            itemStyle : { 
                normal : { color:'#003366', 
                            lineStyle:{ color:'#003366'},
                            label : {show: true}
                    } 
                
            },
            symbol:'star',
            symbolSize:8,
            markPoint: {
                        symbolSize: 100,
                
                        itemStyle: {
        	                    normal: {
        	                        label: {
        	                            show: true,
        	                            fontSize:20
        	                        }
        	                        
        	                    },
                        }
                    },
            //itemStyle:{ normal: {label : {show: true}}},    
            yAxisIndex:0,
            data:[50.3,50.2,50.2,52.6,49.1,50.8,50.4,50.0,50.9,49.5]
            

        },
    ]
};
