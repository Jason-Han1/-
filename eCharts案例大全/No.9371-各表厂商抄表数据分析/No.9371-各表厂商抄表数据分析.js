option = {
    backgroundColor:'#ffffff',
    title:{
        text:"各表厂商抄表数据分析",
        left:'center',
        top:'5%',
        textStyle:{
            color:"#333",
            fontSize:20,
            
        }
    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    color:['#8fc31f','#f35833','#00ccff','#ffcc00','#315FA0','#03B48E'],
	   legend: {
	       // orient: 'vertical',
	         "width": "70%",
             "left": "center",
             "icon": "circle",
            "right": "0",
            "bottom":'20',
            "padding": [20, 30],
            "itemGap": 30,
	       x: 'left',
	       data: ['金水NB水表','积成NB-IOT水表','华旭NB水表','瑞泉NB水表','迈拓NB水表','新天NB表计'],
	        formatter:function(name){
	    	var oa = option.series[0].data;
	    	var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
	  	for(var i = 0; i < option.series[0].data.length; i++){
                if(name==oa[i].name){
               	return name + '     ' + oa[i].value + '     ' + (oa[i].value/num * 100).toFixed(2) + '%';
                 }
	    	}
	        }
	    },
	    series : [
	        {
	            name: '签到比例分析',
	            type: 'pie',
	            radius : '55%',
	           // center: ['40%', '50%'],
	           center: ["50%", "50%"],
	           radius: ["30%", "58%"],
	           
	            data:[
	                {value:3600, name:'金水NB水表'},
	                {value:5400, name:'积成NB-IOT水表'},
	                {value:2900, name:'华旭NB水表'},
	                {value:2500, name:'瑞泉NB水表'},
	                {value:4500, name:'迈拓NB水表'},
	                {value:3500, name:'新天NB表计'},
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
                            formatter: '{b} : {c} ({d}%)' ,
                            textStyle:{
                                fontSize:16
                            }
                        },
                         borderColor: '#ffffff',
                borderWidth: 10,
	                },
                    labelLine :{show:true}
	            }
	        }
	    ]
	};