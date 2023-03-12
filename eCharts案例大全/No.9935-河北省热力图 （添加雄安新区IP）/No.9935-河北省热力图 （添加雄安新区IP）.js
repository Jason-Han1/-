// myChart.showLoading();
var geoCoordMap = {
    '石家庄': [114.48, 38.03],
    '唐山': [118.02, 39.63],
    '秦皇岛': [119.57, 39.95],
    '邯郸': [114.47, 36.6],
    '邢台': [114.48, 37.05],
    '保定': [115.46, 38.87],
    '定州': [114.97, 38.53],
    '衡水': [115.72, 37.72],
    '张家口': [114.87, 40.82],
    '承德': [117.93, 40.97],
    '廊坊': [116.7, 39.53],
    '沧州': [116.83, 38.33],
    '辛集': [115.21, 37.94],
    '雄安新区': [115.91319, 39.0476],
};
var data = [
    {name:"石家庄",value:390},
    {name:"唐山",value:158},
    {name:"秦皇岛",value:52},
    {name:"邯郸",value:160},
    {name:"邢台",value:180},
    {name:"保定",value:180},
    {name:"定州",value:5180},
    {name:"张家口",value:999},
    {name:"承德",value:1089},
    {name:"廊坊",value:152},
    {name:"沧州",value:189},
    {name:"衡水",value:80},
    {name:"辛集",value:158},
    {name:"雄安新区",value:5678},
];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
    return res;
};

$.get('/asset/get/s/data-1526018707993-B129M3z0f.json', function(geoJson) {

    echarts.registerMap('hebei', geoJson);
    option = {
        backgroundColor: '#020933',
        visualMap: {
            // min: 0,
            // max: 500,
            splitNumber: 5,
            inRange: {
                color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
            },
            textStyle: {
                color: '#fff'
            }
        },
        
        geo: {
            show:true,
            map: 'hebei',
            label: {
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
    
            },
            roam: true,
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
        series: [{
            name: '人数',
            type: 'heatmap',
            coordinateSystem: 'geo',
            
            data: convertData(data)
        },
        ]
    };

});