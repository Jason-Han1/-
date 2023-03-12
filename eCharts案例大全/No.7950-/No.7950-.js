// var regionData = [{
//     "name": "济南市",
//     "value": "0.01"
// }, {
//     "name": "青岛市",
//     "value": "2.01"
// }, {
//     "name": "淄博市",
//     "value": "0.15"
// }, {
//     "name": "Andorra",
//     "value": ""
// }, {
//     "name": "枣庄市",
//     "value": "3.86"
// }, {
//     "name": "东营市",
//     "value": "5.73"
// }, {
//     "name": "烟台市",
//     "value": "8.40"
// }, {
//     "name": "潍坊市",
//     "value": "1.48"
// }, {
//     "name": "济宁市",
//     "value": "9.02"
// }, {
//     "name": "泰安市",
//     "value": "11.08"
// }, {
//     "name": "威海市",
//     "value": "4.54"
// }, {
//     "name": "日照市",
//     "value": "2.10"
// }, {
//     "name": "临沂市",
//     "value": "6.98"
// }, {
//     "name": "德州市",
//     "value": "0.00"
// }, {
//     "name": "聊城市",
//     "value": ""
// }, {
//     "name": "滨州市",
//     "value": "5.53"
// }, {
//     "name": "菏泽市",
//     "value": "10.63"
// }];
var regionData = [{
        name: "南海诸岛",
        value: 40,
        selected: false
    },
    {
        name: '北京',
        value: 54,
        selected: false
    },
    {
        name: '天津',
        value: 13,
        selected: true
    },
    {
        name: '上海',
        value: 40,
        selected: false
    },
    {
        name: '重庆',
        value: 75,
        selected: false
    },
    {
        name: '河北',
        value: 13,
        selected: false
    },
    {
        name: '河南',
        value: 83,
        selected: false
    },
    {
        name: '云南',
        value: 11,
        selected: false
    },
    {
        name: '辽宁',
        value: 19,
        selected: false
    },
    {
        name: '黑龙江',
        value: 15,
        selected: false
    },
    {
        name: '湖南',
        value: 69,
        selected: false
    },
    {
        name: '安徽',
        value: 60,
        selected: false
    },
    {
        name: '山东',
        value: 39,
        selected: false
    },
    {
        name: '新疆',
        value: 4,
        selected: false
    },
    {
        name: '江苏',
        value: 31,
        selected: false
    },
    {
        name: '浙江',
        value: 104,
        selected: false
    },
    {
        name: '江西',
        value: 36,
        selected: false
    },
    {
        name: '湖北',
        value: 1052,
        selected: false
    },
    {
        name: '广西',
        value: 33,
        selected: false
    },
    {
        name: '甘肃',
        value: 7,
        selected: false
    },
    {
        name: '山西',
        value: 9,
        selected: false
    },
    {
        name: '内蒙古',
        value: 7,
        selected: false
    },
    {
        name: '陕西',
        value: 22,
        selected: false
    },
    {
        name: '吉林',
        value: 4,
        selected: false
    },
    {
        name: '福建',
        value: 18,
        selected: false
    },
    {
        name: '贵州',
        value: 5,
        selected: false
    },
    {
        name: '广东',
        value: 98,
        selected: false
    },
    {
        name: '青海',
        value: 1,
        selected: false
    },
    {
        name: '西藏',
        value: 0,
        selected: false
    },
    {
        name: '四川',
        value: 44,
        selected: false
    },
    {
        name: '宁夏',
        value: 4,
        selected: false
    },
    {
        name: '海南',
        value: 22,
        selected: false
    },
    {
        name: '台湾',
        value: 3,
        selected: false
    },
    {
        name: '香港',
        value: 5,
        selected: false
    },
    {
        name: '澳门',
        value: 5,
        selected: false
    }
];
option = {
    tooltip: {
        show: true
    },
    
  geo3D: {
                show: true, //是否显示三维地理坐标系组件。
                map: 'china', //地图类型
                roam: false,
                boxWidth: 100, //三维地理坐标系组件在三维场景中的宽度。配合 viewControl.distance 可以得到最合适的展示尺寸
                boxHeight: 100, //三维地理坐标系组件在三维场景中的高度
              
              
                   
                    emphasis: {
                        //当鼠标放上去  地区区域是否显示名称
                        label: {
                            show: true,
                            textStyle: {
                                color: '#ffffff',
                                fontSize: 13,
                                backgroundColor: 'rgba(0,23,11,0)'
                            }
                        }
                    },
                   
            
               
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
        map: 'china',

        light: {
            main: {
                intensity: 1,
                shadow: true,
                alpha: 150,
                beta: 80
            },
            ambient: {
                intensity: 0
            },
            // ambientCubemap: {
            //     diffuseIntensity: 1,
            //     texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr'
            // }
        },
        groundPlane: {
            show: false
        },
        data: regionData,
        postEffect: {
            enable: false
        },
        itemStyle: {
            borderColor: 'rgb(62,215,213)',
            borderWidth: 1
        }
    }, ]
};