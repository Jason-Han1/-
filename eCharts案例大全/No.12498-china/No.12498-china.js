option = {
    backgroundColor: '#FF3030',//画布背景颜色
    geo: {
        show: true,
        map: 'china',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#EE6363',
                borderWidth: 0,
                shadowColor: '#FFD700', // 边框阴影颜色
                shadowBlur: 50
            }
        }
    },
    series: [
    {
        type: 'map',
        map: 'china',
        geoIndex: 1,
        aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#fff',
                borderColor: '#708090',
                borderWidth: 1
            },
            emphasis: {
                areaColor: '#FFD700' // 选中颜色
            }
        },
    }]
}