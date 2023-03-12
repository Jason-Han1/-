 option = {
            backgroundColor: '#090d1a',
            legend: {
            orient: 'vertical',
            show: true,
            right: '5%',
            y: 'center',
            itemWidth: 30,
            itemHeight: 30,
            itemGap: 20,
            textStyle: {
                color: '#7a8c9f',
                fontSize: 14,
                lineHeight: 20,
                rich: {
                percent: {
                    color: '#fff',
                    fontSize: 16,
                },
                },
            },
            formatter: name => {
                switch (name) {
                case '增值税':
                    return (
                    '增值税\r\n{percent|40%} ' +
                    ' ' 
                    );
                case '所得税':
                    return (
                    '所得税\r\n{percent|10%} ' +
                    ' ' 
                    );
                case '城建税':
                    return (
                    '城建税\r\n{percent|10%} ' +
                    ' '
                    );
                case '教育费附加':
                    return (
                    '教育费附加\r\n{percent|10%} ' +
                    ' '
                    );
                case '地方教育费附加':
                    return (
                    '地方教育费附加\r\n{percent|10%} ' +
                    ' '
                    );
                case '印花、房产、车船、土地使用、土增、环保':
                    return (
                    '印花、房产、车船、土地使用、土增、环保\r\n{percent|10%} ' +
                    ' '
                    );
                case '个人所得税':
                    return (
                    '个人所得税\r\n{percent|10%} ' +
                    ' '
                    );
                case '其他':
                    return (
                    '其他\r\n{percent|10%} ' +
                    ' '
                    );
                default:
                    break;
                }
            },
            },
            tooltip: {
            show: true,
            },
            series: [
            {
                type: 'pie',
                radius: ['0%', '50%'],
                center: ['40%', '50%'],
                hoverAnimation: false,
                z: 10,
                label: {
                position: 'center',
                formatter: () => {
                    return '';
                },
                rich: {
                    total: {
                    fontSize: 30,
                    color: '#fff',
                    },
                },
                color: '#7a8c9f',
                fontSize: 16,
                lineHeight: 30,
                },
                data: [
                {
                    value: 40,
                    name: '增值税',
                    itemStyle: {
                    color: '#0286ff',
                    },
                },
                {
                    value: 10,
                    name: '所得税',
                    itemStyle: {
                    color: '#ffd302',
                    },
                },
                {
                    value: 10,
                    name: '城建税',
                    itemStyle: {
                    color: '#fb5274',
                    },
                },
                {
                    value: 10,
                    name: '教育费附加',
                    itemStyle: {
                    color: '#905205',
                    },
                },
                {
                    value: 10,
                    name: '地方教育费附加',
                    itemStyle: {
                    color: '#400567',
                    },
                },
                {
                    value: 10,
                    name: '印花、房产、车船、土地使用、土增、环保',
                    itemStyle: {
                    color: '#2b7be8',
                    },
                },
                {
                    value: 10,
                    name: '个人所得税',
                    itemStyle: {
                    color: '#4ecc5b',
                    },
                },
                {
                    value: 10,
                    name: '其他',
                    itemStyle: {
                    color: '#00deff',
                    },
                },     
                ],
                labelLine: {
                show: false,
                },
            },
            
            ],
        
        };