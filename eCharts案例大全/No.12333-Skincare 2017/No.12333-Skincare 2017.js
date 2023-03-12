option = {
    backgroundColor: '#000',
    title: {
        text: "Skincare 2017",
        top: "top",
        left: "center"
    },
    tooltip: {},

    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '招标倾向性分析',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: 500,
            edgeLength: 120
        },
        data: [
{category: 'CLEANSER',name: 'CLEANSER',value: 54,symbolSize: 54 },
{category: 'MASK',name: 'MASK',value: 54,symbolSize: 54 },
{category: 'SET',name: 'SET',value: 51,symbolSize: 51 },
{category: 'LIP STICK',name: 'LIP STICK',value: 48,symbolSize: 48 },
{category: 'CREAM',name: 'CREAM',value: 39,symbolSize: 39 },
{category: 'MU REMOVER',name: 'MU REMOVER',value: 36,symbolSize: 36 },
{category: 'SERUM',name: 'SERUM',value: 36,symbolSize: 36 },
{category: 'TONER',name: 'TONER',value: 36,symbolSize: 36 },
{category: 'EYE CARE',name: 'EYE CARE',value: 33,symbolSize: 33 },
{category: 'ESS LOTION',name: 'ESS LOTION',value: 18,symbolSize: 18 },
{category: 'BROW',name: 'BROW',value: 15,symbolSize: 15 },
{category: 'FOUNDATION',name: 'FOUNDATION',value: 15,symbolSize: 15 },
{category: 'SUN CARE',name: 'SUN CARE',value: 12,symbolSize: 12 },
{category: 'FACIAL SPRAY',name: 'FACIAL SPRAY',value: 6,symbolSize: 6 },
{category: 'DEVICE',name: 'DEVICE',value: 6,symbolSize: 6 },
{category: 'EMULSION',name: 'EMULSION',value: 3,symbolSize: 3 }
],
        links: [
{source: 'SERUM',target: 'CREAM',value: 89},
{source: 'CREAM',target: 'SERUM',value: 89},
{source: 'ESS LOTION',target: 'SERUM',value: 85},
{source: 'ESS LOTION',target: 'CREAM',value: 81},
{source: 'SERUM',target: 'EYE CARE',value: 75},
{source: 'EYE CARE',target: 'SERUM',value: 75},
{source: 'TONER',target: 'CREAM',value: 68},
{source: 'CREAM',target: 'TONER',value: 68},
{source: 'TONER',target: 'SERUM',value: 65},
{source: 'SERUM',target: 'TONER',value: 65},
{source: 'CREAM',target: 'EYE CARE',value: 64},
{source: 'EYE CARE',target: 'CREAM',value: 64},
{source: 'FOUNDATION',target: 'LIP STICK',value: 49},
{source: 'ESS LOTION',target: 'CLEANSER',value: 49},
{source: 'TONER',target: 'EYE CARE',value: 49},
{source: 'EYE CARE',target: 'TONER',value: 49},
{source: 'TONER',target: 'CLEANSER',value: 47},
{source: 'CLEANSER',target: 'TONER',value: 47},
{source: 'BROW',target: 'LIP STICK',value: 46},
{source: 'CREAM',target: 'CLEANSER',value: 45},
{source: 'CLEANSER',target: 'CREAM',value: 45},
{source: 'SERUM',target: 'CLEANSER',value: 44},
{source: 'FOUNDATION',target: 'MU REMOVER',value: 41},
{source: 'BROW',target: 'MU REMOVER',value: 40},
{source: 'SERUM',target: 'SET',value: 39},
{source: 'ESS LOTION',target: 'SET',value: 38},
{source: 'SUN CARE',target: 'CLEANSER',value: 37},
{source: 'EYE CARE',target: 'SET',value: 34},
{source: 'EYE CARE',target: 'CLEANSER',value: 34},
{source: 'CREAM',target: 'SET',value: 33},
{source: 'DEVICE',target: 'SET',value: 32},
{source: 'EYE CARE',target: 'MASK',value: 31},
{source: 'ESS LOTION',target: 'MASK',value: 31},
{source: 'SUN CARE',target: 'SET',value: 30},
{source: 'SERUM',target: 'MASK',value: 30},
{source: 'ESS LOTION',target: 'LIP STICK',value: 29},
{source: 'SUN CARE',target: 'MASK',value: 29},
{source: 'TONER',target: 'SET',value: 28},
{source: 'FOUNDATION',target: 'SET',value: 28},
{source: 'LIP STICK',target: 'MU REMOVER',value: 28},
{source: 'MU REMOVER',target: 'LIP STICK',value: 28},
{source: 'SERUM',target: 'LIP STICK',value: 27},
{source: 'SUN CARE',target: 'LIP STICK',value: 26},
{source: 'FACIAL SPRAY',target: 'SET',value: 25},
{source: 'FOUNDATION',target: 'CLEANSER',value: 25},
{source: 'CREAM',target: 'MASK',value: 25},
{source: 'BROW',target: 'SET',value: 25},
{source: 'BROW',target: 'MASK',value: 25},
{source: 'SET',target: 'LIP STICK',value: 24},
{source: 'LIP STICK',target: 'SET',value: 24},
{source: 'CREAM',target: 'LIP STICK',value: 24},
{source: 'EMULSION',target: 'MASK',value: 24},
{source: 'DEVICE',target: 'MASK',value: 24},
{source: 'FACIAL SPRAY',target: 'MASK',value: 23},
{source: 'SERUM',target: 'MU REMOVER',value: 23},
{source: 'BROW',target: 'CLEANSER',value: 23},
{source: 'EYE CARE',target: 'LIP STICK',value: 22},
{source: 'TONER',target: 'LIP STICK',value: 22},
{source: 'SET',target: 'CLEANSER',value: 22},
{source: 'CLEANSER',target: 'SET',value: 22},
{source: 'FOUNDATION',target: 'MASK',value: 22},
{source: 'CLEANSER',target: 'MU REMOVER',value: 21},
{source: 'MU REMOVER',target: 'CLEANSER',value: 21},
{source: 'TONER',target: 'MASK',value: 21},
{source: 'EYE CARE',target: 'MU REMOVER',value: 21},
{source: 'SET',target: 'MASK',value: 21},
{source: 'MASK',target: 'SET',value: 21},
{source: 'CREAM',target: 'MU REMOVER',value: 21},
{source: 'MASK',target: 'CLEANSER',value: 20},
{source: 'CLEANSER',target: 'MASK',value: 20},
{source: 'TONER',target: 'MU REMOVER',value: 20},
{source: 'MASK',target: 'LIP STICK',value: 18},
{source: 'LIP STICK',target: 'MASK',value: 18},
{source: 'CLEANSER',target: 'LIP STICK',value: 18},
{source: 'LIP STICK',target: 'CLEANSER',value: 18},
{source: 'MU REMOVER',target: 'MASK',value: 16},
{source: 'MU REMOVER',target: 'SET',value: 15}
],
        categories: [
{category: 'CLEANSER',name: 'CLEANSER',value: 54,symbolSize: 54 },
{category: 'MASK',name: 'MASK',value: 54,symbolSize: 54 },
{category: 'SET',name: 'SET',value: 51,symbolSize: 51 },
{category: 'LIP STICK',name: 'LIP STICK',value: 48,symbolSize: 48 },
{category: 'CREAM',name: 'CREAM',value: 39,symbolSize: 39 },
{category: 'MU REMOVER',name: 'MU REMOVER',value: 36,symbolSize: 36 },
{category: 'SERUM',name: 'SERUM',value: 36,symbolSize: 36 },
{category: 'TONER',name: 'TONER',value: 36,symbolSize: 36 },
{category: 'EYE CARE',name: 'EYE CARE',value: 33,symbolSize: 33 },
{category: 'ESS LOTION',name: 'ESS LOTION',value: 18,symbolSize: 18 },
{category: 'BROW',name: 'BROW',value: 15,symbolSize: 15 },
{category: 'FOUNDATION',name: 'FOUNDATION',value: 15,symbolSize: 15 },
{category: 'SUN CARE',name: 'SUN CARE',value: 12,symbolSize: 12 },
{category: 'FACIAL SPRAY',name: 'FACIAL SPRAY',value: 6,symbolSize: 6 },
{category: 'DEVICE',name: 'DEVICE',value: 6,symbolSize: 6 },
{category: 'EMULSION',name: 'EMULSION',value: 3,symbolSize: 3 }
],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};