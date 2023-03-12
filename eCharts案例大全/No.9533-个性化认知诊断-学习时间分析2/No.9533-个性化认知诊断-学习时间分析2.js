var Name = ['综合','听力','口语','阅读','写作']
var Stu = [120, 80,50,30,70];
var Group = [80,100,150,10,60];
option = {
    backgroundColor:'#fff',
    legend:{
        data:['个人','整体'],
        right:20,
        top:20,
        selectedMode: false,
        orient: 'vertical',
    },
    tooltip:{},
    xAxis: {
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
        name:'时长（h）',
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
            name: '个人',
            itemStyle: {
                normal: {
                    barBorderRadius: [3,3,0,0],
                    color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ff6c00'
                      },
                      {
                        offset: 1,
                        color: '#ffc938'
                      }
                    ])
                }
            },
            barWidth:'20%'
        },
        {
            data: Group,
            type: 'bar',
            name: '整体',
            itemStyle: {
                normal: {
                    barBorderRadius: [3,3,0,0],
                    color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0079f4'
                      },
                      {
                        offset: 1,
                        color: '#01d2ff'
                      }
                    ])
                }
            },
            barWidth:'20%'
        }
    ]
};
