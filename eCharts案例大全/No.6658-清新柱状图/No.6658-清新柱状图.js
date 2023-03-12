
// 置入DOM方式
// var myChart = echarts.init(document.getElementById('chart1'));
// myChart.setOption(option1);
// 浏览器窗口大小变化后，图标自适应缩放
// window.onresize=function(){myChart.resize()};


option = {
    grid:{
        top:60,
        left:50,
        bottom:60,
        right:60
    },
    xAxis: {
        type: 'category',
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        },
        axisLabel:{
            color:'#4D4D4D',
            fontSize:14,
            margin:21,
            fontWeight:'bold'
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    yAxis: {
        name:'单位：万',
        nameTextStyle:{
            color:'#808080',
            fontSize:12,
            padding:[0, 0, 0, -5]
        },
        max: function(value) {
            if(value.max<5){
                return 5
            }else{
                return value.max
            }
        },
        type: 'value',
        axisLine:{
            show:false
        },
        axisLabel:{
            color:'#808080',
            fontSize:12,
            margin:5
        },
        splitLine:{
            lineStyle:{
                color:'#F2F2F2',
                opacity:1,
                width:1
            }
        },
        axisTick:{
            show:false
        }
    },
    series: [{
        label:{
            show:true,
            position:'top',
            fontSize:14,
            color:'#3D8BF0',
            fontWeight:'bold'
        },
        barMaxWidth:60,
        itemStyle:{
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#3D8BF0' // 0% 处的颜色
                }, {
                    offset: 1, color: '#CCE2FF' // 100% 处的颜色
                }]
            }
        },
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};
