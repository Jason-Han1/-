option = {
    backgroundColor: '#000',
    title: {
        text: "Fragrance 2017",
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
        data: [{category: 'GUCCI',name: 'GUCCI',value: 60,symbolSize: 60 },
{category: 'MIU MIU',name: 'MIU MIU',value: 51,symbolSize: 51 },
{category: 'BVLGARI',name: 'BVLGARI',value: 42,symbolSize: 42 },
{category: 'BALENCIAGA',name: 'BALENCIAGA',value: 30,symbolSize: 30 },
{category: 'KENZO',name: 'KENZO',value: 24,symbolSize: 24 },
{category: 'HERMES',name: 'HERMES',value: 24,symbolSize: 24 },
{category: 'BURBERRY',name: 'BURBERRY',value: 24,symbolSize: 24 },
{category: 'DIOR',name: 'DIOR',value: 21,symbolSize: 21 },
{category: 'MARC JACOBS',name: 'MARC JACOBS',value: 12,symbolSize: 12 },
{category: 'CHLOE',name: 'CHLOE',value: 12,symbolSize: 12 },
{category: 'ARMANI',name: 'ARMANI',value: 6,symbolSize: 6 },
{category: 'GIVENCHY',name: 'GIVENCHY',value: 6,symbolSize: 6 }
],
        links: [
{source: 'BURBERRY',target: 'BVLGARI',value: 417},
{source: 'BVLGARI',target: 'BURBERRY',value: 417},
{source: 'BALENCIAGA',target: 'MIU MIU',value: 341},
{source: 'MIU MIU',target: 'BALENCIAGA',value: 341},
{source: 'BVLGARI',target: 'HERMES',value: 332},
{source: 'HERMES',target: 'BVLGARI',value: 332},
{source: 'BALENCIAGA',target: 'HERMES',value: 313},
{source: 'HERMES',target: 'BALENCIAGA',value: 313},
{source: 'CHLOE',target: 'MIU MIU',value: 290},
{source: 'MIU MIU',target: 'CHLOE',value: 290},
{source: 'BVLGARI',target: 'GUCCI',value: 279},
{source: 'GUCCI',target: 'BVLGARI',value: 279},
{source: 'BALENCIAGA',target: 'BVLGARI',value: 277},
{source: 'BVLGARI',target: 'BALENCIAGA',value: 277},
{source: 'MARC JACOBS',target: 'MIU MIU',value: 259},
{source: 'MIU MIU',target: 'MARC JACOBS',value: 259},
{source: 'BURBERRY',target: 'GUCCI',value: 228},
{source: 'GUCCI',target: 'BURBERRY',value: 228},
{source: 'BALENCIAGA',target: 'KENZO',value: 218},
{source: 'KENZO',target: 'BALENCIAGA',value: 218},
{source: 'BALENCIAGA',target: 'GUCCI',value: 192},
{source: 'GUCCI',target: 'BALENCIAGA',value: 192},
{source: 'CHLOE',target: 'GUCCI',value: 185},
{source: 'GUCCI',target: 'CHLOE',value: 185},
{source: 'BVLGARI',target: 'KENZO',value: 178},
{source: 'KENZO',target: 'BVLGARI',value: 178},
{source: 'GUCCI',target: 'HERMES',value: 138},
{source: 'HERMES',target: 'GUCCI',value: 138},
{source: 'GUCCI',target: 'MARC JACOBS',value: 136},
{source: 'MARC JACOBS',target: 'GUCCI',value: 136},
{source: 'ARMANI',target: 'GUCCI',value: 134},
{source: 'GUCCI',target: 'ARMANI',value: 134},
{source: 'GUCCI',target: 'MIU MIU',value: 132},
{source: 'MIU MIU',target: 'GUCCI',value: 132},
{source: 'GIVENCHY',target: 'MIU MIU',value: 113},
{source: 'BVLGARI',target: 'MIU MIU',value: 109},
{source: 'MIU MIU',target: 'BVLGARI',value: 109},
{source: 'DIOR',target: 'GUCCI',value: 99},
{source: 'GUCCI',target: 'DIOR',value: 99},
{source: 'BURBERRY',target: 'DIOR',value: 95},
{source: 'DIOR',target: 'BURBERRY',value: 95},
{source: 'GUCCI',target: 'KENZO',value: 93},
{source: 'KENZO',target: 'GUCCI',value: 93},
{source: 'KENZO',target: 'MIU MIU',value: 73},
{source: 'MIU MIU',target: 'KENZO',value: 73},
{source: 'BVLGARI',target: 'DIOR',value: 71},
{source: 'DIOR',target: 'BVLGARI',value: 71},
{source: 'GIVENCHY',target: 'DIOR',value: 65},
{source: 'BURBERRY',target: 'MIU MIU',value: 61},
{source: 'MIU MIU',target: 'BURBERRY',value: 61},
{source: 'HERMES',target: 'MIU MIU',value: 50},
{source: 'MIU MIU',target: 'HERMES',value: 50}
],
        categories: [{category: 'GUCCI',name: 'GUCCI',value: 60,symbolSize: 60 },
{category: 'MIU MIU',name: 'MIU MIU',value: 51,symbolSize: 51 },
{category: 'BVLGARI',name: 'BVLGARI',value: 42,symbolSize: 42 },
{category: 'BALENCIAGA',name: 'BALENCIAGA',value: 30,symbolSize: 30 },
{category: 'KENZO',name: 'KENZO',value: 24,symbolSize: 24 },
{category: 'HERMES',name: 'HERMES',value: 24,symbolSize: 24 },
{category: 'BURBERRY',name: 'BURBERRY',value: 24,symbolSize: 24 },
{category: 'DIOR',name: 'DIOR',value: 21,symbolSize: 21 },
{category: 'MARC JACOBS',name: 'MARC JACOBS',value: 12,symbolSize: 12 },
{category: 'CHLOE',name: 'CHLOE',value: 12,symbolSize: 12 },
{category: 'ARMANI',name: 'ARMANI',value: 6,symbolSize: 6 },
{category: 'GIVENCHY',name: 'GIVENCHY',value: 6,symbolSize: 6 }],
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