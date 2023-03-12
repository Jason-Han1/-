option = {
    backgroundColor: 'rgb(128,128,128,0)',
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
            show: false,
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            }
        },
        light: {
            main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                //                        alpha: 55,
                beta: 10

            },
            ambient: {
                intensity: 0.3
            }
        }
    },

}