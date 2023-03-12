var uploadedDataURL = "/asset/get/s/data-1640162240773-kA2KOzj6e.json";



var a = "image://asset/get/s/data-1640161909038-L6kjs-goz.png";

var b = "image://asset/get/s/data-1640161905371-DXbWegbcB.png";

var c = "image://asset/get/s/data-1640161901983-OucYGTjai.png";

var d = "image://asset/get/s/data-1640161898072-piG7yB-C4.png";

var e = "image://asset/get/s/data-1640161892982-gg2A6L1Dc.png";

var f = "image://asset/get/s/data-1640161888335-4_7mLRd6r.png";

var g = "image://asset/get/s/data-1640161884196-Uzq-X3n7n.png";

var h = "image://asset/get/s/data-1640161875260-3vq34TEYk.png";

var i = "image://asset/get/s/data-1640161867936-bp7Hxw6Lh.png";

var j = "image://asset/get/s/data-1640161862964-SHYTIajJd-.png";

var k = "image://asset/get/s/data-1640161836751-HMjTghk8f.png";

var l = "image://asset/get/s/data-1640161830005-UGi_JWomU.png";

var m = "image://asset/get/s/data-1640161826987-uTGX7g_xF.png";

var n = "image://asset/get/s/data-1640161815828-HbcqdhOQE.jpg";

var o = "image://asset/get/s/data-1640161811084-wGd_nOdg9.png";

var p = "image://asset/get/s/data-1640161801201-ZiXTjYEB_.png";




