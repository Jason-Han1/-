var mapData = echarts.getMap('china').geoJson;
var data = [];
var cpdata = [];
mapData.features.forEach((item, i) => {
    // console.log(item);
    var value = 10 + i * 3; //Math.floor(Math.random() * 100);
    data.push({
        name: item.properties.name,
        value: value,
    });
    cpdata.push({
        name: item.properties.name,
        value: [item.properties.cp[0], item.properties.cp[1], value],
    });
});
// console.log(data);
option = {
    globe: {
        viewControl: {
            autoRotate: false,
        },
    },
    geo3D: {
        map: 'china',
        boxHeight: 10,
        regionHeight: 2,
        show: false,
        instancing: true,
        regions: [
            {
                name: '新疆',
                regionHeight: 6, //建筑数据才有效
                itemStyle: {
                    color: '#ff89f0',
                    opacity: 1,
                },
            },
            {
                name: '西藏',
                itemStyle: {
                    color: '#9089f0',
                    opacity: 1,
                },
            },
        ],
        light: {
            main: {
                intensity: 1,
                shadow: true,
                shadowQuality: 'high',
                alpha: 40,
                beta: 77,
            },

            ambient: {
                intensity: 0.2,
            },
        },
        emphasis: {
            label: {
                show: false,
            },
        },
        groundPlane: {
            show: true,
        },
    },
    visualMap: {
        show: true,
        min: 0,
        max: 100,
        inRange: {
            color: ['rgba(13,144,95,1)', 'rgba(163,214,5,1)'],
            // colorAlpha:0.3
        },
    },
    series: [
        {
            type: 'map3D',
            coordinateSystem: 'geo3D',
            zlevel: 1,
            instancing: true,
            map: 'china',
            regionHeight: 2, //地图厚度
            shading: 'lambert',
            postEffect: {
                enabled: true,
                bloom: {
                    enabled: true,
                },
            },
            data: data,
            itemStyle: {
                color: '#1d5e98',
                opacity: 1,
                borderWidth: 0.8,
                borderColor: '#fff',
            },
            label: {
                show: false,
                formatter: function (params) {
                    return [params.name, params.data.value].join(':');
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                    opacity: 1,
                    backgroundColor: 'rgba(0,23,11,0)',
                },
            },
            emphasis: {
                label: {
                    show: false,
                },
            },
        },
        {
            type: 'bar3D',
            zlevel: 2,
            coordinateSystem: 'geo3D',
            // map: 'china',
            data: cpdata,
            shading: 'lambert',
            label: {
                show: false,
                formatter: function (params) {
                    return [params.name, params.data.value[2]].join(':');
                },
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#fff',
                    formatter: function (params) {
                        return [params.name, params.data.value[2]].join(':');
                    },
                },
                itemStyle:{
                    color:'#ff0000'
                }
            },
            light: {
                //主光源
                main: {
                    intensity: 1,
                    shadow: true,
                    shadowQuality: 'high',
                    alpha: 40,
                    beta: 77,
                },
                //全局环境光
                ambient: {
                    intensity: 0.2,
                },
            },
        },
    ],
};
let _t = -1;
//map3d 不支持 dispatchAction的一些api 
setInterval(() => {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1,
        dataIndex: _t % data.length,
    });
    _t++;
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: _t % data.length,
    });
}, 200);
