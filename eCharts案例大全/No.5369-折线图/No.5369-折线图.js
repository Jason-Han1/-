 option = {
            backgroundColor:"#000",
            grid: {
                left: '3%',
                right: '5%',
                bottom: '3%',
                top:'80px',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                axisTick:{
                    show: false
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
                        lineHeight: 40,
                        letterSpacing: 0,
                        padding: [15, 0, 0, 0]
                        },
                    },
                boundaryGap: false, //设置图表从原点开始
            },
            yAxis: {
                type: 'value',
                name:"(个)",
                nameTextStyle:{//y轴上方单位的颜色
                    color:'#fff',
                    fontFamily: 'SourceHanSansSC-Regular',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 19,
                    letterSpacing: 0,
                    padding: [0, 0, 0, -60] //上右下左  设置y轴单位的位置
                },
                axisTick:{  //去除刻度线
                    show: false
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
                        top:'50%'
                        },
                    },
                splitLine:{  //设置网格颜色
                        show: true,
                        lineStyle:{
                                color: ['#3e4172'],
                                width: 1,
                                type: 'solid'
                            }
                },
                //boundaryGap: ['0%', '0%'],  //设置y轴刻度间距
            },
            series: [
            {
                    type: 'line',
                    data: ["1000","2200","1500","1000","900","1800","1700","2000","3500","2200","200","0"],
                    smooth: true,  //设置曲线平滑
                    symbol: "none",  //取消折点圆圈
                    symbolSize: 7,
                    color:"#389ce6",
                    areaStyle:{
				        type : 'default',
				        //渐变色实现
				        color : new echarts.graphic.LinearGradient(0, 0, 0, 1,//变化度
				        //三种由深及浅的颜色
				        [{
				            offset : 0,
				            color : 'rgba(36,155,245,0.4)'
				        },{
				            offset : 1,
				            color : 'rgba(36,155,245,0)'
				        }
				        ]),
				    },
                    lineStyle:{
                    	color: '#25A0FC', //改变折线颜色
        				width:3
                    }
                }
            ]
        };