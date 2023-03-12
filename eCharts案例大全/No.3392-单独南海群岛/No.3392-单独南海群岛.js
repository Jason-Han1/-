let nh = {
    type: 'FeatureCollection',
    features: [],
    UTF8Encoding: true,
};
echarts.registerMap('china', nh);
option = {
    backgroundColor: '#05328B',
    geo: {
        map: 'china',
        aspectScale: 0.75, //长宽比
        zoom: 0.8,
        roam: false,
        regions: [
            {
                name: '南海诸岛',
                itemStyle: {
                    // 隐藏地图
                    normal: {
                        opacity: 0, // 为 0 时不绘制该图形
                    },
                },
                label: {
                    show: false, // 隐藏文字
                },
            },
        ],
        itemStyle: {
            normal: {
                areaColor: '#013C62',
                shadowColor: '#2F8DFF', //阴影边框颜色
                shadowOffsetX: 0,
                shadowOffsetY: 10,
            },
            emphasis: {
                areaColor: '#2AB8FF',
                borderWidth: 0,
                color: 'green',
                label: {
                    show: false,
                },
            },
        },
    },
    series: [
        {
            label: {
                emphasis: {
                    textStyle: {
                        fontSize: 0,
                        color: 'transparent',
                    },
                },
            },
            type: 'map',
            itemStyle: {
                normal: {
                    borderColor: '#2ab8ff', //地图边界颜色
                    borderWidth: 1,
                    areaColor: '#1890FF', //区域面颜色
                },
                emphasis: {
                    areaColor: '#061A5F', //鼠标悬浮区域面颜色
                    borderWidth: 1,
                    color: '',
                },
            },
            zoom: 0.8,
            roam: false,
            selectedMode: false,
            map: 'china', //使用
        },
    ],
};
