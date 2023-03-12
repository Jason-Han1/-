let demo = [
  {
    "x": "生效裁判",
    "y": 0.61078,
    "unit":""
  }
];
let datayy = _Data();
option =  {
    backgroundColor:'#041F34',	
	graphic:{
        type:"text",
        left:"center",
        top:"35%",
        z:4,
        zlevel:6,
        style:{
            text:datayy[0].unit?(datayy[0].value + datayy[0].unit):(parseInt(datayy[0].value*100) + '%'),
            fill:"#fff",
            textFont: 'normal 30px Roboto-Medium',
            textAlign:"center"
            
        }
    },
	series: [
			{
	            type: 'pie',
	           	zlevel:1,
	            silent:true,
	            radius: ['96%', '97%'],
	            hoverAnimation:false,
	           // animation:false,    //charts3 no
	            label: {
	                normal: {
	                    show: false
	                },
	              
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	          
	            data: _pie1()
	        },
	        {
	          
	            type: 'pie',
	           	zlevel:2,
	            silent:true,
	            radius: ['95%', '98%'],
	            startAngle: -65,
	            //hoverAnimation:false,
	            //animation:false,
	            label: {
	                normal: {
	                    show: false
	                },
	              
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	          
	            data: _pie2()
	        },
	        {
	           
	            type: 'pie',
	           	zlevel:1,
	            silent:true,
	            radius: ['65%', '70%'],
	            hoverAnimation:false,
	           // animation:false,
	            label: {
	                normal: {
	                    show: false
	                },
	              
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	          
	            data: [{
	            		name: 'pie1',
	                    value: 20,
	                    itemStyle:{
	                        normal:{
	                            color: "#588ec5",
	                            borderWidth:0,
	                            borderColor:"rgba(0,0,0,0)"                                                  
	                        }
	                    }
	            	}]
	        }, 
			{
	         	
	            type: 'pie',
	           	zlevel:2,
	            silent:true,
	            radius: ['0%', '65%'],
	            hoverAnimation:false,
	           // animation:false,
	            label: {
	                normal: {
	                    show: false
	                },
	              
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	          
	            data: [{
	            		name: 'pie1',
	                    value: 20,
	                    itemStyle:{
	                        normal:{
	                            color: "rgba(0,0,0,0.4)",
	                                                              
	                        }
	                    }
	            	}]
	        },
	        {						
	            type: 'pie',
	           	zlevel:4,
	            silent:true,
	            radius: ['0', '70%'],
	           // hoverAnimation:false,
	            //animation:false,
	            label: {
	                normal: {
	                    show: false
	                },
	              
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },		          
	            data: _pieData(datayy)			                 			               			            																		
			}

	]

}

function _pie1(){
    let dataArr = [];
    for(var i=0;i<8;i++){
       
        dataArr.push({
    		name: (i+1).toString(),
            value: 20,
            itemStyle:{
                normal:{
                    color: "rgba(88,142,197,0.4)",
                    borderWidth:0,
                    borderColor:"rgba(0,0,0,0)"                                                  
                }
            }
    	})
        
    }
    return dataArr

}
function _pie2(){
    let dataArr = [];
    for(var i=0;i<8;i++){
        if(i%2 === 0){
            dataArr.push({
        		name: (i+1).toString(),
                value: 25,
                itemStyle:{
                    normal:{
                        color: "rgba(88,142,197,0.5)",
                        borderWidth:0,
                        borderColor:"rgba(0,0,0,0)"                                                  
                    }
                }
        	})
        }else{
            dataArr.push({
        		name: (i+1).toString(),
                value: 20,
                itemStyle:{
                    normal:{
                        color: "rgba(0,0,0,0)",
                        borderWidth:0,
                        borderColor:"rgba(0,0,0,0)"                                                  
                    }
                }
        	})
        }
        
    }
    return dataArr

}
function _pieData(data){
	let _data = data;	
	let dataArr = [];
	for(var i=0;i<5;i++){
		if(i === 2 ){
			let dt = (data[0].unit)?25:(Number(data[0].value));
			dataArr.push({
				name: (i+1).toString(),
                value: dt,                    
                itemStyle:{
                    normal:{
                    	
						color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
								offset: 0,
								color: 'rgb(147,187,216)'
							}, {
								offset: 1,
								color: '#588ec5'
						}]),
                        borderWidth:0,
                        borderColor:"rgba(0,0,0,0.4)"
                        
                    }
                }
			})
		}else{
			let dta = (data[0].unit)?25:(1-Number(data[0].value))/4;			
			dataArr.push({
				name: (i+1).toString(),
                value: dta,
                itemStyle:{
                    normal:{
                        color: "rgba(0,0,0,0)",
                        borderWidth:0,
                        borderColor:"rgba(0,0,0,0)"                                                  
                    }
                }
			})
		}
		
	}
	//console.log(dataArr)
	return dataArr
}
function _Data() {
	let yData = [];
	if (demo) {
		demo.map(item => {
			yData.push({
				name: "",
				value: item.y,
				unit:item.unit
			})
		})
	}

	return yData;
}

