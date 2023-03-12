let data = [{
        name: "北京",
        value: [116.24, 39.55, 1],

    },
    {
        name: "深圳",
        value: [114.271522, 22.753644,1]
    },

    {
        name: "重庆",
        value: [106.54, 29.59,1]
    },
    {
        name: "南京",
        value: [118.802891, 32.064735,1]
    },

]


let LableData = [{
        name: "北京",
        value: [114.24, 35.55,5],
        lable: [10, 1]
    },
    /* {
         name: "深圳",
         value: [116.271522, 20.753644],
         lable: [10, 1]
     },*/
    {
        name: "重庆",
        value: [108.54, 24.59,5],
        lable: [10, 1]
    },
    {
        name: "南京",
        value: [114.78, 26.04,5],
        lable: [10, 1]
    },
];
let dataMap = [{
        name: '安徽',
        value: 1
    },
    {
        name: '重庆',
        value: 1
    },
    {
        name: '广东',
        value: 1
    },
    {
        name: '北京',
        value: 1,


    },
    {
        name: '新疆',
        value: 1
    },
    {
        name: '西藏',
        value: 1
    },
    {
        name: '青海',
        value: 1
    },
    {
        name: '甘肃',
        value: 1
    },
    {
        name: '内蒙古',
        value: 1
    },
    {
        name: '黑龙江',
        value: 1
    },
    {
        name: '宁夏',
        value: 1
    },
    {
        name: '四川',
        value: 1
    },
    {
        name: '云南',
        value: 1
    },
    {
        name: '广西',
        value: 1
    },

    {
        name: '湖南',
        value: 1
    },
    {
        name: '贵州',
        value: 1
    },

    {
        name: '陕西',
        value: 1
    },
    {
        name: '湖北',
        value: 1
    },
    {
        name: '河南',
        value: 1
    },
    {
        name: '山西',
        value: 1
    },
    {
        name: '河北',
        value: 1
    },
    {
        name: '山东',
        value: 1
    },
    {
        name: '江西',
        value: 1
    },
    {
        name: '福建',
        value: 1
    },
    {
        name: '香港',
        value: 1
    },
    {
        name: '台湾',
        value: 1
    },

    {
        name: '浙江',
        value: 1
    },

    {
        name: '江苏',
        value: 1
    },
    {
        name: '天津',
        value: 1
    },
    {
        name: '辽宁',
        value: 1
    },
    {
        name: '吉林',
        value: 1
    },
    {
        name: '上海',
        value: 1
    },
    {
        name: '海南',
        value: 1
    },
    {
        name: '南海诸岛',
        value: 1
    },
]

/*for (var i = 0; i < dataMap.length; i++) {
    dataMap[i].height = 20
}
*/

