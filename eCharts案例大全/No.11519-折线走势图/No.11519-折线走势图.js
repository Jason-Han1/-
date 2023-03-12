option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['邮件营销','联盟广告','视频广告'],
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
		        data: ['周一','周二','周三','周四','周五','周六','周日'],
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
		            name:'邮件营销',
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
		            data:[120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name:'联盟广告',
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
		            data:[220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name:'视频广告',
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
		            data:[150, 232, 201, 154, 190, 330, 410]
		        }
		    ]
		};