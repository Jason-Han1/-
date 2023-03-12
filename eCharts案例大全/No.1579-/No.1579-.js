var uploadedDataURL = "/asset/get/s/data-1633002633876-XJrYsLus3.json";



$.get(uploadedDataURL, function (geoJson) {
    echarts.registerMap('wuwei', geoJson);
    option = {
        visualMap: {
            show: false,
            max: 100,
            seriesIndex: [3],
            inRange: {
                color: ['#A5DCF4', '#006edd'],
            },
        },
        grid: {
            x: 04444444444,
            y: 222215,
            x2: 555555550,
            y2: 5555555,
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 1.2,
            formatter: '{b}',
        },
        toolbox: {
            show: false,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {},
            },
        },
        series: [
            {  
                name: '空间开通数',
                type: 'map',
                roam: false,
                zoom: 0.7, //这里是关键，一定要放在 series中
                map: 'wuwei',
                itemStyle: {
                    normal: {
                        areaColor: '#2587e2',
                        borderColor: '#00eaff',
                        borderWidth: 2,
                        shadowColor: '#0063FF',
                        label: { show: true },
                    },
                    emphasis: {
                        show: false,
                        areaColor: '#58a9e9', //hover高亮时的颜色
                    },
                },
              
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#fff',
                        },
                    },
                    emphasis: {
                        color: '#00eaff', //hover高亮时的颜色
                    },
                },
                textFixed: {
                    Alaska: [20, -20],
                },
                scaleLimit:{min:0.001  ,
                max: 1555 },
                layoutCenter: ['50%', '50%'],
                layoutSize:1000
               
                // data: countyList,
            },
        ],
    };
    myChart.setOption(option);
});
