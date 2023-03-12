option = {
    title: {
        top: 10,
        text: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    backgroundColor: 'rgba(0, 10, 52, 1)',
    geo: {
        map: 'world',
        aspectScale: 0.75,
        layoutCenter: ["50%", "51.5%"], //地图位置
        layoutSize: '118%',
        aspectScale: 0.75,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: '100%',
        roam: true,
        geoIndex: 0,
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 0.6)',
                borderWidth: 0.8,
                areaColor: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 1200,
                    x2: 1000,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#009DA1' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#005B9E' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
            },
            emphasis: {
                areaColor: 'rgba(147, 235, 248, 0)'
            }
        },
    },
};
