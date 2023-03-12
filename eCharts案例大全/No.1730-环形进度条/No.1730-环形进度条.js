// 副标题
let subtext = '完成率';
// 最大值
let max = 100;
let chartData = {
    planComplete: 100,
    realComplete: 86
};
data = chartData.realComplete / chartData.planComplete * 100  + '';
option = {
    backgroundColor: '#313131',
    title: {
        text: `${data}%`,
        subtext,
        left: 'center',
        top: '35%',
        itemGap: 0,
        textStyle: {
            color: '#FFFFFF',
            fontSize: '25',
            fontWeight: 400
        },
        subtextStyle: {
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '17',
            fontWeight: 400,
            lineHeight: '30'
        }
    },
    angleAxis: {
        max,
        // 隐藏刻度线
        show: false,
        startAngle: 270
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
            show: false
        },
    },
    polar: {
        radius: '165%' //图形大小
    },
    series: [{
        type: 'bar',
        roundCap: 1,
        data: [data],
        showBackground: true,
        backgroundStyle: {
            color: '#666',
        },
        coordinateSystem: 'polar',
        barWidth: 4,
        itemStyle: {
            normal: {
                color: 'rgb(28,177,108)'
            }
        },
    },// 圆环
        {
            type: 'pie',
            radius: ["88.5%", "89%"],
            center: ["50%", "50%"],
            emptyCircleStyle: {
                color: 'rgb(88, 88, 88)'
            }
        },]
}