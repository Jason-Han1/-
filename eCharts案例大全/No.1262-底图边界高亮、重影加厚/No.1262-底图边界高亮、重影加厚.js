var uploadedDataURL = "/asset/get/s/data-1635236717167-fIl4FD_rX.json";

$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('chongq', geoJson);
    option = {
        backgroundColor: '#062343',
        geo: [
            // 高亮虚影层
            {
                map: 'chongq',
                aspectScale: 1,
                roam: false, // 是否允许缩放
                zoom: 1.2, // 默认显示级别
                silent: true,
                layoutSize: '80%',
                layoutCenter: ['50%', '50%'],
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(68, 173, 254,1)',
                        borderWidth: 6,
                        shadowColor: 'rgba(68, 173, 254,1)',
                        shadowOffsetY: 0,
                        shadowBlur: 4,
                    },
                },
                zlevel: -1,
            },
            // 实际层
            {
                map: 'chongq',
                aspectScale: 1,
                roam: false, // 是否允许缩放
                zoom: 1.2, // 默认显示级别
                // silent: true,
                layoutSize: '80%',
                layoutCenter: ['50%', '50%'],
                itemStyle: {
                    borderColor: 'rgba(68, 173, 254,.2)',
                    borderWidth: 2,
                    areaColor: '#094987',
                },
                emphasis: {
                    itemStyle: {
                        areaColor: '#0160AD',
                    },
                    label: {
                        show: 0,
                        color: '#fff',
                    },
                },
                zlevel: 1,
            },
            // 底部重影层
            {
                map: 'chongq',
                aspectScale: 1,
                roam: false, // 是否允许缩放
                zoom: 1.2, // 默认显示级别
                silent: true,
                layoutSize: '80%',
                layoutCenter: ['50%', '51.2%'],
                itemStyle: {
                    borderColor: 'rgba(68, 173, 254,.2)',
                    borderWidth: 1,
                    areaColor: '#094987',
                },
                zlevel: -2,
            },
        ],
        series: [
            // map
            {
                type: 'map',
                map: 'chongq',
                aspectScale: 1,
                roam: false, // 是否允许缩放
                zoom: 1.2, // 默认显示级别
                layoutSize: '80%',
                layoutCenter: ['50%', '50%'],
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(192,245,249,.8)',
                        borderWidth: 4,
                        shadowColor: '#6FFDFF',
                        shadowOffsetY: 0,
                        shadowBlur: 10,
                        areaColor: 'rgba(29,85,139,.6)',
                    },
                },
                emphasis: {
                    itemStyle: {
                        areaColor: '#0160AD',
                    },
                    label: {
                        show: 0,
                        color: '#fff',
                    },
                },
            },
        ],
    };
    myChart.setOption(option);
});
