	window.chartCfg.themeName = 'vintage';

	var json = {
		
	};

	app = JSON.parse(JSON.stringify(json));//原对象不能包含function以及过于复杂的层次 Deep Clone
	
	
	app.timeTicket = setInterval(function () {
        drawLogo(myChart);
	}, 3000);
	
	var opts = [{
            series: [{
                type: 'map',
				map: 'china',
				silent: true,
				itemStyle:{
					normal:{
						opacity:0
						}
						}
				},{
                type: 'map',
                selectedMode: 'single',
                map: 'ZJ',
                roam: false,
                data: []
                    
            },{
                type: 'map',
                selectedMode: 'single',
                map: 'NB',
                roam: false,
                data: []
                    
            }]
        }];
	
    var provinces = echarts.getMap('china').geoJson.features;
    var zj = [];

	/*Chart 0*/
	
	function filterCity(source) {

            var val = arguments[1];
            var flag = false;
            if (zrUtil.isArray(val)) {
                zrUtil.each(val, function(item) {
                    if (item == source) {
                        flag = true;
                        return false;
                    }
                });
            } else if (zrUtil.isString(val)) {
                if (source == val) {
                    flag = true;
                }
            }

            return flag;
        }

        function filter(cond, value) {

            var flag = false;
            if (zrUtil.isArray(cond)) {
                zrUtil.each(cond, function(item) {
                    if (item == value) {
                        flag = true;
                        return false;
                    }
                });
            } else if (zrUtil.isString(cond)) {
                if (cond == value) {
                    flag = true;
                }
            }

            return flag;
        }

        function load(source, cond, name) {

            var arr = [];
            zrUtil.each(source, function(feature) {
                if (filter(cond, feature.properties['name'])) {
                    arr.push(feature);
                }
            });
            //注册到地图集合
            echarts.registerMap(name, {
                "type": "FeatureCollection",
                features: arr,
                "UTF8Encoding": false
            });
			
			 var features = echarts.getMap(name).geoJson.features;
			zj = features;
			
        }
        
        function getFeature(source, cond, name) {

            var arr = [];
            zrUtil.each(source, function(feature) {
                if (filter(cond, feature.properties['name'])) {
                    arr.push(feature);
                }
            });
            
            return arr;
        }
		
		 load(provinces, ['浙江'],'ZJ');
		
		 load(zj, ['宁波市'],'NB');
		
		 myChart.setOption(opts[0]);

	app.shownChartIndex = 0;
	
	opts[app.shownChartIndex].logoColor = getColorPalette()[app.shownChartIndex % getColorPalette().length];
	option = zrUtil.merge(opts[app.shownChartIndex], baseOption, false);
	
    if (chartCfg.showVersion || false) {
            var ecInfo = '<div id="ecInfo" style="position:absolute;top:10px;left:10px;z-index:9999;">#</div>';
        
			//显示ECharts版本及依赖信息
			var tpl = '<br />';
			tpl += 'ECharts Version: ' + echarts.version + '<br />';
			zrUtil.each(echarts.dependencies, function(value, key) {
				tpl += zrFormat.toCamelCase('-' + key) + ' Version: ' + value;
			});
		 $(myChart.getDom()).parent().append(ecInfo.replace('#', tpl));
		} else {
		
		}
		
    
		/*Event Binding*/
		
		
		/*Event Binding*/
	