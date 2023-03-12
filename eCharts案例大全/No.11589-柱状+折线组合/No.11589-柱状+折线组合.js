
option = {
    color:['#5b9bd5','#ed7d31'],
    backgroundColor: '#FFF',
    grid:{
        
        top:20,
        bottom:80,
        left:'12%',
        right:'12%'
    },
    legend: {
        bottom:'10',
        itemWidth:30,
        itemHeight:6,
        data:['逐月总逆温日','逐月PM2.5浓度']
    },
    xAxis: [
        {
            name:'月份',
            nameLocation:'center',
            nameGap: 30,
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            splitLine: {
                show:true,
                lineStyle:{
                    color:'#CCC'
                }
            },
            data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        }
    ],
    yAxis: [
        {
            
            name: '月逆温日（d）',
            nameLocation:'center',
            nameGap: 40,
            nameTextStyle:{
                color:'#000'
            },
            axisLine:{
                lineStyle:{
                    color:'#CCC'
                },
            },
            axisTick:{
                show:false
            },
            splitLine: {
                show:true,
                lineStyle:{
                    color:'#CCC'
                }
            },
            axisLabel:{
                color:'#000'
            }
        },
        {
            
            name: 'PM2.5浓度（μg/m3）',
            nameLocation:'center',
            nameGap: 40,
            nameTextStyle:{
                color:'#000'
            },
            axisLine:{
                lineStyle:{
                    color:'#CCC'
                },
            },
            axisTick:{
                show:false
            },
            splitLine: {
                show:false
            },
            axisLabel:{
                color:'#000'
            }
        }
    ],
    series: [
        {
            name:'逐月总逆温日',
            type:'bar',
            barWidth: '40%',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'逐月PM2.5浓度',
            type:'line',
            yAxisIndex:1,
            itemStyle:{
                opacity:0
            },
            lineStyle:{
                width:4
            },
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }
    ]
};
