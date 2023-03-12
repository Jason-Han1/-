option = {
    backgroundColor:'#ffffff',
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a}{b}({d}%)"
	    },
	    color:["#407fff", "#f29961", "#00cccd ", "#e36973"],
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
	       data: ['非常满意','满意','基本满意','不满意'],
	        formatter:function(name){
	    	var oa = option.series[0].data;
	    	var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
	  	for(var i = 0; i < option.series[0].data.length; i++){
                if(name==oa[i].name){
               	return name + ' ' + oa[i].value + '项';
                 }
	    	}
	        }
	    },
	    series : [
	        {
	            name: '',
	            type: 'pie',
	            radius : '58%',
	           center: ["50%", "50%"],
	           radius: ["20%", "58%"],
	           
	            data:[
	                {value:360, name:'非常满意'},
	                {value:50, name:'满意'},
	                {value:20, name:'基本满意'},
	                {value:20, name:'不满意'}
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
//                            position:'inside',
                            formatter: '{b}\n ({d}%)' ,
                            textStyle:{
                                fontSize:16
                            }
                        },
                         borderColor: '#ffffff',
                borderWidth: 0,
	                },
                    labelLine :{show:true}
	            }
	        }
	    ]
	};