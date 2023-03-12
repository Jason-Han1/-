option = {
    backgroundColor: '#121B2C',         //背景色
    legend: {
        data: ['测试AAA', '测试BBB'],
        icon: 'rect',
        itemHeight: 2,  // 设置高度
        textStyle:{     //图例文字的样式
            color:'#fff',
            fontSize:12
        },
    },
	tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        // formatter: "{b0}: {c0}"
    },
    xAxis: {
        type: 'category',
        axisTick: {show: false},
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#212649',
            }
        },
        data: ['0点', '2点', '4点', '6点', '8点', '10点', '12点', '14点', '16点', '18点', '20点', '22点'],
    },
    yAxis: {
        name: '单位：次',
        nameTextStyle: {padding: [0, 20, 0, 0], color: '#fff'},
        type : 'value',
        min: 0,
        max: 600,
        interval: 100,
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgba(255, 255, 255, 0.4)' //rgba设置透明度0.4
            }
        },
        splitLine: {show: false},       //横向的线
        axisTick: {show: false},        //y轴的端点
        axisLine: {show: false}         //y轴的线
    },
    animationEasing: 'bounceInOut',   //初始动画的缓动效果
    series: [
        {
            name: '测试AAA',
            type: 'pictorialBar',
            symbol: 'rect',             //图形形状
            symbolRepeat: 'true',       //指定图形元素是否重复
    		symbolMargin: "30%",        //图形的两边间隔
    		symbolClip: true,           //是否剪裁图形
    		symbolSize: ['20%', '10%'],  //图形的大小
    		itemStyle: {
				normal: {
					color: '#03d190'
				}
			},
            data: [144,445,434,398,288,180,550,98,123,331,444,33]
        },
        {
            name: '测试BBB',
            type: 'pictorialBar',
            symbol: 'rect',             //图形形状
            symbolRepeat: 'true',       //指定图形元素是否重复
    		symbolMargin: "30%",        //图形的两边间隔
    		symbolClip: true,           //是否剪裁图形
    		symbolSize: ['20%', '10%'], //图形的大小
    		itemStyle: {
				normal: {
					color: '#f9d171'
				}
			},
    		symbolOffset: ['130%',0],   //偏移
            data: [444,145,234,98,488,580,250,317,127,88,38,565]
        },
        {
            name: '测试AAA最大值',
            type: 'pictorialBar',
            z: 0,
            tooltip:{show:false},
            itemStyle: {
    			normal: {
    				// color: '#51c0ff'
    				color: 'rgba(81, 192, 255, 0.2)' //rgba设置透明度0.2
    			}
    		},
            symbol: 'rect',             //图形形状
            animationDuration: 0,       //初始动画的时长
            symbolRepeat: 'fixed',      //指定图形元素是否重复
    		symbolMargin: "30%",        //图形的两边间隔
    		symbolClip: true,           //是否剪裁图形
    		symbolSize: ['20%', '10%'],  //图形的大小
    		symbolPosition: "start",
            data: [600,600,600,600,600,600,600,600,600,600,600,600]
        },
        {
            name: '测试BBB最大值',
            type: 'pictorialBar',
            z: 0,
            tooltip:{show:false},
            itemStyle: {
    			normal: {
    				// color: '#51c0ff'
    				color: 'rgba(81, 192, 255, 0.2)' //rgba设置透明度0.2
    			}
    		},
            symbol: 'rect',             //图形形状
            animationDuration: 0,       //初始动画的时长
            symbolRepeat: 'fixed',      //指定图形元素是否重复
    		symbolMargin: "30%",        //图形的两边间隔
    		symbolClip: true,           //是否剪裁图形
    		symbolSize: ['20%', '10%'],  //图形的大小
    		symbolPosition: "start",
    		symbolOffset: ['130%',0],   //偏移
            data: [600,600,600,600,600,600,600,600,600,600,600,600]
        }
    ]
};