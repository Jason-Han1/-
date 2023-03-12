var uploadedDataURL = "/asset/get/s/data-1565769001765-qW6ayEX8d.json";

// var uploadedDataURL = "/asset/get/s/data-1539135233305-GPxHCB8sx.json";


 var townName = "益农镇";
myChart.showLoading();
var data = [{
    "name": "市北公寓",
    "value": "市北公寓"
}, {
    "name": "天海阳光",
    "value": "天海阳光"
}];
var geoCoordMap = {
    "天海阳光": [120.5863,30.1636],
    "市北公寓": [120.5616,30.1607]
};
$.getJSON(uploadedDataURL, function(geoJson) {
    myChart.hideLoading();
    var mapLine = geoJson;
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    echarts.registerMap('XSQ', mapLine);
    option = {
        title: {
            text: townName,
            subtext: '下级排水户分布',
            x: 'center'
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['下级排水户分布图']
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function(params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.name + ': ' + value;
            }
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'right',
            top: 'top',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        geo: {
            show: true,
            map: 'XSQ',
            left: '2%',
            label: {
                normal: {
                    color: '#F4E925',
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    color: '#fff',
                    areaColor: '#323c48'
                }
            }
        },
        series: [{
            name: '',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 12,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9',
                    shadowBlur: 10,
                    shadowColor: '#05C3F9'
                },
                emphasis: {
                    areaColor: '#1DE9B6',
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }]
    };
    myChart.setOption(option);
});
myChart.on('click', function(params) {
	if(params.seriesType === 'effectScatter'){
    	alert(params.data.name)
	}
});