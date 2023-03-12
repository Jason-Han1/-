var alirl = [
    [
        [121.15, 31.89],
        [109.781327, 39.608266],
    ],
    [
        [120.38, 37.35],
        [122.207216, 29.985295],
    ],
    [
        [123.97, 47.33],
        [120.13, 33.38],
    ],
    [
        [118.87, 42.28],
        [120.33, 36.07],
    ],
    [
        [121.52, 36.89],
        [117.93, 40.97],
    ],
    [
        [102.188043, 38.520089],
        [122.1, 37.5],
    ],
    [
        [118.58, 24.93],
        [101.718637, 26.582347],
    ],
    [
        [120.53, 36.86],
        [121.48, 31.22],
    ],
    [
        [119.46, 35.42],
        [122.05, 37.2],
    ],
    [
        [119.97, 35.88],
        [116.1, 24.55],
    ],
    [
        [121.05, 32.08],
        [112.02, 22.93],
    ],
    [
        [91.11, 29.97],
        [118.1, 24.46],
    ],
];
option = {
    title: {
        text: 'geo3D',
        x: 'left',
        top: '10',
        textStyle: {
            color: '#000',
            fontSize: 14,
        },
    },
    tooltip: {
        show: true,
        // formatter:(params)=>{
        //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
        //   return data;
        // },
    },
    geo3D: {
        map: 'china',
        roam: true,
        itemStyle: {
            areaColor: '#374151', // 地图配色
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#9ff32b', // 地图边配色
        },
        label: {
            show: true,
            textStyle: {
                color: '#fff', //地图初始化区域字体颜色
                fontSize: 8,
                opacity: 1,
                backgroundColor: 'rgba(0,23,11,0)',
            },
        },
        emphasis: {
            //当鼠标放上去  地区区域是否显示名称
            itemStyle: {
                areaColor: '#7db41b', // 鼠标移入地图配色
            },
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,0,0,1)', //鼠标移入文字加背景
                },
            },
        },
        //shading: 'lambert',
        light: {
            //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: true, //是否显示阴影
                alpha: 55,
                beta: 10,
            },
            ambient: {
                intensity: 0.3,
            },
        },
    },
    series: [
        //画线

        {
            type: 'lines3D',

            coordinateSystem: 'geo3D',

            effect: {
                show: true,
                trailWidth: 5,
                trailOpacity: 0.5,
                trailLength: 0.2,
                constantSpeed: 5,
            },

            blendMode: 'lighter',

            lineStyle: {
                //航线的视图效果
                color: '#9ae5fc',
                width: 1,
                opacity: 0.6,
            },

            data: alirl,
        },
    ],
};
