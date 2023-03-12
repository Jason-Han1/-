option = {
    title: {
        text: '数据集-玫瑰图-排序',
        padding: [17, 0, 0, 19],
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: 20,
        top: 60,
        containLabel: true,
    },
    dataset: [
        {
            dimensions: ['product', 'count'],
            source: [
                ['南京', 79],
                ['无锡', 165],
                ['徐州', 26],
                ['常州', 80],
                ['苏州', 99],
                ['南通', 48],
                ['连云港', 93],
                ['淮安', 111],
                ['盐城', 103],
                ['扬州', 127],
                ['镇江', 111],
                ['泰州', 96],
                ['宿迁', 121],
            ],
        },
        {
            transform: {
                type: 'sort',
                config: { dimension: 'count', order: 'desc' },
                print: true,
            },
        },
    ],
    series: [
        {
            name: '数量',
            type: 'pie',
            radius: ['10%','80%'],
            center: ['50%', '50%'],
            roseType: 'area',
            datasetIndex: 1,
            itemStyle: {
                barBorderRadius: [4, 4, 0, 0],
            },
            encode: {
                itemName: 'product',
                value: 'count',
            },
        },
    ],
};
