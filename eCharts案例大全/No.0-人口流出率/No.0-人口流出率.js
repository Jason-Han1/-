option = {
    color: ['#7BC074', '#709EF1', '#F59363'],
    series: [
        {
            type: 'sankey',
            draggable: false,
            left: '8%',
            right: '8%',
            data: [
                //左点
                { name: '安徽', label: { position: 'left' } },
                { name: '广西', label: { position: 'left' } },
                { name: '江西', label: { position: 'left' } },
                { name: '青海', label: { position: 'left' } },
                { name: '湖南', label: { position: 'left' } },
                { name: '四川', label: { position: 'left' } },
                { name: '湖北', label: { position: 'left' } },
                //右点
                { name: '江苏 ', label: { position: 'right' } },
                { name: '广东 ', label: { position: 'right' } },
                { name: '浙江 ', label: { position: 'right' } },
                { name: '重庆', label: { position: 'right' } }
            ],
            links: [
                { source: '安徽', target: '江苏 ', value: 18.68 },
                { source: '安徽', target: '浙江 ', value: 12.38 },
                { source: '广西', target: '广东 ', value: 30.36 },
                { source: '江西', target: '广东 ', value: 12.48 },
                { source: '江西', target: '浙江 ', value: 12.67 },
                { source: '青海', target: '广东 ', value: 13.47 },
                { source: '青海', target: '浙江 ', value: 11.03 },
                { source: '湖南', target: '广东 ', value: 19.11 },
                { source: '四川', target: '重庆 ', value: 15.02 },
                { source: '湖北', target: '广东 ', value: 11.66 },
            ],
            label: {
                normal: {
                    color: 'rgba(9, 27, 61, 0.6)',
                    fontSize: 14,
                    fontWeight: '400',
                },
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#aaa',
                },
            },
            lineStyle: {
                normal: {
                    color: 'gradient',
                    borderColor: 'black',
                    borderWidth: 0,
                    opacity: 0.3,
                    curveness: 0.6,
                },
            },
        },
    ],
};
