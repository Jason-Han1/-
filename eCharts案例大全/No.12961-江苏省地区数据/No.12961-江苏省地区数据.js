
var jiangsu = {
	name: '江苏省',
	link: '/asset/get/s/data-1541483028242-KQ5kvH04Z.json',
	children: {
		'宿迁市': '/asset/get/s/data-1541483174897-Fwn9USkUp.json',
		'泰州市': '/asset/get/s/data-1541483169968-hYdTeUE5L.json',
		'镇江市': '/asset/get/s/data-1541483163907-2bwxG5xct.json',
		'扬州市': '/asset/get/s/data-1541483157174-fQracl91Q.json',
		'盐城市': '/asset/get/s/data-1541483131486-HbDtUl-tj.json',
		'淮安市': '/asset/get/s/data-1541483123146-gwHVDz7yO.json',
		'连云港市': '/asset/get/s/data-1541483113326-E7Ab3iCV2.json',
		'南通市': '/asset/get/s/data-1541483108475-vP4DzrwV1.json',
		'苏州市': '/asset/get/s/data-1541483103134-CJRehfJKh.json',
		'常州市': '/asset/get/s/data-1541483097335-QbKYjbhll.json',
		'徐州市': '/asset/get/s/data-1541483089618-ZIt52gJLQ.json',
		'无锡市': '/asset/get/s/data-1541483084338-Sw9ScWgbZ.json',
		'南京市': '/asset/get/s/data-1541483074139-_hp0YK9kz.json',
	}
}





$.getJSON(jiangsu.link, function(geoJson) {
    echarts.registerMap('jiangsu', geoJson)
    console.log('geoJson', geoJson)
    
    let data = []
    geoJson.features.map(v => {
        data.push({
            name: v.properties.name,
            value: v.properties.cp
        })
    })
    
    console.log('data : ', data)

    option = {
        backgroundColor: '#030303',
        title: {
            text: '中国地图',
            textStyle: {
                color: '#fff'
            }
        },
        animationDuration:1000,
    	animationEasing:'cubicOut',
    	animationDurationUpdate:1000,
        series: [{
            name: '江苏省地图',
            width: '40%',
            left: 20,
            top: 'center',
            type: 'map',
            mapType: 'jiangsu', // 自定义扩展图表类型
            data: data,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    areaColor: 'rgb(19, 91, 153)',
                    borderColor: 'rgb(9, 54, 95)'
                },
                emphasis: {
                    label: {
                        color: '#80c4ff'
                    },
                    areaColor: 'rgb(10, 105, 187)'
                }
            }
        }]
    }

    myChart.setOption(option);
    loadMap('南京市')

})


myChart.on('click', function(params) {
    console.log('params : ', params)
    if (params.seriesIndex === 0) {
        loadMap(params.name)
    } else {
        //
    }
})



function loadMap(name) {
    $.getJSON(jiangsu.children[name], function(geoJson) {
    echarts.registerMap(name, geoJson)
    
    let data = []
    geoJson.features.map(v => {
        data.push({
            name: v.properties.name,
            value: v.properties.cp
        })
    })

    option.series[1] = {
            name: name,
            width: '40%',
            top: 'center',
            left: '55%',
            type: 'map',
            mapType: name, // 自定义扩展图表类型
            data: data,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    areaColor: 'rgb(19, 91, 153)',
                    borderColor: 'rgb(9, 54, 95)'
                },
                emphasis: {
                    label: {
                        color: '#80c4ff'
                    },
                    areaColor: 'rgb(10, 105, 187)'
                }
            }
        }
    

    myChart.setOption(option);

})
}














































