var uploadedDataURL = "/asset/get/s/data-1570847503524-pSRAPpRbC.csv";

var mapStyleJSONURL = "/asset/get/s/data-1570785558743-7-oK7oFNe.json";



$.get(uploadedDataURL, function (data) {
    
    var dataStr = new String(data);
	var lines = dataStr.split('\n');
	var points = [];
	for (var i = 0;i<60000;i++){
		points.push([parseFloat(lines[i].split(',')[0]),parseFloat(lines[i].split(',')[1]),1])
	}
	var railcoord = [];
	for (var j = 0;j<4009;j++){
	    railcoord.push([parseFloat(lines[j].split(',')[2]),parseFloat(lines[j].split(',')[3])])
	}
	
	$.getJSON(mapStyleJSONURL,function(mapjson){
	    myChart.setOption(option = {
        animation: false,
        bmap: {
            center: [106.635143,26.500224],
            zoom: 12,
            roam: true,
			mapStyle: {
				styleJson:mapjson
			},
        },
        visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['#0700ff', '#00ddff', '#4fff00', '#ffff00', 'red']
            }
        },
        series: [
			{
				type: 'heatmap',
				coordinateSystem: 'bmap', //地理坐标系
				data: points,
				pointSize: 0.5,
				blurSize: 0    // 模糊大小
			},
			
		]
		
    });
	if (!app.inNode) {
        // 添加百度地图插件
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
    }
	    
	})
	
    
    
},dataType="text");