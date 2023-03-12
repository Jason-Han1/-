var geoCoordMap = {
    '海珠': [113.322023,23.062929],
    '越秀': [113.290187,23.110634],
    '从化': [113.607674,23.560751],
    '增城': [113.739608,23.295054],
    '黄埔': [113.494425,23.180565],
    '白云': [113.313629,23.251614],
    '花都': [113.228697, 23.410155],
    '天河': [113.364376,23.12271],
    '南沙': [113.466285,22.82122],
    '荔湾': [113.221602,23.046683],
    '番禺': [113.390607, 22.944312]
};

var GZData = [
    [{name: '海珠',value:96}],
    [{name: '越秀',value:90}],
	[{name: '从化',value:66}],
	[{name: '增城',value:70}],
	[{name: '白云',value:94}],
	[{name: '花都',value:79}],
	[{name: '天河',value:51}],
    [{name: '南沙',value:67}],
    [{name: '荔湾',value:30}],
    [{name: '番禺',value:56}],
    [{name: '黄埔',value:56}]
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
                position: 'top',
                formatter: '{b}',
                textStyle:{
                    color:'#fff',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 20,
                },
                rich: {
                    
                },
            }
        },
        symbolSize: 1,//点大小
        itemStyle: {
            normal: {
                color:'rgba(115, 201, 255, 0)',
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[0].name,//来源或流向修改
                value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])//来源或流向修改
            };
        })
    });
});

option = {
    backgroundColor: '#23243a',
    geo: {
        map: 'guangzhou',
        selectedMode: 'single',
        label: {
            normal: {
                show: false,
                color: '#fff',
                fontSize: 24,
                fontFamily: 'Microsoft YaHei'
            },
            emphasis: {
                show: false,
                color: '#fff',
            }

        },
        roam: false, //开启缩放或者平移
        zoom: 1.8, //缩放比例
        itemStyle: {
            normal: {
                areaColor: '#73c9ff',
                borderColor: '#fff',
                borderWidth: 4,
            },
            emphasis: {
                areaColor: '#ff9e14'
            }
        },
        regions: [{
            name: '从化区',
            selected: true, //该域是否选中
            label: {
                normal: {
                    //offset: [100, 1000],
                }
            }
        }]
    },
    series: series
};

myChart.on('click',function(param){
    alert(param.name);
});
