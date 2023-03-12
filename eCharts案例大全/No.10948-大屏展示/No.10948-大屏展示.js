var uploadedDataURL = 'https://www.cecicloud.com/123.jpg'
var uploadedDataURL1 = 'https://tpc.googlesyndication.com/simgad/15429426702111152166?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qn-5c8Dm_lNfZgxj-eYIOrUibKyrw'
var uploadedDataURL2 = 'https://www.cecicloud.com/cloud.jpg'
var chinaGeoCoordMap = {
        '内蒙古': [110.3467, 41.4899],
		"山西": [112, 40],
		"河北": [114, 38.2],
		'北京市': [116.6551, 42.2539],
// 		'黑龙江': [127.9688, 45.368],
		"天津": [117.7219, 39.4189],
		"辽宁": [114.82, 40.9],
		"吉林": [118, 42],
		
	};
	var chinaDatas = [

		[{
			name: '内蒙古',
			value: 0
		}],
		[{
			name: '吉林',
			value: 0
		}],
		[{
			name: '辽宁',
			value: 0
		}],	
		[{
			name: '河北',
			value: 0
		}],	
		[{
			name: '天津',
			value: 0
		}],	
		[{
			name: '山西',
			value: 0
		}]
	];
	var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = chinaGeoCoordMap[dataItem[0].name];
			var toCoord = [114.9551,44.2539];
			if(fromCoord && toCoord) {
				res.push([{
					coord: fromCoord,
					value: dataItem[0].value
				}, {
					coord: toCoord,
				}]);
			}
		}
		return res;
	};
	var series = [];
	[['北京市', chinaDatas]].forEach(function(item, i) {
		series.push({
				type: 'lines',
				zlevel: 2,
				effect: {
				// 	show: true,
				// 	animation: false,
				// // 	period: 4, //箭头指向速度，值越小速度越快
				// 	trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
				// // 	symbol: 'arrow', //箭头图标
				// 	symbolSize: 10, //图标大小
				// 	color:'#fff'
    				animation: false,
                    show: true,
                    constantSpeed: 100, //速度
                    trailLength: 0.9, //尾巴长度
                    color: '#03c6ff', //颜色
                    symbolSize: 4, //宽度
				},
				lineStyle: {
					normal: {
						width: 4, //尾迹线条宽度
						opacity: .2, //尾迹线条透明度
						curveness: .2, //尾迹线条曲直度
						color:"#10224a"
					}
				},
				data: convertData(item[1])
			},
			{
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				effect:{
				  animation: false,
				},
				rippleEffect: { //涟漪特效
					period: 4, //动画时间，值越小速度越快
					brushType: 'stroke', //波纹绘制方式 stroke, fill
					scale: 1 //波纹圆环最大限制，值越大波纹越大
				},
				
				// symbol: 'circle',
				// symbolSize: function(val) {
				// 	return 5+ val[2] * 5; //圆环大小
				// },
				symbol:  'image://'+ uploadedDataURL,
                symbolSize: [102,112],
                // showEffectOn: 'render',
				itemStyle: {
					normal: {
						show: false,
						color: '#f00'
					}
				},
				data: item[1].map(function(dataItem) {
					return {
						name: dataItem[0].name,
						value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
					};
				}),
			},
			 {
                name: '接收点',
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 3,
                coordinateSystem: 'geo',
                data: [{
                    name:'',value:[114.6551, 44.2539]
                }],
                symbol:  'image://'+ uploadedDataURL2,
                symbolSize: [199,123],
            } //接收点
		
		);
	});

	option = {
		
		backgroundColor:"#070616",
		geo: {
			map: 'china',
			zoom: 4.2,
			center: [117.19,40.782],
			roam: true, //是否允许缩放
			itemStyle: {
				normal: {
					color: 'rgba(51, 69, 89, .0)', //地图背景色
					borderColor: 'rgba(51, 69, 89, .0)', //省市边界线00fcff 516a89
					borderWidth: 1
				},
				emphasis: {
					color: 'rgba(37, 43, 61, .0)' //悬浮背景
				}
			},
    		 label: {
	            emphasis: {
	                show: false
	            }
	        }
			
// 			show: true,
//             roam: true,
//             center: [117.19,36.682],
//             zoom: 2200,
//             map: 'china',
//             label: {
//                 emphasis: {
//                     show: false
//                 }
//             },
//             itemStyle: {
//                 normal: {
//                     areaColor: 'transparent',
//                     // borderColor: '#111'
//                 },
//                 emphasis: {
//                     areaColor: '#2a333d'
//                 }
//             },
//              grid: {
//                 right: 40,
//                 top: 100,
//                 bottom: 40,
//                 width: '30%'
//             },
		},
		series: series
	};