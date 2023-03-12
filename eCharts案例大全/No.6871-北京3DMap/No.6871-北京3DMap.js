option = {
    geo3D: {
        map: '北京',
        roam: true,
        itemStyle: {
            areaColor: 'rgb(30,88,181)',
            opacity: 1,
            borderWidth: 2,
            borderColor: 'rgb(5,163,255)',
        },
        label: {
            show: true,
            textStyle: {
                color: '#fff', //地图初始化区域字体颜色
                fontSize: 16,
                opacity: 1,
                backgroundColor: 'rgba(53,171,199,0)'
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
        shading: 'lambert',
 
        viewControl: {
            autoRotate : false,
            distance : 150,
            alpha  : 50,
            center: [-4, -4, 0]
        },
    }
};