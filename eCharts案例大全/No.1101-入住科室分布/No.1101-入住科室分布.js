option = {
    legend: { show: false },
    series: [
        {
            name: '入住科室分布',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: true,
            itemStyle: { borderColor: '#fff', borderWidth: 2 },
            color: [
                '#52A8FF',
                '#00B389',
                '#E27272',
                '#FFC53D',
                '#006EFE',
                '#F5855F',
                '#C099FC',
                '#FFA940',
                '#29EFC4',
                '#F8AEA4',
            ],
            label: {
                // alignTo: 'labelLine', // ! 文字对齐方式
                formatter: function (e) {
                    let {
                        data: { value, name, percent },
                    } = e;
                    return `{x|}{a|${name}}\n{b|${value}个}{c|${percent}}`;
                },
                minMargin: 5,
                lineHeight: 15,
                rich: {
                    x: { width: 10, height: 10, backgroundColor: 'inherit', borderRadius: 5 },
                    a: { fontSize: 14, color: 'inherit', padding: [0, 20, 0, 8] },
                    b: { fontSize: 12, align: 'left', color: '#666666', padding: [8, 0, 0, 18] },
                    c: { fontSize: 12, align: 'left', color: '#666666', padding: [8, 0, 0, 8] },
                },
            },
            data: [
                { value: 28, name: '眼耳鼻喉科', percent: '47.46%' },
                { value: 18, name: '呼吸内科', percent: '30.51%' },
                { value: 1, name: '骨外科', percent: '1.69%' },
                { value: 3, name: '心血管内科', percent: '5.08%' },
                { value: 1, name: '神经内外科', percent: '1.69%' },
                { value: 2, name: '消化内科', percent: '3.39%' },
                { value: 6, name: '内分泌科', percent: '10.17%' },
            ],
        },
    ],
};
