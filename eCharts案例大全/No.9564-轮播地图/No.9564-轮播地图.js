
option = {
    title: {
        text: '全国行政区划3D地图',
        x: 'center',
        top: "20",
        textStyle: {
            color: '#000',
            fontSize: 24
        }
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
            areaColor: 'rgb(5,101,123)',
            opacity: 1,
            borderWidth: 0.8,
            borderColor: 'rgb(62,215,213)'
        },
        label: {
            show: true,
            textStyle: {
                color: '#fff', //地图初始化区域字体颜色
                fontSize: 16,
                opacity: 1,
                backgroundColor: 'rgba(0,0,0,0)'
                //backgroundColor: 'rgba(53,171,199,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            }
        },
        //shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 55,
                beta: 10

            },
            ambient: {
                intensity: 0.3
            }
        },
        realisticMaterial:{
            detailTexture:'asset/leather/leather_albedo.jpg'
        }
    },
    series: [

        //画线

        {
            type: 'lines3D',

            coordinateSystem: 'geo3D',

            effect: {
                show: true,
                trailWidth: 4,
                trailOpacity: 0.5,
                trailLength: 0.3,
                constantSpeed: 5
            },

            blendMode: 'lighter',

            lineStyle: {
                width: 0.2,
                opacity: 0.05
            },

            data: []
        }
    ]
};