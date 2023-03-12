var pointDatas = [
    {
        name: '黑龙江',
        value: [128.34, 47.05,28]
    },
    {
        name: '四川',
        value: [103.36, 30.65,18]
    },
    {
        name: '内蒙古',
        value: [112.17, 42.81,15]
    },
];
option = {
    geo3D: {
        map: 'china',
        regionHeight: 4,
        itemStyle: {
            color: '#2f9efe',
            opacity: 1,
            borderWidth: 1,
            borderColor: '#fff8e3',
        },
        emphasis: {
            label: {
                distance: 0,
            },
            itemStyle: {
                color: '#005cf3',
            },
        },
        // regions: regions,
        boxHeight: 24,
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
        viewControl: {
            // distance: 70,
            minDistance: 65,
            maxDistance: 95,
            alpha: 30,//x轴转动
            beta: 15,
            // minAlpha: 25,
            // maxAlpha: 70,
            // minBeta: 15,
            // maxBeta: 15,
        },
    },
    series: [
        {
            type: 'bar3D',
            name: 'bar3D',
            coordinateSystem: 'geo3D',
            //倒角
            // bevelSize: 0.8,
            // bevelSmoothness: 2,
            minHeight: 3,
            label: {
                show: true,
                position:'top',
                color:'#333',
                distance:0,
                align:'center',
                textAlign:'center',
                formatter: function(params){
                    return [
                        params.data.value[2],
                        params.name
                        ].join('\n')
                }
            },
            itemStyle: {
                color: '#fd9a07',
            },
            emphasis: {
                
            },
            shading: 'color',
            data: pointDatas,
        }
    ],
};
