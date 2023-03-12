 var years = ['2010','2011','2012','2013','2014'];
        var jdData =[
            ['广州', '成都', '东莞', '广州', '南京', '上海', '北京', '天津', '长沙','惠州','广州', '成都', '东莞', '广州', '南京', '上海', '北京', '天津', '长沙','惠州'],
            ['北京', '成都', '东莞', '广州', '南京', '上海', '深圳', '天津', '重庆','惠州','广州', '成都', '东莞', '广州', '南京', '上海', '北京', '天津', '长沙','惠州'],
            ['上海', '成都', '东莞', '广州', '南京', '北京', '深圳', '天津', '重庆','惠州','广州', '成都', '东莞', '广州', '南京', '上海', '北京', '天津', '长沙','惠州'],
            ['深圳', '成都', '东莞', '广州', '南京', '上海', '北京', '天津', '重庆','惠州','广州', '成都', '东莞', '广州', '南京', '上海', '北京', '天津', '长沙','惠州'],
            ['北京', '成都', '东莞', '广州', '南京', '上海', '深圳', '天津', '重庆','惠州','广州', '成都', '东莞', '广州', '南京', '上海', '北京', '天津', '长沙','惠州']
        ] ;
        var data =[
            [100,80,30,120,90,98,99,99,110,140,100,80,30,120,90,98,99,99,110,120],
            [80,90,90,10,90,160,96,120,140,110,100,80,30,120,90,98,99,99,110,150],
            [80,90,97,120,90,97,99,98,120,110,100,80,30,120,90,98,99,99,110,140],
            [90,160,130,120,100,98,80,90,110,140,100,80,30,120,90,98,99,99,110,110],
            [100,90,80,120,90,90,80,60,170,180,100,80,30,120,90,98,99,99,110,140]
        ];
        option = {
            baseOption: {
                timeline: {
                    show:false,
                    data: years,//第一个数据空白很重要
                    axisType: 'category',
                    autoPlay: true,
                    loop:false,
                    playInterval: 2000,
                },
                title: {
                    text: '',
                    right: '2%',
                    bottom: '5%',
                    textStyle: {
                        fontSize: 50,
                        color: '#666'
                    }
                },
                tooltip: {
                    'trigger': 'axis'
                },
                calculable: true,
                grid: {
                    left: '2%',
                    right: '2%',
                    bottom: '2%',
                    top:'0%',
                    containLabel: true
                },
                label:{
                    normal:{
                        textStyle:{
                            color:'#fff'
                        }
                    }
                },
                yAxis: [{
                    'type': 'category',
                    data: '',
                    nameTextStyle:{
                        color:'#fff'
                    },
                    axisLabel:{
                        //rotate:45,
                        textStyle:{
                            fontSize:12,
                            color:'#333',
                        },
                        interval: 0
                    },
                    axisLine:{

                        lineStyle:{
                            color:'#333'
                        },
                    },
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:'#333'
                        }
                    },

                }],
                xAxis: [{
                    'type': 'value',
                    'name': '',
                    splitNumber:8,
                    nameTextStyle:{
                        color:'#333'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#333'
                        }
                    },
                    axisLabel: {
                        formatter: '{value} '
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#ccc'
                        }
                    },
                }],
                series: [{
                    'name': '',
                    'type': 'bar',
                    markLine : {
                        label:{
                            normal:{
                                show:false
                            }
                        },
                        lineStyle:{
                            normal:{
                                color:'red',
                                width:3
                            }
                        },
                    },
                    barWidth:'50%',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: '{c}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8',
                                    '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8',
                                    '#bda29a', '#376956', '#c3bed4', '#495a80',
                                    '#9966cc', '#bdb76a', '#eee8ab', '#a35015',
                                    '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc',
                                ];
                                return colorList[params.dataIndex]
                            },

                        }
                    },
                }],
                animationDurationUpdate: 2000,
                animationEasingUpdate: 'quinticInOut'
            },
            options: []
        };
        for (var n = 0; n < years.length; n++) {
            option.options.push({
                title: {
                    text: years[n] +'年'
                },
                yAxis:{
                    data:jdData[n],
                },
                series: [{
                    data: data[n]
                }]
            });
        }