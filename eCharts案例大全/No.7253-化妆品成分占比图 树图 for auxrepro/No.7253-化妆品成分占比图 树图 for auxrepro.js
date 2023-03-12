option = {

    tooltip: {
        trigger: 'item',
        formatter: '{b} <br/>与该成分搭配次数: {c}'
    },
    legend: {},
    series: [{
        type: 'treemap',
        data: [{
            name: '角鲨烷', // First tree
            value: 10,
            children: [{
                name: '小叶海藻（SARGASSUM FUSIFORME）提取物', // First leaf of first tree
                value: 4
            }, {
                name: '牛油果树（BUTYROSPERMUM PARKII）果脂', // Second leaf of first tree
                value: 6
            }, {
                name: '澳洲坚果（MACADAMIA TERNIFOLIA）籽油', // Second leaf of first tree
                value: 6
            }, {
                name: '巴西棕榈树（COPERNICIA CERIFERA）蜡', // Second leaf of first tree
                value: 6
            }, {
                name: '矿脂', // Second leaf of first tree
                value: 6
            }]
        }, {
            name: '蜂蜡', // First tree
            value: 10,
            children: [{
                name: '微晶蜡', // First leaf of first tree
                value: 4
            }, {
                name: '生育酚（维生素E）', // Second leaf of first tree
                value: 6
            }]
        }, {
            name: '透明质酸', // First tree
            value: 10,
            children: [{
                name: '地蜡', // First leaf of first tree
                value: 4
            }, {
                name: '李（PRUNUS SALICINA）果提取物', // Second leaf of first tree
                value: 6
            }]
        }, {
            name: '羟苯甲酯', // First tree
            value: 10,
            children: [{
                name: '香精', // First leaf of first tree
                value: 4
            }, {
                name: '辛酸/癸酸甘油三酯', // Second leaf of first tree
                value: 6
            }]
        }, {
            name: '聚甘油-4 二异硬脂酸酯/聚羟基硬脂酸酯/癸二酸酯', // First tree
            value: 10,
            children: [{
                name: '环聚二甲基硅氧烷', // First leaf of first tree
                value: 4
            }, {
                name: '二氧化钛', // Second leaf of first tree
                value: 6
            }]
        }, {
            name: '燕麦（AVENA SATIVA）肽', // First tree
            value: 10,
            children: [{
                name: 'CI 77491', // First leaf of first tree
                value: 4
            }, {
                name: '银耳（TREMELLA FUCIFORMIS）多糖', // Second leaf of first tree
                value: 6
            }]
        }, {
            name: '羊毛脂', // First tree
            value: 10,
            children: [{
                name: '积雪草（CENTELLA ASIATICA）提取物', // First leaf of first tree
                value: 4
            }, {
                name: '虎杖（POLYGONUM CUSPIDATUM）根提取物', // Second leaf of first tree
                value: 6
            }]
        }, {
            name: '光果甘草（GLYCYRRHIZA GLABRA）根提取物', // Second tree
            value: 20,
            children: [{
                name: '咪唑烷基脲', // Son of first tree
                value: 20,
                children: [{
                    name: '母菊（CHAMOMILLA RECUTITA）花提取物', // Granson of first tree
                    value: 20
                }]
            }]
        }]
    }]
};