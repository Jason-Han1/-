option = {
    backgroundColor: '#11254D',
    title: {
        text: '堆叠区域图',
        textStyle:{
            color:"#fff",
            align:"center"
        },
        top:'3%',
        left:"center",
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['大户','天桥','历下','市中','槐荫'],
        top:"9%",
        right:"4%",
         textStyle: {
			color: '#C2CCEB',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        top:"20%",
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日'],
            axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					color: '#C2CCEB',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 14,
				}
			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#8C3039',
					opacity:0.5
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
            
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					color: '#C2CCEB',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 14,
				}
			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#8C3039',
					opacity:0.5
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
            
        }
    ],
    series : [
        {
            name:'大户',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[20, 15,20, 20, 20,20, 20,]
        },
        {
            name:'天桥',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[20, 22,20, 20, 20,20, 20,]
        },
        {
            name:'历下',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[20, 20,20, 20, 20,20, 20,]
        },
        {
            name:'市中',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[20, 20,20, 20, 20,20, 20,]
        },
        {
            name:'槐荫',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[20, 20,20, 20, 20,20, 20,]
        }
    ]
};
