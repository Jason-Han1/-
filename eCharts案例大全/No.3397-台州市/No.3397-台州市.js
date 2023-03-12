var uploadedDataURL = "/asset/get/s/data-1621492666273-IwJBJ6I-Y.json";



$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap('331000', geoJson)
    myChart.setOption({
        color: [ '#1921ff', '#266eff', '#01c3dd', '#008198', '#2ef4ab',
		'#ffe074', '#ffcbcb', '#cd8425' ],
        "map":"100000",
        "type":"MapBarChart",
        "tooltip":{
            "trigger":"item"
        },
        "geo":{
            "map":"331000",
            "show":true,
            "roam":true,
            "label":{
                "show":true,
                "color":"#fff"
            },
            "itemStyle":{
                "areaColor":"#3a7fd5",
                "borderColor":"#0a53e9",
                "shadowColor":"#092f8f",
                "shadowBlur":20
            },
            "emphasis":{
                "label":{
                    "show":false
                },
                "itemStyle":{
                    "areaColor":"#0a2dae"
                }
            }
        },
        "series":[],
        "xAxis":[
            
        ],
        "yAxis":[
            
        ],
        "legend":{
            "data":[
                "高",
                "中",
                "低"
            ]
        },
        "name":"平面地图2",
        "grid":[
            {
            "id":"0",
            "width":50,
            "height":40,
            "left":159.227439025879,
            "top":177.3298914794923
        },
        {
            "id":"1",
            "width":50,
            "height":40,
            "left":423.20616596984837,
            "top":352.2280344238279
        },
        {
            "id":"2",
            "width":50,
            "height":40,
            "left":77.75563617706212,
            "top":373.94198297119146
        }
        ]
    })
})