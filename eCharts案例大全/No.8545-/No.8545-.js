option =  {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	   color: ['#00a0fc', '#ffe400', '#ff9a09', '#ef1e5f','#23cbe5', '#ec561b', '#00ae9d', '#dddf00', '#b23aee', '#50b332'],

	    legend: {
	        orient: 'vertical',
	        x: 'center',
	        y:'450',
	        data: ['偏差值大于3℃','偏差值1℃~3℃','偏差值-1℃~1℃','偏差值-3℃~-1℃','偏差值小于-3℃'],
	        formatter:function(name){
	        	var oa = option.series[0].data;
	        	var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
	        	for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                    	return name + '     ' + oa[i].value + '  单元   ' + (oa[i].value/num * 100).toFixed(2) + '%';
                    }
	        	}
	        }
	    },
	    series : [
	        {
	            name: '偏差值',
	            type: 'pie',
	            radius : '35%',
	            center: ['50%', '30%'],
	            data:[
	                {value:33, name:'偏差值大于3℃'},
	                {value:13, name:'偏差值1℃~3℃'},
	                {value:24, name:'偏差值-1℃~1℃'},
	                {value:15, name:'偏差值-3℃~-1℃'},
	                {value:4, name:'偏差值小于-3℃'}
	            ],
	            
	            itemStyle: {
	                normal: {
	                   // label:{ 
                    //         show: true, 

                    //         formatter: '{b} : {c} ({d}%)' 
                    //     }
	                },
	                 emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                   labelLine: {
            normal: {
                length: 15,
                length2: 13,
                smooth: true,
            }
        },
	            }
	        }
	    ]
	};