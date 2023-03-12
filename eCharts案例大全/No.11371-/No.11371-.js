var uploadedDataURL = "/asset/get/s/data-1557995092861-VH3uxEhI8.json";

option = {
   geo3D: {
        map: 'china',
        shading: 'lambert',
        // light: { //光照阴影
        //     main: {
        //         color: '#fff', //光照颜色
        //         intensity: 1.2, //光照强度
        //         //shadowQuality: 'high', //阴影亮度
        //         //shadow: true, //是否显示阴影
        //         alpha: 60,
        //         beta: 10

        //     },
        //     ambient: {
        //         intensity: 0.5
        //     }
        // },
        viewControl: {
          distance: 100
        },
        itemStyle: {
          areaColor: '#00ff00',
          // opacity: this.props.opacity,
          borderWidth: 0.9,
          borderColor: '#347cbc'
        },
        temporalSuperSampling: {
          enable: true
        },
        label: {
            show: false,
            textStyle: {
                color: '#000', //地图初始化区域字体颜色
                fontSize: 8,
                opacity: 1,
                // backgroundColor: 'rgba(0,23,11,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            },
            itemStyle: {
              areaColor: '#0000ff',
            }
        }
      }
};