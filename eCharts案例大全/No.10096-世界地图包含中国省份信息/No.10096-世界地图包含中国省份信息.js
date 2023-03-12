option = {
	 series: [{
        name: 'chinaMap',
        type: 'map',
        map: 'world',
        roam: true,
        itemStyle:{
            emphasis:{label:{show:true}}
        },
        center: [115.97, 29.71],
        zoom: 4,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{b}'
            }
        },
        data: [
        	{name: '山东省', value: '1000'}
        ],
        zlevel: 3
    }]
}