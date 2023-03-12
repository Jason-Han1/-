var population = [
    { source: '原油', target: '能源消费', value: 12.3 },
    { source: '原油', target: '能源损失', value: 32.2 },
    { source: '原油', target: '库存', value: 6.4 },

    { source: '原煤', target: '能源消费', value: 32.3 },
    { source: '原煤', target: '能源损失', value: 16.2 },
    { source: '原煤', target: '库存', value: 6.4 },

    { source: '煤制品', target: '能源消费', value: 12.3 },
    { source: '煤制品', target: '能源损失', value: 8.2 },
    { source: '煤制品', target: '库存', value: 1.4 },

    { source: '一次电力', target: '能源消费', value: 22.3 },
    { source: '一次电力', target: '能源损失', value: 6.2 },
    { source: '一次电力', target: '库存', value: 6.4 },

    { source: '天然气', target: '能源消费', value: 27.3 },
    { source: '天然气', target: '能源损失', value: 32.2 },
    { source: '天然气', target: '库存', value: 1.1 },
];

var city = {
    原油: '#3dc5e7',
    原煤: '#8bc77b',
    煤制品: '#feda66',
    一次电力: '#6d62e4',
    天然气: '#5AAEF4',

    能源消费: '#fb7f10',
    能源损失: '#9580ff',
    库存: '#2aa12d',
};
let position = {
    原油: 'right',
    原煤: 'right',
    煤制品: 'right',
    一次电力: 'right',
    天然气: 'right',

    能源消费: 'left',
    能源损失: 'left',
    库存: 'left',
};
var citylist = [];
//遍历city
for (var key in city) {
    citylist.push(
        {
            name: key,
            itemStyle: { normal: { color: city[key] } },
            label: {
                position: position[key],
            },
        } //构造节点对象，包括name和itemStyle
    );
}
console.log(citylist);
var data = [];
for (var i = 0; i < population.length; i++) {
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: city[population[i].source], //获取起始节点的颜色属性
        },
        {
            offset: 1,
            color: city[population[i].target], //获取结尾节点的颜色属性
        },
    ]);
    data.push({
        source: population[i].source,
        target: population[i].target,
        value: population[i].value,
        label: {
            textStyle: {
                fontSize: 16,
                fontWeight: 400,
                color: '#666666',
            },
        },
        lineStyle: {
            //添加样式配置
            normal: {
                color: color,
            },
        },
    });
}
var option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
    },
    //4.0版本
    series: [
        {
            type: 'sankey',
            top: 50,
            left: 50,
            right: 50,
            nodeGap: 14,
            data: citylist,
            links: data,
            focusNodeAdjacency: 'allEdges',
            itemStyle: {
                borderWidth: 0,
                borderColor: '#fff',
                //opacity: 1,
            },
            lineStyle: {
                color: 'source',
                curveness: 0.5,
            },
            //  label: {
            //     normal: {
            //         fontSize: '14',
            //         color: '#212b43',
            //     },
            // },
        },
    ],
};
