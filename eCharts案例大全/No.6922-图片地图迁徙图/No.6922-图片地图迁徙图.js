var uploadedDataURL = "/asset/get/s/data-1594779943052-UpQUTdrJk.png";

//var uploadedDataURL = "/asset/get/s/data-1594779588236-N1yYg8I3i.png";

var lines = [
    
    {coords: [[834,797], [656,176]]},
    {coords: [[627,602], [656,176]]},
    {coords: [[667,391], [656,176]]},
    {coords: [[560,413], [656,176]]},
    {coords: [[527,479], [656,176]]},
    {coords: [[417,310], [656,176]]},
    {coords: [[547,111], [656,176]]},
    {coords: [[467,137], [656,176]]},
    {coords: [[439,546], [656,176]]},
    {coords: [[277,548], [656,176]]},
]

var points = [
    {value: [834,797]},
    {value: [627,602]},
    {value: [667,391]},
    {value: [560,413]},
    {value: [527,479]},
    {value: [417,310]},
    {value: [547,111]},
    {value: [467,137]},
    {value: [439,546]},
    {value: [277,548]},
    {value: [656,176]}

  ]


option = {
    backgroundColor: '#074883',
    grid:{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 1108,
        height: 860,
    },
    xAxis: {
        show: false,
        min: 0,
        max: 1000,
        position: 'top',
        axisPointer: {
            show: true
        }
    },
    yAxis: {
        show: false,
        min: 0,
        max: 1000,
        axisPointer: {
            show: true
        }
    },
    
    // 线条动画
    series: [{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel:1,
                rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#1DE9B6',
                        show: true
                    },
                },
                itemStyle: {
                    normal: {
                       color:'#1DE9B6'/* function (value){ //随机颜色
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/,
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                symbolSize: 12,
                data: points
            }, //地图线的动画效果
        {
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            zlevel: 1,
            // 动画效果
            effect: {
                show: true,
                period: 3, //特效动画的时间，单位为 s
                trailLength:0.5, //特效尾迹的长度。0~1数值越大尾迹越长
                color: '#64f2ff',
                	symbol: 'arrow', //箭头图标
					symbolSize: 10, //图标大小
            },
            
            lineStyle: {
                normal: {
                    color: '#00FEFF',
                    width: 1,
                    curveness:-0.24
                }
            },
            data: lines
        }
    ],

    // 图片
    graphic: [
        {
            type: 'image',
            position: [10, 10],
            style: {
                image: uploadedDataURL,
            }
        },
    ]
};