var png1 = "https://cdn.jsdelivr.net/gh/SHJ33/examples@master/crispwinterTWO.png";


option = {
    //backgroundColor:'#13131D',
    geo3D: {
        map: 'hubei', //
        show: true, //
        zlevel: -10, //
        boxWidth: 190, //
        boxHeight:30,//4:没有bar. 30:有bar,bar最高度30，按比例分配高度
        regionHeight:5,
        //environment:'#FFF',
        environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0.3, color: '#1D202F' // 天空颜色
                    // }, {
                    //   offset: 0.5, color: '#1D202F' // 地面颜色
                    // }, {
                    //   offset: 0.8, color: '#1D202F' // 地面颜色
                    }], false),
        groundPlane:{  //地面
            show:true, //
            color:'#171721',//'#1D202F'
        },
        instancing: false, //
        //shading: 'lambert',
        label: { // 标签的相关设置
            show: false,
        },

        itemStyle: {
            areaColor: '#24252F',//'#515C72', //
            opacity: 1, //
            borderWidth: 0.7, //
            borderColor: '#000'//'#242C38' //
        },
        emphasis: {
            label: {
                show: false,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    backgroundColor: 'transparent' // 字体背景色
                }
            },
             //borderColor:'#ffffff',
                //borderWidth:8,
            itemStyle: {
                areaColor: '#41495F',//'#515C72',
                borderColor:'#242C38',
                borderWidth:0.7,
            }
        },
        /*regions: [{
                name: '广东',
                height: 5,
                itemStyle: {
                     areaColor: '#61A4E4',
                     borderColor:'#88BAEA',

                },
                emphasis: {
                    show:false,
                },
            },
            {
                name: '北京',
                height: 5,
                itemStyle: {

                }
            },
            {
                name: '江苏',
                height: 5,
                itemStyle: {

                }
            },
            {
                name: '重庆',
                height: 5,
                itemStyle: {

                }
            },
        ],*/
        shading:'realistic', //
        /*realisticMaterial:{
            
        },*/
        light: { //光照相关的设置
            main: {
                color:'#fff', //主光源的颜色
                intensity:3, //主光源的强度
                shadow: true, //主光源是否投射阴影
                shadowQuality: 'high', //阴影的质量,可选'low', 'medium', 'high', 'ultra'
                alpha:150, //主光源绕 x 轴，即上下旋转的角度
                beta:200,  //主光源绕 y 轴，即左右旋转的角度
                //time:'2021-5-02 17:07:58',
            },
            ambient:{
                color:'#fff', //环境光的颜色
                intensity:0.6,  //环境光的强度
            },
            /*ambientCubemap: { //
                texture: 'https://cdn.jsdelivr.net/gh/SHJ33/examples@master/Mono_Lake_B_Ref.hdr', //
                // 解析 hdr 时使用的曝光值
                exposure: 1.0, //
                diffuseIntensity: 0.2, //漫反射的强度
                specularIntensity: 0.2, //高光反射的强度
            },*/
        },
        /*postEffect:{  //后处理特效的相关配置
            enable:false,  //是否开启后处理特效
            bloom:{  //高光特效
                enable:false, //是否开启光晕特效
                bloomIntensity:0.01,  //光晕的强度，默认为 0.1
            },
            SSAO:{  //屏幕空间的环境光遮蔽效果
                enable:false,  //是否开启环境光遮蔽
                quality: 'ultra',  //环境光遮蔽的质量,支持'low', 'medium', 'high', 'ultra'
                radius:3, //环境光遮蔽的采样半径
                intensity:0, //环境光遮蔽的强度
            },
            colorCorrection:{  //颜色纠正和调整
                enable: false, //是否开启颜色纠正
                //lookupTexture: png1, //画面的曝光
                exposure: 0.01,  //画面的曝光
                brightness: 0.1,  // 画面的亮度
                contrast: 1, //画面的对比度
                saturation: 1,  //画面的饱和度
            },
        },*/
        
        temporalSuperSampling:{ //
            enable:'auto', //
        },
        
        viewControl: { //
            projection: 'perspective', //
            autoRotate: false, //
            autoRotateDirection: 'cw',
            damping: 0, //
            rotateSensitivity: 2,//旋转操作的灵敏度
            rotateMouseButton: 'left', //旋转操作使用的鼠标按键
            zoomSensitivity:2, //缩放操作的灵敏度
            panSensitivity:2, //平移操作的灵敏度
            panMouseButton: 'right', //平移操作使用的鼠标按键
            
            distance: 160, //默认视角距离主体的距离
            minDistance: 100, //
            maxDistance: 170, //
            //orthographicSize:150, //
            //maxOrthographicSize:150, //
            //minOrthographicSize:150, //
            alpha:52, //
            beta:2, //
            minAlpha:30, //
            maxAlpha:80, //
            minBeta:-25, //
            maxBeta:45, //
            
            center:[0,0,10], //
           
            animation: true, //
            animationDurationUpdate: 1000, //
            animationEasingUpdate: 'cubicInOut' //
        },

    },
    
    series: [
    ]
};
