option = {
    backgroundColor: '#000',
    title: {
        text: "Makeup 2017",
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
{category: 'MASK',name: 'MASK',value: 57,symbolSize: 57 },
{category: 'CLEANSER',name: 'CLEANSER',value: 48,symbolSize: 48 },
{category: 'MU REMOVER',name: 'MU REMOVER',value: 45,symbolSize: 45 },
{category: 'SET',name: 'SET',value: 45,symbolSize: 45 },
{category: 'LIP STICK',name: 'LIP STICK',value: 45,symbolSize: 45 },
{category: 'CREAM',name: 'CREAM',value: 39,symbolSize: 39 },
{category: 'SERUM',name: 'SERUM',value: 39,symbolSize: 39 },
{category: 'TONER',name: 'TONER',value: 33,symbolSize: 33 },
{category: 'FOUNDATION',name: 'FOUNDATION',value: 33,symbolSize: 33 },
{category: 'EYE CARE',name: 'EYE CARE',value: 30,symbolSize: 30 },
{category: 'BROW',name: 'BROW',value: 15,symbolSize: 15 },
{category: 'ESS LOTION',name: 'ESS LOTION',value: 6,symbolSize: 6 },
{category: 'EYELINER',name: 'EYELINER',value: 6,symbolSize: 6 },
{category: 'SUN CARE',name: 'SUN CARE',value: 6,symbolSize: 6 },
{category: 'FACIAL SPRAY',name: 'FACIAL SPRAY',value: 3,symbolSize: 3 }
],
        links: [
{source: 'SERUM',target: 'CREAM',value: 134},
{source: 'CREAM',target: 'SERUM',value: 134},
{source: 'EYE CARE',target: 'SERUM',value: 119},
{source: 'SERUM',target: 'EYE CARE',value: 119},
{source: 'TONER',target: 'CREAM',value: 113},
{source: 'CREAM',target: 'TONER',value: 113},
{source: 'TONER',target: 'SERUM',value: 110},
{source: 'SERUM',target: 'TONER',value: 110},
{source: 'EYE CARE',target: 'CREAM',value: 107},
{source: 'CREAM',target: 'EYE CARE',value: 107},
{source: 'TONER',target: 'CLEANSER',value: 89},
{source: 'CLEANSER',target: 'TONER',value: 89},
{source: 'CREAM',target: 'CLEANSER',value: 88},
{source: 'CLEANSER',target: 'CREAM',value: 88},
{source: 'SERUM',target: 'CLEANSER',value: 86},
{source: 'CLEANSER',target: 'SERUM',value: 86},
{source: 'EYE CARE',target: 'CLEANSER',value: 75},
{source: 'CLEANSER',target: 'EYE CARE',value: 75},
{source: 'SERUM',target: 'SET',value: 70},
{source: 'EYE CARE',target: 'SET',value: 64},
{source: 'CREAM',target: 'SET',value: 64},
{source: 'EYE CARE',target: 'MASK',value: 63},
{source: 'SERUM',target: 'MASK',value: 62},
{source: 'ESS LOTION',target: 'MASK',value: 61},
{source: 'TONER',target: 'SET',value: 60},
{source: 'SUN CARE',target: 'MASK',value: 59},
{source: 'CREAM',target: 'MASK',value: 57},
{source: 'CLEANSER',target: 'SET',value: 55},
{source: 'SET',target: 'CLEANSER',value: 55},
{source: 'TONER',target: 'MASK',value: 54},
{source: 'FACIAL SPRAY',target: 'MASK',value: 54},
{source: 'CLEANSER',target: 'MASK',value: 53},
{source: 'MASK',target: 'CLEANSER',value: 53},
{source: 'CLEANSER',target: 'MU REMOVER',value: 53},
{source: 'MU REMOVER',target: 'CLEANSER',value: 53},
{source: 'SERUM',target: 'MU REMOVER',value: 51},
{source: 'EYE CARE',target: 'MU REMOVER',value: 50},
{source: 'TONER',target: 'MU REMOVER',value: 49},
{source: 'CREAM',target: 'MU REMOVER',value: 49},
{source: 'SET',target: 'MASK',value: 46},
{source: 'MASK',target: 'SET',value: 46},
{source: 'MU REMOVER',target: 'MASK',value: 40},
{source: 'MASK',target: 'MU REMOVER',value: 40},
{source: 'SERUM',target: 'FOUNDATION',value: 39},
{source: 'CREAM',target: 'FOUNDATION',value: 37},
{source: 'MU REMOVER',target: 'SET',value: 37},
{source: 'SET',target: 'MU REMOVER',value: 37},
{source: 'TONER',target: 'FOUNDATION',value: 37},
{source: 'CLEANSER',target: 'FOUNDATION',value: 31},
{source: 'FOUNDATION',target: 'MU REMOVER',value: 30},
{source: 'MU REMOVER',target: 'FOUNDATION',value: 30},
{source: 'BROW',target: 'MU REMOVER',value: 28},
{source: 'MU REMOVER',target: 'BROW',value: 28},
{source: 'FOUNDATION',target: 'SET',value: 24},
{source: 'SET',target: 'FOUNDATION',value: 24},
{source: 'FOUNDATION',target: 'MASK',value: 23},
{source: 'MASK',target: 'FOUNDATION',value: 23},
{source: 'BROW',target: 'MASK',value: 22},
{source: 'EYELINER',target: 'MASK',value: 22},
{source: 'ESS LOTION',target: 'LIP STICK',value: 22},
{source: 'SERUM',target: 'LIP STICK',value: 22},
{source: 'CREAM',target: 'LIP STICK',value: 21},
{source: 'TONER',target: 'LIP STICK',value: 20},
{source: 'SUN CARE',target: 'LIP STICK',value: 19},
{source: 'EYE CARE',target: 'LIP STICK',value: 19},
{source: 'BROW',target: 'SET',value: 19},
{source: 'CLEANSER',target: 'LIP STICK',value: 18},
{source: 'SET',target: 'LIP STICK',value: 17},
{source: 'LIP STICK',target: 'SET',value: 17},
{source: 'MU REMOVER',target: 'LIP STICK',value: 16},
{source: 'MASK',target: 'LIP STICK',value: 15},
{source: 'LIP STICK',target: 'MASK',value: 15},
{source: 'FOUNDATION',target: 'LIP STICK',value: 10},
{source: 'EYELINER',target: 'LIP STICK',value: 9},
{source: 'BROW',target: 'LIP STICK',value: 6}
],
        categories: [
{category: 'MASK',name: 'MASK',value: 57,symbolSize: 57 },
{category: 'CLEANSER',name: 'CLEANSER',value: 48,symbolSize: 48 },
{category: 'MU REMOVER',name: 'MU REMOVER',value: 45,symbolSize: 45 },
{category: 'SET',name: 'SET',value: 45,symbolSize: 45 },
{category: 'LIP STICK',name: 'LIP STICK',value: 45,symbolSize: 45 },
{category: 'CREAM',name: 'CREAM',value: 39,symbolSize: 39 },
{category: 'SERUM',name: 'SERUM',value: 39,symbolSize: 39 },
{category: 'TONER',name: 'TONER',value: 33,symbolSize: 33 },
{category: 'FOUNDATION',name: 'FOUNDATION',value: 33,symbolSize: 33 },
{category: 'EYE CARE',name: 'EYE CARE',value: 30,symbolSize: 30 },
{category: 'BROW',name: 'BROW',value: 15,symbolSize: 15 },
{category: 'ESS LOTION',name: 'ESS LOTION',value: 6,symbolSize: 6 },
{category: 'EYELINER',name: 'EYELINER',value: 6,symbolSize: 6 },
{category: 'SUN CARE',name: 'SUN CARE',value: 6,symbolSize: 6 },
{category: 'FACIAL SPRAY',name: 'FACIAL SPRAY',value: 3,symbolSize: 3 }
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