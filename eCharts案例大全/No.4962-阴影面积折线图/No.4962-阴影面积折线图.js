var  getname=['周一','周二','周三','周四','周五','周六','周日'];
var  getvalue=[60,70,80,90,50,65,49];


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
        formatter: '{a0}<br/>{b0}: {c0}元',
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
        name: '本周消费金额',
        type: 'line',
        data: getvalue,
        symbol: 'circle',
        symbolSize: 0,
        /*itemStyle: {
            normal: {
                color: '#FFF',
                borderColor: '#94DDFF',
                borderWidth: 3
            },
        },*/
        lineStyle: {
            normal: {
                width: 3,
                color: '#94DDFF',
                shadowColor: 'rgba(148, 221, 255, 0.17)',
                shadowBlur: 6,
                shadowOffsetY: 8,
            }
        },
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0,0,0,1,[{
						offset: 0,
						color: 'rgba(148, 221, 255, 0.4)',

						},
						{
						offset: 1,
						color: 'rgba(148, 221, 255, 0.1)',
					}],false),
						}
				},
    }]
};