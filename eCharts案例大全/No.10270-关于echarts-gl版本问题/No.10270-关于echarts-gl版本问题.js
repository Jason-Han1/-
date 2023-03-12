var chartdata = [{
    name: 'data1',
    value: [112.6877, 22.3614, 5]
}, {
    name: 'data1',
    value: [124.7847, 40.728607, 3]
}, {
    name: 'data1',
    value: [108.4869, 34.3, 10]
}, {
    name: 'data1',
    value: [111.6131, 26.4239, 12]
}, {
    name: 'data1',
    value: [120.5715, 30.011, 8]
}];

option = {
    backgroundColor: '#000',
    title: {
        text: '全球分布',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        show: false,
        min: 0,
        inRange: {
            color: ['#44FCF7', '#08E4DE', '#44FCF7', '#08E4DE']
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'world',
        roam: true,
        label: {
            emphasis: {
                show: false
            }
        },
        silent: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '全球分布',
        type: 'scatterGL',
        progressive: 1e6,
        coordinateSystem: 'geo',
        symbol: 'circle',
        symbolSize: (val) => {
            console.log(val);
            return val[2];
        },
        zoomScale: 0.002,
        blendMode: 'lighter',
        large: true,
        itemStyle: {
            normal: {
                color: 'red'
            }
        },
        postEffect: {
            enable: true
        },
        silent: true,
        dimensions: ['lng', 'lat', 'value'],
        data: chartdata
    }]
};