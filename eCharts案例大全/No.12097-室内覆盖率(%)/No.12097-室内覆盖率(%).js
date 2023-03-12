option = {
title: {
		        text: '室内覆盖率(%)',
		        top:'9%',
		        textStyle:{
		        	fontWeight:'normal',
		        	fontSize:'12'
		        }
		    },
		    grid: {
		    	top:'26%',
		        left: '3%',
		        right: '4%',
		        bottom: '6%',        containLabel: true
		    },
			legend: {
				left:'38%',
		        data:['电信','移动','联通']
		    },
		    tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        },
		        formatter: function(params, ticket, callback) {
		        	console.log(params);
		        	var res='';
		        	for(var i=0,len=params.length;i<len;i++){
		        	    res+='<span class="etit" style="background:'+params[i].color+'"></span>'+params[i].seriesName+':'+params[i].value+'%</br>';
		        	}
		        	return params[0].axisValue+'dBm'+'</br>'+res;
		        			
		        }
		    },
			xAxis: {
		        type: 'category',
		        data: ['-85', '-90', '-95', '100', '-105', '-110', '-115']
		    },
		    yAxis: {
		        type: 'value',
		    },
		    series: [
		    	{name:'电信',
		            type:'line',
		            data:[35, 40, 50,60, 70,80, 90]
		        },
		    	{name:'移动',
		            type:'line',
		            data:[30, 35, 40, 50,60, 70,80 ]
		        },
		    	{name:'联通',
		            type:'line',
		            data:[ 15, 30, 35, 40, 50,60, 70]
		        }
            ]
};