var getvalue = [32];

option = {
    title: {
        text: '年度任务总进度',
        textStyle: {
            color: '#595959',
            fontSize: 14,
        },
        subtext:'年度任务总数：18个',
        subtextStyle:{
            fontSize:  14,
            color:'#8C8C8C'
        },
        itemGap: 20,
        left: 'center',
        bottom: '0',
    },
    angleAxis: {
        max: 100,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
    },
    series: [
        {
            type: 'bar',
            data: getvalue,
            showBackground: true,
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 5,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: '#1890FF',
                },
            },
            z:10
        },
        {
            
            type: 'bar',
            data: [100],
            showBackground: true,
            barGap:'-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 5,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: '#E7E9EB',
                },
            },
        },
        {
            type:'pie',
            data:[1],
            radius:'90%',
            itemStyle:{
                color:'transparent'  
            },
            label:{
                show:true,
                position:'center',
                formatter: getvalue + '%',
                color:'#1890FF',
                fontSize: 24
            }
        }
    ],
};
