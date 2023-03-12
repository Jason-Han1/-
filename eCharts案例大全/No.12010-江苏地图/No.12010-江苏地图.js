//var jiangsu = "/asset/get/s/data-1518338017111-rJK1gtpUM.json";
var jiangsu = "/asset/get/s/data-1551928769808-M7YfbgDR9.json";
echarts.extendsMap = function(id, opt){
    // 实例
    var chart = this.init(document.getElementById(id));
    var geoCoordMap = {
        '盐城市': [120.2234,33.5577],
        '徐州市': [117.5208, 34.3268],
        '南通市': [121.1023, 32.1625],
        '淮安市': [118.927, 33.4039],
        '苏州市': [120.6519, 31.3989],
        '宿迁市': [118.5535, 33.7775],
        '连云港市': [119.1248, 34.552],
        '扬州市': [119.4653, 32.8162],
        '南京市': [118.8062, 31.9208],
        '泰州市': [120.0586, 32.5525],
        '无锡市': [120.3442, 31.5527],
        '常州市': [119.4543, 31.5582],
        '镇江市': [119.4763, 31.9702]
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
    var handleEvents = {
        /**
         * name 地图名
        **/
        createBreadcrumb: function(name){
            var cityToPinyin = {
                "盐城市": "yancheng",
                "徐州市": "xuzhou",
                "南通市": "nantong",
                "淮安市": "huaian",
                "苏州市": "suzhou",
                "宿迁市": "suqian",
                "连云港市": "lianyungang",
                "扬州市": "yangzhou",
                "南京市": "nanjing",
                "泰州市": "taizhou",
                "无锡市": "wuxi",
                "常州市": "changzhou",
                "镇江市": "zhenjiang"
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
                zoom(0.2);
            });
        }
    };
    
    var option = {
    	backgroundColor: opt.bgColor,
    	tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
    	
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

};

$.getJSON(jiangsu, function(geoJson){
    echarts.registerMap('江苏', geoJson);
    var myChart = echarts.extendsMap('chart-panel', {
    	bgColor: '#154e90', // 画布背景色
    	mapName: '江苏',    // 地图名
    	goDown: false,       // 是否下钻
    	// 下钻回调
    	callback: function(name, option, instance){
    		console.log(name, option, instance);
    	},
        // 数据展示            	
    	data: [{
    		name: '南京市',
    		value: 0,
    		level: 2
    	}, {
    		name: '无锡市',
    		value: 12,
    		level: 4
    	}, {
    		name: '南通市',
    		value: 11,
    		level: 3
    	}, {
    		name: '宿迁市',
    		value: 16,
    		level: 2
    	}, {
    		name: '徐州市',
    		value: 12,
    		level: 1
    	}]
    });
})
