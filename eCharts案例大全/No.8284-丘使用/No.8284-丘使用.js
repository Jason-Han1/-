var Name = ['听长对话','听短对话','阅读理解','口语表达','概率描述']
var Stu = [120, 80,50,30,70];
option = {
    backgroundColor:'#fff',
    legend:{
        data:['平均得分率(%)'],
        left:20,
        top:7,
        selectedMode: false,
        orient: 'vertical',
    },
    tooltip:{},
    grid:{
        left:'50'
    },
    xAxis: {
        name:'题型',
        type: 'category',
        data: Name,
        axisLine:{
            lineStyle:{
                color:'#999'
            }
        },
        axisTick:{
            show:false
        }
    },
    yAxis: {
        name:'得分率',
        type: 'value',
        axisTick:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:'#999'
            }
        },
        splitLine:{
            show:false
        }
    },
    series: [
        {
            data: Stu,
            type: 'bar',
            name: '平均得分率(%)',
            itemStyle: {
                normal: {
                    barBorderRadius: [6,6,0,0],
                    color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#52a7ff'
                      },
                      {
                        offset: 1,
                        color: '#9bd8f5'
                      }
                    ])
                }
            },
            barWidth:'20%'
        }
    ]
};
