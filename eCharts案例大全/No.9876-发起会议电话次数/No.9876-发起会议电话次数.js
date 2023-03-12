option = {
    title: {
                text: '发起会议电话次数',
                left: 'center',
                top: 10,
                textStyle: {
                    color: '#ccc'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['发起电话会议次数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '60px',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['及时会议电话(次)','预约会议电话(次)']
            },
            yAxis: {
                type: 'value',
                minInterval: 1,
                scale: true
            },
            series: [
                {
                    type: 'bar',
                    lineStyle: {
                        normal: {
                            color: 'rgba(124,181,236)'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(124,181,236)'
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 8,
                    data: [99,18]
                }
            ]
};