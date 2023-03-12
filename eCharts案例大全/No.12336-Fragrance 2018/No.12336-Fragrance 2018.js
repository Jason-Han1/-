option = {
    backgroundColor: '#000',
    title: {
        text: "Fragrance 2018",
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
        data: [{category: 'BVLGARI',name: 'BVLGARI',value: 48,symbolSize: 48 },
{category: 'GUCCI',name: 'GUCCI',value: 45,symbolSize: 45 },
{category: 'TIFFANY',name: 'TIFFANY',value: 42,symbolSize: 42 },
{category: 'MIU MIU',name: 'MIU MIU',value: 36,symbolSize: 36 },
{category: 'LOEWE',name: 'LOEWE',value: 30,symbolSize: 30 },
{category: 'BALENCIAGA',name: 'BALENCIAGA',value: 24,symbolSize: 24 },
{category: 'KENZO',name: 'KENZO',value: 24,symbolSize: 24 },
{category: 'DIOR',name: 'DIOR',value: 24,symbolSize: 24 },
{category: 'HERMES',name: 'HERMES',value: 18,symbolSize: 18 },
{category: 'ARMANI',name: 'ARMANI',value: 6,symbolSize: 6 },
{category: 'LANCOME',name: 'LANCOME',value: 3,symbolSize: 3 },
{category: 'GIVENCHY',name: 'GIVENCHY',value: 3,symbolSize: 3 },
{category: 'BURBERRY',name: 'BURBERRY',value: 3,symbolSize: 3 }
],
        links: [
{source: 'BALENCIAGA',target: 'TIFFANY',value: 354},
{source: 'TIFFANY',target: 'BALENCIAGA',value: 354},
{source: 'HERMES',target: 'BVLGARI',value: 305},
{source: 'BVLGARI',target: 'HERMES',value: 305},
{source: 'BALENCIAGA',target: 'MIU MIU',value: 294},
{source: 'MIU MIU',target: 'BALENCIAGA',value: 294},
{source: 'MIU MIU',target: 'TIFFANY',value: 294},
{source: 'TIFFANY',target: 'MIU MIU',value: 294},
{source: 'BALENCIAGA',target: 'BVLGARI',value: 277},
{source: 'BVLGARI',target: 'BALENCIAGA',value: 277},
{source: 'BALENCIAGA',target: 'GUCCI',value: 267},
{source: 'GUCCI',target: 'BALENCIAGA',value: 267},
{source: 'LOEWE',target: 'TIFFANY',value: 255},
{source: 'TIFFANY',target: 'LOEWE',value: 255},
{source: 'TIFFANY',target: 'GUCCI',value: 242},
{source: 'GUCCI',target: 'TIFFANY',value: 242},
{source: 'MIU MIU',target: 'GUCCI',value: 223},
{source: 'GUCCI',target: 'MIU MIU',value: 223},
{source: 'ARMANI',target: 'GUCCI',value: 207},
{source: 'BVLGARI',target: 'GUCCI',value: 203},
{source: 'GUCCI',target: 'BVLGARI',value: 203},
{source: 'LOEWE',target: 'KENZO',value: 193},
{source: 'KENZO',target: 'LOEWE',value: 193},
{source: 'LANCOME',target: 'DIOR',value: 137},
{source: 'BVLGARI',target: 'TIFFANY',value: 126},
{source: 'TIFFANY',target: 'BVLGARI',value: 126},
{source: 'KENZO',target: 'BVLGARI',value: 109},
{source: 'BVLGARI',target: 'KENZO',value: 109},
{source: 'HERMES',target: 'GUCCI',value: 95},
{source: 'GUCCI',target: 'HERMES',value: 95},
{source: 'LOEWE',target: 'BVLGARI',value: 94},
{source: 'BVLGARI',target: 'LOEWE',value: 94},
{source: 'LOEWE',target: 'GUCCI',value: 90},
{source: 'GUCCI',target: 'LOEWE',value: 90},
{source: 'KENZO',target: 'TIFFANY',value: 89},
{source: 'TIFFANY',target: 'KENZO',value: 89},
{source: 'BVLGARI',target: 'MIU MIU',value: 83},
{source: 'MIU MIU',target: 'BVLGARI',value: 83},
{source: 'BVLGARI',target: 'DIOR',value: 79},
{source: 'DIOR',target: 'BVLGARI',value: 79},
{source: 'HERMES',target: 'TIFFANY',value: 78},
{source: 'TIFFANY',target: 'HERMES',value: 78},
{source: 'GUCCI',target: 'DIOR',value: 58},
{source: 'DIOR',target: 'GUCCI',value: 58},
{source: 'KENZO',target: 'MIU MIU',value: 49},
{source: 'MIU MIU',target: 'KENZO',value: 49},
{source: 'GIVENCHY',target: 'DIOR',value: 49},
{source: 'LOEWE',target: 'MIU MIU',value: 47},
{source: 'MIU MIU',target: 'LOEWE',value: 47},
{source: 'BURBERRY',target: 'DIOR',value: 35},
{source: 'ARMANI',target: 'DIOR',value: 26}
],
        categories: [{category: 'BVLGARI',name: 'BVLGARI',value: 48,symbolSize: 48 },
{category: 'GUCCI',name: 'GUCCI',value: 45,symbolSize: 45 },
{category: 'TIFFANY',name: 'TIFFANY',value: 42,symbolSize: 42 },
{category: 'MIU MIU',name: 'MIU MIU',value: 36,symbolSize: 36 },
{category: 'LOEWE',name: 'LOEWE',value: 30,symbolSize: 30 },
{category: 'BALENCIAGA',name: 'BALENCIAGA',value: 24,symbolSize: 24 },
{category: 'KENZO',name: 'KENZO',value: 24,symbolSize: 24 },
{category: 'DIOR',name: 'DIOR',value: 24,symbolSize: 24 },
{category: 'HERMES',name: 'HERMES',value: 18,symbolSize: 18 },
{category: 'ARMANI',name: 'ARMANI',value: 6,symbolSize: 6 },
{category: 'LANCOME',name: 'LANCOME',value: 3,symbolSize: 3 },
{category: 'GIVENCHY',name: 'GIVENCHY',value: 3,symbolSize: 3 },
{category: 'BURBERRY',name: 'BURBERRY',value: 3,symbolSize: 3 }],
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