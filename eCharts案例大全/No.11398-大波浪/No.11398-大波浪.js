option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['菜单一', '子菜单12', '子菜单13', '子菜单21', '菜单2子', '菜单二', '123菜', 'xiaoca16', '一级123', '子菜单14', '菜单15', '123_子菜单123'],
		        icon: "roundRect",
		        itemWidth: 20,  // 设置宽度
		        itemHeight: 8, // 设置高度
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['2019-02-10','2019-02-20','2019-02-21','2019-02-22'],
		        splitLine:{show: true},
		        axisTick: {show: false},
		        axisLine:{
                        lineStyle:{
                            color:'#8FA3B7',//x轴颜色
                            width:2,//这里是为了突出显示加上的
                        }
                    },
                 axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#6D6D6D',
                            fontSize : 15      //更改坐标轴文字大小
                            }
                        }
		    },
		    yAxis: {
		        type: 'value',
		        boundaryGap: false,
		        splitLine:{show: true},
		        axisTick: {show: false},
		        axisLine:{
                        lineStyle:{
                            color:'#8FA3B7',//y轴颜色
                            width:2,//这里是为了突出显示加上的
                        }
                    },
                axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#6D6D6D',
                            fontSize : 15      //更改坐标轴文字大小
                            }
                        }
		    },
		    series: [
		        {
		            name:'菜单一',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                lineStyle: {
		                    width:4//折线粗细
		                    },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#32ccbc'},
		                        {offset: 1, color: '#90f7ec'}
		                            ]
		                    )
		                 }
		            },
		            data:[1,0,1,0]
		        },
		        {
		            name:'子菜单12',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#f55555'},
		                        {offset: 1, color: '#fccf31'}
		                            ]
		                    )
		                 },
		                 
		            },
		            data:[1,1,0,0]
		        },
		        {
		            name:'子菜单13',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#3977E6'},
		                        {offset: 1, color: '#37BBF8'}
		                            ]
		                    )
		                 }
		            },
		            data:[0,1,0,0]
		        },
		        {
		            name:'子菜单21',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#f55555'},
		                        {offset: 1, color: '#fccf31'}
		                            ]
		                    )
		                 },
		                 
		            },
		           data:[0,0,1,0]
		        },
		        {
		            name:'菜单2子',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#f55555'},
		                        {offset: 1, color: '#fccf31'}
		                            ]
		                    )
		                 },
		                 
		            },
		            data:[0,0,0,0]
		        },
		        {
		            name:'菜单二',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#f55555'},
		                        {offset: 1, color: '#fccf31'}
		                            ]
		                    )
		                 },
		                 
		            },
		            data:[1,1,0,0]
		        },
		        {
		            name:'123菜',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#f55555'},
		                        {offset: 1, color: '#fccf31'}
		                            ]
		                    )
		                 },
		                 
		            },
		            data:[1,0,1,1]
		        },
		        {
		            name:'xiaoca16',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#f55555'},
		                        {offset: 1, color: '#fccf31'}
		                            ]
		                    )
		                 },
		                 
		            },
		            data:[1,0,1,1]
		        },
		        {
		            name:'一级123',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#f55555'},
		                        {offset: 1, color: '#fccf31'}
		                            ]
		                    )
		                 },
		                 
		            },
		            data:[0,1,1,1]
		        },
		        {
		            name:'子菜单14',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#f55555'},
		                        {offset: 1, color: '#fccf31'}
		                            ]
		                    )
		                 },
		                 
		            },
		            data:[1,1,1,1]
		        },
		        {
		            name:'菜单15',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#f55555'},
		                        {offset: 1, color: '#fccf31'}
		                            ]
		                    )
		                 },
		                 
		            },
		            data:[1,0,1,1]
		        },
		        {
		            name:'123_子菜单123',
		            type:'line',
		            stack: '总量',
		            smooth:true,  //这个是把线变成曲线
		            symbolSize: 10,   //设定实心点的大小
		            itemStyle: {
		             normal: {
		                 lineStyle: {
		                     width:4//折线粗细
		                     },
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#f55555'},
		                        {offset: 1, color: '#fccf31'}
		                            ]
		                    )
		                 },
		                 
		            },
		            data:[1,0,0,1]
		        }
		    ]
		};