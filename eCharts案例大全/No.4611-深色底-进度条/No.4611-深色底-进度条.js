var getdate=['荣誉获奖数', '学术著作与论文数', '科研项目数', '知识产权数', '获奖成果数', '专利发明数', '艺术作品数'];
var getvalue=[892,892,1320,1620,1920,1920,1920];

option = {
    backgroundColor: '#090C39',
    grid: {
        top: '8%',
        right: '5%',
        left: '15%',
        bottom: '8%'
    },
    tooltip: {
        trigger: "axis",
		axisPointer: {
            type:'none'
        },
        formatter:'{b0}：{c0}项'
    },
    title: {
	        text: '单位：项',
	        textStyle: {
	        	align: 'center',
	            color: '#CAEEFF',
	            fontSize: 14,
	            fontWeight:300,
	        },
	        top: '3%',
	        right: '2%',
	    },
    xAxis: [{
        axisLine: {
            show: true,
            lineStyle: {
                color: '#5A75FF',
            }
        },
        axisLabel: {
            margin: 20,
            color: '#CAEEFF',
            textStyle: {
                fontSize: 14
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(90,117,255,0.4)',
                //type: 'dashed',
            }
        }
    }],
    yAxis: [{
        type: 'category',
        axisLabel: {
            margin: 10,
            color: '#CAEEFF',
            textStyle: {
                fontSize: 14
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#5A75FF',
            }
        },
        axisTick: {
            show: false
        },
        data: getdate,
    }],
    series: [{ // 背景色
            name: '实体库',
            type: 'pictorialBar',
            stack: '总量',
            symbol: 'fixed',
            symbolSize: [4, 16],
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            //symbolBoundingData: 400,
            z: -10,
            data: getvalue,
            label: {
                show: true,
                position: 'right',
                fontSize: 14,
                color: '#CAEEFF',
                offset: [0, 0],
            },
            itemStyle: {
                normal: {
                    color: '#ED11AC'
                }
            }
        },
    ]
};