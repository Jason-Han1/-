var chartMapData = [
    {name: '北京',value: Math.round(Math.random()*1000)},
    {name: '天津',value: Math.round(Math.random()*1000)},
    {name: '上海',value: Math.round(Math.random()*1000)},
    {name: '重庆',value: Math.round(Math.random()*1000)},
    {name: '河北',value: Math.round(Math.random()*1000)},
    {name: '河南',value: Math.round(Math.random()*1000)},
    {name: '云南',value: Math.round(Math.random()*1000)},
    {name: '辽宁',value: Math.round(Math.random()*1000)},
    {name: '黑龙江',value: Math.round(Math.random()*1000)},
    {name: '湖南',value: Math.round(Math.random()*1000)},
    {name: '安徽',value: Math.round(Math.random()*1000)},
    {name: '山东',value: Math.round(Math.random()*1000)},
    {name: '新疆',value: Math.round(Math.random()*1000)},
    {name: '江苏',value: Math.round(Math.random()*1000)},
    {name: '浙江',value: Math.round(Math.random()*1000)},
    {name: '江西',value: Math.round(Math.random()*1000)},
    {name: '湖北',value: Math.round(Math.random()*1000)},
    {name: '广西',value: Math.round(Math.random()*1000)},
    {name: '甘肃',value: Math.round(Math.random()*1000)},
    {name: '山西',value: Math.round(Math.random()*1000)},
    {name: '内蒙古',value: Math.round(Math.random()*1000)},
    {name: '陕西',value: Math.round(Math.random()*1000)},
    {name: '吉林',value: Math.round(Math.random()*1000)},
    {name: '福建',value: Math.round(Math.random()*1000)},
    {name: '贵州',value: Math.round(Math.random()*1000)},
    {name: '广东',value: Math.round(Math.random()*1000)},
    {name: '青海',value: Math.round(Math.random()*1000)},
    {name: '西藏',value: Math.round(Math.random()*1000)},
    {name: '四川',value: Math.round(Math.random()*1000)},
    {name: '宁夏',value: Math.round(Math.random()*1000)},
    {name: '海南',value: Math.round(Math.random()*1000)},
    {name: '台湾',value: Math.round(Math.random()*1000)},
    {name: '香港',value: Math.round(Math.random()*1000)},
    {name: '澳门',value: Math.round(Math.random()*1000)}
];
option = {
    title: {
        text: '各类救助对象区域分布',
        x: 'left',
        top: "0",
        textStyle: {
            color: '#333333',
            fontSize: 20
        }
    },
    tooltip: {
        show: true,
        // formatter:(params)=>{
        //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
        //   return data;
        // },
    },

    visualMap: {
        type: 'continuous',
        show: true,
        min: 100,
        max: 1000,
        left:'right',
        inRange: {
            // color: ['#00fffb', '#00bbff', '#0088ff','#0055d4','#002aa6']
            color: ['#3ae582', '#00ad46', '#008d38']
        },
    },
    geo3D: {
        map: 'china',
        roam: true,
        itemStyle: {
            // areaColor: '#fffb13',
            areaColor: '#fd9c5a',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#585858'
        },
        label: {
            show: false,
            textStyle: {
                color: '#fff', //地图初始化区域字体颜色
                fontSize: 14,
                opacity: 0.9,
                backgroundColor: 'rgba(0,0,0,0)'
                //backgroundColor: 'rgba(53,171,199,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: true,
                textStyle: {
                    color: 'black',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,0,0,0)'
                }
            },
            itemStyle: {
                color: '#fd9c5a',
            }
        },
        regions: [{
            name: '北京',
            height: 3
        }, {
            name: '重庆',
            height: 3
        }],
        light: { //光照阴影
            main: {
                // color: '#3ae582', //光照颜色
                color: '#fff', //光照颜色
                intensity: 1, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 45,
                beta: 180

            },
            ambient: {
                intensity: 0.3
            }
        },
        viewControl: {
            // projection: 'orthographic',
            // 取消鼠标旋转，移动，缩放
            rotateSensitivity: 0,
            panSensitivity: 0,
            zoomSensitivity: 0,
            // panMouseButton: 'left',
            // rotateMouseButton: 'right',
            distance: 93,
            alpha: 50,
            beta: 10,
            center: [0,-5,0]
        },
        left: '-5%',
        top: '-15%',
        right: '-10%',
        bottom: '0',
    },
    series: {
        type: "map3D",
        map: 'china', // 地图类型。echarts-gl 中使用的地图类型同 geo 组件相同(ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册。)
        groundPlane: {	// 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
            show: false,	// 是否显示地面。[ default: false ]
            color: '#aaa'	// 地面颜色。[ default: '#aaa' ]
        },
        realisticMaterial: {
            roughness: 0,
        },
        label: { // 标签的相关设置
            show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
            textStyle: { // 标签的字体样式
                color: '#FFFFFF', // 地图初始化区域字体颜色
                fontSize: 14, // 字体大小
                opacity: 1, // 字体透明度
                backgroundColor: 'transparent' // 字体背景色
            },
        },
        itemStyle: { // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
            color: '#01183E', // 地图板块的颜色
            opacity: 1, // 图形的不透明度 [ default: 1 ]
            borderWidth: 0.5, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域 [ default: 0 ]
            // borderColor: '#346FE4' // 图形描边的颜色。[ default: #333 ]
            borderColor: '#333333' // 图形描边的颜色。[ default: #333 ]
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: true,
                textStyle: {
                    color: 'black',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,0,0,0)'
                }
            },
            itemStyle: {
                color: '#fffb13',
            }
        },
        light: { //光照阴影
            main: {
                // color: '#3ae582', //光照颜色
                color: '#fff', //光照颜色
                intensity: 1, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 45,
                beta: 180

            },
            ambient: {
                intensity: 0.3
            }
        },
        viewControl: {
            // projection: 'orthographic',
            // 取消鼠标旋转，移动，缩放
            rotateSensitivity: 0,
            panSensitivity: 0,
            zoomSensitivity: 0,
            // panMouseButton: 'left',
            // rotateMouseButton: 'right',
            distance: 93,
            alpha: 50,
            beta: 10,
            center: [0,-5,0]
        },
        left: '-5%',
        top: '-15%',
        right: '-10%',
        bottom: '0',

        data: chartMapData
    }
};
var oldname = '重庆';
myChart.on('click', function(e) {
    // console.log(e)
    option.geo3D.regions[0].name = e.name;
    option.geo3D.regions[0].height = 6;
    option.geo3D.regions[1].name = oldname;

    myChart.setOption(option);
    oldname = e.name;
});