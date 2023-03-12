var geoCoordMap = {
	'广州': [113.5107,23.2196],
	'越秀': [113.273152,23.134756],
	'白云': [113.283644,23.16546],
	'天河': [113.368444,23.130502],
	'荔湾': [113.243429,23.122843],
	'番禺': [113.390607,22.944312],
	'海珠': [113.329594,23.093658],
	'花都': [113.228697,23.410155],
	'增城': [113.81971,23.267341],
	'黄埔': [113.464915,23.112174],
	'从化': [113.593984,23.554304],
	'南沙': [113.527294,22.827079],
};

var GZData = [
    [{name:'广州'},{name: '越秀',value:96}],
    [{name:'广州'},{name: '白云',value:90}],
    [{name:'广州'},{name: '天河',value:96}],
    [{name:'广州'},{name: '荔湾',value:90}],
	[{name:'广州'},{name: '番禺',value:77}],
	[{name:'广州'},{name: '海珠',value:70}],
	[{name:'广州'},{name: '花都',value:94}],
	[{name:'广州'},{name: '增城',value:79}],
	[{name:'广州'},{name: '从化',value:51}],
    [{name:'广州'},{name: '黄埔',value:67}]
					
];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[0].value//来源或流向修改
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};
var series = [];
[['广州', GZData]].forEach(function (item, i) {
    series.push(
    {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
       
        label: { //图形上的城市文本标签
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
                textStyle:{
                    color:'#fff',
					fontStyle: 'normal',
                    fontFamily: 'arial',
                    fontSize: 12,
                }
            }
        },
        symbolSize: 1,//点大小
        itemStyle: {
            normal: {
                color: function(params) {
                      var tmp = params.data.value[2]
                      if (tmp < 25) {
                          return 'aqua';
                      } else if (tmp < 50) {
                          return 'lime';
                      } else if (tmp < 76) {
                          return 'yellow';
                      } else if (tmp < 95) {
                          return 'orange'
                      } else
                          return '#ff3333';
                }
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
option = {
    backgroundColor: '#23243a',
    tooltip : {  //提示组件
        trigger: 'item',
    },
    geo: {
        map: 'guangzhou',
        label: {
            emphasis: {
                show: false,
                textStyle: {
					color: '#fff'
				}
            }
        },
        roam: true, //开启缩放或者平移
        zoom: 1.1,  //缩放比例
        itemStyle: {
            normal: {
                areaColor: 'none',
                borderColor: 'rgba(100,149,237,1)'
            },
            emphasis: {
                areaColor: '#1b1b1b'
            }
        }
    },
    series: series
};