durColor=['#d48265','#c23531','#91c8af','#749f83','#61a0a8','#2c3c50',"#487ed1","#37b1ec","#9e50ad","#5f64ee","#2655ba"],
durTimeData=['0-1h','1-2h','2-3h','3-4h','4-5h','5-6h','6-7h','7-8h','>8h']
data=[50,47,45,36,30,29,23,10,5]
all=0
 data.forEach(function(v){ 
	all+=parseInt(v);   //计算总人数
});
var getDurData=function(data){
	  	var result=[];
	  	for(var i in data){
	  		var opt = {
	  			name:durTimeData[i],
	  			type:'pie',
	  			z:i+1,
	  			clockWise:false,
	  			center:['45%','47%'],
	  			// itemStyle : dataStyle,
	  			label: {
	  				normal: {
	  					show: false,
	  					formatter:'{c}人/{d}%',
	  					fontSize:14
	  				},
	  				emphasis: {
	  					show: false
	  				}
	  			},
	  			labelLine:{
	  				normal: {
	  					show: false,
	  					length:10,
	  					length2:15
	  				},
	  				emphasis: {
	  					show: false
	  				}
	  			},
	  			hoverAnimation: false,
	  			data:[
                {
                    value:data[i],
                    itemStyle:{
			    	    color:durColor[i],
                    }
                },
	  				{
	  					value:all-data[i],
                    itemStyle :{
                        normal : {
	                              color: '#efeef3'
	                          },
	                          emphasis : {
	  	                    	color: '#efeef3'
	                          },
                    },
                    label: {
	  			        	normal: {
	  			        		show: false,
	  			        	},
	  			        	emphasis: {
	  			        		show: false
	  			        	}
	  			        },
	  			        labelLine:{
	  			        	normal: {
	  			        		show: false
	  			        	},
	  			        	emphasis: {
	  			        		show: false
	  			        	}
	  			        },
	  					tooltip:{
                        show: false,
	  						formatter:function(){
	  							return '';
	  						}
	  					}
	  				}
	  			]
	  		};
		var max = data.length*10-i*8;
	  		opt.radius=[(max-16)+'%',(max-11)+"%"];
	  		result.push(opt);
	  	}
	  	return result;
};
option = {
    title: {
        text: '环形图'
    },
    backgroundColor:'#fff',
   color:durColor,
	tooltip : {
	    show: true,
	    formatter: "{a} <br/> {c}人 ({d}%)"
	},
	legend: {
	    orient:'vertical',		      
	    // top: '15%',
	    right:0,
	    selectedMode:false,
	    data:durTimeData
	},	
	series:getDurData(data)
};