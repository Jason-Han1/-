option = {
            title: {
                text: '交叉柱图模拟',
                subtext:'数据来自网络'
            },
            dataZoom:{
                show:false
            },
            grid:{
            	right:'15%'
            },
            toolbox:{
            	right:'15%',
            	itemGap:30,
            	itemSize:24,
            	feature:{
            		saveAsImage:{},
            		restore:{}
            	}
            },
            tooltip : {
            	trigger:'axis',
            	axisPointer:{
            		type:'shadow'
            	},
            	formatter:function(params){
            		var tar;
            		var lin;
                    if (params[0].value ==='-'&&params[1].value ==='-') { return 'no data';}
                    else{
	                    if (params[0].value != '-') {
	                    	tar = params[0];
	                        if (params[5].value != '-') {
	                        lin = params[5];
	                        }else{
	                        	if (params[6].value != '-') {
	                        		lin = params[6];
	                        	}else{
	                        		if (params[6].value != '-') {
	                        			lin = params[6];
	                        		}else{
	                        			if (params[7].value != '-') {
				                        		lin = params[7];
	                        			}else{
	                        				if (params[8].value != '-') {
	                        					lin = params[8];
	                        				}
	                        			}
	                        		}
	                        	}
	                    	}
	                    }
	                    else {
	                    	if (params[1].value != '-') {
	                    		tar = params[1];
	                    		if (params[2].value != '-') {
	                    			lin = params[2];
	                    		}else{
	                    			if (params[3].value != '-') {
	                    				lin = params[3];
	                    			}else{
	                    				if (params[4].value != '-') {
	                    					lin = params[4];
	                    				}
	                    			}
	                    		}
	                    	}
	                    }
	                return tar.seriesName + ' : '+ tar.value + '<br/>' + lin.seriesName + ' : ' + lin.value;
	            	}
            	}
            },
            legend: {
            	orient:'vertical',
            	top:'20%',
            	right:'5%',
            	itemGap:30,
                data:['Company A','Company B', 'Company C','Q1', 'Q2','Q3','Q4']
            },
            xAxis: {
                boundaryGap : true,
                splitLine:{
                	show:false
                },
                axisLabel:{
                	interval:function(index, value){
                		var liu = value;
                		if (liu!='-') {
                			return true;
                		}
                		else{return false;}
                	}
                },
                data: [ ' ',  '-', 'Company A','-', '-', '-',  '-','Company B', '-', '-', '-',  '-','Company C', '-', '-', '-', '-',  '-', 'Q1','-', '-',  '-', 'Q2','-', '-',  '-','Q3', '-', '-',  '-','Q4', '-']
            },
            yAxis: {
                
            },
            series: [{//0
                name:'Company Total',
                type:'bar',
                slient:true,
                barGap:'-100%',
                barCategoryGap:'0%',
                itemStyle:{
                	normal:{
                		color:'red'
                	}
                },
                data:[ '-', //设定相同公司的total value为相同颜色
                {value:6593,itemStyle:{normal:{color:'#743C08'}}},
                {value:6593,itemStyle:{normal:{color:'#743C08'}}},
                {value:6593,itemStyle:{normal:{color:'#743C08'}}}, 
                {value:6593,itemStyle:{normal:{color:'#743C08'}}}, 
                 '-', 
                {value:7049,itemStyle:{normal:{color:'#DF760B'}}},
                {value:7049,itemStyle:{normal:{color:'#DF760B'}}}, 
                {value:7049,itemStyle:{normal:{color:'#DF760B'}}}, 
                {value:7049,itemStyle:{normal:{color:'#DF760B'}}}, 
                 '-', 
                {value:4333,itemStyle:{normal:{color:'#F6B61E'}}}, 
                {value:4333,itemStyle:{normal:{color:'#F6B61E'}}}, 
                {value:4333,itemStyle:{normal:{color:'#F6B61E'}}}, 
                {value:4333,itemStyle:{normal:{color:'#F6B61E'}}}, 
                 '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
            },
            {//1
            	name:'Quarter Total',
            	type:'bar',
            	barGap:'-100%',
                barCategoryGap:'0%',
                itemStyle:{
                	normal:{
                		color:'red'
                	}
                },
            	data:[ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 
            	{value:3172,itemStyle:{normal:{color:'#BBE9DB'}}}, 
            	{value:3172,itemStyle:{normal:{color:'#BBE9DB'}}}, 
            	{value:3172,itemStyle:{normal:{color:'#BBE9DB'}}}, 
            	'-', 
            	{value:4548,itemStyle:{normal:{color:'#AECCC6'}}}, 
            	{value:4548,itemStyle:{normal:{color:'#AECCC6'}}}, 
            	{value:4548,itemStyle:{normal:{color:'#AECCC6'}}}, 
            	'-', 
            	{value:5174,itemStyle:{normal:{color:'#9BA6A5'}}}, 
            	{value:5174,itemStyle:{normal:{color:'#9BA6A5'}}}, 
            	{value:5174,itemStyle:{normal:{color:'#9BA6A5'}}}, 
            	'-', 
            	{value:4949,itemStyle:{normal:{color:'#757A79'}}}, 
            	{value:4949,itemStyle:{normal:{color:'#757A79'}}}, 
            	{value:4949,itemStyle:{normal:{color:'#757A79'}}}]
            },
            {//2
            	name:'Company A',
            	type:'bar',
            	barGap:'-100%',
                barCategoryGap:'0%',
                itemStyle:{
                	normal:{
                		color:'#743C08'
                	}
                },
            	data:[ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 1215, '-', '-', '-', 2303, '-', '-', '-', 1617, '-', '-', '-', 2300, '-', '-']
            },
            {//3
            	name:'Company B', 
            	type:'bar',
            	barGap:'-100%',
                barCategoryGap:'0%',
                itemStyle:{
                	normal:{
                		color:'#DF760B'
                	}
                },
            	data:['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 669, '-', '-', '-', 1738, '-', '-', '-', 1378, '-', '-', '-', 1804, '-']
            },
            {//4
            	name:'Company C',
            	type:'bar',
            	barGap:'-100%',
                barCategoryGap:'0%',
                itemStyle:{
                	normal:{
                		color:'#F6B61E'
                	}
                },
            	data:[ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 1288, '-', '-', '-', 507, '-', '-', '-', 2179, '-', '-', '-', 845]
            },
            {//5
            	name:'Q1', 
            	type:'bar',
            	barGap:'-100%',
                barCategoryGap:'0%',
                itemStyle:{
                	normal:{
                		color:'#BBE9DB'
                	}
                },
            	data:['-', 1487, '-', '-', '-', '-', 2145, '-', '-', '-', '-', 772, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
            },//6
            {
            	name:'Q2',
            	type:'bar',
            	barGap:'-100%',
                barCategoryGap:'0%',
                itemStyle:{
                	normal:{
                		color:'#AECCC6'
                	}
                },
            	data:[ '-', '-', 2023, '-', '-', '-', '-', 1735, '-', '-', '-', '-', 899, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
            },
            {//7
            	name:'Q3',
            	type:'bar',
            	barGap:'-100%',
                barCategoryGap:'0%',
                itemStyle:{
                	normal:{
                		color:'#9BA6A5'
                	}
                },
            	data:[ '-', '-', '-', 1528, '-', '-', '-', '-', 960, '-', '-', '-', '-', 883, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
            },
            {//8
            	name:'Q4',
            	type:'bar',
            	barGap:'-100%',
                barCategoryGap:'0%',
                itemStyle:{
                	normal:{
                		color:'#757A79'
                	}
                },
            	data:[ '-', '-', '-', '-', 1555, '-', '-', '-', '-', 2209, '-', '-', '-', '-', 1779, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
            },]
            
        };