var data=[
    	{name:'高级风险',value:76},
    	{name:'中级风险',value:66},
    	{name:'低级风险',value:196}
    ]
	var dataHigh = data[0].value;
	var dataMiddle = data[1].value;
	var dataLow = data[2].value;
	var total = 0;
	for(var i=0;i<data.length;i++){
		total += data[i].value;
	}

	var perHigh = (dataHigh / total * 100).toFixed(0) + "%" ;
	var perMiddle = (dataMiddle / total * 100).toFixed(0) + "%" ;
	var perLow = (dataLow / total * 100).toFixed(0) + "%" ;
	
    option= {
        backgroundColor:'#fff',
		title:[{
			text:"风险等级",
			top:30,
			left:30,
			textStyle:{
				color:"#35598d",
				fontSize:18,
				fontWeight:'normal'
			}
		},{
			text:"高级风险" + "{num|" + dataHigh + "}条",
			bottom:"28%",
			left:"14%",
			textAlign:"center",
			textStyle:{
				color:"#666",
				fontSize:20,
				fontWeight:'normal',
				textAlign:"center",
				rich:{
					num:{
						color:"#4d71df",
						fontSize:20,
					}
				}
			}
		},{
			text:"中级风险" + "{num|" + dataMiddle + "}条",
			bottom:"28%",
			left:"49%",
			textAlign:"center",
			textStyle:{
				color:"#666",
				fontSize:20,
				fontWeight:'normal',
				rich:{
					num:{
						color:"#32c78d",
						fontSize:20,
					}
				}
			}
		},{
			text:"低级风险" + "{num|" + dataLow + "}条",
			bottom:"28%",
			left:"84%",
			textAlign:"center",
			textStyle:{
				color:"#666",
				fontSize:20,
				fontWeight:'normal',
				textAlign:"center",
				rich:{
					num:{
						color:"#4cb9cd",
						fontSize:20,
					}
				}
			}
		}],
		graphic:[{
			type:"text",
			top:"49%",
			left:"12%",
			style:{
				text:perHigh,
				font: '30px "microsoft yahei"',
				textAlign:"center",
				fill:"#4d71df"
			}
		},{
			type:"text",
			top:"49%",
			left:"47%",
			style:{
				text:perMiddle,
				font: '30px "microsoft yahei"',
				textAlign:"center",
				fill:"#35c68d"
			}
		},{
			type:"text",
			top:"49%",
			left:"82%",
			style:{
				text:perLow,
				font: '30px "microsoft yahei"',
				textAlign:"center",
				fill:"#4cb9cd"
			}
		}],
	    tooltip: {
	    	show:false,
	    },
	    series: [
	        {
	            name:'高级风险',
	            type:'pie',
        		center: ['15%', '50%'],
        		radius:['20%','26%'],
	            startAngle:180, //起始角度
	            label:{
	            	show:false,
	            },
	            labelLine:{
	            	show:false,
	            },
				hoverAnimation: false,
				emphasis:false,
		        data: [{
		            value: dataHigh,
		            name: '',
		            itemStyle: {
		                normal: {
		                    color: '#4e73de',
		                }
		            }
		        },{
		            name: '',
		            itemStyle: {
		            	emphasis:{
					        color: "#e6e9f0",
					    },
		                normal: {
		                    color: '#e6e9f0',
		                }
		            },
		            value: total
		        }]
	        },
	        {
	            name:'中级风险',
	            type:'pie',
        		center: ['50%', '50%'],
        		radius:['20%','26%'],
	            startAngle:180, //起始角度
	            label:{
	            	show:false,
	            },
	            labelLine:{
	            	show:false,
	            },
				hoverAnimation: false,
		        data: [{
		            value: dataMiddle,
		            name: '',
		            itemStyle: {
		                normal: {
		                    color: '#35c68d',
		                }
		            }
		        },{
		            name: '',
		            itemStyle: {
		            	emphasis:{
					        color: "#e6e9f0",
					    },
		                normal: {
		                    color: '#e6e9f0',
		                }
		            },
		            value: total
		        }]
	        },
	        {
	            name:'低级风险',
	            type:'pie',
        		center: ['85%', '50%'],
        		radius:['20%','26%'],
	            startAngle:180, //起始角度
	            label:{
	            	show:false,
	            },
	            labelLine:{
	            	show:false,
	            },
				hoverAnimation: false,
		        data: [{
		            value: dataLow,
		            name: '',
		            itemStyle: {
		                normal: {
		                    color: '#4cb9cd',
		                }
		            }
		        },{
		            name: '',
		            itemStyle: {
		            	emphasis:{
					        color: "#e6e9f0",
					    },
		                normal: {
		                    color: '#e6e9f0',
		                }
		            },
		            value: total
		        }]
	        }
	    ]
	};
