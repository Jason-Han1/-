
var nodes = [
{name: '云栖小镇', symbolSize: 60, category: '云栖小镇'},
{name: '公交云站', symbolSize: 70, category: '公交云站'},
{name: '梦想小镇', symbolSize: 80, category: '梦想小镇'},
{name: '春波小区', symbolSize: 120, category: '春波小区'},
{name: '吉祥村站', symbolSize: 100, category: '吉祥村站'},
{name: '四季东巷站', symbolSize: 90, category: '四季东巷站'},
{name: '丁白路西口站', symbolSize: 102, category: '丁白路西口站'},
{name: '丁白村站', symbolSize: 110, category: '丁白村站'},
{name: '紫薇花园站', symbolSize: 98, category: '紫薇花园站'},
{name: '电子二路站', symbolSize: 89, category: '电子二路站'},
{name: '北山门站', symbolSize: 76, category: '北山门站'},
{name: '电子正街站', symbolSize: 78, category: '电子正街站'},
{name: '南山门站', symbolSize: 88, category: '南山门站'},
{name: '公路二局站', symbolSize: 99, category: '公路二局站'},
{name: '西万路口站', symbolSize: 48, category: '西万路口站'},
{name: '丈八东村站', symbolSize: 108, category: '丈八东村站'},
{name: '茶张村站', symbolSize: 90, category: '茶张村站'},
{name: '双水磨站', symbolSize: 58, category: '双水磨站'},
{name: '南窑头站', symbolSize: 123, category: '南窑头站'},
{name: '丁家桥站', symbolSize: 111, category: '丁家桥站'},
{name: '西辛庄站', symbolSize: 130, category: '西辛庄站'},
{name: '科技路西口站', symbolSize: 98, category: '科技路西口站'},
{name: '大寨路站', symbolSize: 99, category: '大寨路站'},
{name: '煤气管网所站', symbolSize: 90, category: '煤气管网所站'},
{name: '北窑头站', symbolSize: 76, category: '北窑头站'},
{name: '制药厂站', symbolSize: 90, category: '制药厂站'},
{name: '西钞广场站', symbolSize: 90, category: '西钞广场站'},
{name: '汉城路站', symbolSize: 80, category: '汉城路站'},
{name: '城西客运站', symbolSize: 70, category: '城西客运站'},
{name: '汉城北路站', symbolSize: 60, category: '汉城北路站'}
];

var links = [{source: '云栖小镇',target: '公交云站'}, {source: '云栖小镇',target: '梦想小镇'}, {source: '云栖小镇',target: '春波小区'}, {source: '云栖小镇',target: '吉祥村站'}, {source: '云栖小镇',target: '四季东巷站'}, {source: '云栖小镇',target: '丁白路西口站'}, {source: '云栖小镇',target: '丁白村站'}, {source: '云栖小镇',target: '紫薇花园站'}, {source: '云栖小镇',target: '电子二路站'}, {source: '云栖小镇',target: '北山门站'}, {source: '云栖小镇',target: '电子正街站'}, {source: '云栖小镇',target: '南山门站'}, {source: '云栖小镇',target: '公路二局站'}, {source: '云栖小镇',target: '西万路口站'}, {source: '云栖小镇',target: '丈八东村站'}, {source: '云栖小镇',target: '茶张村站'}, {source: '云栖小镇',target: '双水磨站'}, {source: '云栖小镇',target: '南窑头站'}, {source: '云栖小镇',target: '丁家桥站'}, {source: '云栖小镇',target: '西辛庄站'}, {source: '云栖小镇',target: '科技路西口站'}, {source: '云栖小镇',target: '大寨路站'}, {source: '云栖小镇',target: '煤气管网所站'}, {source: '云栖小镇',target: '北窑头站'}, {source: '云栖小镇',target: '制药厂站'}, {source: '云栖小镇',target: '西钞广场站'}, {source: '云栖小镇',target: '汉城路站'}, {source: '云栖小镇',target: '城西客运站'}, {source: '云栖小镇',target: '汉城北路站'}];

var option = {
    grid: {
        left: 5,
        right: 5,
        bottom: 200
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            rotate: 90,
            margin:20
        },
        data: nodes.map(function (node) {
            return node.name;
        }),
        
    },
    yAxis: {
        show: false
    },
    
    series: [{
        type: 'scatter',
        data: nodes.map(function (node) {
            return {
                value: 0,
                fill:'#fff',
                symbolSize: node.symbolSize/5
            }

        })
    }, {
        type: 'custom',
        dimension: [{
            type: 'ordinal',
            name: 'source'
        }, {
            // This dumb value will be used in yAxis.
            type: 'number',
            name: 'dumb'
        },{
            type: 'ordinal',
            name: 'target'
        }],
        data: links.map(function (link) {
            return [link.source, 0, link.target];
        }),
        renderItem: function (params, api) {
            var coord0 = api.coord(
                [api.value(0), 0]
            )
            var coord1 = api.coord(
                [api.value(2), 0]
            )
            var cx = (coord0[0] + coord1[0]) / 2;
            var r = (coord1[0] - coord0[0]) / 2;
            
            return {
                type: 'arc',
                style: {
                    stroke: '#C33B38',
                    fill: 'none',
                    opacity: 0.2
                },
                shape: {
                    cx: cx,
                    cy: coord0[1],
                    r: r,
                    startAngle: 0,
                    endAngle: Math.PI,
                    clockwise: false
                }
            }
        }
    }]
};