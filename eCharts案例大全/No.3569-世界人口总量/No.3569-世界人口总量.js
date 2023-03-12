option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        right: 0,
    width: "20%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
        type: 'value',
    },
        {
            type: 'value',
            show: false,
            name: '款项',
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
        dataset: {
          // 提供一份数据。
          source: [
        ['product', '目前工期',  '2013年','预计工期', '2014年'],
        ['项目进度', 12,884, 35,994],
      ]
        },
        color: ["#7A79FB", "#9F50FA", "#55AAFC", "#3340FB"],
    yAxis: {
        type: 'category',
    axisLabel: {
      fontSize: 30
    }
    },
    series: [
        {
            type: 'bar',
            label: {
                show: true,
                position: 'right',
                formatter: '{@[1]} 周'
            },
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            label: {
                show: true,
                position: 'right',
                formatter: '{@[3]} 周'
            },
        },
        {
            type: 'bar',
            label: {
                show: true,
                position: 'right',
                formatter: '{@[2]} 万'
            },
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            label: {
                show: true,
                position: 'right',
                formatter: '{@[4]} 万'
            },
        }
    ]
};