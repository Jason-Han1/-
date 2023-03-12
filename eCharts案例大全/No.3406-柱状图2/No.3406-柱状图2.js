option = {
    backgroundColor: '#000',
    grid: {
        containLabel: true,
        top: 30,
        bottom: 10,
        left: 10,
        right: 10,
    },
    tooltip: {
        trigger: 'item',
        confine: true,
    },
    xAxis: {
        type: 'category',
        data: ['计量支付及合同金额', '总投资', '年总投资计划', '年计划建安投资'],
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: 'rgba(255,255,255,0.75)',
                padding: [0, 0, 0, 0],
                fontSize: 12,
            },
        },
    },
    yAxis: {
        type: 'value',
        name: '(亿元)',
        nameTextStyle: {
            color: 'rgba(255,255,255,0.40)',
            padding: [0, 0, 0, -25],
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#344a53',
            },
        },
        axisLabel: {
            color: 'rgba(255,255,255,0.40)',
        },
    },
    series: [
        {
            stack: '计量支付及合同金额',
            data: [
                {
                    name: '计量支付及合同金额',
                    value: 12,
                    totalAmount: '14.46',
                    Amount: 0,
                    hangInTheAir: 14.46,
                    completionRate: '0%',
                },
                {
                    name: '总投资',
                    value: 4,
                    totalAmount: 0,
                    Amount: 0,
                    hangInTheAir: 0,
                    completionRate: '0%',
                },
                {
                    name: '监理合年总投资计划',
                    value: 5,
                    totalAmount: 0,
                    Amount: 0,
                    hangInTheAir: 0,
                    completionRate: '0%',
                },
                {
                    name: '采购年计划建安投资合同',
                    value: 6,
                    totalAmount: 0,
                    Amount: 0,
                    hangInTheAir: 0,
                    completionRate: '0%',
                },
            ],
            itemStyle: {},
            type: 'bar',
            barWidth: 16,
        },
        
        {
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#0f375f',
                },
            },
            barWidth: 16,
            symbolRepeat: true,
            symbolSize: [15,2],
            symbolMargin: 2,
            z: -10,
            data: [
                {
                    name: '计量支付及合同金额',
                    value: 34,
                    totalAmount: '14.46',
                    Amount: 0,
                    hangInTheAir: 14.46,
                    completionRate: '0%',
                },
                {
                    name: '总投资',
                    value: 24,
                    totalAmount: 0,
                    Amount: 0,
                    hangInTheAir: 0,
                    completionRate: '0%',
                },
                {
                    name: '监理合年总投资计划',
                    value: 25,
                    totalAmount: 0,
                    Amount: 0,
                    hangInTheAir: 0,
                    completionRate: '0%',
                },
                {
                    name: '采购年计划建安投资合同',
                    value: 26,
                    totalAmount: 0,
                    Amount: 0,
                    hangInTheAir: 0,
                    completionRate: '0%',
                },
            ],
        },
    ],
};
