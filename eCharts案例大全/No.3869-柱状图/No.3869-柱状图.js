var getname= ['35岁以下','36-45岁','46-55岁','55岁以上'];
var getvalue= [55,46,30,23];
option = {
    backgroundColor: '#fff',
    grid: {
        top: '8%',
        right: '6%',
        left: '6%',
        bottom: '15%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: getname,
        axisLabel: {
            interval:0,  
            rotate:0  ,
            margin: 10,
            color: '#B6E7FF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(49,218,255,0.5)',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        name:'%',
        nameTextStyle:{
            color: '#B6E7FF',
            },
        //min: 0,
        //max: 100,
        axisLabel: {
            formatter: '{value}',
            color: '#B6E7FF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#46C4FF',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(49,218,255,0.5)',
                type: 'dashed',
            }
        }
    }],
    series: [{
        type: 'bar',
        data:getvalue ,
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00FFF6' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#1D82FF' // 100% 处的颜色
                }], false),
                barBorderRadius: [3, 3, 0, 0],
            }
        },
    }]
};