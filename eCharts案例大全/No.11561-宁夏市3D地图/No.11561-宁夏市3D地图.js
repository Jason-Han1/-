var ningXiaMap = "/asset/get/s/data-1621948903314-2dSyFDeNM.json";

$.getJSON(ningXiaMap, function (geoJson) {
    //调用我们通过json对象注册的地图
    echarts.registerMap('宁夏', geoJson);
    console.log(geoJson)
    option = {
        geo3D: {
            map: '宁夏',
            itemStyle: {
                areaColor: 'rgb(30,88,181)',
                opacity: 1,
                borderWidth: 2,
                borderColor: 'rgb(5,163,255)'
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
            viewControl: {
                autoRotate : true,
                distance : 150,
                alpha  : 60,
            },
        }
    };
    myChart.setOption(option);
})
