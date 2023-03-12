var data = [
    {
        name: 'Function phenotype',
        itemStyle: {
            color: '#809213',
        },
        children: [
            {
                name: 'Gene- \n related \n phenotypes',
                itemStyle: {
                    color: '#A3AF59',
                },
                children: [
                    {
                        name: 'GO terms (1)',
                        value: 1,
                        itemStyle: {
                            color: '#0099CC',
                        },
                    },
                    {
                        name: 'AMR (1)',
                        value: 1,
                        itemStyle: {
                            color: '#CCFFFF',
                        },
                    },
                ],
            },
            {
                name: 'Protein- \n related \n phenotypes',
                itemStyle: {
                    color: '#E0F84C',
                },
                children: [
                    {
                        name: 'Virulence factors (1)',
                        value: 1,
                        itemStyle: {
                            color: '#99CCCC',
                        },
                    },
                    {
                        name: 'Mutation (1)',
                        value: 1,
                        itemStyle: {
                            color: '#336699',
                        },
                    },
                    {
                        name: 'Orthologous groups (1)',
                        value: 1,
                        itemStyle: {
                            color: '#99CCFF',
                        },
                    },
                ],
            },
            {
                name: 'Compound- \n related \nphenotypes',
                itemStyle: {
                    color: '#9ed048',
                },
                children: [
                    {
                        name: 'KEGG metabolites (1)',
                        value: 1,
                        itemStyle: {
                            color: '#FFFFCC',
                        },
                    },
                    {
                        name: 'MetaCyc metabolites (1)',
                        value: 1,
                        itemStyle: {
                            color: '#99CC33',
                        },
                    },
                    {
                        name: 'smBGCs (1)',
                        value: 1,
                        itemStyle: {
                            color: '#3399CC',
                        },
                    },
                ],
            },
        ],
    },
    {
        name: 'Polyphasic phenotype',
        itemStyle: {
            color: '#387BA3',
        },
        children: [
            {
                name: 'Enzymology',
                itemStyle: {
                    color: '#2e4e7e',
                },
                children: [
                    {
                        name: 'Enzymology (3)',
                        value: 1,
                        itemStyle: {
                            color: '#003371',
                        },
                    },
                ],
            },
            {
                name: 'Biochemistry',
                itemStyle: {
                    color: '#A0C7DE',
                },
                children: [
                    {
                        name: 'Biochemistry (13)',
                        value: 1,
                        itemStyle: {
                            color: '#4c8dae',
                        },
                    },
                ],
            },
            {
                name: 'Physiology',
                itemStyle: {
                    color: '#7BB9DE',
                },
                children: [
                    {
                        name: 'Fatty acids (3)',
                        value: 1,
                        itemStyle: {
                            color: '#4a4266',
                        },
                    },
                    {
                        name: 'Antibiotica (4)',
                        value: 1,
                        itemStyle: {
                            color: '#003472',
                        },
                    },
                    {
                        name: 'Bile (1)',
                        value: 1,
                        itemStyle: {
                            color: '#177cb0',
                        },
                    },
                    {
                        name: 'Tolerance (3)',
                        value: 1,
                        itemStyle: {
                            color: '#426666',
                        },
                    },
                    {
                        name: 'Halophily (3)',
                        value: 1,
                        itemStyle: {
                            color: '#574266',
                        },
                    },
                    {
                        name: 'pH (2)',
                        value: 1,
                        itemStyle: {
                            color: '#815463',
                        },
                    },
                    {
                        name: 'Temperature (2)',
                        value: 1,
                        itemStyle: {
                            color: '#1685a9',
                        },
                    },
                    {
                        name: 'Attributes (6)',
                        value: 1,
                        itemStyle: {
                            color: '#1685a9',
                        },
                    },
                    {
                        name: 'Metabolite production (2)',
                        value: 1,
                        itemStyle: {
                            color: '#2e4e7e',
                        },
                    },
                    {
                        name: 'C/N source (2)',
                        value: 1,
                        itemStyle: {
                            color: '#4b5cc4',
                        },
                    },
                ],
            },
            {
                name: 'Morphology',
                itemStyle: {
                    color: '#177cb0',
                },
                children: [
                    {
                        name: 'Hemolysis (2)',
                        value: 1,
                        itemStyle: {
                            color: '#758a99',
                        },
                    },
                    {
                        name: 'Colony morphology (6)',
                        value: 1,
                        itemStyle: {
                            color: '#549688',
                        },
                    },
                    {
                        name: 'Cell (4)',
                        value: 1,
                        itemStyle: {
                            color: '#4b5cc4',
                        },
                    },
                ],
            },
            {
                name: 'Ecology',
                itemStyle: {
                    color: '#3E5F73',
                },
                children: [
                    {
                        name: 'Enrichment (4)',
                        value: 1,
                        itemStyle: {
                            color: '#3b2e7e',
                        },
                    },
                    {
                        name: 'Sampling (4)',
                        value: 1,
                        itemStyle: {
                            color: '#a1afc9',
                        },
                    },
                    {
                        name: 'Biome (5)',
                        value: 1,
                        itemStyle: {
                            color: '#a1afc9',
                        },
                    },
                    {
                        name: 'Geography (4)',
                        value: 1,
                        itemStyle: {
                            color: '#0E4160',
                        },
                    },
                ],
            },
        ],
    },
];

option = {
    title: {
        text: '',
        subtext: '',
        textStyle: {
            fontSize: 14,
            align: 'center',
        },
        subtextStyle: {
            align: 'center',
        },
        sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/',
    },
    series: {
        type: 'sunburst',
        nodeClick: false,
        data: data,
        radius: [0, '95%'],
        sort: undefined,
        emphasis: {
            focus: 'ancestor',
        },
        levels: [
            {},
            {
                r: '35%',
                itemStyle: {
                    borderWidth: 2,
                },
                label: {
                    rotate: 'tangential',
                    fontSize: 24,
                    fontWeight: 600,
                },
            },
            {
                r0: '35%',
                r: '70%',
                label: {
                    align: 'center',
                    fontSize: 24,
                    fontWeight: 600,
                },
            },
            {
                r0: '70%',
                r: '72%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false,
                    fontSize: 22,
                    fontWeight: 500,
                },
                itemStyle: {
                    borderWidth: 3,
                },
            },
        ],
    },
};
