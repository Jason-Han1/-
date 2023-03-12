option = {
    backgroundColor: 'rgba(0, 10, 52, 1)',
    // 地理坐标系组件
    geo: {
        show: true,
        map: 'china',
        roam: true, // 是否开启鼠标缩放移动和平移漫游
        aspectScale: 0.8, //参数用于 scale 地图的长宽比。
        layoutCenter: ['50%', '51.5%'], //地图位置
        layoutSize: '110%', //地图的大小
        itemStyle: {
            borderColor: 'rgba(147, 235, 248, 1)',
            borderWidth: 0.5,
            color: {
                type: 'linear-gradient',
                x: 0,
                y: 1500,
                x2: 2500,
                y2: 0,
                colorStops: [
                    {
                        offset: 0,
                        color: '#009DA1', // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#005B9E', // 50% 处的颜色
                    },
                ],
                global: true, // 缺省为 false
            },
            opacity: 0.5,
        },
    },

    series: [
        {
            type: 'map',
            map: 'china',
            aspectScale: 0.75,
            label: {
                show: true,
                color: '#fff',
            },
            roam: true,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 0.6)',
                    borderWidth: 0.8,
                    areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 1200,
                        x2: 1000,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#009DA1', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#005B9E', // 50% 处的颜色
                            },
                        ],
                        global: true, // 缺省为 false
                    },
                },
                emphasis: {
                    areaColor: 'rgba(147, 235, 248, 0)',
                },
            },
        },
    ],
};

//echarts 设置地图外边框以及多个geo实现缩放拖曳同步
myChart.on('georoam', function(params) {
    var option = myChart.getOption(); //获得option对象
    if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
        option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    } else { //捕捉到拖曳时
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    }
    myChart.setOption(option); //设置option
});
