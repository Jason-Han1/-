    option = {
        backgroundColor:'#fff',
		title:{
			text:"设备排行",
			top:10,
			left:15,
			textStyle:{
				color:"#35598d",
				fontSize:16,
				fontWeight:'normal'
			}
		},
	    tooltip: {
	    	trigger: 'axis',
	        formatter: "{b}：{c}"
	    },
	    grid: {
	        left: '3%',
	        right: '10%',
	        bottom: '2%',
	        top: '17%',
	        containLabel: true
	    },
	    xAxis :{
            type : 'value',
            axisLabel:{        //坐标轴字体颜色
            	show:false
            },
            axisLine:{
            	show:false,
            },
	        axisTick:{       //y轴刻度线
	          show:false
	        },
            splitLine:{      //网格
            	show: false,
            }
        },
	    yAxis :{
            type : 'category',
            name:'设备名称   数量          ',
            nameTextStyle:{
	            color: '#35598d',
	            verticalAlign: 'bottom',
            },
            data : ['DP_FW145','HW_FW173_VFW_NMS','CISCOASA','EUDEMON1000E','DZQD-608-2-2F-D05-E8000E-X8-01','HGT-X9F-I16-MLINE-EUDEMON8000E-1','USG6000-ENSP','HUAWEI-4','ASW05','PIX525C'],
            axisLabel:{          //坐标轴字体颜色
            	textStyle:{
	                color: '#9eaaba'
	            },
	            formatter: function(name) {
	                //截取字符串长度
	            	return (name.length > 24 ? (name.substr(0, 24) + "...") : name)
				},
            },
            axisLine:{
                show:false
            }, 
	        axisTick:{       //y轴刻度线
	           show:false
	        },
            splitLine:{    //网格
            	show: false,
            }
        },
	    series:{
        	name:'',
            type:'bar',
            barWidth : '30%',  //柱子宽度
            itemStyle:{  //柱子颜色
                normal:{
                    color:'#5f81e3',
                    barBorderRadius: [20],
                }
           	},
            label: {
                normal: {
                    show: true,
		    		textStyle:{
		    			color:'#9eaaba',
		    			fontSize:12,
		    			fontWeight:'normal',
		    		},
                    position: 'right',
                }
            },
            data:[120,156,230,289,330,380,414,461,532,620]
        }
	};
	