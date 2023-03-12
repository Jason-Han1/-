var  getname=['学前教育系','初等教育系','语言文学系','音乐舞蹈系','经济管理系'];
var  getvalue=[600,700,800,900,500];
var  getdata=[500,800,900,600,400];


option = {
    backgroundColor:'000',
    legend: {
        show: true,
        x: '2%',
        y: '1%',
        itemWidth: 30,
        itemHeight: 16,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        data:['必修课','选修课']
    },
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
            return ''+params[0].name+ '：<br>'+params[0].seriesName+'：' + params[0].value+'万元<br>'+params[1].seriesName+'：' + params[1].value+'万元'
        }
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
        name: '必修课',
        type: 'bar',
        data: getvalue,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00C0F0' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#6569FF' // 100% 处的颜色
                }], false),
                barBorderRadius: [5, 5, 0, 0],
            }
        },
    },{
        name: '选修课',
        type: 'bar',
        data: getdata,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1BDFCA' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#08DE95' // 100% 处的颜色
                }], false),
                barBorderRadius: [5, 5, 0, 0],
            }
        },
    }]
};