option = {
    geo3D: {
        map: 'china',
        show: true,
        zlevel: -10,
        boxWidth: 200,
        boxHeight:30,//4:没有bar. 30:有bar,bar最高度30，按比例分配高度
        regionHeight:3,
        shading: 'lambert',
        label: { // 标签的相关设置
            show: false,
        },

        itemStyle: {
            areaColor: '#0c294d',
            opacity: 1,
            borderWidth: 0.5,
            borderColor: '#1cccff'
        },
        emphasis: {
            label: {
                show: true,

                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    backgroundColor: 'transparent' // 字体背景色
                }
            },
             borderColor:'#333',
                borderWidth:5,
            itemStyle: {
                areaColor: '#fff',
               
            }
        },
        light: {
            main: {

                shadow: true,
                shadowQuality: 'ultra',
            },

        },
        regions: [{
                name: '广东',
                height: 3,
                itemStyle: {
                    // areaColor: '#fff',

                },
                emphasis: {

                },
            },
            {
                name: '北京',
                height: 3,
                itemStyle: {

                }
            },
            {
                name: '江苏',
                height: 3,
                itemStyle: {

                }
            },
            {
                name: '重庆',
                height: 3,
                itemStyle: {

                }
            },
        ],


        viewControl: {
            projection: 'perspective',
            autoRotate: false,
            damping: 0,
            rotateSensitivity: 2,//旋转操作的灵敏度
            rotateMouseButton: 'left', //旋转操作使用的鼠标按键
            zoomSensitivity:2, //缩放操作的灵敏度
            panSensitivity:2, //平移操作的灵敏度
            panMouseButton: 'right', //平移操作使用的鼠标按键
            
            distance: 150, //默认视角距离主体的距离
           center:[0,0,0],
           
            animation: true,
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut'
        },


    },
    
    series: [
        // 区域散点图
        {
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            zlevel: 3,
            symbol: 'circle',
            symbolSize: 10,
            rippleEffect: { //坐标点动画
                period: 3,
                scale: 5,
                brushType: 'fill'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    
                    textStyle: {
                        color: '#fff',
                        // borderWidth: 1,
                        // borderColor: 'red',
                        fontWeight: "bold",
                        fontSize: 16,
                        backgroundColor: 'transparent' // 字体背景色
                    },

                }
            },

            data: data,
            itemStyle: { //坐标点颜色
                normal: {
                    show: true,
                    color: '#c0e6f2',
                    shadowBlur: 20,
                    shadowColor: '#fff'
                },
                emphasis: {
                    areaColor: '#f00'
                }
            },

        },
        //lable
        { 
            name: 'lable',
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            symbol: 'pin',
            symbolSize: [50, 20],
            hoverAnimation: true,
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: "#fff8a8",
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 15,
                        backgroundColor: 'transparent' // 字体背景色

                    },
                    formatter: function(params) {

                        return params.data.lable[0] + "G" + '/' + params.data.lable[1] + "G"
                    }
                }
            },

            itemStyle: {
                normal: {
                    color: 'transparent', //标志颜色
                    opacity: 1,

                }
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            data: LableData,


        },
        // 线 和 点
        {
            type: 'lines3D',
            coordinateSystem: 'geo3D',
            zlevel: 1, //设置这个才会有轨迹线的小尾巴
            polyline: false,
            effect: {
                show: true,
                period: 10,
                trailLength: 0.1,
                trailColor: 'red',
                color: '#fff', //流动点颜色
                symbol: 'arrow',
                symbolSize: 6
            },
            lineStyle: {
                normal: {
                    color: '#e4ff00', //线条颜色
                    width: 2,
                    curveness: 0.5,
                    shadowColor: '#fff',
                }
            },
            blendMode: 'lighter',
            data: [{

                    fromName: "深圳",
                    toName: "北京",
                    coords: [
                        [114.271522, 22.753644,1],
                        [116.24, 39.55, 1],



                    ]
                },
                {

                    fromName: "深圳",
                    toName: "南京",
                    coords: [
                        [114.271522, 22.753644,1],
                        [118.802891, 32.064735, 1],


                    ]
                },
                {
                    fromName: "深圳",
                    toName: "重庆",
                    coords: [
                        [114.271522, 22.753644, 1],
                        [106.54, 29.59,1],

                    ]
                }
            ],

        },
        //bar
        {
            type: 'bar3D',
            coordinateSystem: 'geo3D',
            zlevel: 3,
            barSize: 3, //柱子粗细
            shading: 'lambert',
            itemStyle: {
                color: '#67ebc0'
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#fff',
                    backgroundColor: 'transparent'
                },
                formatter: function(params) {

                    return params.value[2]
                }

            },
            data: [
                {
                    name: '数据1',
                    value: [118.802891, 32.064735, 200]
                },
                {
                    name: '数据2',
                    value: [106.54, 29.59, 80]
                },
                {
                    name: '数据3',
                    value: [116.24, 39.55, 500]
                }
            ]
        }
    ]
};
myChart.on('mouseover', function(params) {
    let option = myChart.getOption();
    if (params.name == '深圳') {
        if (option.geo3D[0].regions[0].height !== 5) {
            option.geo3D[0].regions[0].height = 5;
            option.geo3D[0].regions[0].itemStyle.areaColor = '#fff';
            myChart.setOption(option)
        }

    } else if (params.name == '北京') {
        if (option.geo3D[0].regions[1].height !== 5) {
            option.geo3D[0].regions[1].height = 5;
            option.geo3D[0].regions[1].itemStyle.areaColor = '#fff';
            myChart.setOption(option)
        }

    } else if (params.name == '南京') {
        if (option.geo3D[0].regions[2].height !== 5) {
            option.geo3D[0].regions[2].height = 5;
            option.geo3D[0].regions[2].itemStyle.areaColor = '#fff';
            myChart.setOption(option)
        }

    } else if (params.name == '重庆') {
        if (option.geo3D[0].regions[3].height !== 5) {
            option.geo3D[0].regions[3].height = 5;
            option.geo3D[0].regions[3].itemStyle.areaColor = '#fff';
            myChart.setOption(option)
        }

    } else {

        if (option.geo3D[0].regions[0].height == 5) {
            option.geo3D[0].regions[0].height = 3;
            option.geo3D[0].regions[0].itemStyle = {}
            myChart.setOption(option)
        } else if (option.geo3D[0].regions[1].height == 5) {
            option.geo3D[0].regions[1].height = 3;
            option.geo3D[0].regions[1].itemStyle = {}
            myChart.setOption(option)
        } else if (option.geo3D[0].regions[2].height == 5) {
            option.geo3D[0].regions[2].height = 3;
            option.geo3D[0].regions[2].itemStyle = {}
            myChart.setOption(option)
        } else if (option.geo3D[0].regions[3].height == 5) {
            option.geo3D[0].regions[3].height = 3;
            option.geo3D[0].regions[3].itemStyle = {}
            myChart.setOption(option)
        }
    }
})




