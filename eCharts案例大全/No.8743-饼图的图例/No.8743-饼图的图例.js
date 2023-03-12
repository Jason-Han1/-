option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    color:['#8fc31f','#f35833','#00ccff','#ffcc00'],
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data: ['日志破坏','系统提权','错误日志'],
	        formatter:function(name){
	        	var oa = option.series[0].data;
	        	var num = oa[0].value + oa[1].value + oa[2].value ;
	        	for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                    	return name + '   ' + (oa[i].value/num * 100).toFixed(2) + '%' +  '  /   ' + oa[i].value;
                    }
	        	}
	        }
	    },
	    series : [
	        {
	            name: '签到比例分析',
	            type: 'pie',
	            radius : '55%',
	            center: ['40%', '50%'],
	            data:[
	                {value:335, name:'日志破坏'},
	                {value:310, name:'系统提权'},
	                {value:234, name:'错误日志'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },
	            itemStyle: {
	                normal: {
	                    label:{ 
                            show: true, 
//	                            position:'inside',
                            formatter: '{b} : {c} ({d}%)' 
                        }
	                },
                    labelLine :{show:true}
	            }
	        }
	    ]
	};