var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var beijing_node ="image://asset/get/s/data-1640161909038-L6kjs-goz.png";
var shanghai_node = "image:///asset/get/s/data-1640161801201-ZiXTjYEB_.png";
var jinan_node = c;
var wulumuqi_node = e;
var guangzhou_node =f;
var eluosi_node = g;
var aodili_node = h;
var gzcolor = "#2cfffe";
var bjcolor = "#00ff00";
	
	$.get(uploadedDataURL, function(data) {
	    echarts.registerMap('tianjin', data);
	    
	     myChart.setOption({
	        series: [{
	            type: 'map',
	            map: 'tianjin'
	        }]
	    });
	
	    var geoCoordMap = {
	        '北京': [117.7831, 39.7204],

		    '广州': [117.708, 39.1004],
		    
		    '乌鲁木齐': [116.8065, 39.7887],
		    
		    '济南': [118.298, 39.2887],
		    
		    '上海': [118.200, 38.9000],
		
		    '奥地利': [116.6065, 38.5887],
		    
		    '俄罗斯': [116.1000, 39.1887],
	    };
	
	    var data = {
	        '广州': 60,
	        '俄罗斯': 30,
	        '奥地利': 44,
	        '乌鲁木齐': 30
	    };
	
	/*飞机图片*/
	  /*  var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';*/
	
	    var option = {
	        title: {
	            text: '',
	            left: '-5',
	            top: '10px',
	            textStyle: {
	                color: '#1E90FF',
	                fontFamily: '微软雅黑',
	                fontWeight: 'lighter',
	                fontSize: 18
	            }
	        },
	        /*鼠标悬浮框*/
	        tooltip: {
	            trigger: 'item',
	            formatter: function(o) {
	
	                /*return o.name + "：" + o.value[2] + "起";*/
	            }
	
	
	        },
	        geo: {
	            map: 'tianjin',
	            label: {
	                emphasis: {
	                    show: false
	                }
	            },
	            roam: true,
	            itemStyle: {
	                normal: {
	                  color:'rgba(22,22,2,0)',
	                  areaColor:'rgba(22,22,2,0)',
							borderColor:'rgba(22,22,2,0)'
	                  
	                },
	                emphasis: {
	                  
	                    color:'rgba(22,22,2,0)',
	                  areaColor:'rgba(22,22,2,0)',
							borderColor:'rgba(22,22,2,0)'
	                }
	            }
	        },
	        series: [
	        /*北京正航线*/
	        {
	
	            type: 'lines',
	            zlevel: 1,
	            effect: {
	                show: true,
	                period: 3,
	                trailLength: 0.1,
	                color: bjcolor,
	                symbol: planePath,
	                symbolSize: 8
	            },
	            lineStyle: {
	                normal: {
	                    color: bjcolor,
	                    width: 0,
	                    type:'dotted',  //'dotted'虚线 'solid'实线,
	                    curveness: -0.2
	                }
	            },
	            data: [{
	
	                coords: [geoCoordMap['北京'], geoCoordMap['广州']]
	            }, {
	
	                coords: [geoCoordMap['北京'], geoCoordMap['俄罗斯']]
	            }, {
	
	                coords: [geoCoordMap['北京'], geoCoordMap['奥地利']]
	            }, {
	
	                coords: [geoCoordMap['北京'], geoCoordMap['乌鲁木齐']]
	            }]
	        }, {
	
	            type: 'lines',
	            zlevel: 2,
	            effect: {
	                show: true,
	                period: 3,
	                color: bjcolor,
	                trailLength: 0.01,
	                symbol: planePath,
	                //symbol: 'image://',
	                /*飞机图片*/
	                /*symbol: planePath,*/
	                symbolSize: 8
	            },
	            lineStyle: {
	                normal: {
	                    color: bjcolor,
	                    width: 0.3,
	                    type:'dotted',  //'dotted'虚线 'solid'实线,
	                    opacity: 0.4,
	                    curveness: 0.2
	                }
	            },
	            data: [{
	
	                coords: [geoCoordMap['广州'], geoCoordMap['北京']]
	            }, {
	
	                coords: [geoCoordMap['俄罗斯'], geoCoordMap['北京']]
	            }, {
	
	                coords: [geoCoordMap['奥地利'], geoCoordMap['北京']]
	            }, {
	
	                coords: [geoCoordMap['乌鲁木齐'], geoCoordMap['北京']]
	            }]
	        }, 
	        /*广州正航线*/
	        {
	
	            type: 'lines',
	            zlevel: 1,
	            effect: {
	                show: true,
	                period: 3,
	                trailLength: 0.1,
	                color: gzcolor,
	                symbol: planePath,
	                symbolSize: 8
	            },
	            lineStyle: {
	                normal: {
	                    color: gzcolor,
	                    width: 0,
	                    type:'dotted',  //'dotted'虚线 'solid'实线,
	                    curveness: -0.2
	                }
	            },
	            data: [{
	
	                coords: [geoCoordMap['广州'], geoCoordMap['俄罗斯']]
	            }, {
	
	                coords: [geoCoordMap['广州'], geoCoordMap['奥地利']]
	            }, {
	
	                coords: [geoCoordMap['广州'], geoCoordMap['乌鲁木齐']]
	            }]
	        }, {
	
	            type: 'lines',
	            zlevel: 2,
	            effect: {
	                show: true,
	                period: 3,
	                trailLength: 0.01,
	                symbol: planePath,
	                color: gzcolor,
	                //symbol: 'image://',
	                /*飞机图片*/
	                /*symbol: planePath,*/
	                symbolSize: 8
	            },
	            lineStyle: {
	                normal: {
	                    color: gzcolor,
	                    width: 0.3,
	                    type:'dotted',  //'dotted'虚线 'solid'实线,
	                    opacity: 0.4,
	                    curveness: 0.2
	                }
	            },
	            data: [{
	
	                coords: [geoCoordMap['俄罗斯'], geoCoordMap['广州']]
	            }, {
	
	                coords: [geoCoordMap['奥地利'], geoCoordMap['广州']]
	            }, {
	
	                coords: [geoCoordMap['乌鲁木齐'], geoCoordMap['广州']]
	            }]
	        }, 
	        /*北京反航线*/
	        {
	
	            type: 'lines',
	            zlevel: 1,
	            effect: {
	                show: true,
	                period: 3,
	                trailLength: 0.1,
	                color: bjcolor,
	                symbol: planePath,
	                symbolSize: 8
	            },
	            lineStyle: {
	                normal: {
	                    color: bjcolor,
	                    width: 0.3,
	                    type:'dotted',  //'dotted'虚线 'solid'实线,
	                    curveness: 0.2
	                }
	            },
	            data: [{
	
	                coords: [geoCoordMap['北京'], geoCoordMap['济南']]
	            }, {
	
	                coords: [geoCoordMap['北京'], geoCoordMap['上海']]
	            }]
	        }, {
	
	            type: 'lines',
	            zlevel: 1,
	            effect: {
	                show: true,
	                period: 3,
	                trailLength: 0.1,
	                symbol: planePath,
	                //symbol: 'image://',
	                /*飞机图片*/
	                /*symbol: planePath,*/
	                symbolSize: 8
	            },
	            lineStyle: {
	                normal: {
	                    color: bjcolor,
	                    width: 0,
	                    type:'dotted',  //'dotted'虚线 'solid'实线,
	                    opacity: 0.4,
	                    curveness: -0.2
	                }
	            },
	            data: [{
	
	                coords: [geoCoordMap['济南'], geoCoordMap['北京']]
	            }, {
	
	                coords: [geoCoordMap['上海'], geoCoordMap['北京']]
	            }]
	        },
	        
	        /*广州反航线*/
	        {
	
	            type: 'lines',
	            zlevel: 1,
	            effect: {
	                show: true,
	                period: 3,
	                trailLength: 0.1,
	                color: gzcolor,
	                symbol: planePath,
	                symbolSize: 8
	            },
	            lineStyle: {
	                normal: {
	                    color: gzcolor,
	                    width: 0,
	                    type:'dotted',  //'dotted'虚线 'solid'实线,
	                    curveness: 0.2
	                }
	            },
	            data: [{
	
	                coords: [geoCoordMap['广州'], geoCoordMap['济南']]
	            }, {
	
	                coords: [geoCoordMap['广州'], geoCoordMap['上海']]
	            }]
	        }, {
	
	            type: 'lines',
	            zlevel: 1,
	            effect: {
	                show: true,
	                period: 3,
	                trailLength: 0.1,
	                symbol: planePath,
	                //symbol: 'image://',
	                /*飞机图片*/
	                /*symbol: planePath,*/
	                symbolSize: 8
	            },
	            lineStyle: {
	                normal: {
	                    color: gzcolor,
	                    width: 0.3,
	                    type:'dotted',  //'dotted'虚线 'solid'实线,
	                    opacity: 0.4,
	                    curveness: -0.2
	                }
	            },
	            data: [{
	
	                coords: [geoCoordMap['济南'], geoCoordMap['广州']]
	            }, {
	
	                coords: [geoCoordMap['上海'], geoCoordMap['广州']]
	            }]
	        },
	        
	        /*数据*/
	        {
	
	            type: 'effectScatter',
	            coordinateSystem: 'geo',
	            zlevel: 2,
	            rippleEffect: {
	                period: 2,
	                scale: 3,
	                brushType: 'stroke'
	            },
	            symbolSize: [30,30],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'right',
	                    fontSize: '20',
	                    offset: [30,0],
	                    formatter: '{b}',
	                    color: '#000000',
	                    borderColor: '#000'
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#0D6695',
	                }
	            },
	            data: [{
	                name: '广州',
	                value: geoCoordMap['广州'].concat(data.广州),
	                symbol:guangzhou_node
	            }, {
	                name: '俄罗斯',
	                value: geoCoordMap['俄罗斯'].concat(data.俄罗斯),
	                symbol: eluosi_node
	            }, {
	                name: '奥地利',
	                value: geoCoordMap['奥地利'].concat(data.奥地利),
	                symbol: aodili_node
	            }, {
	                name: '乌鲁木齐',
	                value: geoCoordMap['乌鲁木齐'].concat(data.乌鲁木齐),
	                symbol: wulumuqi_node
	            }, {
	                name: '济南',
	                value: geoCoordMap['济南'].concat(data.济南),
	                symbol: jinan_node
	            }, {
	                name: '上海',
	                value: geoCoordMap['上海'].concat(data.上海),
	                symbol: shanghai_node
	            }, {
	                name: '北京',
	                symbol:beijing_node,
	                value: geoCoordMap['北京'].concat(parseInt(data.广州) + parseInt(data.俄罗斯) + parseInt(data.奥地利) + parseInt(data.乌鲁木齐)),
	            }]
	        }]
	    };
	
	
	    myChart.setOption(option);
	
	})