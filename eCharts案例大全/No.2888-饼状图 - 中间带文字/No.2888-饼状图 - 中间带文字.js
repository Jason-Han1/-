option = {
    tooltip: {
        show: false,
    },
    backgroundColor: '#000',
    legend: {
        type: 'scroll',
        top: 'middle',
        right: '10%',
        icon: 'rect',
        itemWidth: 12,
        itemHeight: 12,
        pageIconColor: '#00EBFF',
        pageIconInactiveColor: 'rgba(0, 235, 255, 0.4)',
        pageTextStyle: {
            color: '#FFF'
        },
        textStyle: {
            color: '#AFEBFF',
            rich: {
                label: {
                    width: 64,
                    fontSize: 14,
                    fontWeight: 500,
                    align: 'center',
                },
                numbers: {
                    width: 40,
                    color: '#FFF',
                    fontSize: 16,
                    fontWeight: 500,
                    align: 'right',
                },
                percent: {
                    width: 54,
                    align: 'left',
                    fontSize: 16,
                },
            },
        },
        formatter: (name) => {
            const number = Math.ceil(Math.random()*100); 
            return `{label|${name}}{numbers|${number}}{percent|(445%)}`;
        },
        orient: 'vertical',
        data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj'],
    },
    color: ['#30d385', '#ffd300', '#ff9902', '#ff0200', '#990099', '#990000'],
    series: {
        name: '',
        type: 'pie',
        hoverAnimation: false,
        center: ['40%', '50%'],
        radius: ['45%', '55%'],
        data: [
            { name: '优', value: '14' },
            { name: "良", value: "129" },
            { name: "轻度污染", value: "12" },
            { name: "中度污染", value: "2" },
            { name: "重度污染", value: "2"},
            { name: "严重污染", value: "1" },
            { name: "aa", value: "1" },
            { name: "bb", value: "1" },
            { name: "cc", value: "1" },
            { name: "dd", value: "1" },
            { name: "ee", value: "1" },
            { name: "ff", value: "1" },
            { name: "gg", value: "1" },
            { name: "hh", value: "1" },
            { name: "ii", value: "1" },
            { name: "jj", value: "1" },
            { name: "kk", value: "1" },
        ],
        label: {
            normal: {
                show: true,
                position: 'center',
                color: '#4c4a4a',
                formatter: () => {
                    return `{label|优良天数}\n\r{numbers|34}`
                },
                rich: {
                    label: {
                        height: 28,
                        verticalAlign: 'middle',
                        fontSize: 14,
                        color: '#AFEBFF',
                    },
                    numbers: {
                        fontSize: 16,
                        fontWeight: 600,
                        color: '#FFF',
                    },
                },
            },
        },
    },
};
