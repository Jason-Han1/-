let arr = [
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
    {
        value: 20,
        name: '',
    },
];
option = {
    backgroundColor: '#fff',
    title: [
        {
            text: 'Process Page',
            textAlign: 'center',
            x: '50%',
            y: '10%',
            textStyle: {
                color: '#8c949a',
                fontSize: 20,
                fontWeight: 'normal',
            },
        },
    ],
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.6)',
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
    legend: [
        {
            // orient: 'vertical',
            x: '70%',
            y: '35%',
            itemWidth: 40,
            itemHeight: 40,
            align: 'left',
            textStyle: {
                fontSize: 14,
                color: '#6e69b2',
            },
            data: ['A', 'B'],
        },
        {
            // orient: 'vertical',
            x: '70%',
            y: '45%',
            itemWidth: 40,
            itemHeight: 40,
            align: 'left',
            textStyle: {
                fontSize: 14,
                color: '#6e69b2',
            },
            data: ['C', 'D'],
        },
        {
            // orient: 'vertical',
            x: '70%',
            y: '55%',
            itemWidth: 40,
            itemHeight: 40,
            align: 'left',
            textStyle: {
                fontSize: 14,
                color: '#6e69b2',
            },
            data: ['E'],
        },
    ],
    series: [
        {
            name: '',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['20%', '25%'],
            center: ['50%', '50%'],
            color: [
                'rgba(80, 224, 245, .7)',
                'rgba(56, 152, 248, .7)',
                'rgba(100, 75, 255, .7)',
                'rgba(246, 148, 60, .7)',
                'rgba(243, 20, 104, .7)',
            ],
            label: {
                normal: {
                    position: 'inner',
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    // shadowBlur: 15,
                    // shadowColor: 'rgba(0, 0, 0, 0.5)',
                    // borderColor:'#0a1a2a',
                    // borderWidth:'10',
                },
            },
            tooltip: {
                show: false,
            },
            data: [],
        },
        {
            name: 'title',
            type: 'pie',
            radius: ['15%', '25%'],
            center: ['50%', '50%'],
            color: [
                'rgba(80, 224, 245, 1)',
                'rgba(56, 152, 248, 1)',
                'rgba(100, 75, 255, 1)',
                'rgba(246, 148, 60, 1)',
                'rgba(243, 20, 104, 1)',
            ],
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    formatter: '{d}%',
                    textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 16,
                        fontWeight: '100',
                    },
                },
            },
            labelLine: {
                normal: {
                    smooth: true,
                    length: 10,
                    lineStyle: {
                        width: 1.5,
                    },
                },
            },
            itemStyle: {
                normal: {
                    shadowBlur: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    //borderColor:'#0a1a2a',
                    // borderWidth:'5',
                },
            },
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 7,
                    name: 'A',
                },
                {
                    value: 3,
                    name: 'B',
                },
                {
                    value: 6,
                    name: 'C',
                },
                {
                    value: 1,
                    name: 'D',
                },
                {
                    value: 1,
                    name: 'E',
                },
            ],
        },
    ],
};
