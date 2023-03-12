option = {
    backgroundColor: '#0a1a2a',
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.9)',
        formatter: function (params) {
            return (
                params.seriesName +
                '<br/>' +
                params.marker +
                '<span style="color:' +
                params.color +
                '">' +
                params.data['name'] +
                '\n' +
                params.data['value'] +
                '</span>'
            );
        },
    },
    legend: {
        selectedMode: false,
        orient: 'vertical',
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        right: '10',
        top: 'center',
        textStyle: {
            fontSize: 14,
            color: '#6e69b2',
        },
        data: ['低级', '中级', '⾼级', '极⾼'],
    },
    series: [
        {
            name: '',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            cursor: 'default',
            radius: ['32%', '50%'],
            center: ['45%', '50%'],
            color: [
                'rgba(0, 150, 254, 0.2)',
                'rgba(2, 205, 206, 0.2)',
                'rgba(253, 160, 0, 0.2)',
                'rgba(191, 40, 18, 0.2)',
            ],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            zlevel: 1,
            itemStyle: {
                normal: {
                    borderColor: '#0a1a2a',
                },
                ellipsis: {
                    borderColor: '#0a1a2a',
                },
            },
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 41,
                    name: '',
                },
                {
                    value: 20,
                    name: '',
                },
                {
                    value: 20,
                    name: '',
                },
                {
                    value: 20,
                    name: '',
                },
            ],
        },
        {
            name: '',
            type: 'pie',
            zlevel: 2,
            cursor: 'default',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['37%', '50%'],
            center: ['45%', '50%'],
            color: [
                'rgba(0, 150, 254, 0.5)',
                'rgba(2, 205, 206, .5)',
                'rgba(253, 160, 0, .5)',
                'rgba(191, 40, 18, .5)',
            ],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                normal: {
                    // shadowBlur: 15,
                    // shadowColor: 'rgba(0, 0, 0, 0.5)',
                    borderColor: '#0a1a2a',
                    // borderWidth:'10',
                },
                ellipsis: {
                    borderColor: '#0a1a2a',
                },
            },
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 41,
                    name: '',
                },
                {
                    value: 20,
                    name: '',
                },
                {
                    value: 20,
                    name: '',
                },
                {
                    value: 20,
                    name: '',
                },
            ],
        },
        {
            name: 'title',
            type: 'pie',
            zlevel: 3,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['43%', '50%'],
            center: ['45%', '50%'],
            color: ['rgba(0, 150, 254, 1)', 'rgba(2, 205, 206, 1)', 'rgba(253, 160, 0, 1)', 'rgba(191, 40, 18, 1)'],
            label: {
                show: true,
             
                formatter: (params) => {
                    return `
 ${params.name}: ${params.percent}%
 ${params.data.value}个
 `;
                },
                padding:[0,-30],
                textStyle:{
                    lineHeight:25
                }
            },
            labelLine: {
                show: true,
                // showAbove:true,
                length: 30,
                length2: 50,
                
            },
            itemStyle: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                borderColor: '#0a1a2a',
            },
            data: [
                {
                    value: 41,
                    name: '低级',
                    label: {
                        color: 'rgba(0, 150, 254, 1)',
                    },
                },
                {
                    value: 20,
                    name: '中级',
                    label: {
                        color: 'rgba(2, 205, 206, 1)',
                    },
                },
                {
                    value: 20,
                    name: '⾼级',
                    label: {
                        color: 'rgba(253, 160, 0, 1)',
                    },
                },
                {
                    value: 20,
                    name: '极⾼',
                    label: {
                        color: 'rgba(191, 40, 18, .5)',
                    },
                },
            ],
        },
    ],
};
