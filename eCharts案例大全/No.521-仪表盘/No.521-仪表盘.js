datas = {
    name:"青少年18-40岁",
    value:60
}
color = '#D711EE';
splitNumber = 70;
 option = {
     backgroundColor:"rgba(0,0,0,0.5)",
	title: {
	        text: '{num|'+datas.value+'}{cell|%}',
	        x: 'center',
	        y: '30%',
	        textStyle: {
	            color: '#fff',
	            fontSize:44,
	            rich:{
	                num:{
	                    fontSize: 55,
	                    fontFamily: 'Avanti',
	                    fontWeight: 400,
	                    color: '#FFFFFF'
	                },
	                cell:{
	                    fontSize: 24,
	                    fontFamily: 'Avanti',
	                    fontWeight: 400,
	                    color: 'rgba(170, 184, 255, 1)',
	                    padding:[10,0,0,10,]
	                }
	            }
	        }
	    },
	    series: [  {
	            type: 'pie',
	            center: ['50%', '50%'],
	            radius:["50%","40%"],
	            label: {
	                normal: {
	                    position: "center"
	                }
	            },
	            data: [{
	                    value: datas.value,
	                    name: "",
	                    itemStyle: {
	                        normal: {
	                            color:'rgba(0,0,0,0)',
	                        }
	                    },
	                    label: {
	                        normal: {
	                            formatter: function(params) {
	                                return '{text1|'+datas.name.substring(0,3)+'}'+'\n{text2|'+datas.name.substring(3,datas.name.length)+'}';
	                            },
	                            position: 'center',
	                            lineHeight:10,
	                            show: true,
	                            textStyle: {
	                                fontSize: '20',
	                                fontWeight: 'bold',
	                               rich:{
	                                   text1:{
	                                       fontSize: 33,
	                                        fontFamily: 'FZLanTingHei-L-GBK',
	                                        fontWeight: 400,
	                                        color: '#FFFFFF',
	                                        padding:[120,0,0,0]
	                                   },
	                                    text2:{
	                                       fontSize: 33,
	                                        fontFamily: 'FZLanTingHei-L-GBK',
	                                        fontWeight: 400,
	                                        color: 'rgba(155, 170, 255, 1)',
	                                         padding:[190,0,0,0]
	                                   }
	                               }
	                            }
	                        }
	                    },
	                  
	                }
	            ],
	        },{

	            name: "",
	            type: "gauge",
	            radius: "40%",
	            center: ['50%', '33%'],
	           z:5,
	            startAngle: 0,
	            endAngle: 360 * datas.value / 100,
	            splitNumber: splitNumber * datas.value / 100,
	            hoverAnimation: true,
	            axisTick: {
	                show: false
	            },
	            splitLine: {
	                length:15,
	                lineStyle: {
	                    width: 5,
	                    color:color
	                }
	            },
	            axisLabel: {
	                show: false
	            },
	            pointer: {
	                show: false
	            },
	            axisLine: {
	                lineStyle: {
	                    opacity: 0
	                }
	            },
	            detail: {
	                show: false
	            },
	            data: [{
	                value: 0,
	                name: ""
	            }]
	        
	        },{

	            name: "",
	            type: "gauge",
	            radius: "40%",
	            center: ['50%', '33%'],
	           z:5,
	           endAngle: 360,
	            startAngle: 360 * datas.value / 100 + 0.7,
	            splitNumber: splitNumber * (100-datas.value) / 100,
	            hoverAnimation: true,
	            axisTick: {
	                show: false
	            },
	            splitLine: {
	                length: 15,
	                lineStyle: {
	                    width: 5,
	                    color:  "rgba(4, 7, 40, 1)"
	                }
	            },
	            axisLabel: {
	                show: false
	            },
	            pointer: {
	                show: false
	            },
	            axisLine: {
	                lineStyle: {
	                    opacity: 0
	                }
	            },
	            detail: {
	                show: false
	            },
	            data: [{
	                value: 0,
	                name: ""
	            }]
	        
	        }
	        
	       
	        
	    ]
	};
