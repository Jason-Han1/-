var app = {};
option = null;

var newData = [{"name":"南宁","value":[108.33,22.84,1036.0]},{"name":"张家界","value":[110.479191,29.117096,35.0]},{"name":"厦门","value":[118.1,24.46,1855.0]},{"name":"东莞","value":[113.75,23.04,2445.0]},{"name":"德州","value":[116.29,37.45,929.0]},{"name":"石家庄","value":[114.48,38.03,318.0]},{"name":"长治","value":[113.08,36.18,45.0]},{"name":"天津","value":[117.2,39.13,3876.0]},{"name":"沧州","value":[116.83,38.33,321.0]},{"name":"淄博","value":[118.05,36.78,185.0]},{"name":"杭州","value":[120.19,30.26,3729.0]},{"name":"赤峰","value":[118.87,42.28,21.0]},{"name":"菏泽","value":[115.480656,35.23375,281.0]},{"name":"福州","value":[119.3,26.08,1196.0]},{"name":"芜湖","value":[118.38,31.33,12.0]},{"name":"韶关","value":[113.62,24.84,533.0]},{"name":"河源","value":[114.68,23.73,743.0]},{"name":"广州","value":[113.23,23.16,250669.0]},{"name":"泉州","value":[118.58,24.93,556.0]},{"name":"邯郸","value":[114.47,36.6,463.0]},{"name":"郑州","value":[113.65,34.76,3061.0]},{"name":"潮州","value":[116.63,23.68,451.0]},{"name":"南京","value":[118.78,32.04,1778.0]},{"name":"盘锦","value":[122.070714,41.119997,181.0]},{"name":"海口","value":[110.35,20.02,845.0]},{"name":"徐州","value":[117.2,34.26,507.0]},{"name":"柳州","value":[109.4,24.33,389.0]},{"name":"绍兴","value":[120.58,30.01,1078.0]},{"name":"金昌","value":[102.188043,38.520089,140.0]},{"name":"北海","value":[109.12,21.49,646.0]},{"name":"重庆","value":[106.54,29.59,2307.0]},{"name":"无锡","value":[120.29,31.59,625.0]},{"name":"枣庄","value":[117.57,34.86,32.0]},{"name":"营口","value":[122.18,40.65,3683.0]},{"name":"哈尔滨","value":[126.63,45.75,1365.0]},{"name":"保定","value":[115.48,38.85,53.0]},{"name":"茂名","value":[110.88,21.68,238.0]},{"name":"葫芦岛","value":[120.836932,40.711052,22.0]},{"name":"江门","value":[113.06,22.61,511.0]},{"name":"兰州","value":[103.73,36.03,66.0]},{"name":"湛江","value":[110.359377,21.270708,139.0]},{"name":"唐山","value":[118.02,39.63,907.0]},{"name":"乌鲁木齐","value":[87.68,43.77,844.0]},{"name":"深圳","value":[114.07,22.62,16246.0]},{"name":"咸阳","value":[108.72,34.36,458.0]},{"name":"汕头","value":[116.69,23.39,5634.0]},{"name":"呼和浩特","value":[111.65,40.82,4236.0]},{"name":"常德","value":[111.69,29.05,17.0]},{"name":"洛阳","value":[112.44,34.7,14.0]},{"name":"清远","value":[113.01,23.7,147.0]},{"name":"北京","value":[116.46,39.92,32348.0]},{"name":"佛山","value":[113.11,23.05,12555.0]},{"name":"齐齐哈尔","value":[123.97,47.33,998.0]},{"name":"东营","value":[118.49,37.46,443.0]},{"name":"嘉兴","value":[120.76,30.77,1387.0]},{"name":"秦皇岛","value":[119.57,39.95,266.0]},{"name":"汕尾","value":[115.375279,22.786211,1677.0]},{"name":"宁波","value":[121.56,29.86,232.0]},{"name":"金华","value":[119.64,29.12,4549.0]},{"name":"贵阳","value":[106.71,26.57,65.0]},{"name":"潍坊","value":[119.1,36.62,347.0]},{"name":"泰安","value":[117.13,36.18,528.0]},{"name":"长春","value":[125.35,43.88,410.0]},{"name":"合肥","value":[117.27,31.86,4136.0]},{"name":"珠海","value":[113.52,22.3,200.0]},{"name":"青岛","value":[120.33,36.07,5674.0]},{"name":"大连","value":[121.62,38.92,670.0]},{"name":"威海","value":[122.1,37.5,134.0]},{"name":"阳江","value":[111.95,21.85,1006.0]},{"name":"丽水","value":[119.92,28.45,110.0]},{"name":"邢台","value":[114.48,37.05,357.0]},{"name":"上海","value":[121.48,31.22,11329.0]},{"name":"沈阳","value":[123.38,41.8,684.0]},{"name":"马鞍山","value":[118.48,31.56,6.0]},{"name":"南通","value":[121.05,32.08,266.0]},{"name":"衢州","value":[118.88,28.97,49.0]},{"name":"常州","value":[119.95,31.79,92.0]},{"name":"武汉","value":[114.31,30.52,3299.0]},{"name":"银川","value":[106.27,38.47,149.0]},{"name":"太原","value":[112.53,37.87,986.0]},{"name":"安阳","value":[114.35,36.1,36.0]},{"name":"昆明","value":[102.73,25.04,5349.0]},{"name":"济南","value":[117.0,36.65,1833.0]},{"name":"包头","value":[110.0,40.58,734.0]},{"name":"临沂","value":[118.35,35.05,1639.0]},{"name":"廊坊","value":[116.7,39.53,805.0]},{"name":"聊城","value":[115.97,36.45,117.0]},{"name":"大同","value":[113.3,40.12,554.0]},{"name":"肇庆","value":[112.44,23.05,61.0]},{"name":"绵阳","value":[104.73,31.48,1.0]},{"name":"温州","value":[120.65,28.01,313.0]},{"name":"成都","value":[104.06,30.67,1646.0]},{"name":"衡水","value":[115.72,37.72,270.0]},{"name":"台州","value":[121.420757,28.656386,2273.0]},{"name":"阳泉","value":[113.57,37.85,1.0]},{"name":"长沙","value":[113.0,28.21,912.0]},{"name":"鄂尔多斯","value":[109.781327,39.608266,66.0]},{"name":"宿迁","value":[118.3,33.96,201.0]},{"name":"镇江","value":[119.44,32.2,566.0]},{"name":"揭阳","value":[116.35,23.55,168.0]},{"name":"泸州","value":[105.39,28.91,294.0]},{"name":"中山","value":[113.38,22.52,1247.0]},{"name":"惠州","value":[114.4,23.09,126.0]},{"name":"西宁","value":[101.74,36.56,7.0]},{"name":"梅州","value":[116.1,24.55,4607.0]},{"name":"云浮","value":[112.02,22.93,13.0]},{"name":"焦作","value":[113.21,35.24,653.0]},{"name":"滨州","value":[118.03,37.36,135.0]},{"name":"西安","value":[108.95,34.27,59.0]},{"name":"烟台","value":[121.39,37.52,1156.0]},{"name":"济宁","value":[116.59,35.38,857.0]},{"name":"扬州","value":[119.42,32.39,201.0]},{"name":"苏州","value":[120.62,31.32,1964.0]}];
//var myChart = echarts.init(dom);

