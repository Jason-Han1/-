let img = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAA3CAMAAAC1tdPbAAAAllBMVEUAAAAB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LMB5LPUz/r2AAAAMXRSTlMAmvsFOg8foRIIclQX7CQbCzMuxJNfTynKqIt9ZUdBtlnjvq93a9CE59vwS/fWstO7yv68hgAAAcFJREFUOMt104luqzAQQNEBAiaAAwmEhDUhS2vWdv7/555NWr2pOj1slriyZQmAcMBx9H0dAMehgLOluMRJKLZwqS1X+BRbRFTCFTHlclvxKLbYUT5TJCeKLQ5UxBV7iivcDRXzRbsxV2sKjytarWm/7lzhN00zmtNc444rcootQurEFNGVYosjdeCKmuKK+EntuSKg2OJBbZjCqyi2eKdarigprthlVMMVFsUWghqZ4lRQOVfcqZArLhRXHG7UlStS6sgVZ4or9m8UW8xzr6Sh+nmuf/34Y9YPvRrWYlC97LJxSz9z2N+CY6cpJZUygzK45ZDAi5t1DgDEcrLxyzSEoH1kLmi73jLPsENqCMzcot+ZV0/QKkTbmPRhIBag1SZcHRBn0dvfpEht/N5wui71jrNlWfNrIuyEZaV4XzdZgO2AFqCytKUf7Kn7NMMPFKA5Npwb0KIB5cX6r+gQW9CaM+QXWEcDony7FPqtWM5KL1eDkYYACWxB88SExOd+XQMi0NyuckHzr1mqJrTVWTw90JKq38LKEzKA3yop1nAVb6BeHnkML17+uI/QePBDFJbLFcpBygCCpQx9+IPru/DTP5NCSW3jkCOwAAAAAElFTkSuQmCC'
option = {
    title: {
        top: 10,
        text: '平面图地图3D效果，整体地图渐变色，并且两层同步拖拽',
        left: 'center',
        textStyle: {
            color: '#fff',
        },
    },
    backgroundColor: '#022955',
    geo: {
        map: 'china',
        aspectScale: 0.75,
        layoutCenter: ['50%', '51.5%'], //地图位置
        layoutSize: '118%',
        roam: true,
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 0,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#318adf', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#1fa9e4', // 100% 处的颜色
                        },
                    ],
                    globalCoord: false, // 缺省为 false
                },
                opacity: 1,
                shadowColor: '#013C62',
                shadowBlur: 20,
                shadowOffsetX: -5,
                shadowOffsetY: 15,
            },
            emphasis: {
                show: false,
            },
        },
        regions: [
            {
                name: '南海诸岛',
                itemStyle: {
                    areaColor: 'rgba(0, 10, 52, 1)',
                    borderColor: 'rgba(0, 10, 52, 1)',
                },
                emphasis: {
                    areaColor: 'rgba(0, 10, 52, 1)',
                    borderColor: 'rgba(0, 10, 52, 1)',
                },
            },
        ],
        z: 2,
    },
    series: [
        {
            type: 'map',
            map: 'china',
            tooltip: {
                show: false,
            },
            label: {
                show: true,
                color: '#FFFFFF',
                fontSize: 16,
                backgroundColor: '#103a85',
                padding: 5,
                borderRadius: 5,
            },
            aspectScale: 0.75,
            layoutCenter: ['50%', '50%'], //地图位置
            layoutSize: '118%',
            roam: true,
            itemStyle: {
                normal: {
                    borderColor: 'rgb(139,210,248)',
                    borderWidth: 2,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#255cab', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#1fa9e4', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                },
                emphasis: {
                    areaColor: 'rgba(147, 235, 248)',
                },
            },
            zlevel: 1,
        },
        {
                type: 'scatter',
                coordinateSystem: 'geo',
                itemStyle: {
                    color: '#00FFF6',
                },
                symbol: img,
                symbolSize: [32, 41],

                symbolOffset: [0, -20],
                z: 999,
                data: [[99,66]],
            },
    ],
};

//echarts 设置地图外边框以及多个geo实现缩放拖曳同步
myChart.on('georoam', function (params) {
    var option = myChart.getOption(); //获得option对象
    if (params.zoom != null && params.zoom != undefined) {
        //捕捉到缩放时
        option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    } else {
        //捕捉到拖曳时
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    }
    myChart.setOption(option); //设置option
});
