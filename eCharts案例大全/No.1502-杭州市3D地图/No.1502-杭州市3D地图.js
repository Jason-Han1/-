const zjMap = '/asset/get/s/data-1634008447791-hRIfL3ly5.json';

$.getJSON(zjMap, function (geoJson) {
    echarts.registerMap('zhejiang', geoJson);
    myChart.setOption(option);
});

option = {
    title: {
        text: '杭州市3D地图',
    },

    series: [
        {
            type: 'map3D',
            name: '浙江',
            selectedMode: 'single', //地图高亮单选
            regionHeight: 5, //地图高度
            map: 'zhejiang',
            viewControl: {
                distance: 110, //地图视角 控制初始大小
                rotateSensitivity: [1, 1],
            },
            label: {
                show: true, //是否显示市
                textStyle: {
                    color: 'white', //文字颜色
                    fontSize: 20, //文字大小
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
            data: [],
        },
    ],
};
