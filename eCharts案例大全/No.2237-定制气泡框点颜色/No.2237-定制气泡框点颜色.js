option = {
    grid: { top: '15%', left: '5%', right: '5%', bottom: '20%', containLabel: true },
    yAxis: {
        show: true,
        splitLine: { show: false },
        min: 0,
        axisLine: { show: true },
        type: 'value',
        axisLabel: {
            show: true,
            color: '#fff',
            formatter: (value) => {
                if (value >= 10000) {
                    return `${value / 10000}万`;
                } else {
                    return value;
                }
            },
        },
    },
    xAxis: {
        show: true,
        data: ['2021-08-01', '2021-08-02', '2021-08-03'],
        type: 'category',
        axisLabel: { show: true, color: '#fff' },
        axisTick: { show: false },
    },
		tooltip: {
			show: true,
			trigger: 'axis',
			formatter: (params) => {
				console.log(params)
				const result = params.reduce((last, current) => {
					var dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${current.borderColor}"></span>`
					last += `${dotHtml} ${current.seriesName}: ${current.value}<br/>`;
					return last;
				}, `${params[0].axisValue}<br/>`);
				return result;
			},
		},
    legend: {
        show: true,
        type: 'plain',
        bottom: 15,
        itemHeight: 10,
        itemWidth: 10,
        data: [
            { name: '总费用', icon: 'rect', itemStyle: { color: '#00D3FF', borderWidth: 0 } },
            { name: '可报额', icon: 'rect', itemStyle: { color: '#007DD6', borderWidth: 0 } },
            { name: '报销额', icon: 'rect', itemStyle: { color: '#F7BD08', borderWidth: 0 } },
        ],
        inactiveColor: 'rgba(255,255,255,.5)',
        textStyle: { color: '#fff' },
    },
    color: ['red', 'green', 'blue'],
    series: [
        {
            type: 'line',
            name: '总费用',
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            data: [50017, 50017, 50017],
            lineStyle: { color: '#00D3FF', width: 1 },
            itemStyle: { color: '#071738', borderColor: '#00D3FF' },
        },
        {
            type: 'line',
            name: '可报额',
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            data: [26000, 26000, 26000],
            lineStyle: { color: '#007DD6', width: 1 },
            itemStyle: { color: '#071738', borderColor: '#007DD6' },
        },
        {
            type: 'line',
            name: '报销额',
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            data: [12010, 12010, 12010],
            lineStyle: { color: '#F7BD08', width: 1 },
            itemStyle: { color: '#071738', borderColor: '#F7BD08' },
        },
    ],
};
