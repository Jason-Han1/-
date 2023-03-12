var population = [
    { source: 'Micro: about', target: 'apollo', value: 1 },
    { source: 'Micro: antivirus', target: 'styx', value: 1 },
    { source: '杜鹃花科', target: '白花杜鹃r', value: 1 },
    { source: '杜鹃花科', target: '满山红', value: 1 },
    { source: '杜鹃花科', target: '映山红 ', value: 1 },
    { source: '大风子科', target: '柞木', value: 1 },
    { source: '锦葵科', target: '木芙蓉', value: 1 },

    { source: '山茶科', target: '茶梅', value: 1 },
    { source: '山茶科', target: '山茶', value: 1 },
    { source: '芍药科', target: '牡丹', value: 1 },

    { source: '忍冬科', target: '六道木', value: 1 },
    { source: '忍冬科', target: '南方六道木', value: 1 },
    { source: '忍冬科', target: '金银花', value: 1 },
    { source: '忍冬科', target: '金银木', value: 1 },
    { source: '忍冬科', target: '郁香忍冬', value: 1 },
    { source: '忍冬科', target: '接骨木', value: 1 },
    { source: '忍冬科', target: '木绣球', value: 1 },
    { source: '忍冬科', target: '琼花', value: 1 },

    { source: '小檗科', target: '小檗', value: 1 },
    { source: '小檗科', target: '紫叶小檗', value: 1 },
    { source: '小檗科tings', target: '阔叶十大功劳', value: 1 },
    { source: '小檗科', target: '南天竹', value: 1 },
    { source: '小檗科', target: '豪猪刺', value: 1 },
    { source: '小檗科', target: '安徽小檗', value: 1 },
    { source: '小檗科', target: '庐山小檗', value: 1 },
    { source: '木通科', target: '木通', value: 1 },
    { source: '木通科', target: '三叶木通', value: 1 },
    { source: '樟科', target: '檫木', value: 1 },
    { source: '樟科', target: '狭叶山胡椒', value: 1 },

    { source: '樟科', target: '香樟', value: 1 },
    { source: '樟科', target: '浙江楠', value: 1 },
    { source: '樟科', target: '紫楠', value: 1 },
    { source: '樟科', target: '山胡椒', value: 1 },
    { source: '蜡梅科', target: '蜡梅', value: 1 },

    { source: '蜡梅科', target: '檀香蜡梅', value: 1 },

    { source: '木兰科', target: '鹅掌楸', value: 1 },
    { source: '木兰科', target: '北美鹅掌楸', value: 1 },
    { source: '木兰科', target: '杂交鹅掌楸', value: 1 },
    { source: '木兰科', target: '广玉兰', value: 1 },
    { source: '木兰科', target: '紫玉兰', value: 1 },
    { source: '木兰科', target: '二乔玉兰', value: 1 },
    { source: '木兰科', target: '凹叶厚朴', value: 1 },
    { source: '木兰科', target: '白玉兰', value: 1 },
    { source: '木兰科', target: '含笑', value: 1 },

    { source: '木兰科', target: '深山含笑', value: 1 },
    { source: '木兰科', target: '乐昌含笑', value: 1 },

    { source: '柏科', target: '日本扁柏', value: 1 },
    { source: '柏科', target: '日本花柏', value: 1 },
    { source: '柏科', target: '柏木', value: 1 },
    { source: '柏科', target: '中山柏', value: 1 },
    { source: '柏科', target: '刺柏', value: 1 },
    { source: '柏科', target: '璎珞柏', value: 1 },
    { source: '柏科', target: '侧柏', value: 1 },
    { source: '柏科', target: '圆柏', value: 1 },
    { source: '柏科', target: '笔柏', value: 1 },
    { source: '柏科', target: '花柏', value: 1 },
    { source: '柏科', target: '蜀桧', value: 1 },
    { source: '柏科', target: '铺地柏', value: 1 },
    { source: '柏科', target: '香柏', value: 1 },
    { source: '柏科', target: '龙柏', value: 1 },
    { source: '柏科', target: '千头柏', value: 1 },
    { source: '柏科', target: '杜松', value: 1 },
    { source: '柏科', target: '凤尾柏', value: 1 },
];

var list = [...new Set(population.map((item) => [item.source, item.target]).flat())].map((item) => ({ name: item }));

var data = [];
for (var i = 0; i < population.length; i++) {
    data.push({
        source: population[i].source,
        target: population[i].target,
        value: population[i].value,
    });
}
var option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
    },

    series: [
        {
            type: 'sankey',
            data: list,
            links: data,
            emphasis: {
                focus: 'adjacency',
            },
            lineStyle: {
                color: 'gradient',
                curveness: 0.3,
            },
        },
    ],
};
