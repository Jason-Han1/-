option = {
    animation:false,
    backgroundColor:'white',

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        textStyle:{fontSize:20},
        data:['accuracy','training time']
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
        name:"learning rate",
        nameTextStyle:{fontSize:20},
        nameGap:26,
        
        nameLocation:'middle',
        data: ["0.1", "0.05", "0.01", "0.005", "0.001", 
        "5e-04", "1e-04", "5e-05", "1e-05", "5e-06", 
        "1e-06", "5e-07", "1e-07", "5e-08", "1e-08"]
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
        interval:20,
        min:0,
        max:100
    },
    {
        axisLabel:{ 
            textStyle:{
                fontSize:15,
            }
        },
        axisLine: {show:false},
        type: 'value',
        name:"training time",
        nameLocation:'middle',
        nameGap:26,
        nameTextStyle:{fontSize:20},
        interval:20,
        min:0,
        max:100
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
                        symbolSize: 80,
                
                        itemStyle: {
        	                    normal: {
        	                        label: {
        	                            show: true,
        	                            fontSize:15
        	                        }
        	                        
        	                    },
                        }
                    },
            //itemStyle:{ normal: {label : {show: true}}},    
            yAxisIndex:0,
            data:[31.78, 34.4, 34.4, 34.4, 34.4,
            34.4, 83.09, 68.22, 68.22, 68.22, 
            68.22, 68.22, 51.31, 51.31, 34.11]
            

        },
        {
            name:'training time',
            type:'line',
            itemStyle : { 
                normal : { color:'#4682B4', 
                            lineStyle:{ color:'#4682B4'},
                            label : {show: true}
                    } 
                
            },
            symbol:'circle',
            symbolSize:8,
            markPoint: {
                        symbolSize: 80,
                     
                        itemStyle: {
        	                    normal: {
        	                        label: {
        	                            show: true,
        	                            fontSize:15
        	                        }
        	                    },
                        }
                    },
            //itemStyle:{ normal: {label : {show: true}}},    
            yAxisIndex:1,
            data:[20.38, 19.93, 19.99, 19.76,
            20.20, 19.99, 20.04, 20.05,
            20.28, 20.14, 19.84, 19.92,
            20.55, 20.07, 20.09]

        },
    ]
};
