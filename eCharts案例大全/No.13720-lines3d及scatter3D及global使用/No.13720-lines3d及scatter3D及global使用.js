$.getJSON('/asset/get/s/data-1491887968120-rJODPy9ae.json', function(data) {

    data = data.filter(function(dataItem) {
        return dataItem[2] > 0;
    }).map(function(dataItem) {
        return [dataItem[0], dataItem[1], 0.1];
    });
    console.log(data);

    myChart.setOption({
        visualMap: { //右下角用于过滤显示的组建, 类似于一个legend
            show: false,
            min: 0,
            max: 600,
            inRange: {
                symbolSize: [10.0, 10.0] //legend对应图元的大小 如下例
            }
            /*
            visualMap: {
        min: 0,
        max: 300,
        splitNumber: 5,
        
        textStyle: {
            color: '#fff'
        },
        inRange:{ //type为continuous时, inrange里面的内容则为选中部分的样式
            symbolSize:[1.0,10.0]   //为piecewise类型时, 值越大图元越大
            color: ['#d94e5d','#eac736','#50a3ba'], //图例的颜色
        },
        outOfRange{ //在分段里则为取消选中的点的状态
            
        }
    },
    */
        },
        globe: {

            environment: '#000', //背景图或色 (shading为lamber时如果背景色和地球色不一样, 背景色会覆盖地球)

            //heightTexture: 'data-gl/asset/bathymetry_bw_composite_4k.jpg', //地球纹理

            //displacementScale: 0.9,  //纹理中凹凸的显示高度
            // displacementQuality: 'high',  //纹理的细节显示程度 low medium high ultra(极端的)

            globeOuterRadius: 100, //地球半径

            //baseColor: '#fff',  //地球颜色

            shading: 'realistic', //着色方案 color(只着色)  lamber(表现光照)  realistic(真实感渲染)
            realisticMaterial: { //纹理贴图相关
                roughness: 0.7, //材质的粗糙度  越粗糙反光度越低
                metalness: 0.5 //金属质感 0为金属  1为非金属, 在这之间设置
            },

            postEffect: { //特效相关
                enable: true, //默认关闭
                /*
                bloom: {
                    enable:true,  //是否开启光晕 默认关闭
                    bloomlntensity:0.2   //0-1 
                },   //高光 用于表现亮的颜色
                */


                //FXAA 抗锯齿
            },
            temporalSuperSampling: { //超级采样
                enable: true
            },
            light: { //shading为coior时无效

                main: { //主光源设置, globe中即为太阳光
                    //color:"#fff", //光源颜色
                    intensity: 0.5, //主光源强度
                    shadow: false, //光源是否投射阴影
                    //shadowQuality: low/medium/height/ultra  //阴影的质量
                    alpha: 45,
                    beta: 45,
                    //time: //日照时间, 默认为系统时间

                },



            },
            viewControl: {
                //projection  投影方式, 默认为透视投影perspective 可设置为orthographic正交投影

                autoRotate: true, //是否开启自动旋转
                //autoRotateDirection: 'cw' //顺时针 'ccw'你是正
                autoRotateSpeed: 10, //自转速度, 默认10度/秒 也就是36秒一圈
                autoRotateAfterStill: 3, //停止操作后多久开启自转
                damping: 0.8, //迟滞因子, 大于0时, 停止缩放和旋转操作, 仍会有个惯性转动/缩放
                rotateSensitivity: [1, 0], //旋转的灵敏度, 利用数组可控制 横 纵的旋转灵敏度[1,0] 只能横向,灵敏度为1 [0,1]只能纵向
                //zoomSensitivity 缩放灵敏度, 0为不可缩放
                //panSensitivity 平移灵敏度
                //panMouseButton  平移时的按键

                //minDistance 拉近视角的最小距离 projection为perspective时有效
                beta: 180, //视角绕 y 轴，即左右旋转的角度。详见配置项图
                alpha: 20, //视角绕x轴的旋转角度 上下旋转角度
                distance: 200, //和主体的距离
                //center:[0,0,0] //旋转的中心点
                //*targetCoord 定位目标的经纬度坐标, 设置后alpha和beta失效
                targetCoord: [116.46, 39.92] //定位到北京
            },
            //layer[]  //地球表层配置, 例如是否加入云层等
        },
        series: [{
                type: "lines3D",
                coordinateSystem: 'globe',
                itemStyle: {
                    color: 'darkgreen'
                },
                effect: {
                    show: true,
                    period: 5,
                    trailOpacity: 1
                },
                lineStyle: {
                    opacity: 0,
                },
                zlevel: 90,
                data: [
                    [
                        [116.46, 39.92],
                        [39.92, 116.46]
                    ]
                ]
            },
            {
                type: "scatter3D",
                coordinateSystem: 'globe',
                itemStyle: {
                    color: 'bule'
                },
                zlevel: 1,
                itemStyle: {
                    opacity: 0.1
                },

                data: data
            },
        ]

    });
});