let backgroundColor = 'rgba(0,0,0,1)';
let chartdata = [233];
let bgcolor = '#ccc';
let itemcolor = '#25BFFF';
let barWidth = 16;
let max = 333;

option = {
    backgroundColor: backgroundColor,
    title: {
        text: ((chartdata[0] * 100) / max).toFixed(2) + '%',
        textStyle: {
            color: '#fff',
            fontSize: 34,
        },
        left: 'center',
        top: 'middle'
    },
    angleAxis: {
        max: max,
        clockwise: false, // 逆时针
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
            data: chartdata,
            showBackground: false,
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: barWidth,
            zlevel: 2,
            label:{
              show:true,
              position:'end',
              backgroundColor:'#fff',
              borderRadius:14,
              formatter:'',
              padding:[12,12],
              distance:-4,
              offset:[-12,0]
            },
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: {
                        type: 'linear', //radial
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0,0,0,0)',
                            },
                            {
                                offset: 0.15,
                                color: 'rgba(255,255,255,0.7)',
                            },
                            {
                                offset: 0.3,
                                color: 'rgba(255,255,255,1)',
                            },
                            {
                                offset: 0.6,
                                color: itemcolor,
                            },
                            {
                                offset: 1,
                                color: itemcolor,
                            },
                        ],
                    },
                },
            },
        },
        {
            type: 'bar',
            data: [max],
            showBackground: false,
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 1,
            barGap: '-50%',
            zlevel: 1,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: {
                        type: 'linear', //radial
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0,0,0,0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,255,255,0.5)',
                            },
                        ],
                    },
                },
            },
        },
        // 内圆
        {
            type:'pie',
            radius:[0,'36%'],
            data:[100],
            hoverAnimation:false,
            itemStyle:{
                color:'rgba(255,255,255,0.1)',
                // echarts5.0以上可以直接用边框，不需用饼图模拟边框
                // borderColor:'rgba(255,255,255,0.5)',
                // borderWidth:2
            },
            label:{
                show:false
            }
        },
        // 饼图模拟内圆边框
        {
            type:'pie',
            radius:['36%','36.5%'],
            data:[100],
            hoverAnimation:false,
            itemStyle:{
                color:'rgba(255,255,255,0.5)',
            },
            label:{
                show:false
            }
        }
    ],
};
