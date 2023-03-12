var uploadedDataURL = "/asset/get/s/data-1509940674949-HkoTaIpCW.json";
    var myData = [{ "name": "北京","value": [ 116.4, 39.9,94], visualMap: false},{"name": "上海","value": [ 121.47,31.23,27],visualMap: false}, {"name": "天津","value": [ 117.2,39.12, 1],visualMap: false},{"name": "重庆", "value": [ 106.55,29.57,1]},{"name": "沈阳","value": [123.43, 41.8,5],visualMap: false},{"name": "沈阳","value": [123.43,41.8, 5],visualMap: false},{"name": "西安","value": [108.93,34.27, 1],visualMap: false},{"name": "济南","value": [116.98, 36.67, 1],visualMap: false},{"name": "青岛","value": [120.38, 36.07,1],visualMap: false}, { "name": "南京","value": [ 118.78,32.07, 19],visualMap: false}, {"name": "徐州","value": [117.18,34.27,1 ],visualMap: false},{"name": "武汉", "value": [114.3,30.6,13 ], visualMap: false},{"name": "杭州","value": [ 120.15,30.28,12], visualMap: false}, {"name": "福州", "value": [119.3, 26.08, 1], visualMap: false},{ "name": "厦门", "value": [ 118.08, 24.48,2], visualMap: false},{"name": "长沙","value": [ 112.93, 28.23,   1], visualMap: false },{ "name": "成都", "value": [ 104.07,30.67, 3],visualMap: false },{ "name": "深圳","value": [ 114.05, 22.55, 52  ],visualMap: false }];
    var myData2 = [{"name": "北京", "value": 50 },{"name": "上海","value": 50}, {"name": "天津","value": 50 },{"name": "重庆", "value": 50}, { "name": "辽宁", "value": 50 },{ "name": "陕西","value": 50},{"name": "山东","value": 50},{ "name": "江苏", "value": 50},{"name": "湖北","value": 50},{ "name": "浙江","value": 50 }, {"name": "福建","value": 50 },{"name": "湖南","value": 50}, {"name": "四川","value": 50},{"name": "广东","value": 50 }];

$.get(uploadedDataURL, function (chinaJson) {
 echarts.registerMap('china', chinaJson);
 		var option = {
 		        backgroundColor: '#323c47',
				tooltip:{},
			    visualMap: {
	                min: 0,
	                max: 100,
	                left: 'left',
	                top: 'bottom',
	                text: ['高', '低'], // 文本，默认为数值文本
	                calculable: true,
	                show:false,
	            },
	 
	            geo: {
	            	left:'2%',
	      			map: 'china',
	      			label: {
	      	            emphasis: {
	      	                show: false //是否在高亮状态下显示标签
	      	            }
	      	        },
	      	     //   roam:true,  //不让图片拖动
	      			itemStyle: {					// 定义样式
	      	            normal: {					// 普通状态下的样式
	      	                areaColor: '#323c47',
	      	                borderColor: '#111'
	      	            },
	      	        },
	      	      
	  			},
			    series : [
			        {
			          //  name: 'provinces',
			            type: 'map',
			            mapType: 'china',
			            left:'2%',
			            label: {
		                    normal: {
		                        show: false
		                    },
		                    emphasis: {
		                    	show: false
		                    }
		                },
		                tooltip:{
		                	show:false
		                },
		                itemStyle: {
		                    normal: {
		                        borderColor: '#389BB7',
		                        areaColor: '#323c47',
		                    //    label:{show:false},
		                    },
		                    emphasis: {
		                        areaColor: '#389BB7',
		                        borderWidth: 0,
		                        show:false,
		                    } 
		                },
		                animation: false,
			            data:myData2,
			           
			        },
			        {
		  				//	name: '销量', // series名称
		  					type: 'effectScatter',
		  		            coordinateSystem: 'geo',		  					
		  					tooltip : {  	
						         trigger: 'item',
						         formatter:function(params){
						        //	console.log("params"+JSON.stringify(params));
					  	            var rem = params.value+"";
					  	            var a = rem.split(',')[2];
					  	            a = params.name+":"+a;
					  	            return a;
						         }
						    },
						    data: myData ,
		  					symbolSize: function (val) {
		  		                //return Math.log(val[2])*2.5;
		  						return 5+(val[2]/10);
		  		            },
		  		          showEffectOn: 'render',
		  	              rippleEffect: {
		  	                brushType: 'stroke'
		  	              },
		  	          hoverAnimation: true,
		  	      	  label: {
		                 normal: {
		                    formatter: '{b}',
		                    position: 'right',
		                    show: true
		                } 
		           	 },
		           	itemStyle: {
		                normal: {
		                    color: '#f4e925',
		                    shadowBlur: 10,
		                    shadowColor: '#333'
		                }
		            },
		            zlevel: 1
		  				}
			    ]
			};
			myChart.setOption(option);
			myChart.on("mouseover", function (params){ 
 	            if(params.data.value == undefined || params.data.value == 50){             	
 	               myChart.dispatchAction({ 
 	            	 type: 'downplay' ,
 	 	                });   
 	            }
 	        });   
 
})

