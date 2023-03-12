var data = [];
for (var i = 0; i < 8; ++i) {
    data.push({
        name: 'a',
        label: {
            align: 'center',
            position: 'inside'
        },
        children: [{
            name: 'b',
            value: i,
            label: {
                align: 'center',
                position: 'inside'
            }
        }]
    });
}

option = {
    series: {
        radius: ['20%', '90%'],
        type: 'sunburst',
        sort: null,
        highlightPolicy: 'none',
        data: data,
        label: {
            fontSize: 14
        },
        // 这个lable 的formatter设置生效
        label: {
            formatter: '{b}-{c}'
        },
        levels: [{},
        // level 层级的formatter没有生效，如果把series.label注释掉，同样没有formatter效果
            {
                label: {
                    formatter: '{b}:{c}'
                },

            },
            {
                label: {
                    formatter: '{b}:{c}'
                },
            }
        ]
    }
};