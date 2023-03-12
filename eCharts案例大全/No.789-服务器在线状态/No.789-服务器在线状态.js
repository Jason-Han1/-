var chinaGeoCoordMap = {
        '上海': [121.4648, 31.2891],
        '浙江': [119.5313, 29.8773],
        "江苏": [118.8062, 31.9208],
        
        '北京': [116.4551, 40.2539],
        "天津": [117.4219, 39.4189],
        "河南": [113.4668, 34.6234],
        "甘肃": [103.5901, 36.3043],
        
        "贵州": [106.6992, 26.7682],
        "广西": [108.479, 23.1152],
        "江西": [116.0046, 28.6633]
        
		
	};
	
   	var SHData = [
   	     [{name:'上海'}, {name:'上海'}],
	    [{name:'上海'}, {name:'浙江',type:"mt"}],
	    [{name:'上海'}, {name:'江苏',type:"mt"}]
	];

	var BJData = [
	     [{name:'北京'}, {name:'北京'}],
	    [{name:'北京'}, {name:'天津'}],
	    [{name:'北京'}, {name:'河南',type:"mt"}],
	    [{name:'北京'}, {name:'甘肃',type:"mt"}]
	];

	var GZData = [
	     [{name:'贵州',alert:true}, {name:'贵州',alert:true}],
	    [{name:'贵州',alert:true}, {name:'广西'}],
	    [{name:'广西'}, {name:'江西',type:"mt"}]
	   
	];
	

	
	var convertData = function (data) {
	    var res = [];
	    for (var i = 0; i < data.length; i++) {
	        var dataItem = data[i];
	        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
	        var toCoord = chinaGeoCoordMap[dataItem[1].name];
	        if (fromCoord && toCoord) {
	            var obj = {
	                fromName: dataItem[0].name,
	                toName: dataItem[1].name,
	                coords: [fromCoord, toCoord],
	                //value: dataItem[1].value,
	            }
	            console.log(dataItem[1])
	            if(dataItem[0].alert){
	                obj.lineStyle = {normal:{color:"orange"}}
	                obj.effect =  {
    	                color:"red",
    	                symbolSize:0
	                }
	            }
	            
	            console.log(obj)
	            
	            res.push(obj);
	        }
	    }
	    console.log("-------")
	    return res;
	   	
	};
	
	var mtPath = "path://M752.151 866.527H579.133v-47.486c173.631-32.436 304.931-184.675 304.931-367.785 0-153.623-92.46-285.338-224.778-342.977-0.023 0.032-0.047 0.062-0.069 0.094-45.734-20.009-96.17-31.258-149.294-31.258s-103.559 11.249-149.292 31.257l-0.069-0.093c-132.32 57.64-224.78 189.355-224.78 342.977 0 183.11 131.3 335.349 304.93 367.785v47.486H267.694c-33.178 0-34.62 34.589-34.62 34.589v69.215h553.699v-69.215c0-19.054-15.533-34.589-34.622-34.589zM634.962 135.969c-32.767 30.62-76.618 49.472-125.039 49.472-48.422 0-92.272-18.851-125.038-49.473 38.734-15.516 80.86-24.269 125.038-24.269s86.304 8.752 125.039 24.27z m-308.89 315.286c0-101.556 82.229-183.82 183.85-183.82 101.554 0 183.851 82.264 183.851 183.82 0 101.585-82.297 183.849-183.851 183.849-101.62 0-183.85-82.264-183.85-183.849z m281.179 0c0-53.781-43.547-97.296-97.328-97.296-18.52 0-35.629 5.436-50.359 14.393 4.596-1.442 9.363-2.381 14.395-2.381 27.274 0 49.348 22.075 49.348 49.351 0 27.245-22.073 49.317-49.348 49.317-27.277 0-49.318-22.073-49.318-49.317 0-5.064 0.972-9.831 2.384-14.428-8.994 14.732-14.428 31.841-14.428 50.361 0 53.81 43.511 97.324 97.325 97.324 53.782 0.001 97.329-43.514 97.329-97.324z"
	var serverPath = "path://M960 320H64c-35.346 0-64-28.654-64-64V128c0-35.346 28.654-64 64-64h896c35.346 0 64 28.654 64 64v128c0 35.346-28.654 64-64 64z m-96-176c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z m-128 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z m224 496H64c-35.346 0-64-28.654-64-64v-128c0-35.346 28.654-64 64-64h896c35.346 0 64 28.654 64 64v128c0 35.346-28.654 64-64 64z m-96-176c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z m-128 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z m224 496H64c-35.346 0-64-28.654-64-64v-128c0-35.346 28.654-64 64-64h896c35.346 0 64 28.654 64 64v128c0 35.346-28.654 64-64 64z m-96-176c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z m-128 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z";
	var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
	var series = [];
	
	[['上海', SHData], ['北京', BJData], ['贵州', GZData]].forEach(function (item, i) {
	
	     series.push(
	         {
    	        type: 'lines',
    	        zlevel: 1,
    	        effect: {
    	            show: true,
    	            period: 1.5,
    	            trailLength: 0.7,
    	            color: color[i],   //arrow箭头的颜色
    	            symbolSize: 3
    	        },
    	        lineStyle: {
    	            normal: {
    	                color: "#22AC38",
    	                width: 0,
    	                curveness: 0.2
    	            }
    	        },
    	        data: convertData(item[1])
    	    },{
    	        type: 'lines',
    	        zlevel: 2,
    	        symbol: ['none'],
    	        symbolSize: 10,
    	        effect: {
    	            show: false
    	        },
    	        lineStyle: {
    	            normal: {
    	                color: color[i],
    	                width: 2,
    	                opacity: 0.6,
    	                curveness: 0.2
    	            }
    	        },
    	        data: convertData(item[1])
    	    },{
    	        type: 'graph',
    	        coordinateSystem: 'geo',
    	        zlevel: 2,
    	        rippleEffect: {
    	            brushType: 'stroke'
    	        },
    	        label: {
    	            normal: {
    	                show: true,
    	                position: 'right',
    	                formatter: '{b}'
    	            }
    	        },
    	        
    	        symbolSize: 18,
    	        itemStyle: {
    	        	normal: {
    	        		color: color[i],
		            },
		            emphasis: {
		                areaColor: '#2B91B7'
		            }
    	        },
    	        data: item[1].map(function (dataItem) {
    	            return {
    	                symbol: (dataItem[1].type=="mt")?mtPath:serverPath,
    	                
    	                itemStyle:{
    	                    normal:{color:dataItem[1].alert?"red": color[i]}
                        },
    	                name: dataItem[1].name,
    	                value: chinaGeoCoordMap[dataItem[1].name].concat([dataItem[1].value])
    	            };
    	        })
    	    }
    	  
    	  )
	})
	
	console.log(series)


	option = {
	     title : {
    	        text: '模拟UCD数据',
    	        subtext: 'kongchun',
    	        left: 'center',
    	        textStyle : {
    	            color: '#fff'
    	        }
    	},
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(166, 200, 76, 0.82)',
			borderColor: '#FFFFCC',
			showDelay: 0,
			hideDelay: 0,
			enterable: true,
			transitionDuration: 0,
			extraCssText: 'z-index:100',
// 			formatter: function(params, ticket, callback) {
// 				//根据业务自己拓展要显示的内容
// 				// var res = "";
// 				// var name = params.name;
// 				// var value = params.value;
// 				// res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
// 				//return res;
// 			}
		},
		backgroundColor:"#2b2b2b",
		geo: {
			map: 'china',
			zoom: 1.2,
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true, //是否允许缩放
			itemStyle: {
				normal: {
					color: 'rgba(51, 69, 89, .5)', //地图背景色
					borderColor: '#516a89', //省市边界线00fcff 516a89
					borderWidth: 1
				},
				emphasis: {
					color: 'rgba(37, 43, 61, .5)' //悬浮背景
				}
			}
		},
		series: series
	};