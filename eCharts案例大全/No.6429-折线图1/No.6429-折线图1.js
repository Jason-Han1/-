option = {
    color: ['#00f2f1', '#ed3f35'],
    title: {
        // text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        textStyle: {
            color: '#4c9bfd'
        },
        top: '10%',
        right: '10%',
    },
    grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        show: true,
        borderColor: '#012f4a',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data:[
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#4c9bfd',
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#4c9bfd',
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: '#012f4a',
            }
        }
    },
    series: [
        {
            name: '新增粉丝',
            type: 'line',
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            smooth: true,
        },
        {
            name: '新增游客',
            type: 'line',
            smooth: true,
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        }
    ]
};