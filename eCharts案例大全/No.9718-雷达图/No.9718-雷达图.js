option = {
    title: {
        // text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        splitNumber: 3, 
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '完好率', max: 100},
           { name: '能效比', max: 100},
           { name: '功能性', max: 100},
           { name: '节电率', max: 100},
           { name: 'POD', max: 100},
           { name: '负载率', max: 100}
        ],
        splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0)', // 图表背景的颜色
            },
        },
        splitLine: {                        // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
	            lineStyle: {
	                type: 'dashed',
	                color: 'rgb(60,161,232)',                       // 分隔线颜色
	                width: 1, 							 // 分隔线线宽
	            }
	        },
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [80, 60, 60, 75, 81, 62],
                // name : '预算分配（Allocated Budget）'
            }
        ],
        itemStyle: {                // 单个拐点标志的样式设置。
            normal: {
                borderColor: 'rgb(0,255,255)',       // 拐点的描边颜色。[ default: '#000' ]
                borderWidth: 5,                        // 拐点的描边宽度，默认不描边。[ default: 0 ]
                color: 'rgb(0,255,255)',
            },
        },
        areaStyle:{
            color: 'rgba(0,255,255,0.3)',
        },
    }]
};