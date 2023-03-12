option = {
    backgroundColor:'#062135',
    color: ['#39e7fb'],
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
        data: ['02-14', '02-14', '02-14', '02-14', '02-14', '02-14', '02-14', '02-14', '02-14', '02-14'],
        axisLine:{
            lineStyle:{
                color:'#33d9ed'
            }
        },
        axisLabel:{
            color:'#fff',
            fontSize:12
        },
        axisTick: {
            show: false,
        }
    },
    yAxis: {
        name:'数量',
        nameTextStyle:{
            color:'#39e7fb',
            fontSize:12,
            padding:[0,30,10,0]
        },
        axisLine:{
            lineStyle:{
                color:'#33d9ed'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel:{
            color:'#fff',
            fontSize:12
        },
        splitLine:{
            lineStyle:{
                color:'#2c3d89',
                type:'dotted'
            }
        },
    },
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '40%',
        data: [2620, 1700, 2500, 800, 1000, 500, 1200, 2400, 2500, 1580]
    }, ],
    itemStyle: {
        normal: {
            color: '#39e7fb',
            barBorderRadius:17,
        },
    }
};