option = {
    title: {
        text: '2017年成都公司自控专项成本分布',
        textStyle:
        {fontSize:25},
        subtext: '单位：万元',
        x:'20%',
    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    color:['#8fc31f','#f35833','#00ccff','#ffcc00','#045FB4','#FF8000'],
	    legend: {
	        orient: 'vertical',
	        x: 'right',
	        y:'10%',
	        data: ['配网线路清理','设备隐患治理及反措执行','运维环境治理','安防消防运维','新技术研究与应用','配电自动化运维'],
	        formatter:function(name){
	        	var oa = option.series[0].data;
	        	var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
	        	for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                    	return name  ;
                    }
	        	}
	        }
	    },
	    series : [
	        {
	            name: '自控专项成本',
	            type: 'pie',
	            radius : '55%',
	            center: ['48%', '60%'],
	            data:[
	                {value:3000, name:'配网线路清理'},
	                {value:3650, name:'设备隐患治理及反措执行'},
	                {value:753, name:'运维环境治理'},
	                {value:673, name:'安防消防运维'},
	                {value:248, name:'新技术研究与应用'},
	                {value:934, name:'配电自动化运维'}
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
	                        textStyle:{fontSize:16},
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