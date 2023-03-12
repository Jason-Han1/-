option = {
    backgroundColor:"#000",
            legend: {
                data: ["第一产业", "第二产业"],
                orient: 'horizontal',
                x:'50%',      //可设定图例在左、右、居中
                y:'left',  //可设定图例在上、下、居中
                align:'left',
                top:'10',
                icon:"rect",  //设置显示为矩形
                textStyle: { //图例文字的样式
                    color:"#ffffff",
                    fontSize: 14,
                     padding: [1, 10],
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    letterSpacing: 0,
                    fontFamily:'SourceHanSansCN-Regular',

                    },
                itemWidth: 11,
                itemHeight:11,
                itemGap: 40 , //图例之间的距离
                padding:[0,0,0,0]
            },  //图例的设置
            grid: {
                left:'5%',
                right: '10%',
                bottom: '10%',
                top:'10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data:["1月", "2月", "3月", "4月"],
                // max:4,
                axisTick:{   //去除刻度线
                    show:false
                }, 
                splitLine:{   //去除刻度线
                    show:false
                },
                axisLine:{  //轴线样式
                            lineStyle:{
                                color:'#666cb4',
                                width:1,//这里是为了突出显示加上的
                            }
                    },
                axisLabel:{
                    show: true,
                    textStyle: {
                        color: '#fff', //更改坐标轴文字颜色
                        fontSize: 14,
                        fontFamily: 'SourceHanSansSC-Regular',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 19,
                        letterSpacing: 0,
                        },
                    }

            },
            yAxis: {
                type: 'value',
                name:"(亿元)",
                splitNumber:4,
                nameTextStyle:{//y轴上方单位的颜色
                    color:'#fff',
                    fontFamily: 'SourceHanSansSC-Regular',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 19,
                    letterSpacing: 0,
                    padding:[0,40,0,0]
                },
                axisTick:{   //去除刻度线
                    show:false
                }, 
                splitLine:{  //设置网格颜色
                        show: true,
                        lineStyle:{
                                 color: ['#3e4172'],
                                 width: 1,
                                type: 'solid'
                        }
                },
                axisLine:{
                            lineStyle:{
                                color:'#666cb4',
                                width:1,//这里是为了突出显示加上的
                            }
                    },
                axisLabel:{
                    show: true,
                    textStyle: {
                        color: '#fff', //更改坐标轴文字颜色
                        fontSize: 14,
                        fontFamily: 'SourceHanSansSC-Regular',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 19,
                        letterSpacing: 0,
                        },
                    }
            },
            series:[
            {
                    name: '第一产业',
                    type: 'bar',
                    barWidth:"15px",
                    // barCategoryGap:'30%',
                    // barGap:"30%",
                    // color: ["#00edff", "#5bffae", "#ffe954"],
                    data: [120,132,133,155],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,237,255,1)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(0,237,255,0.8)'
                            },
                             {
                                offset: 1,
                                color: 'rgba(0,237,255,0.4)'
                            },
                        ]),
                            opacity: 0.6,
                        }
                }    //设置柱形渐变
                },
                 {
                    name: '第一产业',
                    type: 'bar',
                    barWidth:"5px",
                    // barCategoryGap:'30%',
                    // barGap:"30%",
                    // margin:[0,10,0,0],
                    // color: ["#00edff", "#5bffae", "#ffe954"],
                    data: [0,0,0,0],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,237,255,1)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(0,237,255,0.8)'
                            },
                             {
                                offset: 1,
                                color: 'rgba(0,237,255,0.4)'
                            },
                        ]),
                            opacity: 0.6,
                        }
                }    //设置柱形渐变
                },
                {
                    name: '第二产业',
                    type: 'bar',
                    barWidth:"15px",
                    barCategoryGap:'30%',
                    barGap:"30%",
                    // color: ["#00edff", "#5bffae", "#ffe954"],
                    data: [120,132,133,155],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(91,255,174,1)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(91,255,174,0.8)'
                            },
                             {
                                offset: 1,
                                color: 'rgba(91,255,174,0.4)'
                            },
                        ]),
                            // opacity: 0.6,
                        }
                }   //设置柱形渐变
                }

            ]
        };