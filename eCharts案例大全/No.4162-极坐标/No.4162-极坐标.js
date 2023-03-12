var cw = document.body.clientHeight / 70;
//饼图等的用这个
var tooltipAxis = {
    trigger: 'axis',
    backgroundColor:'rgba(26,34,126,.9)',
    padding:10,
    borderRadius: 4,
    textStyle:{
        fontSize:12,
    },
    extraCssText:'box-shadow:0 0 18px rgba(255,255,255,0.2)'
}


option = {
    backgroundColor:'#03112b',
    
    tooltip:tooltipAxis,
    
    grid: {
        top: 80,
        bottom: 30
    },
    
    angleAxis: {
        type: 'category',
        data: ['沧市1号储备点', '运河区储备点', '新华区储备点', '泊头市储备点', '任丘市储备点', '黄骅市储备点', '河间市储备点', '海兴县储备点', '南皮县储备点'],
        splitLine: { // 分隔线
            show: false, // 默认显示，属性show控制显示与否
            // onGap: null,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['rgba(207,238,252,0.2)'],
                width: 1,
                type: 'solid'
            }

        },
        
        axisLine: {             // 坐标轴线
            show: true,      // 默认显示，属性show控制显示与否
            lineStyle: {      // 属性lineStyle控制线条样式
                color: 'rgba(207,238,252,0.2)',
                width: 1,
                type: 'solid'
            },
        },
        axisTick: {            // 坐标轴小标记
            show: false,       // 属性show控制显示与否，默认不显示
            inside : false,      // 控制小标记是否在grid里
            length :5,          // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: 'rgba(207,238,252,0.2)',
                width: 1
            }
        },
        axisLabel:{
            color:'#fff',
            fontSize:1.2*cw
        },
   
    },
    
    radiusAxis: {
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: 'rgba(207,238,252,0.2)'
            }
        },
         axisLabel:{
            color:'#fff',
            fontSize:1.2*cw
        },axisTick: {            // 坐标轴小标记
            show: true,       // 属性show控制显示与否，默认不显示
            inside : false,      // 控制小标记是否在grid里
            length :5,          // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: 'rgba(207,238,252,1)',
                width: 1
            }
        },
    
    },
    
    polar: {
        z:0,
        center: ['50%', '50%'],
        radius: ['16%', '90%'],
    },
    series: [{
        type: 'bar',
        data: [12, 24, 33, 44, 43, 45, 41, 41, 43],
        coordinateSystem: 'polar',
        name: '存储总量',
        stack: 'a',
        color:'rgba(37,213,232,1)',
        z:0,
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1, 1, 3],

        coordinateSystem: 'polar',
        name: '领用总量',
        stack: 'a',
        color:'rgba(0,100,252,1)',
        z:0,
    }],
    legend: {
        show: true,
        right:0,
        top:0,
        data: ['存储总量', '领用总量'],
        icon:'rect',
        itemWidth:10,
        itemHeight:10,
        textStyle:{
            color:'#fff',
        }
    }
};