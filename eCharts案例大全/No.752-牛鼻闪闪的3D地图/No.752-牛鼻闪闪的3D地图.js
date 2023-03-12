var regionData = [{
    "name": "济南市",
    "value": "0.01"
}, {
    "name": "青岛市",
    "value": "2.01"
}, {
    "name": "淄博市",
    "value": "0.15"
}, {
    "name": "Andorra",
    "value": ""
}, {
    "name": "枣庄市",
    "value": "3.86"
}, {
    "name": "东营市",
    "value": "5.73"
}, {
    "name": "烟台市",
    "value": "8.40"
}, {
    "name": "潍坊市",
    "value": "1.48"
}, {
    "name": "济宁市",
    "value": "9.02"
}, {
    "name": "泰安市",
    "value": "11.08"
}, {
    "name": "威海市",
    "value": "4.54"
}, {
    "name": "日照市",
    "value": "2.10"
}, {
    "name": "临沂市",
    "value": "6.98"
}, {
    "name": "德州市",
    "value": "0.00"
}, {
    "name": "聊城市",
    "value": ""
}, {
    "name": "滨州市",
    "value": "5.53"
}, {
    "name": "菏泽市",
    "value": "10.63"
}];
option = {
    title: {
        text: '牛鼻闪闪的3D地图',
        left: 'center',
        top: 20
    },
    visualMap: {
        show: true,
        min: 0,
        max: 15,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    series: [{
        type: 'map3D',
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
        data: regionData,
        postEffect: {
            enable: false
        },
        itemStyle: {
            borderColor: 'rgb(62,215,213)',
            borderWidth: 1
        }
    },]
};