option = {
    backgroundColor: '#404a59',
    title: {
        text: '全国主要城市空气质量',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {

        color: ['#d94e5d','#eac736','#50a3ba'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: newData,
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
		{
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: newData.sort(function (a, b) {
				var v1 = a.value[2];
				var v2 = b.value[2];
                return v2 - v1;
            }).slice(0, 3),
			symbolSize: function (val) {
                return Math.log(val[2])*2;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
		
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


myChart.setOption({
    series: [{
		      data:newData,
			  markPoint:{
				    animationDurationUpdate:2000,
					animationDuration:800,
                    symbol:'circle',
                    symbolSize : function (v){
                      return 20;
                    },
                    itemStyle:{
                        normal:{
                            label:{show:false},
						    color: '#f4e925',
							shadowBlur: 10,
							shadowColor: '#333'
                        },
                        emphasis: {
                            label:{position:'top'}
                        }
                    },
                    data : [ {"name":"南宁","coord":[108.33,22.84],"value":1036.0},
                             {"name":"张家界","coord":[110.479191,29.117096],"value":35.0},
                             {"name":"福建","coord":[118.1,24.46],"value":1855.0}],
                }
			},
		{
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: newData.sort(function (a, b) {
				var v1 = a.value[2];
				var v2 = b.value[2];
                return v2 - v1;
            }).slice(0, 10),
			symbolSize: function (val) {
                return Math.log(val[2])*2;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
				period:5,
				scale:5
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1	
        }]
});