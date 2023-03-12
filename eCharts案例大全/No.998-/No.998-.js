option = {
    tooltip: {
        trigger: 'item',
    },
    backgroundColor: '#01091B',
    legend: {
        top: '5%',
        left: 'center',
    },
    data: ['#01091B'],
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['17%', '30%'],
            avoidLabelOverlap: false,
            roseType: 'area',
            itemStyle: {},

            emphasis: {
                label: {
                    show: true,
                },
            },
            labelLine: {
                show: true,
                showAbove: true,
                length: 40,
                length2: 30,
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
            ],
        },
        {
            name: 'Access From',
            type: 'pie',
            radius: ['10%', '12%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                scale: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: '#00E3FF',
            },
            data: [
                {
                    value: 1048,
                    name: 'Search Engine',
                    //   itemStyle:{
                    //     color:'#00E3FF'
                    // }
                    itemStyle: { normal: { color: '#00E3FF' }, emphasis: { color: '#00E3FF' } },
                },
            ],
        },
        {
            name: 'Access From',
            type: 'pie',
            radius: '5%',
            data: [
                {
                    value: 1048,
                    name: 'Search Engine',
                    itemStyle: { normal: { color: '#01091B' }, emphasis: { color: '#01091B' } },
                },
            ],
            emphasis: {
                scale: false,
            },
            label: {
                show: false,
            },
        },
        {
            name: 'Access From',
            type: 'pie',
            radius: ['32%', '33%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                scale: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: '#073A48',
            },
            data: [
                {
                    value: 1048,
                    name: 'Search Engine',
                    //   itemStyle:{
                    //     color:'#00E3FF'
                    // }
                    itemStyle: { normal: { color: '#073A48' }, emphasis: { color: '#073A48' } },
                },
            ],
        },
        {
            name: 'Access From',
            type: 'pie',
            radius: ['36%', '37%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                scale: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: '#073A48',
            },
            data: [
                {
                    value: 1048,
                    name: 'Search Engine',
                    //   itemStyle:{
                    //     color:'#00E3FF'
                    // }
                    itemStyle: { normal: { color: '#073A48' }, emphasis: { color: '#073A48' } },
                },
            ],
        },
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '41%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                scale: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                shadowBlur: 2,
                shadowColor: '#073A48',
            },
            data: [
                {
                    value: 1048,
                    name: 'Search Engine',
                    //   itemStyle:{
                    //     color:'#00E3FF'
                    // }
                    itemStyle: { normal: { color: '#073A48' }, emphasis: { color: '#073A48' } },
                },
            ],
        },
    ],
};
