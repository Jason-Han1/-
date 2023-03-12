var uploadedDataURL = "/asset/get/s/data-1572264862178-y6F2klp4.json";


$.get(uploadedDataURL, function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('东莞', geoJson);
    
var gdGeoCoordMap = {
		'东莞市政府': [113.758562,23.027774],
		'东城': [113.789624,23.033917],
		"南城": [113.7342,23.005883],
		'莞城': [113.755571,23.045347],
		"沙田": [113.624651,22.925701],
		"松山湖": [113.893865,22.941246],
		"万江": [113.74855,23.051032],
		"石龙": [113.880838,23.112166],
		"虎门": [113.678872,22.820851],
		"中堂": [113.650406,23.093854],
		"望牛墩": [113.670643,23.062285],
		"石碣": [113.816434,23.108315],
		"高埗": [113.731982,23.095005],
		"麻涌": [113.595831,23.072401],
		"长安": [113.822188,22.814978],
		"道滘": [113.670703,23.016314],
		"洪梅": [113.616893,23.002754],
		"厚街": [113.680145,22.944272],
		"寮步": [113.890914,23.001315],
		"大岭山": [113.851987,22.911912],
		"大朗": [113.923032,22.950112],
		"黄江": [113.998807,22.874356],
		"樟木头": [114.093686,22.919851],
		"清溪": [114.163263,22.829122],
		"谢岗": [114.159548,22.965939],
		"凤岗": [114.153392,22.753054],
		"常平": [113.999147,22.973051],
		"桥头": [114.108405,23.016402],
		"横沥": [113.97157,23.025917],
		"东坑": [113.951987,22.997494],
		"塘厦": [114.078045,22.813108],
		"企石": [114.021761,23.074502],
		"石排": [113.946576,23.093513],
		"茶山": [113.879215,23.071636]
	
	};
var gdDatas = [
		[{
			name: '东城',
			value: 0
		}],	[{
			name: '南城',
			value: 0
		}],	[{
			name: '莞城',
			value: 0
		}],	[{
			name: '沙田',
			value: 1.3
		}],	[{
			name: '松山湖',
			value: 0.2
		}],	[{
			name: '万江',
			value: 0.4
		}],	[{
			name: '石龙',
			value: 0.6
		}],	[{
			name: '虎门',
			value: 0.8
		}],	[{
			name: '中堂',
			value: 0.4
		}],	[{
			name: '望牛墩',
			value: 0.8
		}],	[{
			name: '石碣',
			value: 0.2
		}],	[{
			name: '高埗',
			value: 1.3
		}],[{
			name: '麻涌',
			value: 0
		}],	[{
			name: '长安',
			value: 0
		}],	[{
			name: '道滘',
			value: 0
		}],	[{
			name: '洪梅',
			value: 0
		}],	[{
			name: '厚街',
			value: 0
		}],	[{
			name: '寮步',
         	value: 0
		}],	[{
			name: '大岭山',
			value: 0
		}],	[{
			name: '大朗',
			value: 0.8
		}],	[{
			name: '黄江',
			value: 0.2
		}],	[{
			name: '樟木头',
			value: 1.3
		}],	[{
			name: '清溪',
			value: 1.3
		}],	[{
			name: '谢岗',
			value: 1.3
		}],	[{
			name: '凤岗',
			value: 1.3
		}],	[{
			name: '常平',
			value: 0.1
		}],	[{
			name: '桥头',
			value: 0.4
		}],	[{
			name: '横沥',
			value: 0.5
		}],	[{
			name: '东坑',
			value: 0.4
		}],	[{
			name: '企石',
			value: 0.5
		}],	[{
			name: '石排',
			value: 0.2
		}],	[{
			name: '茶山',
			value: 0.3
		}],	[{
			name: '塘厦',
			value: 0.3
		}]
	];

var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = gdGeoCoordMap[dataItem[0].name];
			var toCoord = [113.758562,23.027774];//被攻击点坐标
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
	[['东莞市政府', gdDatas]].forEach(function(item, i) {
	    console.log(item)
		series.push({
				type: 'lines',
				zlevel: 6,
				effect: {
					show: true,
					period: 4, //箭头指向速度，值越小速度越快
					trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
					symbol: 'arrow', //箭头图标
					symbolSize: 8, //图标大小
				},
				lineStyle: {
					normal: {
						width: 1, //尾迹线条宽度
						opacity: 1, //尾迹线条透明度
						curveness: .3 //尾迹线条曲直度
					}
				},
				data: convertData(item[1])
			}, {
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: { //涟漪特效
					period: 4, //动画时间，值越小速度越快
					brushType: 'stroke', //波纹绘制方式 stroke, fill
					scale: 4 //波纹圆环最大限制，值越大波纹越大
				},
				label: {
					normal: {
						show: true,
						position: 'right', //显示位置
						offset: [5, 0], //偏移设置
						formatter: function(params){//圆环显示文字
							return params.data.name;
						},
						fontSize: 19
					},
					emphasis: {
						show: true
					}
				},
				symbol: 'circle',
				symbolSize: function(val) {
					return 5+ val[2] * 5; //圆环大小
				},
				itemStyle: {
					normal: {
						show: false,
						color: '#f00'
					}
				},
				data: item[1].map(function(dataItem) {
					return {
						name: dataItem[0].name,
						value: gdGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
					};
				}),
			},
			//被攻击点
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					period: 4,
					brushType: 'stroke',
					scale: 4
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						//offset:[5, 0],
						color: '#0f0',
						formatter: '{b}',
						textStyle: {
							color: "#0f0"
						}
					},
					emphasis: {
						show: true,
						color: "#f60"
					}
				},
				symbol: 'pin',
				symbolSize: 50,
				data: [{
					name: item[0],
					value: gdGeoCoordMap[item[0]].concat([10]),
				}],
			}
		);
	});
    
    
    
    
    
    
    
    

    option = {
        "tooltip": {
			trigger: 'item',
			backgroundColor: 'rgba(166, 200, 76, 0.82)',
			borderColor: '#FFFFCC',
			showDelay: 0,
			hideDelay: 0,
			enterable: true,
			transitionDuration: 0,
			extraCssText: 'z-index:100',
			formatter: function(params, ticket, callback) {
				//根据业务自己拓展要显示的内容
				var res = "";
				var name = params.name;
				var value = params.value[params.seriesIndex + 1];
				res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
				return res;
			}
		},
			backgroundColor:"#013954",
		visualMap: { //图例值控制
			min: 0,
			max: 1,
			calculable: true,
			show: true,
			color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
			textStyle: {
				color: '#fff'
			}
		},
  "geo": {
            "map": "东莞",
            "layoutCenter": ["55%", "50%"],
            "layoutSize": "109%",
            "label": {
                "emphasis": {
                    "show": true
                }
            },
            "roam": true,  //是否允许缩放
            "mapLocation": {
                "width": "110%",
                "height": "97%"
            },
         
            "itemStyle": {
                "normal": {
                    color: 'rgba(51, 69, 89, .5)', //地图背景色
					borderColor: '#516a89', //省市边界线00fcff 516a89
					borderWidth: 1
                },
                "emphasis": {
                    	color: 'rgba(37, 43, 61, .5)' //悬浮背景
                }
            }
        },
        series: series
        },
myChart.setOption(option);
});