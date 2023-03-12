var chinaMapJson = [];

$.getJSON('https://gallerybox.echartsjs.com/dep/echarts/map/json/world.json', function (worldJson) {
    //从世界地图找到中国地图
    for(var item in worldJson.features){
        if(worldJson.features[item].properties.name == "China"){
            chinaMapJson = worldJson.features[item];
            
            break;
        }
        
    }
    
    //下载完整中国地图
    if(chinaMapJson.length !== 0){
        $.getJSON('https://geo.datav.aliyun.com/areas/bound/100000_full.json', function (chinaJson) {
            //将世界地图中的中国地图拼到完整中国地图中
            chinaJson.features.unshift(chinaMapJson);
            
            echarts.registerMap('china',chinaJson);
            
            loadEcharts();
        });
    }
});

function loadEcharts(){
    myChart.setOption({
        backgroundColor: {
            type: 'linear-gradient',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#0000ff'
            }, {
                offset: 1,
                color: '#0055ff'
            }],
            global: true
        },
        tooltip: {
            show: false
        },
        geo: {
            map: 'china',
            roam: true,
            zoom:1.2,
            label:{
                normal:{
                    show:false
                },
                emphasis:{
                    show:false
                }
            },
            regions: [{
                name: 'China',
                itemStyle: {
                    normal: {
                        areaColor: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(0,0,255,1)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0, 200, 255, 1)' // 100% 处的颜色
                            }]
                        },
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowBlur: 10,
                        shadowOffsetY: 10
                    },
                    emphasis: {
                        areaColor: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(0,0,255,1)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0, 200, 255, 1)' // 100% 处的颜色
                            }]
                        },
                    }
                }
            }],
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 0.5,
                    areaColor: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    areaColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 2,
                }
            }
        }
    });
}

