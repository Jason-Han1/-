var  getname=['博士','硕士','学士','其他','未知'];
var  getvalue=[16,34,18,40,30];


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
        formatter: function(params) {
            return ''+params[0].seriesName+ '：<br>'+params[0].name+'：' + params[0].value+''
        }
    },
    xAxis: [{
        data: getname,
        axisLabel: {
			interval: 0,  
            margin: 10,
            color: '#CAEEFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#5A75FF',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        axisLabel: {
            color: '#CAEEFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#5A75FF',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle:{
                color:'#5A75FF',
                opacity:0.4
            }
        }
    }],
	animation: false,
    series: [{
        name: '著作参与',
        type: 'bar',
        data: getvalue,
        barWidth: '36px',
        label: {
                show: true,
                position: 'top',
                color: '#CAEEFF',
                fontSize: 14,
            },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ED11AC' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'transparent' // 100% 处的颜色
                }], false),
                barBorderRadius: [4, 4, 0, 0],
            }
        },
    }]
};