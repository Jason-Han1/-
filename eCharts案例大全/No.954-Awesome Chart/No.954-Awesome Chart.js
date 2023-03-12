var shandong_url = "/asset/get/s/data-1636615963430-q1FNsNiII.json";

$.getJSON(shandong_url, function(shandong) {
    echarts.registerMap('shandong', shandong)
    option = {
        backgroundColor: '#000',
        title: {
            text: 'Awesome Chart'
        },
        series: [{
            type: 'map3D',
            map: 'shandong',
            selectedMode: 'single', //地图高亮单选
            regionHeight: 0.5, //地图高度
            viewControl: {
                distance: 110, //地图视角 控制初始大小
                rotateSensitivity: [1, 1],
            },
            label: {
                show: true, //是否显示市
                textStyle: {
                    color: 'white', //文字颜色
                    fontSize: 12, //文字大小
                },
            },
            itemStyle: {
                color: '#2B5890', //地图颜色
                borderWidth: 3, //分界线wdith
                borderColor: '#5578A5', //分界线颜色
            },
            emphasis: {
                label: {
                    show: true, //是否显示高亮
                    textStyle: {
                        color: '#fff', //高亮文字颜色
                    },
                },
                itemStyle: {
                    color: '#0489d6', //地图高亮颜色
                },
            },
            roam: true,
            data: []
        }]
    };
    myChart.setOption(option);
})




