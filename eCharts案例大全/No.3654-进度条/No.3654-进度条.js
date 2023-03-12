let backgroundColor = 'rgba(0,0,0,1)';
let chartdata = [1111];
let max = 2333;
option = {
    backgroundColor: backgroundColor,
    grid: {
        top: 0,
        left: '10%',
        right: '10%',
        bottom: 0,
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        max: max,
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: "#37ffea",
                    opacity: 0.7,
                    barBorderRadius: 4,
                },
            },
            label:{
              show:true,
              formatter:'',
              backgroundColor:'#fff',
              width:10,
              height:10,
              position:'right',
              offset:[-7,0],
              borderWidth:5,
              borderColor:'rgba(255,255,255,0.2)',
              borderRadius:5,
              shadowColor:'#fff',
              shadowBlur:20
            },
            showBackground: true,
            silent: true,
            barWidth: 5,
            barGap: '-100%', // Make series be overlap
            data: [chartdata],
        },
    ],
};
