option = {
    color: ['#59A2FE', '#FFB717', '#FC8F6B', '#70E07B', '#FBDA3D', '#11E5F1', '#E3A0FF', '#8294FC', '#6AD6FE'],
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        itemWidth: 18,
        itemHeight: 6,
        right: '10%',
        align: 'left',
        top: 'middle',
        textStyle: {
            fontSize: 12,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            fontWeight: 400,
            color: '#0D1134',
            lineHeight: 17,
        },
    },
    series: [
        {
            type: 'pie',
            radius: [0, 150],
            labelLine: {
                normal: {
                    length: 20,
                    length2: 30,
                },
            },

            label: {
                normal: {
                    formatter: '{a|{b}}\n{per|{d}%}',
                    rich: {
                        a: {
                            fontSize: 12,
                            lineHeight: 16,
                            align: 'center',
                        },
                        per: {
                            color: '#545454',
                            align: 'center',
                            fontSize: 12,
                            lineHeight: 16,
                        },
                    },
                },
            },

            data: [
                { value: 20, name: '博士' },
                { value: 30, name: '硕士' },
                { value: 25, name: '本科' },
                { value: 25, name: '大专' },
                { value: 20, name: '中专' },
                { value: 35, name: '高中' },
                { value: 30, name: '初中' },
                { value: 40, name: '小学' },
                { value: 40, name: '其他' },
            ],
        },
    ],
};
