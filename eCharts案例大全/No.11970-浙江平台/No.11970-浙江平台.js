var zhejiang = "/asset/get/s/data-1552300468249-1A6iNBDzr.json";
var hangzhou = "/asset/get/s/data-1552306436743-6IvidUuf8.json";
var lishui = "/asset/get/s/data-1552304377731-hBk4tI6P8.json";
var taizhou = "/asset/get/s/data-1552304383873-8TNhaRAKi.json";
var jiaxing = "/asset/get/s/data-1552304388621-ZawXcKioP.json";
var ningbo = "/asset/get/s/data-1552304399303-fv_qbJRGW.json";
var wenzhou = "/asset/get/s/data-1552304406636-NdRoCnVje.json";
var huzhou = "/asset/get/s/data-1552304414096-p9L96VBi6.json";
var shaoxing = "/asset/get/s/data-1552304423507-U8oVwHjin.json";
var zhoushan = "/asset/get/s/data-1552304433864-UuwaorA85.json";
var quzhou = "/asset/get/s/data-1552304439070-KXz5oS6ZD.json";
var jinhua = "/asset/get/s/data-1552304443667-8N-iEltWd.json";

echarts.extendsMap = function(id, opt){
    // 实例
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    var cityMap = {
        "温州市": wenzhou,
        "绍兴市": shaoxing,
        "宁波市": ningbo,
        "湖州市": huzhou,
        "台州市": taizhou,
        "杭州市": hangzhou,
        "衢州市": quzhou,
        "舟山市": zhoushan,
        "丽水市": lishui,
        "金华市": jinhua,
        "嘉兴市": jiaxing
    };
    var geoCoordMap = {
        '杭州': [120.19,30.26],
        '丽水': [119.92,28.45],
        '台州': [121.420757,28.656386],
        '嘉兴': [120.76,30.77],
        '宁波': [121.56,29.86],
        '温州': [120.65,28.01],
        '湖州': [120.1,30.86],
        '绍兴': [120.58,30.01],
        '舟山': [122.207216,29.985295],
        '衢州': [118.88,28.97],
        '金华': [119.64,29.12]
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
                        if(n === opt.data[x].name + '市'){
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
        createBreadcrumb: function(name){
            var cityToPinyin = {
                "温州市": "wenzhou",
                "绍兴市": "shaoxing",
                "宁波市": "ningbo",
                "湖州市": "huzhou",
                "台州市": "taizhou",
                "杭州市": "yingtan",
                "衢州市": "quzhou",
                "舟山市": "zhoushan",
                "丽水市": "lishui",
                "金华市": "jinhua",
                "嘉兴市": "jiaxing"
            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: '#fff',
                        key: name
                        // lineWidth: 2,
                    },
                    onclick: function(){
                        var name = this.style.key;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function(){
                        var name = this.style.text;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {

                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function(){
                        // console.log(this.style);
                        var name = this.style.name;
                        handleEvents.resetOption(chart, option, name);
                    }
                }]
            }

            pos.leftCur += pos.leftPlus;

            return breadcrumb;
        },

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
                zoom(0.3);
            });
        }
    };
    
    var option = {
    	backgroundColor: opt.bgColor,
        title: {
            text: '浙江平台',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },    	
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
	        		text: name[0] === '浙江' ? '浙江省' : name[0],
	        		textAlign: 'center',
	        		fill: style.textColor,
	        		font: style.font
	        	},
	        	onclick: function(){
	        		handleEvents.resetOption(chart, option, '浙江');
	        	}
        	}, {
                type: 'text',
                left: 0,
                top: 10,
                style: {
                    text: 'ZHEJIANG',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: '12px "Microsoft YaHei", sans-serif',
                },
                onclick: function(){
                    handleEvents.resetOption(chart, option, '浙江');
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
                    borderColor: '#fff',
                    borderWidth: 0.5,
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
                    shadowBlur: 5
                },
                emphasis: {
                    areaColor: '#302b63',
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
        if(mapName.indexOf('市') < 0) mapName = mapName + '市';
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

$.getJSON(zhejiang, function(geoJson){
    echarts.registerMap('浙江', geoJson);
    var myChart = echarts.extendsMap('chart-panel', {
    	bgColor: '#1b284a', // 画布背景色
    	mapName: '浙江',    // 地图名
    	goDown: true,       // 是否下钻
    	// 下钻回调
    	callback: function(name, option, instance){
    		console.log(name, option, instance);
    	},
    	
        // 数据展示            	
    	data: [{
    		name: '杭州',
    		value: 10,
    		level: 1
    	}, {
    		name: '金华',
    		value: 12,
    		level: 2
    	}, {
    		name: '萍乡',
    		value: 34,
    		level: 1
    	}, {
    		name: '台州',
    		value: 16,
    		level: 3
    	}, {
    		name: '宁波',
    		value: 12,
    		level: 2
    	}]
    });
})
