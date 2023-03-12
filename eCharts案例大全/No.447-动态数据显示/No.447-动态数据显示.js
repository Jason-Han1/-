var uploadedDataURL = "/asset/get/s/data-1638332833567-cWIwApby_.png";

var uploadedDataURL1 = "/asset/get/s/data-1638332824787-pXsHCwAOT.png";

var uploadedDataURL2 = "/asset/get/s/data-1638332788612-6P0Mjz5dk.png";

var datas = {
    countArr: [5, 20, 10,75],
	nameArr: ["中断", "空闲", "忙碌", "停用"],
	perArr:[5, 20, 10,75]
}
let currentValue = datas.perArr[0];
	var height = document.body.clientHeight;
	var pointerLength = "60%";
	var group = [{left: '22.5%',top: '50%'},{ left: '33%',top: '32%'},
	             { left: '59%',top: '32%'},{ left: '69%', top: '50%'}
	             ]
	var titleText = `{a|${datas.nameArr[0]}}\n{b|${datas.perArr[0]}}{c|%}\n{d|${datas.countArr[0]}}`
	var centerTop = "46%";
	var radiusArr = ['90%','80%'];
	var centerArr =["50%", "65%"];
	var elementsArr = [{
    	z:300,
        type: "image",
        style: {
            image:uploadedDataURL2,
            width:313,
            height: 210
        },
       left: 'center',
        top: centerTop,
    }]
	
	datas.nameArr.forEach( function(item,index){
		var imgUrl = uploadedDataURL1;
		var colorText = "#00FCFF"
		if(index==0){
			imgUrl = uploadedDataURL;
			colorText = "#FFFFFF"
		}
		elementsArr.push(
			{
	        	type:"group",
	        	 left: group[index].left,
		         top: group[index].top,
		         width: 96,
	              height: 96,
	        	children:[ {
		            type: 'image',
		            style: {
		              image: imgUrl, // 你的图片地址
		              width: 96,
		              height: 96,
		              color: '#fff',
		              textAlign: 'center' ,
		            }
	        	},
		            {
		                type: 'text',
		                style: {
		                  text: datas.countArr[index],
		                  fill: colorText,
		                  fontSize: 35,
		                  fontFamily: 'FZLanTingHei-B-GBK',
		                  fontWeight: 400,
		                  x:28,y:20,
		                }
		              },
		              {
			                type: 'text',
			                style: {
			                  text: datas.nameArr[index],
			                  fill: '#fff',
			                  fontSize: 25,
			                  fontFamily: 'FZLanTingHei-B-GBK',
			                  fontWeight: 400,
			                  x:28,y:60,
			                
			                }
			              }
		          
		          ]
	        }
		)
	})
	
