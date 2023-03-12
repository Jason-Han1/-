var getname= ['其他','中级','高级','初级','无等级'];
var getvalue= [308,219,188,200,158];
option = {
    backgroundColor: '#0A0934',
    grid: {
        top: '8%',
        right: '6%',
        left: '6%',
        bottom: '10%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: getname,
        axisLabel: {
            interval:0,  
            rotate:0  ,
            margin: 10,
            color: '#CAEEFF',
            textStyle: {
                fontSize: 14
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
        //name:'价值（元）',
        nameTextStyle:{
            color: '#6F84BD',
            },
        //min: 0,
        //max: 100,
        axisLabel: {
            formatter: '{value}',
            color: '#CAEEFF',
            textStyle: {
                fontSize: 14
            },
        },
        axisLine: {
            show:true,
            lineStyle: {
                color: '#5A75FF',
            }
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
    series: [{
        label: {
            show: true,
            fontSize: 14,
            //fontWeight: 'bold',
            position: 'top',
            color: '#CAEEFF',
        },
        type: 'bar',
        data:getvalue ,
        barWidth: '36px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ED11AC' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#0A0934' // 100% 处的颜色
                }], false),
                barBorderRadius: [4, 4, 0, 0],
            }
        },
    }]
};