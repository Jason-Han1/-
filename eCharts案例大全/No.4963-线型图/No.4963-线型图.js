var  getname=['学前教育系','初等教育系','语言文学系','音乐舞蹈系','经济管理系'];
var  getvalue=[600,700,800,900,500];


option = {
    backgroundColor:'000',
    grid: {
        top: '10%',
        right: '5%',
        left: '5%',
        bottom: '5%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{a0}<br/>{b0}: {c0}门',
    },
    xAxis: [{
        data: getname,
        axisLabel: {
			interval: 0,  
            margin: 10,
            color: '#6F84BD',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#46C4FF',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        axisLabel: {
            color: '#6F84BD',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle:{
                color:'#46C4FF',
                opacity:0.3
            }
        }
    }],
	animation: false,
    series: [{
        name: '教师人均年课时量',
        type: 'line',
        data: getvalue,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: '#FFF',
                borderColor: '#94DDFF',
                borderWidth: 3
            },
        },
        lineStyle: {
            normal: {
                width: 3,
                color: '#94DDFF',
                shadowColor: 'rgba(148, 221, 255, 0.17)',
                shadowBlur: 6,
                shadowOffsetY: 8,
            }
        },
    }]
};