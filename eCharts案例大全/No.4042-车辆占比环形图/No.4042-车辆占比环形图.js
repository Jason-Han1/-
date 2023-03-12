option = {
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        show: true,
        right: '14%',
        y: 'center',
        itemWidth: 4,
        itemHeight: 30,
        itemGap: 20,
        textStyle: {
            color: '#c0c4cc',
            fontSize: 14,
            lineHeight: 20,
            rich: {
                percent: {
                    color: '#fff',
                    fontSize: 16,
                },
            },
        },
        formatter: (name) => {
            switch (name) {
                case '公交':
                    return '公交\r\n{percent|30%} ' + ' ' + 30;
                case '地铁':
                    return '地铁\r\n{percent|22%} ' + ' ' + 22;
                case '网约':
                    return '网约\r\n{percent|22%} ' + ' ' + 22;
                case '出租':
                    return '出租\r\n{percent|16%} ' + ' ' + 16;
                case '私家':
                    return '私家\r\n{percent|8%} ' + ' ' + 8;
                default:
                    break;
            }
        },
    },
    series: [
        {
            name: '出行方式',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#ffffff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 30, name: '公交'},
                {value: 22, name: '地铁'},
                {value: 22, name: '网约'},
                {value: 16, name: '出租'},
                {value: 8, name: '私家'}
            ]
        }
    ]
};