option = {
    title: {
        text: '转诊次数',
        left: '5%',
        top: '15',
        textStyle: {
            fontWeight: '400',
            color: '#000',
            fontSize: 16,
        },
    },
    legend: {
        data: ['转诊量'],
        top: '10%',
        right: '4%',
        textStyle: {
            color: '#747474',
        },
    },
    tooltip: {
        //   trigger: "item", //默认效果
        //柱状图加阴影
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
            },
        },
    },
    grid: {
        top: '30%',
        left: '5%',
        right: '5%',
        bottom: '8%',
        containLabel: true,
    },
    color: ['#31c2b0'],
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '转诊量',
            data: [38, 42, 50, 157, 40, 45, 60, 140, 36, 47, 54, 143],
            barWidth: 15,
            type: 'bar',
        },
    ],
};
