var uploadedDataURL = "/asset/get/s/data-1583920692570-xwzC6ff8.json";
var dataset = [{
        source: []
    }, {
        source: []
    }, {
        source: []
    }],
    zoom = 14;
$.get(uploadedDataURL, function(data) {
    var source = JSON.parse(data);
    dataset[0] = {
        source: source
    };
    myChart.setOption({
        dataset: dataset
    })
})
option = {
    tooltip: {
        trigger: 'item'
    },
    bmap: {
        center: [108.314844, 22.826972], //中心点
        zooms: [zoom, zoom],
        zoom: zoom, // 16以上才能看得清建筑物
        labelzIndex: 10,
        roam: true,
        features: ['bg', 'road', 'building'],
        mapStyle: 'amap://styles/4234f53306df31d99aed5d747e1fae12' // 地图主题
    },
    dataset: dataset,
    series: [{
        id: 'urban rail',
        name: '地铁站',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        datasetIndex: 0,
        dimensions: ['lng', 'lat', 'name', 'id'],
        encode: {
            lng: 'lng',
            lat: 'lat',
            tooltip: ['name', 'SC']
        },
        symbolSize: function(val) {
            return 10;
        },
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            formatter: '{b}',
            position: 'right',
            show: true
        },
        itemStyle: {
            color: function(params) {
                return 'purple';
            },
            shadowBlur: 10,
            shadowColor: '#333'
        },
        zlevel: 1
    }, {
        id: 'origin',
        name: '起点',
        type: 'scatter',
        coordinateSystem: 'bmap',
        datasetIndex: 1,
        dimensions: ['lng', 'lat', 'name', 'id'],
        encode: {
            lng: 'lng',
            lat: 'lat',
            tooltip: ['name']
        }
    }, {
        id: 'bus stop',
        name: '公交站',
        type: 'scatter',
        coordinateSystem: 'bmap',
        datasetIndex: 2,
        dimensions: ['lng', 'lat', 'name', 'id'],
        encode: {
            lng: 'lng',
            lat: 'lat',
            tooltip: ['name']
        }
    }]
};