option = {
 backgroundColor:"#000000",
			 graphic: {
		        elements:elementsArr
		    },
		    title: {
		        text:titleText,
		        x: 'center',
		        y: '47%',
		        z:400,
		        textStyle: {
		            rich: {
		                a: {
		                    fontSize: 20,
		                    color: '#0E6CFE',
		                    fontWeight:"bold",
		                      padding: [0, 0, 20, 0]
		                },
		                b: {
		                    fontSize: 70,
		                    color:"#ffffff",
		                    padding: [0, 0, 10, 0]
		                },
		                c: {
		                    fontSize: 28,
		                    color:"#ffffff",
		                    padding: [0, 0, 0, 10]
		                },
		                d: {
		                    fontSize: 30,
		                    color: '#0E6CFE',
		                    fontWeight:"bold",
		                   
		                }
		            }
		        }
		    },
		    series: [{
		        name: "外围锯齿刻度",
		        z:100,
		        type: "gauge",
		        center: centerArr,
		        radius: radiusArr[0],
		        min: 0, //最小刻度
		        max: 100, //最大刻度
		        startAngle: 180 + 15,
		        endAngle: 0 - 15,
		        axisLine: {
		         z:5,
		        	show:true,
		            lineStyle: {
		                color: [
	                            [
	                             currentValue/ 100,
	                             new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                                     offset: 0,
	                                     color: "rgba(255, 23, 23, 1)"
	                                 },
	                                 {
	                                     offset: 1,
	                                     color: "rgba(0, 234, 255, 1)"
	                                 }
	                                
	                             ])
	                         ],  [1, '#2341AA'],
	                     ],
		                width:25,
		               
		            }
		        },
		        axisLabel: {
		            show: false,
		        },
		        axisTick: {
	                show: false,
	            },
		        splitLine: {
		          z:4,
		            show: true,
		            length: 25,
		             distance:-25,
		            lineStyle: {
		             
		                width: 10,
		                color: '#080137',
		                shadowColor: 'rgba(21,42,164, 0.5)',
		                shadowBlur: 100
		            }
		        },
		        splitNumber: 60,
		        detail: {
		            show: false,
		        },
		        pointer: {
                   show:true,
                   length: pointerLength,
	                width: 10,
	                itemStyle:{
	                	normal:{
	                		color:"#00FCFF"
	                	}
	                }
	                
                    
                },
                data:[{value:currentValue}]
               
		    },{
		    	 name: '遮罩',
		    	 z:50,
		            tooltip:{
		                show:false
		            },
		            type: 'pie',
		            radius: '50%',
		            center:centerArr, // 默认全局居中
		            hoverAnimation:false,
		            itemStyle:{
		                normal:{
		                    color: "#000000"
		                },
		                emphasis:{
		                    color: '#000000'
		                }
		            },
		            labelLine:{
		                normal:{
		                    show:false
		                }
		            },
		            animation:false,
		            data: [50]
		    },{
                name: '面积',
                type: "gauge",
                radius:radiusArr[1],
                center: centerArr,
                startAngle: 180 + 15,
                endAngle: 0 - 15,
                min: 0,
                max: 100,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 500,
                        color: [
                            [
                                1,
                                new echarts.graphic.LinearGradient(0,1, 1, 1, [{
                                        offset: 0,
                                        color: "rgba(63,134,255, 0)"
                                    },
                                    {
                                        offset: 0.2,
                                        color: "rgba(63,134,255, 0.5)"
                                    },
                                    {
                                        offset: 0.5,
                                        color: "rgba(63,134,255, 0.3)"
                                    },
                                    {
                                        offset: 0.8,
                                        color: "rgba(63,134,255, 0.5)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(63,134,255, 0)"
                                    }
                                ])
                            ]
                        ]
                    }
                },
                axisTick: {
                    show: 0
                },
                splitLine: {
                    show: 0
                },
                axisLabel: {
                    show: 0
                },
                pointer: {
                    show: false,
                    
                 
                },
                detail: {
                    show: false
                },
                data:[{value:currentValue}]
              
               
            },
           
            
		    ]
		} 
		var currentIndex = 0;
		
		    var timeTicket = setInterval(function() {
			        	if(currentIndex == 3){
			        		currentIndex = 0
			        	}else{
			        		currentIndex += 1;
			        	}
			        	var elementsArr = option.graphic.elements;
			        	
			        	elementsArr.forEach(function(item,index){
			        		if(elementsArr[index].children){
			        			elementsArr[index].children[0].style.image=uploadedDataURL1	;
			        			elementsArr[index].children[1].style.fill = "#00FCFF" 
			        		}
			        	})
		        		elementsArr[currentIndex+1].children[0].style.image=uploadedDataURL;
		        		elementsArr[currentIndex+1].children[1].style.fill = "#FFFFFF" 
		        		option.graphic.elements = elementsArr;
			        	option.title.text = `{a|${datas.nameArr[currentIndex]}}\n{b|${datas.perArr[currentIndex]}}{c|%}\n{d|${datas.countArr[currentIndex]}}`
			        	console.log(option.title)
			        	option.series[0].data[0].value = datas.perArr[currentIndex];
			        	option.series[0].axisLine.lineStyle.color[0][0] = datas.perArr[currentIndex]/ 100;
			        	
			        	myChart.setOption(option,true)
			        },1000 * 3)