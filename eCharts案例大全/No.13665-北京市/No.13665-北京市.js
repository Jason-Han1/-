var beijing ="/asset/get/s/data-1499156198404-H1AJkAOEZ.json";
var chaoyang = "/asset/get/s/data-1518338860057-By447tpLf.json";
var haidian = "/asset/get/s/data-1518338852969-Hy677KTIf.json";
var xicheng = "/asset/get/s/data-1518338838010-SyAzQYTIf.json";
var dongcheng = "/asset/get/s/data-1518338829670-H1UfQYa8G.json";
var fengtai = "/asset/get/s/data-1518338823093-HkyMQtpUf.json";
var daxing = "/asset/get/s/data-1518338805373-S1Temta8G.json";
var mentougou = "/asset/get/s/data-1518338799987-S1deQFTLz.json";
var changping = "/asset/get/s/data-1518338783915-HJOJXtaLf.json";
var shijingshan = "/asset/get/s/data-1518338772507-BJnAMKTIz.json";
var tongzhou = "/asset/get/s/data-1518338763250-S17RfKpLM.json";
var yanqing = "/asset/get/s/data-1518338684239-S1EFGtp8f.json";
echarts.extendsMap = function(id, opt){
    // 实例
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    var cityMap = {
        "大兴区": daxing,
        "昌平区": changping,
        "丰台区": fengtai,
        "门头沟": mentougou,
        "西城区": xicheng,
        "朝阳区": chaoyang,
        "通州区": tongzhou,
        "石景山区": shijingshan,
        "海淀区": haidian,
        "延庆区": yanqing,
        "东城区": dongcheng
    };
    var geoCoordMap = {
        '大兴': [116.344144,39.736553],
        '昌平': [116.23606,40.228372],
        '丰台': [116.294702,39.867817],
        '门头沟': [116.108429,39.947516],
        '西城': [116.37174,39.917861],
        '朝阳': [116.448204,39.927157],
        '通州': [116.663222,39.916533],
        '石景山': [116.223412,39.913434],
        '海淀': [116.3039,39.967869],
        '延庆': [115.981373,40.464599],
        '东城': [116.422908,39.936452]
    };
    var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',
        '2': 'rgba(255, 235, 59, .7)',
        '3': 'rgba(147, 235, 248, 1)'
    };

	var defaultOpt = {
		mapName: 'china',     // 地图展示
		goDown: false,        // 是否下钻
		bgColor: '#404a59',   // 画布背景色
        activeArea: [],       // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance){}
	};
	if(opt) opt = this.util.extend(defaultOpt, opt);
	
	// 层级索引
	var name = [opt.mapName];
	var idx = 0;
	var pos = {
		leftPlus: 115,
		leftCur: 150,
		left: 198,
		top: 50
	};
    
	var line = [[0, 0], [8, 11], [0, 22]];
    // style
	var style = {
		font: '18px "Microsoft YaHei", sans-serif',
		textColor: '#eee',
		lineColor: 'rgba(147, 235, 248, .8)'
	};

    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
        **/
        resetOption: function(i, o, n){
            var breadcrumb = this.createBreadcrumb(n);
            
            var j = name.indexOf(n);
            var l = o.graphic.length;
            if(j < 0){
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 145;
                o.graphic[0].children[1].shape.x2 = 145;
                if(o.graphic.length > 2){
                    for(var x = 0; x < opt.data.length; x++){
                        if(n === opt.data[x].name + '区'){
                            o.series[0].data = handleEvents.initSeriesData([opt.data[x]]);
                            break;
                        }else o.series[0].data = [];
                    }
                };
                name.push(n);
                idx++;
            }else{
                o.graphic.splice(j + 2, l);
                if(o.graphic.length <= 2){
                    o.graphic[0].children[0].shape.x2 = 60;
                    o.graphic[0].children[1].shape.x2 = 60;
                    o.series[0].data = handleEvents.initSeriesData(opt.data);
                };
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            };

            o.geo.map = n;
            o.geo.zoom = 0.4;
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt.callback(n, o, i);
        },

        /**
         * name 地图名
        **/
        

        // 设置effectscatter
        initSeriesData: function(data){
            var temp = [];
            for(var i = 0;i < data.length;i++){
                var geoCoord = geoCoordMap[data[i].name];
                if(geoCoord){
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value, data[i].level)
                    });
                }
            };
            return temp;
        },

        zoomAnimation: function(){
            var count = null;
            var zoom = function(per){
                if(!count) count = per;
                count = count + per;
                // console.log(per,count);
                chart.setOption({
                    geo: {
                        zoom: count
                    }
                });
                if(count < 1) window.requestAnimationFrame(function(){
                    zoom(0.2);
                });
            };
            window.requestAnimationFrame(function(){
                zoom(0.2);
            });
        }
    };
    
    var option = {
    	backgroundColor: opt.bgColor,
    	graphic: [{
    		type: 'group',
    		left: pos.left,
	        top: pos.top - 4,
    		children: [{
    			type: 'line',
    			left: 0,
        		top: -20,
        		shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
        		style: {
        			stroke: style.lineColor,
        		}
			}, {
    			type: 'line',
    			left: 0,
        		top: 20,
		        shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
    		}]
    	}, {
        	id: name[idx],
        	type: 'group',
        	left: pos.left + 2,
        	top: pos.top,
        	children: [{
        		type: 'polyline',
        		left: 90,
        		top: -12,
        		shape: {
                    points: line
                },
        		style: {
                    stroke: 'transparent',
        			key: name[0]
        		},
        		onclick: function(){
        			var name = this.style.key;
	        		handleEvents.resetOption(chart, option, name);
	        	}
        	}, {
        		type: 'text',
        		left: 0,
                top: 'middle',
        		style: {
	        		text: name[0] === '北京' ? '北京市' : name[0],
	        		textAlign: 'center',
	        		fill: style.textColor,
	        		font: style.font
	        	},
	        	onclick: function(){
	        		handleEvents.resetOption(chart, option, '北京');
	        	}
        	}, {
                type: 'text',
                left: 0,
                top: 10,
                style: {
                    text: 'BEIJING',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: '12px "Microsoft YaHei", sans-serif',
                },
                onclick: function(){
                    handleEvents.resetOption(chart, option, '北京');
                }
            }]
        }],
        geo: {
        	map: opt.mapName,
            // roam: true,
            zoom: 1,
        	label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0, 
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1, 
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
            regions: opt.activeArea.map(function(item){
                if(typeof item !== 'string'){
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || '#389BB7'
                            }
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                }else{
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: '#91e6ff',
                                areaColor: '#389BB7'
                            }
                        }
                    }
                }
            })
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // symbol: 'diamond',
            showEffectOn: 'render',
            rippleEffect: {
                period: 15,
                scale: 6,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: function(params){
                        return levelColorMap[params.value[3]];
                    },
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: handleEvents.initSeriesData(opt.data)
        }]
    };

    chart.setOption(option);
    // 添加事件
    chart.on('click', function(params){
        var _self = this;
    	if(opt.goDown && params.name !== name[idx]){
            if(cityMap[params.name]){
                var url = cityMap[params.name];
                $.get(url, function(response){
                    // console.log(response);
                    curGeoJson = response;
                    echarts.registerMap(params.name, response);
                    handleEvents.resetOption(_self, option, params.name);
                });
            }
    	}
    });

    chart.setMap = function(mapName){
        var _self = this;
        if(mapName.indexOf('区') < 0) mapName = mapName + '区';
        var citySource = cityMap[mapName];
        if(citySource){
            var url = './map/' + citySource + '.json';
            $.get(url, function(response){
                // console.log(response);
                curGeoJson = response;
                echarts.registerMap(mapName, response);
                handleEvents.resetOption(_self, option, mapName);
            });
        }
        // handleEvents.resetOption(this, option, mapName);
    };

    return chart;
};

$.getJSON(beijing, function(geoJson){
    echarts.registerMap('北京', geoJson);
    var myChart = echarts.extendsMap('chart-panel', {
    	bgColor: '#154e90', // 画布背景色
    	mapName: '北京',    // 地图名
    	goDown: true,       // 是否下钻
    	// 下钻回调
    	callback: function(name, option, instance){
    		console.log(name, option, instance);
    	},
        // 数据展示            	
    	data: [{
    		name: '大兴',
    		value: 10,
    		level: 1
    	}, {
    		name: '昌平',
    		value: 12,
    		level: 2
    	}, {
    		name: '丰台',
    		value: 11,
    		level: 3
    	}, {
    		name: '通州',
    		value: 16,
    		level: 2
    	}, {
    		name: '石景山',
    		value: 12,
    		level: 1
    	}]
    });
})
