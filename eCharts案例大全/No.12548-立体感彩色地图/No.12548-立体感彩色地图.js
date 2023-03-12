var uploadedDataURL = "/asset/get/s/data-1545373988179-p1Cd-l9Ck.json";
let mapTipData = {},
    mainMap = {},
    mapDataBorder = {},
    mapDataBG = {},
    mapName = 'gaoyou',
    colorDic = {
        areaColor: ['#fcc6a9', '#8ad77d', '#63d4f5', '#f6cb65', '#d5abfc', '#aee1ff', '#a4f4a0', '#6199ef', '#f88d79', '#fbb7ca', '#8aeadb', '#7ebefa', '#d4f99e']
    };

$.getJSON(uploadedDataURL, function(geoJson) {
    gyData = geoJson
    mapTipData = gyData.tipData;
    mainMap = gyData.GaoYouGeo;
    mapDataBorder = gyData.GaoYouBorderGeo;
    mapDataBG = gyData.GaoYouBorderGeo;
    echarts.registerMap(mapName, mainMap);

    option = {
        backgroundColor: '#131535',
        visualMap: {
            show: false,
            left: 'left',
            top: 'bottom',
            calculable: false,
            orient: 'horizontal',
            inRange: {
                color: ['#000', '#fff'],
            },
            splitList: [{
                    label: '菱塘回族乡',
                    start: 1,
                    end: 1,
                    color: '#fcc6a9'
                },
                {
                    label: '车逻镇',
                    start: 2,
                    end: 2,
                    color: '#8ad77d'
                },
                {
                    label: '高邮镇',
                    start: 3,
                    end: 3,
                    color: '#63d4f5'
                },
                {
                    label: '送桥镇',
                    start: 4,
                    end: 4,
                    color: '#f6cb65'
                },
                {
                    label: '卸甲镇',
                    start: 5,
                    end: 5,
                    color: '#d5abfc'
                },
                {
                    label: '汤庄镇',
                    start: 6,
                    end: 6,
                    color: '#aee1ff'
                },
                {
                    label: '甘垛镇',
                    start: 7,
                    end: 7,
                    color: '#a4f4a0'
                },
                {
                    label: '三垛镇',
                    start: 8,
                    end: 8,
                    color: '#6199ef'
                },
                {
                    label: '龙虬镇',
                    start: 9,
                    end: 9,
                    color: '#f88d79'
                },
                {
                    label: '开发区(马棚街道)',
                    start: 10,
                    end: 10,
                    color: '#fbb7ca'
                },
                {
                    label: '界首镇',
                    start: 11,
                    end: 11,
                    color: '#8aeadb'
                },
                {
                    label: '周山镇',
                    start: 12,
                    end: 12,
                    color: '#7ebefa'
                },
                {
                    label: '临泽镇',
                    start: 13,
                    end: 13,
                    color: '#d4f99e'
                }
            ]
        },
        tooltip: {
            show: true,
            trigger: 'item',
        },
        series: [{
            name: 'gaoyou',
            type: 'map',
            zoom: 1.2,
            left: 260,
            top: 80,
            mapType: 'gaoyou',
            itemStyle: {
                normal: {
                    borderColor: '#5777ac',
                    borderWidth: 2,
                    label: {
                        show: true,
                        fontSize: 20,
                        color: '#333',
                        fontWeight: 500
                    }
                },
                emphasis: {
                    borderColor: '#ededf2',
                    shadowColor: '#6592c4',
                    shadowBlur: 50,
                    label: {
                        show: true,
                    }
                }
            },
            data: formatMapNamesData(),
        }, ]
    }
    // 地图边框
    if (JSON.stringify(mapDataBorder) != "{}") {
        echarts.registerMap(mapName + 'border', mapDataBorder);
        option.series.push({
            name: mapName + 'border',
            type: 'map',
            silent: true,
            zoom: 1.2,
            left: 260,
            top: 80,
            mapType: mapName + 'border', // 自定义扩展图表类型
            itemStyle: {
                normal: {
                    color: '#111c4c',
                    areaColor: 'transparent',
                    borderColor: '#ededf2',
                    borderWidth: 5,
                    shadowColor: '#9dace8',
                    shadowBlur: 50
                },
            },
            data: [],
        })
    }
    // 地图背景
    if (JSON.stringify(mapDataBG) != "{}") {
        echarts.registerMap(mapName + 'bg', mapDataBG);
        option.series.unshift({
            name: mapName + 'bg',
            type: 'map',
            silent: true,
            zoom: 1.2,
            left: 280,
            top: 100,
            mapType: mapName + 'bg', // 自定义扩展图表类型
            itemStyle: {
                normal: {
                    areaColor: '#6187bc',
                    shadowColor: '#484b80',
                    shadowBlur: 100
                },
            },
            data: [],
        })
    }
    myChart.setOption(option);
})



function formatMapNamesData() {
    if (mainMap && mainMap.features &&
        Object.prototype.toString.call(mainMap.features === '[object Array]')) {
        const names = []
        mainMap.features.forEach((item, index) => {
            if (mapTipData) {
                names.push({
                    name: item.properties.name,
                    value: index + 1,
                    itemStyle: {
                        emphasis: {
                            areaColor: colorDic.areaColor[index]
                        }
                    },
                    dataList: mapTipData[item.properties.name]
                })
            } else {
                names.push({
                    name: item.properties.name,
                    value: index + 1,
                    itemStyle: {
                        emphasis: {
                            areaColor: colorDic.areaColor[index]
                        }
                    },
                    value: Math.random() * 1000
                })
            }
        })
        return names
    }
}