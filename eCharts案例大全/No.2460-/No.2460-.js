var preWeekData = [200,300,200,188,300,400,380];
var curWeekData = [200,300,200,188,300,400,380];
var option = {
    backgroundColor:'#02296E',
    legend: {
        icon: 'rect',
        top: '5%',
        right: '10%',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 60,
        textStyle: {
            color: '#A0A2B1',
            fontSize: 10,
        },
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        top: '20%',
        containLabel: true,
    },
    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 100,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255, 255, 255, .1)',
                },
            },
            axisLabel: {
                show: true,
                color: 'rgba(149, 182, 227, 1)',
                fontSize: '14',
                formatter: '{value}个',
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitNumber: 5,
        },
        {
            type: 'value',
            position:'right',
            // boundaryGap: [0, 0.01],
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255, 255, 255, .1)',
                },
            },
            axisLabel: {
                show:true,
                color: '#fff',
                fontSize: '14',
                formatter: '{value}分钟',
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitNumber: 4,
        },
    ],
    xAxis: {
        type: 'category',
        data: ['1年级', '2年级', '3年级', '4年级', '5年级', '6年级'],
        axisLabel: {
            color: '#fff',
            fontSize: '12',
            lineHeight: 20,
            formatter: function (params, index) {
                // console.log(params)
                return params.slice(0, 4) + '\n' + params.slice(4, params.length);
                // 	return '{}' + '\n' + '{b|' +
                // 		params + '}';
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            },
        },
    },

    series: [
        {
            name: `人均跳绳`,
            type: 'bar',
            yAxisIndex: 0,
            barMinHeight: 5,
            barWidth: '10px',
            barGap: '1px',
            label: {
                show: false,
                position: 'top',
                color: '#fff',
                fontWeight: 'normal',
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#27627E', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#27627E', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                    // barBorderRadius: [30, 30, 0, 0],
                },
            },
            data: preWeekData,
        },
        {
            name: `人均用时`,
            type: 'bar',
            yAxisIndex: 1,
            barMinHeight: 5,
            data: curWeekData,
            barWidth: '10px',
            label: {
                show: false,
                position: 'top',
                color: '#fff',
                fontWeight: 'normal',
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#2B6CFF', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#2B6CFF', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                    // barBorderRadius: [30, 30, 0, 0],
                },
            },
            // color: '#2B6CFF',
        },
    ],
};
