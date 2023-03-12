var locations = [{
name: 'china'
}, {
name: 'world'
}];
option = {
    title: {
	         x:'center',
	         text:'世界地图',
	         textStyle: {
	             color: '#000',
	             fontSize: 16
	         }
	},
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [
        {
           
            type: 'map',
            mapType: 'world',
            selectedMode : 'multiple',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
            ]
        }
    ]
};
var curIndx = 0;
app.timeTicket = setInterval(function () {
     myChart.setOption({
        title: {
	         x:'center',
	         text:locations[curIndx].name+'地图',
	         textStyle: {
	             color: '#000',
	             fontSize: 16
	         }
	    },
	    series : [
		     {
				type: 'map',
				mapType: locations[curIndx].name
		     }
		]
     })
    curIndx++;
    curIndx=curIndx%locations.length;
}, 2000);