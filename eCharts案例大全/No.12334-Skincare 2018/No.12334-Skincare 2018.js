option = {
    backgroundColor: '#000',
    title: {
        text: "Skincare 2018",
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
            {category: 'SET',name: 'SET',value: 51,symbolSize: 51 },
{category: 'MASK',name: 'MASK',value: 48,symbolSize: 48 },
{category: 'CREAM',name: 'CREAM',value: 48,symbolSize: 48 },
{category: 'CLEANSER',name: 'CLEANSER',value: 48,symbolSize: 48 },
{category: 'SERUM',name: 'SERUM',value: 45,symbolSize: 45 },
{category: 'LIP STICK',name: 'LIP STICK',value: 45,symbolSize: 45 },
{category: 'MU REMOVER',name: 'MU REMOVER',value: 39,symbolSize: 39 },
{category: 'TONER',name: 'TONER',value: 36,symbolSize: 36 },
{category: 'EYE CARE',name: 'EYE CARE',value: 36,symbolSize: 36 },
{category: 'ESS LOTION',name: 'ESS LOTION',value: 24,symbolSize: 24 },
{category: 'FOUNDATION',name: 'FOUNDATION',value: 21,symbolSize: 21 },
{category: 'SUN CARE',name: 'SUN CARE',value: 15,symbolSize: 15 },
{category: 'BROW',name: 'BROW',value: 15,symbolSize: 15 },
{category: 'FACIAL SPRAY',name: 'FACIAL SPRAY',value: 3,symbolSize: 3 }
],
        links: [
{source: 'ESS LOTION',target: 'SERUM',value: 91},
{source: 'SERUM',target: 'ESS LOTION',value: 91},
{source: 'SERUM',target: 'CREAM',value: 83},
{source: 'CREAM',target: 'SERUM',value: 83},
{source: 'ESS LOTION',target: 'CREAM',value: 82},
{source: 'EYE CARE',target: 'SERUM',value: 76},
{source: 'SERUM',target: 'EYE CARE',value: 76},
{source: 'ESS LOTION',target: 'EYE CARE',value: 67},
{source: 'TONER',target: 'SERUM',value: 67},
{source: 'SERUM',target: 'TONER',value: 67},
{source: 'TONER',target: 'CREAM',value: 66},
{source: 'CREAM',target: 'TONER',value: 66},
{source: 'EYE CARE',target: 'CREAM',value: 62},
{source: 'CREAM',target: 'EYE CARE',value: 62},
{source: 'FOUNDATION',target: 'LIP STICK',value: 52},
{source: 'ESS LOTION',target: 'CLEANSER',value: 52},
{source: 'TONER',target: 'CLEANSER',value: 52},
{source: 'CLEANSER',target: 'TONER',value: 52},
{source: 'TONER',target: 'EYE CARE',value: 51},
{source: 'EYE CARE',target: 'TONER',value: 51},
{source: 'SUN CARE',target: 'CREAM',value: 51},
{source: 'SERUM',target: 'CLEANSER',value: 47},
{source: 'CLEANSER',target: 'SERUM',value: 47},
{source: 'BROW',target: 'LIP STICK',value: 46},
{source: 'FOUNDATION',target: 'SERUM',value: 46},
{source: 'CREAM',target: 'CLEANSER',value: 45},
{source: 'CLEANSER',target: 'CREAM',value: 45},
{source: 'SERUM',target: 'SET',value: 43},
{source: 'FOUNDATION',target: 'CREAM',value: 42},
{source: 'ESS LOTION',target: 'SET',value: 41},
{source: 'SUN CARE',target: 'CLEANSER',value: 40},
{source: 'FOUNDATION',target: 'MU REMOVER',value: 37},
{source: 'BROW',target: 'MU REMOVER',value: 37},
{source: 'EYE CARE',target: 'SET',value: 37},
{source: 'CREAM',target: 'SET',value: 37},
{source: 'SET',target: 'CREAM',value: 37},
{source: 'EYE CARE',target: 'CLEANSER',value: 36},
{source: 'SUN CARE',target: 'SET',value: 34},
{source: 'ESS LOTION',target: 'LIP STICK',value: 34},
{source: 'FOUNDATION',target: 'SET',value: 33},
{source: 'EYE CARE',target: 'MASK',value: 33},
{source: 'TONER',target: 'SET',value: 32},
{source: 'ESS LOTION',target: 'MASK',value: 32},
{source: 'SERUM',target: 'LIP STICK',value: 31},
{source: 'SERUM',target: 'MASK',value: 31},
{source: 'SUN CARE',target: 'LIP STICK',value: 30},
{source: 'SUN CARE',target: 'MASK',value: 30},
{source: 'CREAM',target: 'LIP STICK',value: 29},
{source: 'FOUNDATION',target: 'CLEANSER',value: 29},
{source: 'MU REMOVER',target: 'LIP STICK',value: 28},
{source: 'LIP STICK',target: 'MU REMOVER',value: 28},
{source: 'LIP STICK',target: 'SET',value: 28},
{source: 'SET',target: 'LIP STICK',value: 28},
{source: 'BROW',target: 'SET',value: 27},
{source: 'EYE CARE',target: 'LIP STICK',value: 26},
{source: 'BROW',target: 'CLEANSER',value: 26},
{source: 'BROW',target: 'MASK',value: 25},
{source: 'FACIAL SPRAY',target: 'MASK',value: 25},
{source: 'FOUNDATION',target: 'MASK',value: 25},
{source: 'CREAM',target: 'MASK',value: 25},
{source: 'TONER',target: 'LIP STICK',value: 25},
{source: 'CLEANSER',target: 'SET',value: 25},
{source: 'SET',target: 'CLEANSER',value: 25},
{source: 'SET',target: 'MASK',value: 23},
{source: 'MASK',target: 'SET',value: 23},
{source: 'SERUM',target: 'MU REMOVER',value: 22},
{source: 'TONER',target: 'MASK',value: 22},
{source: 'EYE CARE',target: 'MU REMOVER',value: 21},
{source: 'CLEANSER',target: 'MASK',value: 21},
{source: 'LIP STICK',target: 'MASK',value: 21},
{source: 'MASK',target: 'LIP STICK',value: 21},
{source: 'CLEANSER',target: 'LIP STICK',value: 20},
{source: 'CREAM',target: 'MU REMOVER',value: 20},
{source: 'CLEANSER',target: 'MU REMOVER',value: 20},
{source: 'TONER',target: 'MU REMOVER',value: 20},
{source: 'MU REMOVER',target: 'MASK',value: 17},
{source: 'MASK',target: 'MU REMOVER',value: 17},
{source: 'MU REMOVER',target: 'SET',value: 16},
{source: 'SET',target: 'MU REMOVER',value: 16}
],
        categories: [{category: 'SET',name: 'SET',value: 51,symbolSize: 51 },
{category: 'MASK',name: 'MASK',value: 48,symbolSize: 48 },
{category: 'CREAM',name: 'CREAM',value: 48,symbolSize: 48 },
{category: 'CLEANSER',name: 'CLEANSER',value: 48,symbolSize: 48 },
{category: 'SERUM',name: 'SERUM',value: 45,symbolSize: 45 },
{category: 'LIP STICK',name: 'LIP STICK',value: 45,symbolSize: 45 },
{category: 'MU REMOVER',name: 'MU REMOVER',value: 39,symbolSize: 39 },
{category: 'TONER',name: 'TONER',value: 36,symbolSize: 36 },
{category: 'EYE CARE',name: 'EYE CARE',value: 36,symbolSize: 36 },
{category: 'ESS LOTION',name: 'ESS LOTION',value: 24,symbolSize: 24 },
{category: 'FOUNDATION',name: 'FOUNDATION',value: 21,symbolSize: 21 },
{category: 'SUN CARE',name: 'SUN CARE',value: 15,symbolSize: 15 },
{category: 'BROW',name: 'BROW',value: 15,symbolSize: 15 },
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