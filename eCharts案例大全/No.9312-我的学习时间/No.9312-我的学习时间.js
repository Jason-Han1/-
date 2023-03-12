var morning = [61,14,36,66];
var night = [22,33,52,46];
var other = [10,24,11,52];
var time = ['10-01','10-02','10-03','10-04']
option = {
    backgroundColor:'#fff',
    xAxis: {
        type: 'category',
        data: time,
        axisLine:{
            lineStyle:{
                color:'#999'
            }
        },
        axisTick:{
            show:false
        }
    },
    legend:{
        data:['早上','晚上','零碎时间'],
        orient:'inside',
        right:10,
        top:10,
        selectedMode:false
    },
    tooltip:{
        trigger: 'axis'
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
            show:true,
            lineStyle:{
                color:'#eee'
            }
        },
        splitNumber:3
    },
    series: [
        {
            data: morning,
            type: 'bar',
            stack:'时间',
            name: '早上',
            itemStyle: {
                normal: {
                    color: '#4ab537'
                }
            },
            barWidth:'30%'
        },
        {
            data: night,
            type: 'bar',
            stack:'时间',
            name: '晚上',
            itemStyle: {
                normal: {
                    color: '#13a4ee'
                }
            },
            barWidth:'30%'
        },
        {
            data: other,
            type: 'bar',
            stack:'时间',
            name: '零碎时间',
            itemStyle: {
                normal: {
                    
                    color: '#ff8d07'
                }
            },
            barWidth:'30%'
        }
    ]
};
