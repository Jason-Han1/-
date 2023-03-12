var chinaContourUrl = "/asset/get/s/data-1469097271266-SkyrH7CP.json";

$.getJSON(chinaContourUrl, function (json) {
    echarts.registerMap('china-contour', json);
    
    myChart.setOption({
        geo: [{
            map: 'china',
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.2)'
                }
            }
        }, {
            map: 'china',
            itemStyle: {
                normal: {
                    borderColor: '#aaa'
                }
            }
        }]
    });
});
var geoCoordMap = {
    "重庆金佛山国家级自然保护区":[107.159108,28.951313],
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
    return res;
};

option = {
    title: {
        text: '重楼标本热力分布',
        subtext: 'data from NSII',
        sublink: 'http://www.nsii.org.cn/2017',
        left: 'center',
    },
    visualMap: {
        min: 0,
        max: 10,
        splitNumber: 5,
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'].reverse()
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
    },
    series: [{
        name: 'AQI',
        type: 'heatmap',
        coordinateSystem: 'geo',
        data: convertData([
            {name: "重庆金佛山国家级自然保护区", value: 11},
        ])
    }]
};