var geoJson = "/asset/get/s/data-1592904944493-2HB1a9-yg.json";


const imgUrl = {
    '阴': "image:///asset/get/s/data-1592879301745-RIlQ5MYjE.png",
    '雨': "image:///asset/get/s/data-1592879294117-ool80K6F4.png",
    '多云': "image:///asset/get/s/data-1592879279868-pKYFkYOKH.png",
    '晴': "image:///asset/get/s/data-1592879266354-IOh2LbYRo.png"
}


//数据纯属虚构
$.get(geoJson, res => {
    const data = JSON.parse(res)
    echarts.registerMap('Map', data);

    //这里模拟数据，不用管
    let mapData = {
        '阴': [],
        '雨': [],
        '多云': [],
        '晴': []
    }
    for (let i = 0; i < data.features.length; i++) {
        if (i < 8) {
            mapData['阴'].push({
                name: data.features[i].properties.name,
                value: [data.features[i].properties.center[0], data.features[i].properties.center[1], 40]
            })
        } else if (i > 8 && i <= 16) {
            mapData['雨'].push({
                name: data.features[i].properties.name,
                value: [data.features[i].properties.center[0], data.features[i].properties.center[1], 40]
            })
        } else if (i > 16 && i <= 24) {
            mapData['多云'].push({
                name: data.features[i].properties.name,
                value: [data.features[i].properties.center[0], data.features[i].properties.center[1], 40]
            })
        } else if (i > 24 && i < 34) {
            mapData['晴'].push({
                name: data.features[i].properties.name,
                value: [data.features[i].properties.center[0], data.features[i].properties.center[1], 40]
            })
        }
    }
    let seriesArr = []

    for (let j in mapData) {
        seriesArr.push({
            name: j,
            type: "effectScatter",
            coordinateSystem: "geo",
            data: mapData[j],
            symbolSize: 20,
            symbol: imgUrl[j],
            showEffectOn: "emphasis", //高亮时显示特效
            rippleEffect: {
                brushType: "stroke"
            },
            hoverAnimation: true, //动画效果
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "rgba(255, 128, 0,0.6)" //地图点的颜色
                }
            },
            layoutCenter: ["50%", "50%"], //属性定义地图中心在屏幕中的位置，一般结合layoutSize 定义地图的大小
            layoutSize: 430
        })
    }


    myChart.setOption({
        backgroundColor: '#050038',
        tooltip: {
            trigger: "item",
            formatter: p => {
                let txtCon = p.name + '：' + p.seriesName;
                return txtCon;
            }
        },
        title: {
            text: "全国气象专题图",
            left: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 17,
                color: 'rgb(97, 142, 205)'
            }
        },
        geo: {
            // 地图配置
            show: true,
            map: "Map", //使用
            roam: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    areaColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgb(15, 163, 227)',
                    borderWidth: '1',
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 20
                },
                //emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    show: true
                }
            },
            zoom: 1.2
        },
        series: seriesArr

    }, true)
})