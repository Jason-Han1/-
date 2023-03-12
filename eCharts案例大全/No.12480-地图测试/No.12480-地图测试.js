var beijing = "/asset/get/s/data-1546486013100-z-CmDYTVq.json";

var yanqing = "/asset/get/s/data-1546395533660-mTgatXcmV.json";
var dongcheng = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var tongzhou = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var daxing = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var  fangshan = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var fengtai = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var xicheng = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
//var dongcheng = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var chaoyang = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var shijingshan = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var haidian = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var mentougou = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var shunyi = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var changping = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var huairou = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var miyun = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";
var pinggu = "/asset/get/s/data-1546070060791-7oD7pZd8V.json";

echarts.extendsMap = function(id, opt){
    // 实例
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    var cityMap = {
        "通州区": tongzhou,
        "大兴区": daxing,
        "房山区": fangshan,
        "丰台区": fengtai,
        "西城区": xicheng,
        "东城区": dongcheng,
        "朝阳区": chaoyang,
        "石景山区":shijingshan,
        "海淀区": haidian,
        "门头沟区": mentougou,
        "顺义区": shunyi,
        "昌平区": changping,
        "怀柔区": huairou,
        "密云区": miyun,
        "平谷区": pinggu,
        "延庆区": yanqing
    };
    var geoCoordMap = {
        "通州":[116.708603,39.802486],
        "大兴":[116.338033,39.728908],
        "房山":[116.139157,39.735535],
        "丰台":[116.286968,39.863642],
        "西城":[116.366794,39.915309],
        "东城":[116.418757,39.917544],
        "朝阳":[116.486409,39.921489],
        "石景山":[116.195445,39.914601],
        "海淀":[116.310316,39.956074],
        "门头沟":[116.105381,39.937183],
        "顺义":[116.653525,40.128936],
        "昌平":[116.235906,40.218085],
        "怀柔":[116.637122,40.324272],
        "密云":[116.843352,40.377362],
        "平谷":[117.112335,40.144783],
        "延庆":[115.985006,40.465325],
        "延庆1号主变":[115.985006,40.465325],
        "延庆2号主变":[116.185006,40.375325],
        "延庆3号主变":[116.285006,40.685325],
        "延庆4号主变":[116.385006,40.595325],
        "延庆5号主变":[115.785006,40.505325]
        
    };
    var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',
        '2': 'rgba(76, 175, 80, .7)',
        '3': 'rgba(147, 235, 248, 0.7)'
    };

    var defaultOpt = {
        mapName: 'china',     // 地图展示
        goDown: false,        // 是否下钻
        bgColor: '#ffcfb8',   // 画布背景色
        activeArea: [],       // 区域高亮,同echarts配置项
        data: [],
        regionData: [],
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
        textColor: '#000',
        lineColor: '#000'
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
                            o.series[0].data = handleEvents.initSeriesData(opt.regionData);
                            break;
                        }
                        else o.series[0].data = [];
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
                "通州区": "tongzhou",
                "大兴区": "daxing",
                "房山区": "fangshan",
                "丰台区": "fengtai",
                "西城区": "xicheng",
                "东城区": "dongcheng",
                "朝阳区": "chaoyang",
                "石景山区": "shijingshan",
                "海淀区": "haidian",
                "门头沟区": "mentougou",
                "顺义区": "shunyi",
                "昌平区": "changping",
                "怀柔区": "huairou",
                "密云区": "miyun",
                "平谷区": "pinggu",
                "延庆区": "yanqing"
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
                        stroke: '#000',
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
        //backgroundColor: opt.bgColor,
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
            roam: true,
            // zoom: 1,
			label : {
				normal : {
					show : true,
					textStyle : {
						color : '#000'
					}
				}
			},
			itemStyle : {
				normal : {
					areaColor : '#ffcfb8',
					borderColor : '#111'
				},
				emphasis : {
					areaColor : '#eaca1e'
				}
			}
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

function getTempData(name){
    var tempData=[];
    if(name=='beijing'){
        tempData=[{
            name: '朝阳',
            value: 10,
            level: 1
        }, {
            name: '通州',
            value: 12,
            level: 2
        }, {
            name: '延庆',
            value: 11,
            level: 3
        }, {
            name: '石景山',
            value: 16,
            level: 2
        }, {
            name: '海淀',
            value: 12,
            level: 1
        }];        
         
    }
    if(name=='yanqing'){
        tempData= [{
            name: '延庆1号主变',
            value: 10,
            level: 1
        }, {
            name: '延庆2号主变',
            value: 12,
            level: 2
        }, {
            name: '延庆3号主变',
            value: 11,
            level: 3
        }, {
            name: '延庆4号主变',
            value: 16,
            level: 2
        }, {
            name: '延庆5号主变',
            value: 12,
            level: 1
        }]
    }
    return tempData;
}

        
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
        data:getTempData('beijing'),
        regionData:getTempData('yanqing')
    });
})
