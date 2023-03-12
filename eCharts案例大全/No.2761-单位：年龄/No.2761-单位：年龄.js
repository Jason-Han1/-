option = {	
    backgroundColor:"#0d1d67",
    timeline: {       
        axisType: 'category',      
        autoPlay: true,      
        playInterval: 1200,       
        x:0,     
       	width:410,
        lineStyle:{color: '#00ffff', width: 1, type: 'solid'},//轴线的颜色
        controlStyle: {
                showNextBtn: true,
                showPrevBtn:true,
                normal: {
                    color: '#00ffff',
                    borderColor: '#00ffff'
                },
                emphasis: {
                    color: '#00ffff',
                    borderColor: '#00ffff'
                }
        },
		checkpointStyle:{
			 	//symbol : 'auto',
			    symbolSize : '14',
			    color : '#ecd83c',
			   	borderColor : '#7d7b52',
			    borderWidth : '4',
			   // borderWidth : 'auto',
			   
		},
		symbol:"circle",       //'image://./images/rk/point.png',
        data:['2013','2014','2015',{value:'2016',symbol: 'image://./images/rk/rect.png',  symbolSize : '15', },'2017',{value:'2018',symbol: 'image://./images/rk/rect.png',  symbolSize : '15', }],
       	label:{
             show: true,
			    interval: 'auto',
			    rotate: 0,
			    formatter: null,
			    textStyle: {
			        color: '#00ffff'
			    },
			    emphasis:{
			    	color:'#00ffff',
			    }
		},
		itemStyle:{
		 	emphasis:{
			    	color:'#00ffff',
			    }
		}

	
	},
    options:[{ 
    	title:{
    		text:'单位：年龄',
    		textStyle:{
    			fontSize:12,
    			color:"#00ffff",
    			fontWeight:'normal'
    		},
    		left:2,
    		top:8,
    	},
        grid: {
	        left:'0%',
	        top:'8%',
	        right: '2%',
	        bottom: '16%',
	        containLabel: true,
	    },
   		color: ["#0084ff", "#ecd83c"],
	    legend: {
	        orient: 'horizontal',
	        x: 'right', 
	        textStyle:{
	        	color:'#00ffff',
	        },
	        data: ['男', '女'],
	        
	
	    },
		tooltip : {
		    trigger: 'axis',
		    textStyle:{
		    	color:'#00ffff',
		    },
		    axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: false // 默认为直线，可选为：'line' | 'shadow'
	        },
		    formatter: 
		    function (params) {
	        
	           var name = '';
	           var val = '';	
                for(var i of params){
                	name = i.name;               	
                	val += i.seriesName+"："+ Math.abs(i.value)+'%<br/>' 
                }
	            return  name+'<br/>' + val
	        }
		},
        
        xAxis: [{
	        type: 'value',
	        nameLocation:'center',
	        axisLabel: {
	          show: true,
	          interval: '2',
	          formatter: function (val) {
	                return Math.abs(val) + '%';
	            }
	  		},
	    		splitLine:{
		            show:true,
		            lineStyle:{
		                color:'#068ab4'
		            }
		        },
		        axisLine:{
		            lineStyle:{
		                color:'#48d1fe'
		            }
		        },
	    }],
	    yAxis: [{
	    	type: 'category',
	    	name:'',
	    	
	    	left:'center',
	       	axisLine:{
	            lineStyle:{
	                color:'#48d1fe'
	            }
	        },
	        data: ['0-4', '5-9', '10-14', '15-19',
				    '20-24', '25-29', '30-34', '35-39', '40-44',
				    '45-49', '50-54', '55-59', '60-64', '65-69',
				    '70-74', '75-79', '80-84', '85-89', 
				    '90+', ],
	        axisTick: {
	            alignWithLabel: true
	        }
	       
	    }],
	    series: [{
	        name: '男',	      
	        type: 'bar',
	        stack: '总量',
	        barWidth: '13',
	        label: {
	            normal: {
	                show: false,
	                position: 'top'
	            }
	        },
	        data: [	-3.2, -4.0, -5.0, -5.4,
	            	-6.2, -5.8, -5.6, -6.0, 
	            	-4.8, -4.5, -3.9, -3.4,
	            	-3.0, -2.7, -2.3, -2.0, 	           
	            	-1.6, -1.3, -0.8,
	        ]
	   	}, {
	        name: '女',
	        type: 'bar',	    
	        stack: '总量',
	        barWidth: '13',
	        label: {
	            normal: {
	                show: false,
	                position: 'bottom'
	            }
	        },
	        data: [ 3.2, 4.0, 5.0, 5.4,
	            	6.2, 5.8, 5.6, 6.0, 
	            	4.8, 4.5, 3.9, 3.4,
	            	3.0, 2.7, 2.3, 2.0,
	           		1.6, 1.3, 0.8, 
	        ]   
	        
    	}]    	
    },{
    	 series: [{	       
	        data: [	-3.0, -4.2, -5.2, -5.8,
	            	-6.2, -5.8, -5.6, -6.0, 
	            	-4.7, -4.4, -3.6, -3.4,
	            	-3.2, -2.8, -2.4, -2.2, 	           
	            	-1.7, -1.4, -0.6,
	        ]
	   	}, {	      
	        data: [ 3.0, 4.2, 5.3, 5.8,
	            	6.1, 5.9, 5.7, 6.2, 
	            	4.7, 4.4, 3.6, 3.4,
	            	3.2, 2.8, 2.4, 2.2,
	           		1.7, 1.4, 0.6, 
	        ]   
	        
    	}]
    },{
    	series: [{
	        data: [	-3.2, -4.0, -5.0, -5.4,
	            	-6.2, -5.8, -5.6, -6.0, 
	            	-4.8, -4.5, -3.9, -3.4,
	            	-3.0, -2.7, -2.3, -2.0, 	           
	            	-1.6, -1.3, -0.8,
	        ]
	   }, {	       
	        data: [ 3.2, 4.0, 5.0, 5.4,
	            	6.2, 5.8, 5.6, 6.0, 
	            	4.8, 4.5, 3.9, 3.4,
	            	3.0, 2.7, 2.3, 2.0,
	           		1.6, 1.3, 0.8, 
	        ]   
	        
    	}]
    },{
    	 series: [{	       
	        data: [	-3.0, -4.2, -5.2, -5.8,
	            	-6.2, -5.8, -5.6, -6.0, 
	            	-4.7, -4.4, -3.6, -3.4,
	            	-3.2, -2.8, -2.4, -2.2, 	           
	            	-1.7, -1.4, -0.6,
	        ]
	   	}, {	      
	        data: [ 3.0, 4.2, 5.3, 5.8,
	            	6.1, 5.9, 5.7, 6.2, 
	            	4.7, 4.4, 3.6, 3.4,
	            	3.2, 2.8, 2.4, 2.2,
	           		1.7, 1.4, 0.6, 
	        ]   
	        
    	}]
    },{
    	series: [{
	        data: [	-3.2, -4.0, -5.0, -5.4,
	            	-6.2, -5.8, -5.6, -6.0, 
	            	-4.8, -4.5, -3.9, -3.4,
	            	-3.0, -2.7, -2.3, -2.0, 	           
	            	-1.6, -1.3, -0.8,
	        ]
	   }, {	       
	        data: [ 3.2, 4.0, 5.0, 5.4,
	            	6.2, 5.8, 5.6, 6.0, 
	            	4.8, 4.5, 3.9, 3.4,
	            	3.0, 2.7, 2.3, 2.0,
	           		1.6, 1.3, 0.8, 
	        ]   
	        
    	}]
    },{
    	 series: [{	       
	        data: [	-3.0, -4.2, -5.2, -5.8,
	            	-6.2, -5.8, -5.6, -6.0, 
	            	-4.7, -4.4, -3.6, -3.4,
	            	-3.2, -2.8, -2.4, -2.2, 	           
	            	-1.7, -1.4, -0.6,
	        ]
	   	}, {	      
	        data: [ 3.0, 4.2, 5.3, 5.8,
	            	6.1, 5.9, 5.7, 6.2, 
	            	4.7, 4.4, 3.6, 3.4,
	            	3.2, 2.8, 2.4, 2.2,
	           		1.7, 1.4, 0.6, 
	        ]   
	        
    	}]
    },]
   
   
  
};
   