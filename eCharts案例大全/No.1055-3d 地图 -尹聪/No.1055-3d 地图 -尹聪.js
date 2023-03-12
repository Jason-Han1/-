option = {
  
                        tooltip : {
                            trigger: 'item'
                        },

                        //左侧小导航图标
                        visualMap: {
                            show : true,
                            x: 'left',
                            y: 'center',
                            splitList: [
                                {start:1 , end:500},{start:500 , end: 1000},
                                {start:1000, end: 1500},{start:1500 , end:2000 },
                                {start: 2000, end:2500 },{start:2500 ,  },
                            ],

                            color: [
                                '#ffb43d',
                                '#5475f5',
                                '#85daef',
                                '#9feaa5',
                                '#74e2ca',
                                '#0074bc'],// e6ac53 '#9fb5ea'
                            textStyle: {

                                color: '#black'

                            }
                        },

                        geo: {

                            map: 'china',

                            aspectScale: 0.75,

                            layoutCenter: ["50%", "51.5%"], //地图位置

                            layoutSize: '118%',

                            roam: false, //关闭缩放

                            itemStyle: {

                                normal: {

                                    borderColor: 'rgba(147, 235, 248, 1)',

                                    borderWidth: 0.5,

                                    color: {

                                        type: 'linear-gradient',

                                        x: 0,

                                        y: 1500,

                                        x2: 2500,

                                        y2: 0,

                                        colorStops: [{

                                            offset: 0,

                                            color: '#009DA1' // 0% 处的颜色

                                        }, {

                                            offset: 1,

                                            color: '#005B9E' // 50% 处的颜色

                                        }],

                                        global: true // 缺省为 false

                                    },

                                    opacity: 0.5,

                                },

                                emphasis: {

                                    areaColor: '#2a333d'

                                }

                            },

                            regions: [{

                                name: '南海诸岛',

                                itemStyle: {

                                    areaColor: 'rgba(0, 10, 52, 1)',

                                    borderColor: 'rgba(0, 10, 52, 1)'

                                },

                                emphasis: {

                                    areaColor: 'rgba(0, 10, 52, 1)',

                                    borderColor: 'rgba(0, 10, 52, 1)'

                                }

                            }],

                            z: 2

                        },

                        series: [{
                            name:'',
                            type: 'map',

                            map: 'china',



                            label: {

                                show: true,

                                color: 'black',

                                fontSize: 14

                            },

                            aspectScale: 0.75,

                            layoutCenter: ["50%", "50%"], //地图位置

                            layoutSize: '118%',

                            roam: false, //关闭缩放

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

                                        colorStops: [{

                                            offset: 0,

                                            color: '#009DA1' // 0% 处的颜色

                                        }, {

                                            offset: 1,

                                            color: '#005B9E' // 50% 处的颜色

                                        }],

                                        global: true // 缺省为 false

                                    },

                                },

                                emphasis: {

                                    areaColor: 'rgba(147, 235, 248, 0)'

                                }

                            },

                            zlevel: 1,
                            data:[{"name":"湖北","value":30.0},{"name":"湖北","value":2.0},{"name":"安徽","value":1.0},{"name":"江苏","value":4.0},{"name":"贵州","value":4.0},{"name":"贵州","value":3.0},{"name":"湖北","value":12.0},{"name":"重庆","value":5.0},{"name":"内蒙古","value":1.0},{"name":"湖南","value":17.0},{"name":"湖南","value":19.0},{"name":"湖北","value":1.0},{"name":"云南","value":1.0},{"name":"辽宁","value":1.0},{"name":"安徽","value":1.0},{"name":"湖北","value":3.0},{"name":"江苏","value":12.0},{"name":"山东","value":4.0},{"name":"湖南","value":0.138333},{"name":"湖南","value":12.0},{"name":"湖南","value":36.0},{"name":"江苏","value":5.0},{"name":"湖南","value":13.0},{"name":"湖北","value":5.0},{"name":"山东","value":10.0},{"name":"重庆","value":20.0},{"name":"湖南","value":6.0},{"name":"江苏","value":3.0},{"name":"陕西","value":2.0},{"name":"贵州","value":10.0},{"name":"贵州","value":5.0},{"name":"陕西","value":3.0},{"name":"湖南","value":3.0},{"name":"贵州","value":6.0},{"name":"湖南","value":5.0},{"name":"山西","value":1.0},{"name":"湖南","value":13.0},{"name":"云南","value":1.0},{"name":"湖南","value":45.0},{"name":"湖南","value":38.0},{"name":"湖南","value":40.0},{"name":"陕西","value":2.0},{"name":"贵州","value":2.0},{"name":"江苏","value":45.0},{"name":"湖南","value":19.0},{"name":"湖南","value":22.0},{"name":"江苏","value":14.0},{"name":"安徽","value":8.0},{"name":"湖南","value":55.0},{"name":"湖南","value":17.0},{"name":"湖南","value":20.0},{"name":"江苏","value":10.0},{"name":"湖南","value":14.0},{"name":"湖北","value":25.0},{"name":"湖南","value":10.0},{"name":"湖南","value":7.0},{"name":"贵州","value":2.0},{"name":"湖南","value":0.179167},{"name":"重庆","value":2.0},{"name":"四川","value":7.0},{"name":"云南","value":5.0},{"name":"贵州","value":5.0},{"name":"湖南","value":2.0},{"name":"山东","value":2.0},{"name":"湖北","value":11.0},{"name":"湖南","value":6.0},{"name":"安徽","value":1.0},{"name":"湖南","value":11.0},{"name":"安徽","value":3.0},{"name":"湖南","value":53.0},{"name":"湖南","value":47.0},{"name":"湖南","value":30.0},{"name":"贵州","value":15.0},{"name":"江苏","value":13.0},{"name":"湖南","value":8.0},{"name":"湖南","value":12.0},{"name":"湖南","value":9.0},{"name":"安徽","value":17.0},{"name":"湖北","value":5.0},{"name":"湖南","value":8.0},{"name":"湖南","value":7.0},{"name":"陕西","value":1.0},{"name":"湖北","value":4.0},{"name":"辽宁","value":9.0},{"name":"江苏","value":1.0},{"name":"贵州","value":13.0},{"name":"湖南","value":41.0},{"name":"贵州","value":10.0},{"name":"贵州","value":9.0},{"name":"重庆","value":6.0},{"name":"湖北","value":18.0},{"name":"湖南","value":14.0},{"name":"湖南","value":15.0},{"name":"湖南","value":15.0},{"name":"江苏","value":2.0},{"name":"安徽","value":5.0},{"name":"江苏","value":3.0},{"name":"湖南","value":14.0},{"name":"湖南","value":5.0},{"name":"江苏","value":3.0},{"name":"贵州","value":3.0},{"name":"湖南","value":12.0},{"name":"辽宁","value":1.0},{"name":"安徽","value":1.0},{"name":"湖南","value":3.0},{"name":"江苏","value":2.0},{"name":"江苏","value":13.0},{"name":"湖南","value":31.0},{"name":"湖南","value":8.0},{"name":"重庆","value":11.0},{"name":"安徽","value":7.0},{"name":"湖南","value":7.0},{"name":"江苏","value":11.0},{"name":"湖北","value":3.0},{"name":"湖北","value":3.0},{"name":"贵州","value":3.0},{"name":"北京","value":1.0},{"name":"湖南","value":6.278031},{"name":"湖南","value":2.0},{"name":"江苏","value":9.0},{"name":"安徽","value":2.0},{"name":"安徽","value":7.0},{"name":"湖南","value":3.0},{"name":"贵州","value":75.0},{"name":"四川","value":5.0},{"name":"江苏","value":1.0},{"name":"安徽","value":2.0},{"name":"湖南","value":4.0},{"name":"云南","value":1.0},{"name":"湖南","value":2.0},{"name":"湖南","value":36.0},{"name":"湖南","value":29.0},{"name":"辽宁","value":3.0},{"name":"贵州","value":2.0},{"name":"吉林","value":2.0},{"name":"云南","value":3.0},{"name":"云南","value":8.0},{"name":"江苏","value":3.0},{"name":"湖南","value":34.0},{"name":"湖南","value":10.0},{"name":"湖南","value":0.2},{"name":"江苏","value":13.0},{"name":"湖南","value":14.0},{"name":"湖南","value":26.0},{"name":"湖南","value":17.0},{"name":"江苏","value":1.0},{"name":"贵州","value":11.0},{"name":"江苏","value":5.0},{"name":"重庆","value":1.0},{"name":"云南","value":10.0},{"name":"重庆","value":1.0},{"name":"安徽","value":1.0},{"name":"湖南","value":13.0},{"name":"湖南","value":4.0},{"name":"湖南","value":5.0},{"name":"青海","value":7.0},{"name":"湖南","value":9.0},{"name":"湖南","value":35.0},{"name":"吉林","value":11.0},{"name":"湖南","value":97.0},{"name":"湖南","value":39.0},{"name":"湖南","value":18.0},{"name":"湖南","value":10.0},{"name":"重庆","value":1.0},{"name":"湖北","value":2.0},{"name":"江苏","value":6.0},{"name":"云南","value":2.0},{"name":"湖南","value":2.0},{"name":"湖北","value":35.0},{"name":"湖南","value":10.0},{"name":"江苏","value":1.0},{"name":"四川","value":1.0},{"name":"山东","value":4.0},{"name":"黑龙江","value":22.0},{"name":"江苏","value":13.0},{"name":"陕西","value":1.0},{"name":"江苏","value":8.0},{"name":"四川","value":5.0},{"name":"山东","value":6.0},{"name":"陕西","value":3.0},{"name":"云南","value":5.0},{"name":"吉林","value":2.0},{"name":"湖南","value":3.0},{"name":"内蒙古","value":3.0},{"name":"贵州","value":7.0},{"name":"江苏","value":1.0},{"name":"湖南","value":13.0},{"name":"黑龙江","value":1.0},{"name":"湖北","value":24.0},{"name":"湖北","value":30.0},{"name":"重庆","value":8.0},{"name":"湖北","value":13.0},{"name":"湖南","value":2.0},{"name":"安徽","value":7.0},{"name":"云南","value":3.0},{"name":"贵州","value":30.0},{"name":"江苏","value":3.0},{"name":"安徽","value":1.0},{"name":"湖南","value":6.0},{"name":"湖南","value":5.0},{"name":"黑龙江","value":5.0},{"name":"湖南","value":9.0},{"name":"湖南","value":2.0},{"name":"湖北","value":2.0},{"name":"湖南","value":20.0},{"name":"贵州","value":13.0},{"name":"贵州","value":5.0},{"name":"安徽","value":2.0},{"name":"云南","value":2.0},{"name":"湖南","value":32.0},{"name":"湖南","value":0.606945},{"name":"浙江","value":19.0},{"name":"湖南","value":12.0},{"name":"重庆","value":7.0},{"name":"湖南","value":0.15},{"name":"安徽","value":12.0},{"name":"湖南","value":4.0},{"name":"湖南","value":2.0},{"name":"重庆","value":7.0},{"name":"湖南","value":25.0},{"name":"安徽","value":3.0},{"name":"安徽","value":3.0},{"name":"陕西","value":1.0},{"name":"云南","value":5.0},{"name":"上海","value":34.0},{"name":"江苏","value":3.0},{"name":"山东","value":2.0},{"name":"湖北","value":5.0},{"name":"云南","value":2.0},{"name":"湖北","value":3.0},{"name":"云南","value":3.0},{"name":"安徽","value":11.0},{"name":"黑龙江","value":7.0},{"name":"湖北","value":1.0},{"name":"江苏","value":33.0},{"name":"湖南","value":12.0},{"name":"山东","value":16.0},{"name":"山东","value":2.0},{"name":"湖北","value":31.0},{"name":"湖南","value":5.0},{"name":"湖北","value":5.0},{"name":"湖北","value":12.0},{"name":"湖南","value":6.0},{"name":"江苏","value":13.0},{"name":"山东","value":2.0},{"name":"重庆","value":20.0},{"name":"重庆","value":2.0},{"name":"青海","value":6.0},{"name":"湖南","value":23.0},{"name":"山东","value":4.0},{"name":"湖南","value":9.0},{"name":"陕西","value":3.0},{"name":"安徽","value":10.0},{"name":"湖北","value":5.0},{"name":"贵州","value":5.0},{"name":"安徽","value":7.0},{"name":"贵州","value":10.0},{"name":"陕西","value":1.0},{"name":"湖南","value":7.0},{"name":"湖南","value":16.0},{"name":"湖南","value":3.991401},{"name":"云南","value":6.0}],


                        }],
};
