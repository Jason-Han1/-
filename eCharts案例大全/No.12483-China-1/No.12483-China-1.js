option = {
    backgroundColor: '#fff',//画布背景颜色
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
                shadowColor: 'rgba(255,0,0, 1)',
                shadowBlur: 15
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
                areaColor: '#F08080'
            }
        },
    }]
}