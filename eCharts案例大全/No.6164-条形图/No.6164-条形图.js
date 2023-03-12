    var chartData = [10,28,45,50,66,89,130,184,249,308];
	var chartName = ['经分系统','系统系统','4A系统','经分系统2','系统系统2','4A系统2','系统系统3','4A系统3','系统系统4','4A系统4'];
	var colorList = ["#7b8ef1","#586fe6","#3a56e6","#1dd7f8",'#33ceef',"#2fd9c0","#326be6",'#2ef3b3',"#596fe4","#fc8383"]

	option = {
	    backgroundColor:'#04192f',
	    grid: {
	        left: '10%',
	        right: '10%',
	        bottom:'10%',
	        top: '10%',
	        containLabel: true
	    }, 
	    xAxis: {	
    		type: 'value',
        	name: '扫描率',
            axisLabel:{
            	show:false
           	},
           	axisTick: {
		        show: false   //取消坐标轴刻度线
		    },
            axisLine:{
                lineStyle:{
                    color:'#9ea8bc',
                }
            }, 
            splitLine:{
            	show: false,
            },
	    },
	    yAxis: {
	        type: 'category',
	        name:'排名    ',
	       // inverse:true, 
			axisLabel:{
            	textStyle:{
	                color: '#9ea8bc'
	            }
           	},
			axisLine:{
                lineStyle:{
                    color:'#9ea8bc',
                }
            }, 
	    },
	    series: [
	    	{   //百分比
	            show: true,
	            type: 'bar',
	            barGap: '-100%',
	            barWidth: '50%',
	            z: 2,
	            itemStyle:{  //柱子颜色
                    normal:{
                        color: function(data){
                        	return colorList[data.dataIndex];
                        },
		                barBorderRadius: [0, 100, 100, 0],
                    }
               	},
	            label: {
	                normal: {
	                    show: true,
	                    textAlign: 'center',
			    		textStyle:{
			    			//color:'#4d9dff',
			    			fontSize:16,
			    			fontWeight:'normal',
			    		},
	                    position: 'right',
	                    formatter: function(data) {
	                    	var sum=0;
						    for(i=0;i<chartData.length ;i++ )
						        {
						        	sum+=chartData[i];
					          }
	                        return '{a|'+ chartName[data.dataIndex]+'} ('+((chartData[data.dataIndex] / sum)*100).toFixed(0) +'%)'; 
	                    },
	                    rich:{
	                    	a:{
	                    		//color:'#9ea8bc', //字体统一颜色
	                    		fontSize:16
	                    	}
	                    }
	                }
	            },
	            data:chartData
	      	},
	    ]
	};
	