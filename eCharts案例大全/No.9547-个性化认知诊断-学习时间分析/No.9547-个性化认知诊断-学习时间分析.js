var Stu = [120,0];
var Group = [0,200];
option = {
    backgroundColor:'#fff',
    xAxis: {
        type: 'category',
        data: ['个人', '整体'],
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
    cursor:'default',
    series: [
        {
            data: Stu,
            type: 'bar',
            name: '',
            barGap: '-100%',
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
            barWidth:'30%'
        },
        {
            data: Group,
            type: 'bar',
            name: '',
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
            barWidth:'30%'
        }
    ]
};
