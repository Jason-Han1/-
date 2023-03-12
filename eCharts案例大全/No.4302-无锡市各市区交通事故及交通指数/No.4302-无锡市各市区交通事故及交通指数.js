myChart.showLoading();

$.get('https://geo.datav.aliyun.com/areas_v2/bound/320200_full.json', function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('WUXI', geoJson);

    myChart.setOption(option = {
        backgroundColor: "rgb(0, 16, 42)",
        title: {
            text: '无锡市各市区交通事故及交通指数',
            textStyle: {
                color: '#ffffff'
            },
            padding: 10
        },
        geo: {
            show: true,
            roam: true
        },
        series: [
            {
                name: '香港18区人口密度',
                type: 'map',
                map: 'WUXI',
                roam: false,
                zoom: 1,
                itemStyle: {
                    areaColor: 'rgb(3,32,72)',
                    borderColor: 'rgb(2,52,105)',
                    borderWidth: 2
                },
                emphasis: {
                    label: {
                        show: false
                    },
                    itemStyle: {
                        areaColor: 'rgb(15, 111, 195)'
                    }
                }
            }
        ]
    });
});