            // 随机颜色
            rColor = function() {
                var c1 = Math.round(Math.random() * 255);
                var c2 = Math.round(Math.random() * 255);
                var c3 = Math.round(Math.random() * 255);
                var color = "RGB(" + c1 + "," + c2 + "," + c3 + ")";
                return color;
            };
            
            var _greenColor = ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)'];

            // 计算位置
            var _cw = 150,
                _ch = 150; 
            //起始角度  
            var _startDeg = 0;
            //外环半径  
            var _radius = 150;  
            // 线条
            var _clen = 36;

            // 中间随机线坐标
            var startData = [],
                endData = [];

            for (var i = 0; i < _clen; i++) {
                //每一个对应的角度;  
                var avd = 360 / _clen; 
                //每一个对应的弧度;  
                var ahd = avd * Math.PI / 180; 

                var _ex =  Math.sin((ahd * i)) * _radius + _cw;
                var _ey = Math.cos((ahd * i)) * _radius + _ch;
                endData.push([_ex, _ey]);
            }


            var data = [];
            $.each(endData, function(i, item) {
                data.push({
                    coords: [
                        [150,150], // 起点
                        item // 终点
                    ],
                    effect: {
                        period: 1.5 +  0.1
                    },
                    lineStyle: {
                        normal: {
                            // 随机颜色
                            color: rColor()
                        }
                    }
                });
            });
            option = {
                grid: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                xAxis: [{
                    type: 'value',
                    min: 0,
                    max: 300,
                    splitLine: {
                        show: false
                    },
                     axisLine: {
                        show: false
                    },
                    axisTick :{
                        show:false
                    },
                    axisLabel:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                }],
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 300,
                     splitLine: {
                        show: false
                    },
                     axisLine: {
                        show: false
                    },
                    axisTick :{
                        show:false
                    },
                    axisLabel:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                }],
                radar: [
                    {
                        indicator: [
                            { text: '' },
                            { text: '' },
                            { text: '' },
                            { text: '' },
                            { text: '' }
                        ],
                        center: ['50%', '50%'],
                        radius: 300,
                        startAngle: 90,
                        splitNumber: 5,
                        shape: 'circle',
                        splitArea: {
                            areaStyle: {
                                color: _greenColor,
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0)'
                            }
                        }
                    }
                ],
                series: [{
                  type:"radar"  ,
                  itemStyle: {
                            emphasis: {
                                // color: 各异,
                                lineStyle: {
                                    width: 4
                                }
                            }
                        },
                        data: [

                        ]
                },{
                    name: '',
                    type: 'lines',
                    coordinateSystem: 'cartesian2d',
                    zlevel: 2,
                    effect: {
                        show: true,
                        //特效动画时间s
                        period: 1.5,
                        //特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
                        trailLength: 0.6,
                        //特效标记的大小
                        symbolSize: 5
                    },
                    lineStyle: {
                        normal: {
                            //线宽
                            width: 1,
                            //边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            curveness: 0,
                            //图形透明度,0时不绘制
                            opacity: 0
                        }
                    },
                    data: data
                }]
            };