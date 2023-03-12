option = {
    legend: {
        top: 'top', // 图例显示位置
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    series: [
        {
            color: ['#42a4ff', '#5ee6b1', '#fec379', '#9a96f8','#fe789b'],
            name: '面积模式',
            type: 'pie',
            radius: [100, 220],
            center: ['50%', '50%'],
            roseType: 'area',
            // itemStyle: {
            //     borderRadius: 8
            // },
            data: [
                { value: 35, name: '本科生' },
                { value: 20, name: '硕士班毕业' },
                { value: 25, name: '硕士研究生毕业' },
                { value: 12, name: '硕士研究生' },
                { value: 8, name: '博士研究生' }
            ],
        },
    ],
};