/*myChart.on('mouseover', function(params) {
    let option = myChart.getOption();
    if (params.name == '北京') {
        option.series[0].data[3].height = 10;
        option.series[0].data[3].value = 2;

        // option.series[0].data[3].itemStyle.color = '#ddb314'
        myChart.setOption(option)


    } else if (params.name == '安徽') {
        option.series[0].data[0].height = 10;
        option.series[0].data[0].value = 2;
        myChart.setOption(option)


    } else if (params.name == '重庆') {
        // console.log(params.name)
        option.series[0].data[1].height = 10;
        option.series[0].data[1].value = 2;
        myChart.setOption(option)


    } else if (params.name == '广东') {
        option.series[0].data[2].height = 10;
        option.series[0].data[2].value = 2;
        myChart.setOption(option)

    } else {
        if (option.series[0].data[3].height == 10) {
            option.series[0].data[3].height = 5;
            option.series[0].data[3].value = 1;
            myChart.setOption(option)
        } else if (option.series[0].data[0].height == 10) {
            option.series[0].data[0].height = 5;
            option.series[0].data[0].value = 1;
            myChart.setOption(option)
        } else if (option.series[0].data[1].height == 10) {
            option.series[0].data[1].height = 5;
            option.series[0].data[1].value = 1;
            myChart.setOption(option)
        } else if (option.series[0].data[2].height == 10) {
            option.series[0].data[2].height = 5;
            option.series[0].data[2].value = 1;
            myChart.setOption(option)
        }


    }
    
});*/


/*
myChart.on('click', function(params) {
    let option = myChart.getOption(); //option.series[0].data.length
    if (params.name == '广东') {
        // console.log()   option.visualMap[0].inRange.color[0] = 'rgba(136,133,133 ,0.5)';


        for (var i = 0; i < option.series[0].data.length; i++) {
            if (option.series[0].data[i].name !== '广东') {
                option.series[0].data[i].value = 3;
                console.log(option.series[0].data[i].value)
                myChart.setOption(option)
            }
        }
    }
});*/