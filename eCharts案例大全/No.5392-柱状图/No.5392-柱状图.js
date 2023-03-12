 option = {
            backgroundColor:"#000",
            grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                top:"15%",
                containLabel: true
            },
            xAxis: {
                type: 'value',
                name:"(个)",
                splitNumber:5,  //划分等分
                axisLabel:{
                    show: true,
                    textShadowColor:'#2706dd',
                    opacity:0.8,
                    verticalAlign:'bottom',
                    textStyle: {
                        color: '#ffffff', //更改坐标轴文字颜色
                        fontSize: 14,
                        fontFamily: 'SourceHanSansCN-Regular',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 19,
                        letterSpacing: 0,
                        },
                    },
                position:'top',
                boundaryGap: [0, 0.01],  //设置距离左边位置
                axisTick:{
                    show: false
                },
                axisLine:{  //x轴线样式
                            lineStyle:{
                                color:'#666cb4',
                                width:1,//这里是为了突出显示加上的
                            },
                            symbol:['none','arrow']  //设置x轴箭头  ，none为不设置箭头
                    },
                nameTextStyle:{    //x轴右方单位的颜色
                    color:'#ffffff',
                    fontFamily: 'SourceHanSansCN-Regular',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 19,
                    letterSpacing: 0,
                    padding:[0,0,30,10]
                },
                splitLine:{  //设置网格颜色
                        show: false
                }

            },
            yAxis: {
                type: 'category',
                data: ['在建','竣工','延期','已完成'],  //设置从低到高
                axisTick:{  //去除刻度线
                    show: false
                },
                boundaryGap: [0, 0.8],  //设置距离上边位置
                axisLine:{  //y轴线样式
                        lineStyle:{
                            color:'#666cb4',
                            width:1,//这里是为了突出显示加上的
                        }
                    },
                axisLabel:{
                    show: true,
                    textStyle: {
                        fontFamily: 'SourceHanSansCN-Regular',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 19,
                        letterSpacing: 0,
                        color: '#ffffff',
                        },
                    },
                splitLine:{  //设置网格颜色
                        show: false
                },
            },
            series: [
                {
                    name: '2019年',
                    type: 'bar',
                    label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontFamily: 'SourceHanSansSC-Regular',
                        fontSize: 14
                    }
                    },
                    barWidth:35,
                    data: ['200','300', '260', '240'],
                    itemStyle: {
                        normal: {
			                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			                        offset: 0,
			                        color: 'rgba(0,255,255,0.1)'
			                    },
			                    {
			                        offset: 0.5,
			                        color: 'rgba(0,215,244,0.3)'
			                    },
			                    {
			                        offset: 1,
			                        color: 'rgba(0,175,248,0.6)'
			                    },
			                ]),
                            barBorderRadius: [0, 50, 0 ,0]
		            	}
                }   //设置柱形渐变
                    
                }
                
            ]
        };