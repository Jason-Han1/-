option = {
    legend: {
        data: ['主动安全报警', '驾驶员监测报警'],
    },
	tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        // formatter: "{b0}:{c0}"
    },
    xAxis: {
        type: 'category',
        axisTick: {show: false},
        data: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22'],
    },
    yAxis: {
        name: '单位：次',
        nameTextStyle: {padding: [0, 20, 0, 0], color: '#08c'},
        type : 'value',
        min: 0,
        max: 600,
        interval: 100,
        splitLine: {show: false},       //横向的线
        axisTick: {show: false},        //y轴的端点
        axisLine: {show: false}         //y轴的线
    },
    // animationEasing: 'elasticOut',   //初始动画的缓动效果
    series: [
        {
            name: '主动安全报警',
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
            name: '驾驶员监测报警',
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
            name: '主动安全报警最大值',
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
            name: '驾驶员监测报警最大值',
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