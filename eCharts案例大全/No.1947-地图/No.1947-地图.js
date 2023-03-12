// 地图背景颜色
const mapBgColor = '#080a20';
// 地图轮廓颜色
const mapBrColor = '#0692a4';
// 地图区块颜色
const mapAreaColor = '#132937';
// 移到线上的字颜色
const tootipFontColor = '#fff';
// 移到线上的边框颜色
const tootipBrColor = '#040616';
// 区块描边
const mapAreaBrColor = '#666';
// 省高亮颜色
const regionHighLight = '#70CBFF';
// 省高亮边框颜色
const regionHighLightBr = '#000';
// 查看形式 (china or world)
const worldType = 'world'; // 改成中国就把这里换成 'china'
// 线高亮
const lineHeight = '#fff';

var series = [];

option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: regionHighLight,
        borderColor: regionHighLightBr,
        extraCssText: 'z-index:100',
    },
    backgroundColor: mapBgColor,
    geo: {
        map: worldType,
        zoom: 1,
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true,
        itemStyle: {
            normal: {
                color: mapAreaColor,
                borderColor: mapBrColor,
                borderWidth: 1,
            },
            emphasis: {
                color: mapBrColor, //鼠标移入颜色
                borderColor: mapAreaBrColor,
            },
        },
    },
    series: series,
};
