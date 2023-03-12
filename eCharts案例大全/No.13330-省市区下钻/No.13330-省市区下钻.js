

/*
* 高德地图结合echarts完成地图省市区下钻。
* 1.通过高德地图插件获取区域数据。
* 2.使用echart map。
* 
* 版本：
*  #1：使用geo和scatter
*  #2: 使用map
*  #3: 使用geo和pie
*  #4: 使用geo和pie, 添加缩放与拖拽(惯性拖拽有问题)。对echart源码做了轻微修改。
*  #5: 使用geo和pie/line, 修改缩放相关操作。
*/

var GDEcharts = function(options){
	this.container = document.getElementById(options.containerId);
	this.adcode = options.adcode ? options.adcode : 100000;
	this.echartOption = options.echartOption;
	this.gridWidth = 60;
	this.gridHeight = 40;

	this.geoData = {"type": "FeatureCollection","features": []};
	this.breadcrumbData = [{name: '全国', adcode: 100000}];
	this.testData = [];

	this.echart;
	this.districtExplorer;

	this.init();
}
GDEcharts.prototype = {
	constructor: constructor,

	init: function(){
		if(!this.echart) this.initEchart();
		if(!this.districtExplorer) this.initDistrictExplorer();
		this.echart.showLoading();

		var _this = this;
		setTimeout(function(){
			//通过adcode获取下级城市数据
			_this.districtExplorer.loadAreaNode(_this.adcode, function(error, areaNode) {
	            _this.geoData.features = areaNode.getSubFeatures();
	            echarts.registerMap(_this.adcode, _this.geoData);

	            _this.createBreadcrumb(areaNode);
	            _this.createTestData();
	            _this.renderChart();
	        }); 
		}, 500)
		
		return this;
	},

	initEchart: function(){
		this.echart = echarts.init(this.container);

		var _this = this;
		_this.echart.on('georoam', function(d){   	
		   	_this.resetChart();	   
		});

		_this.echart.on('click', function(event){
			var componentType = event.componentType;
			var childrenNum = 0;

			//根据目标类型获取adocde和下级区域数量
			if(event.componentType == 'geo') {
				var name = event.name;

				//通过名称从geoData获取数据
				var data = _this.geoData.features;
				for(var i = 0, len = data.length; i < len; i++){
					var properties = data[i].properties;
					if(properties.name == name){
						childrenNum = properties.childrenNum;
						_this.adcode = properties.adcode;
						break;
					}
				}
			}else{
				childrenNum = event.data.childrenNum;
				_this.adcode = event.data.adcode;
			}


			if(childrenNum > 0){
				_this.init();
			}else{
				console.log('无下级区域！');
			}
		})

	},

	initDistrictExplorer: function(){
		var _this = this;
		if(!_this.districtExplorer){
			AMapUI.loadUI(['geo/DistrictExplorer'], function(DistrictExplorer) {
                _this.districtExplorer= new DistrictExplorer();
            });
		}	
	},

	renderChart: function(){
		var geo = this.echartOption.geo;
		geo.map = this.adcode;
		switch(this.adcode){
            case 100000://全国
                geo.zoom = 1.5;
				geo.center = [104.114129, 34.550339];
                break;
            case 460000://海南省
            	geo.zoom = 5;
				geo.center = [110.33119, 19.031971];
                break;     
            default:
                geo.zoom = null;
				geo.center = null;
                break;
        }
        
		this.echart.hideLoading();
		this.echart.clear();
		this.echart.setOption(this.echartOption);
		this.addOverLays(['pie', 'line']);
	},

	resetChart: function(){
		var _this = this;
		var curOption = this.echart.getOption();
		var series = curOption.series;
		var grid = curOption.grid;

		if(grid && grid.length > 0){
			grid.forEach(function(item, index){
				var position = _this.echart.convertToPixel('geo', item.dCenter);
				item.left = position[0] - (_this.gridWidth / 2);
				item.top = position[1] - (_this.gridHeight / 2);
			})
		}
		
		series.forEach(function(item, index){
			if(item.center){
				item.center = _this.echart.convertToPixel('geo', item.dCenter);
			}
		})
		_this.echart.setOption(curOption);
	},

	addOverLays: function(arr){
		if(arr && arr.length > 0){

			this.echartOption.grid = [];
			this.echartOption.xAxis = [];
			this.echartOption.yAxis = [];
			this.echartOption.series = [];

			this.creatSeries(arr);
			console.log(this.echartOption);
			this.echart.clear();
			this.echart.setOption(this.echartOption);
		}
	},
	creatSeries: function(chartTypeArr){
		var _this = this;
		var data = this.testData;

		var typeLen = chartTypeArr.length;
		data.forEach(function(item, index){
			var position = _this.echart.convertToPixel('geo', item.center);
			chartTypeArr.forEach(function(cTtem, tcIndex){
				switch(cTtem){
					case 'pie':
						_this.createPieSeries(item, index, position);
						break;
					case 'line': 
						//_this.createLineSeries(item, index, position);
						break;
				}
			})
		})	
	},
	createPieSeries: function(item, index, position){
		this.echartOption.series.push({
            name: item.name,
            type: 'pie',
            radius : this.gridHeight / 2,
            dCenter: item.center,
            center: position,
            data: [{value: Math.round(Math.random() * 420 + 80), name:'直接访问', adcode: item.adcode, childrenNum: item.childrenNum},
					{value: Math.round(Math.random() * 420 + 80), name:'邮件营销', adcode: item.adcode, childrenNum: item.childrenNum},
					{value: Math.round(Math.random() * 420 + 80), name:'联盟广告', adcode: item.adcode, childrenNum: item.childrenNum}],
            label: {
                show: false,
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        })		
	},

	createLineSeries: function(item, index, position){
		this.echartOption.grid.push({
			left: position[0] - (this.gridWidth / 2), 
			top: position[1] - (this.gridHeight / 2), 
			width: this.gridWidth, 
			height: this.gridHeight, 
			dCenter: item.center
		});

		this.echartOption.xAxis.push({
			gridIndex: index, min: 0, max: 20, 
			axisLine: {show: false}, 
			axisTick: {show: false}, 
			axisLabel: {show: false}, 
			splitLine: {show: false}
		});

		this.echartOption.yAxis.push({
			gridIndex: index, min: 0, max: 20, 
			axisLine: {show: false}, 
			axisTick: {show: false}, 
			axisLabel: {show: false}, 
			splitLine: {show: false}
		});

		this.echartOption.series.push({
			type: 'line',
			name: item.name,
			xAxisIndex: index,
        	yAxisIndex: index,
        	lineStyle: {
        		color: '#ff6004'
        	},
        	itemStyle: {
        		borderColor: '#ff6004',
        		borderWidth: 1
        	},
    		data: [
    			[2, Math.round(Math.random() * 17 + 3)], 
    			[5, Math.round(Math.random() * 17 + 3)], 
    			[10, Math.round(Math.random() * 17 + 3)], 
    			[12, Math.round(Math.random() * 17 + 3)], 
    			[18, Math.round(Math.random() * 17 + 3)]]
		});
	},

	createTestData: function(){
		var data = [];
		var features = this.geoData.features;

		for(var i = 0, len = features.length; i < len; i++) {
			var properties = features[i].properties;
			var center = properties.centroid ? properties.centroid : properties.center;

			var d = {
				name: properties.name, 
				center: center,
				adcode: properties.adcode, 
				childrenNum: properties.childrenNum
			}

            data.push(d);
		}

		this.testData = data;
	},

	createBreadcrumb: function(areaNode){
		var props = areaNode.getProps();
		
		//遍历当前导航数据，判断目标数据是否已存在，并重新构造数据
		var breadcrumbData =  this.breadcrumbData;
		var newBreadcrumbData = [];
		var isIn = false;
		for(var i = 0, len = breadcrumbData.length; i < len; i++){
			newBreadcrumbData.push(breadcrumbData[i]);
			if(breadcrumbData[i].adcode == props.adcode) {
				isIn = true;
				break;
			}
		}
		if(isIn) {
			this.breadcrumbData = newBreadcrumbData;
		}else{
			this.breadcrumbData.push({name: props.name, adcode: props.adcode});
		}
		
		//根据最新导航数据，构造echart option
        var graphic = [];
        var concatString = '';
        breadcrumbData = this.breadcrumbData;
        for(var j = 0, len = breadcrumbData.length; j < len; j++){
        	breadcrumbData[j].concatString = concatString;
        	graphic = graphic.concat(this.createBreadcrumbOption(breadcrumbData[j], j));
        	concatString = concatString + breadcrumbData[j].name;
        }

		this.echartOption.graphic = graphic;
	},
	
	createBreadcrumbOption: function(item, index){
		var _this = this;
		
		var style = {
			font: '18px "Microsoft YaHei", sans-serif',
			textColor: '#123456'
		};
		var pos = {
			leftCur: 150,
			top: 50,
			separationSpace: 15,
			separatorWidth: 7,
			wordWidth: 17,

		};

		//构造分隔符(>)polyline对象
		var line = [[0, 0], [pos.separatorWidth - 1, pos.separatorWidth], [0, pos.separatorWidth * 2]];
		var polylineLeft = pos.leftCur + (2 * index - 1) * pos.separationSpace + (item.concatString.length ) * pos.wordWidth + (index - 1) * pos.separatorWidth;
		var	polyline = {
                    type: 'polyline',
                    left: polylineLeft,
                    top: pos.top,
                    shape: {
                        points: line
                    },
                    silent: true,
                    bounding: 'all'
                }

        //构造名称text对象
        var textLeft = pos.leftCur + index * (2 * pos.separationSpace + pos.separatorWidth) + item.concatString.length * pos.wordWidth;
        var text = {
                    type: 'text',
                    left: textLeft,
                    top: pos.top,
                    style: {
                        text: item.name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function(){
                    	if(item.adcode != _this.adcode){
                    		_this.adcode = item.adcode;
                    		_this.init();
                    	}	
                    }
                }

        return (index == 0 ? [text] : [polyline, text]);
	},

}


var echartOption = {
        tooltip : {
	        trigger: 'item'
	    },
        geo: {
        	roam: true,
	        map: '',
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        itemStyle: {
	            normal: {
	                areaColor: '#304553',
	                borderColor: '#fff'
	            }
	        },
	        silent: true
	    },
	    visualMap: {
	        show: false,
	        min: 80,
	        max: 500,
	        inRange: {
	            colorLightness: [0, 1]
	        }
	    },
        series: []
    };
    
var chart = new GDEcharts({containerId: 'chart-panel', echartOption: echartOption});


