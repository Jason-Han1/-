option = {
    backgroundColor:'rgba(10, 0, 42, 1)',
                            visualMap: {
                                    show: true,
                                    text: ['高', '低'],
                                    textStyle:{
                                        color: '#FFFFFF',
                                    },
                                    left: '10%',
                                    top: '60%',
                                    itemWidth:40,
                                    itemHeight:200,
                                    inRange: {
                                        color: ['#04387b', '#467bc0'] // 蓝绿
                                    },
                                },
                            geo: {
                                    show:false,
                                    map: 'china',
                                    silent: true,
                                    itemStyle: {
                                        
                                    }

                            },

                            series : [
                                {
                                    type: 'map',
                                    mapType: 'china',
                                    roam: false,//是否开启鼠标缩放和平移漫游
                                    top:"10%",//组件距离容器的距离
                                    right:"-20%",
                                    aspectScale: 0.75,  // 地图长宽比例
                                    selectedMode: true,//single 表示单选;multiple表示多选 默认flase不选
                                    itemStyle: {
                                                normal: {
                                                label: {
                                                    // show: true,//默认是否显示省份名称    
                                                },
                                                borderWidth:0.2,  //省份之间界线的粗细
                                                borderColor:'#FFFFFF',
                                                areaColor: '#031D6A', //地图板块颜色
                                                shadowColor: 'rgba(98,132,147, 1)',
                                                shadowBlur: 40

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false,//选中状态是否显示省份名称
                                                },

                                                areaColor: '#169BD5',  //鼠标指向板块之后的颜色
                                            },
                                        },
                                    data:[
                                            {name:"南海诸岛",  //不显示南海诸岛
                                                itemStyle:{
                                                    normal:{opacity:0,label:{show:false},borderWidth:"0",borderColor:"#10242b",areaStyle:{color:'#10242b'}},
                                                    emphasis:{opacity:0,label:{show:false}}
                                                }
                                            },
                                    ]
                                },
                                {
                    type: 'effectScatter',   
                    coordinateSystem: 'geo',
                    rippleEffect: {
                            period: 2.5, //波纹秒数
                            brushType: 'fill', //stroke(涟漪)和fill(扩散)，两种效果
                            scale: 10, //波纹范围
                            color: '#679556',
                        },

                    data: [
                        {
                        name: '上海',
                        value: [118.50,33.23, 55]
                        },
                        {
                        name: '北京',
                        value: [116.46,39.92, 110]
                        },
                        {
                        name: '邯郸',
                        value: [114.47,36.6, 60]    // value的前两项是经纬度坐标，
                        },
                        {
                        name: '天津',
                        value: [106.55,29.56, 88]  
                        },
                        {
                        name: '广州',
                        value: [113.23,29.16, 50]    
                        },
                    ]
                    }

                            ]
                        };