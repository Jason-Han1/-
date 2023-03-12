


myChart.setOption(option = {
   
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#0f2c70' // 0% 处的颜色
        }, {
            offset: 1, color: '#091732' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    geo: {
        map: 'china',
        show: true,
        roam: true,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#091632',
                borderColor: '#1773c3',
                shadowColor: '#1773c3',
                shadowBlur: 20
            }
        }
    },
    series: [
        {
            type: 'map',
            map: 'china',
            geoIndex: 1,
            aspectScale: 0.75, //长宽比
            label: {
                normal: {
                    show: true,
                   color: '#fff'
                },
               
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: '#0f2c70'
                }
            },
            data:[]
        },
       

    ]
});