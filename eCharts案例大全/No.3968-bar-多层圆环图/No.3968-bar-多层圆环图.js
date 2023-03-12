option = {
    color:['#00ffc7','#00aeff'],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    },
    angleAxis: {
        max:100,
        axisLine:{
            show:false
        },
        splitLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            show:false
        }
    },
    radiusAxis: {
        name:'回家吧',
        nameLocation:'start',
        nameTextStyle:{
          padding:[50,0,0,0],
          color:'#000',
          fontSize:20
        },
        type: 'category',
        data:['测试条线'],
        z: 10,
        axisLine:{
            show:false
        },
        splitLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            show:false
        }
    },
    polar: {
        radius:['30%','50%']
    },
    series: [{
        type: 'bar',
        data: [60],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
        emphasis: {
            focus: 'series'
        },
        showBackground:true,
        backgroundStyle:{
            color:'rgba(180, 180, 180, 0.2)'
        }
    }, {
        type: 'bar',
        data: [70],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'b',
        emphasis: {
            focus: 'series'
        },
        showBackground:true,
        backgroundStyle:{
            color:'rgba(180, 180, 180, 0.2)'
        }
    }]
};