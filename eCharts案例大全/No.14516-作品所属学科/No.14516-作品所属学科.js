option = {
    backgroundColor:'#062135',
    color: ['#3398DB'],
    tooltip: {
        show:false,
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        data: ['工学', '管理学', '财经商贸', '旅游', '文化艺术', '公共管理', '艺术学', '文学', '教育与体育', '理工类'],
        axisLine:{
            lineStyle:{
                color:'rgba(53,153,196,0.6)'
            }
        },
        axisLabel:{
            color:'#fbc52c',
            fontSize:12
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        }
    },
    yAxis: {
        name:'人数',
        nameTextStyle:{
            color:'#fbc52c',
            fontSize:12,
            padding:[0,30,10,0]
        },
        axisLine:{
            lineStyle:{
                color:'rgba(53,153,196,0.6)'
            }
        },
        axisLabel:{
            color:'#fbc52c',
            fontSize:12
        },
        splitLine:{
            lineStyle:{
                color:'rgba(251,197,44,0.3)',
                type:'dotted'
            }
        },
    },
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '50%',
        data: [62, 17, 25, 8, 10, 5, 12, 40, 25, 58]
    }, ],
    label: {
        normal: {
            show: true,
            position: 'top',
            formatter: '{c}'
        }
    },
    itemStyle: {
        normal: {
            color: '#fbc52c',
        }
    }
};