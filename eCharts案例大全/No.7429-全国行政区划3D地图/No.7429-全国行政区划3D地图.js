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
            areaColor: '#48D9FF',
            opacity: 1,
            borderWidth: 0.8,
            borderColor: '#ffffff'
        },
        label: {
            show: false,
            formatter: function(value) {
                return '{img|}' + value.name + '11';
            },
            textStyle: {
                color: '#fff', //地图初始化区域字体颜色
                fontSize: 16,
                opacity: 1,
                backgroundColor: '#48D9FF',
                rich: {
                    img: {
                        padding: [0, 5],
                        backgroundColor: {
                            image: ''
                        }
                    }
                }
                //backgroundColor: 'rgba(53,171,199,0)'
            },
        },

        //shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: true, //是否显示阴影
                alpha: 35,
                beta: 10

            },
            ambient: {
                intensity: 0.3
            }
        },

    },

};