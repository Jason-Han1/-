var shiGeoCoordMap = [{
        "name": "济南市",
        "value": [
            117.000923,
            36.675807,
            100
        ]
    },
    {
        "name": "青岛市",
        "value": [
            120.355173,
            36.082982,
            100
        ]
    },
    {
        "name": "淄博市",
        "value": [
            118.047648,
            36.814939,
            100,
        ]
    },
    {
        "name": "枣庄市",
        "value": [
            117.557964,
            34.856424,
            100
        ]
    },
    {
        "name": "东营市",
        "value": [
            118.66471,
            37.434564,
            100
        ]
    },
    {
        "name": "烟台市",
        "value": [
            121.391382,
            37.539297,
            100
        ]
    },
    {
        "name": "潍坊市",
        "value": [
            119.107078,
            36.70925,
            100
        ]
    },
    {
        "name": "济宁市",
        "value": [
            116.587245,
            35.415393,
            100
        ]
    },
    {
        "name": "泰安市",
        "value": [
            117.129063,
            36.194968,
            100
        ]
    },
    {
        "name": "威海市",
        "value": [
            122.116394,
            37.509691,
            100
        ]
    },
    {
        "name": "日照市",
        "value": [
            119.461208,
            35.428588,
            100
        ]
    },
    {
        "name": "临沂市",
        "value": [
            118.326443,
            35.065282,
            100
        ]
    },
    {
        "name": "德州市",
        "value": [
            116.307428,
            37.453968,
            100
        ]
    },
    {
        "name": "聊城市",
        "value": [
            115.980367,
            36.456013,
            100
        ]
    },
    {
        "name": "滨州市",
        "value": [
            118.016974,
            37.383542,
            100
        ]
    },
    {
        "name": "菏泽市",
        "value": [
            115.469381,
            35.246531,
            100
        ]
    }
];
option = {
    title: {
        text: '牛鼻闪闪的3D地图',
        left: 'center',
        top: 20
    },
    geo3D: {
        map: 'shandong',
        viewControl: {
            center: [-10, 0, 10]
        },
        light: {
            main: {
                intensity: 1,
                shadow: true,
                alpha: 150,
                beta: 70
            },
            ambient: {
                intensity: 0
            },
            ambientCubemap: {
                diffuseIntensity: 1,
                texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr'
            }
        },
        groundPlane: {
            show: true
        },
        postEffect: {
            enable: false
        },
        itemStyle: {
            borderColor: 'rgb(62,215,213)',
            borderWidth: 1
        }

    },
    series: [{
        type: 'scatter3D',
        coordinateSystem: 'geo3D',
        data: shiGeoCoordMap,
        symbol: 'pin',
        symbolSize: 30,
        itemStyle:{
            color:'purple',
            borderColor:'#fff',
            borderWidth:1
        },        
        label:{
            show:true,
            formatter:'{b}',
            position:'right',
            textStyle:{
                color:'#000',
                backgroundColor:'#fff',
            }
        }
    }]
};




















