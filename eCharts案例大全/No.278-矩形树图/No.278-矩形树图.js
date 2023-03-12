var mapData = [
    {
        "value": [
            250,
            null,
            null
        ],
        "name": "level1",
        "id": "branch-1",
        "discretion": null,
        "children": [
            {
                "value": [
                    100,
                    null,
                    null
                ],
                "name": "level2",
                "id": "leaf-1-1",
                "discretion": "net interest",
                "children": [
                    {
                        "value": [
                            70,
                            null,
                            null
                        ],
                        "name": "level3",
                        "id": "leaf-1-1-1",
                        "discretion": "net interest"
                    },
                    {
                        "value": [
                            30,
                            null,
                            null
                        ],
                        "name": "level3",
                        "id": "leaf-1-1-1",
                        "discretion": "net interest"
                    }
                ]
            },
            {
                "value": [
                    150,
                    null,
                    null
                ],
                "name": "level2",
                "id": "leaf-1-2",
                "discretion": "net interest",
                "children": [
                    {
                        "value": [
                            100,
                            null,
                            null
                        ],
                        "name": "level3",
                        "id": "leaf-1-2-1",
                        "discretion": "net interest"
                    },
                    {
                        "value": [
                            50,
                            null,
                            null
                        ],
                        "name": "level3",
                        "id": "leaf-1-2-1",
                        "discretion": "net interest"
                    }
                ]
            }
        ]
    },
    {
        "value": [
            600,
            null,
            null
        ],
        "name": "level1",
        "id": "branch-2",
        "discretion": null,
        "children": [
            {
                "value": [
                    300,
                    null,
                    null
                ],
                "name": "level2",
                "id": "leaf-2-1",
                "discretion": "net interest",
                "children": [
                    {
                        "value": [
                            150,
                            null,
                            null
                        ],
                        "name": "level3",
                        "id": "leaf-2-1-1",
                        "discretion": "net interest"
                    },
                    {
                        "value": [
                            150,
                            null,
                            null
                        ],
                        "name": "level3",
                        "id": "leaf-2-1-1",
                        "discretion": "net interest"
                    }
                ]
            },
            {
                "value": [
                    300,
                    null,
                    null
                ],
                "name": "level2",
                "id": "leaf-2-2",
                "discretion": "net interest",
                "children": [
                    {
                        "value": [
                            150,
                            null,
                            null
                        ],
                        "name": "level3",
                        "id": "leaf-2-2-1",
                        "discretion": "net interest"
                    },
                    {
                        "value": [
                            150,
                            null,
                            null
                        ],
                        "name": "level3",
                        "id": "leaf-2-2-1",
                        "discretion": "net interest"
                    }
                ]
            }
        ]
    },
    {
        "value": [
            100,
            null,
            null
        ],
        "name": "level1",
        "id": "branch-3",
        "discretion": null
    }
];
var option = {
    series: {
        type: 'treemap',
        name: 'root',
        data: mapData,
        upperLabel: {
            show: true,
            height: 60,
            textBorderColor: '',
            formatter: function (param) {
                iconsArr = ['iconDown', 'iconUp', 'iconKeep'];
                return [
                    '{title| ' +
                        param.name +
                        ' }' +
                        '{DIN|' +
                        param.data.value[0] +
                        '}' +
                        '比例' +
                        '{' +
                        iconsArr[1] +
                        '|}' +
                        '{cont|' +
                        param.data.value[0] +
                        '}' +
                        '{cont|%}',
                    '占比1 ' +
                        '{cont|' +
                        param.data.value[0] +
                        '}' +
                        '%' +
                        '  比率1' +
                        '{' +
                        iconsArr[1] +
                        '|}' +
                        '{cont|' +
                        param.data.value[0] +
                        '}' +
                        '{cont|%}' +
                        '    占比2 ' +
                        '{cont|' +
                        param.data.value[0] +
                        '}' +
                        '%' +
                        '  比率2' +
                        '{' +
                        iconsArr[1] +
                        '|}' +
                        '{cont|' +
                        param.data.value[0] +
                        '}' +
                        '{cont|%}',
                ].join('\n');
            },
            rich: {
                title: {
                    fontSize: 14,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    borderRadius: 2,
                    padding: [3, 4],
                    lineHeight: 25,
                    align: 'left',
                },
                DIN: {
                    fontSize: 15,
                    fontFamily: 'myDIN',
                    padding: [2, 10],
                },
                cont: {
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 25,
                    align: 'left',
                },
            },
        },
        label: {
            position: 'insideTopLeft',
            color: '#333',
            formatter: function (param) {
                iconsArr = ['iconDown', 'iconUp', 'iconKeep'];
                return [
                    '{title| ' + param.name + ' }' + '{DIN|',
                    param.data.value[0] +
                        '}' +
                        '比率' +
                        '{' +
                        iconsArr[1] +
                        '|}' +
                        '{cont|' +
                        param.data.value[0] +
                        '}' +
                        '{cont|%}',
                    '占比1 ' + '{cont|' + param.data.value[0] + '}' + '%',
                    '比率1' + '{' + iconsArr[2] + '|}' + '{cont|' + param.data.value[0] + '}' + '{cont|%}',
                    '占比2 ' + '{cont|' + param.data.value[0] + '}' + '%',
                    '比率2' + '{' + iconsArr[0] + '|}' + '{cont|' + param.data.value[0] + '}' + '{cont|%}',
                ].join('\n');
            },
            rich: {
                title: {
                    fontSize: 14,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    borderRadius: 2,
                    padding: [3, 4],
                    lineHeight: 25,
                    align: 'left',
                },
                DIN: {
                    fontSize: 15,
                    fontFamily: 'myDIN',
                    padding: [2, 3],
                },
                cont: {
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 25,
                    align: 'left',
                },
            },
        },
        itemStyle: {
            color: '#333',
            borderColor: 'black',
        },
        levels: [
            {
                color: ['#81d0f5', '#4ac694', '#a66ece'],
                colorMappingBy: 'id',
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 0,
                    gapWidth: 1,
                },
                upperLabel: {
                    show: false,
                },
            },
            {
                itemStyle: {
                    borderColor: '#ddd',
                    borderWidth: 5,
                    gapWidth: 1,
                    borderColorSaturation: 0.55,
                },
            },
            {
                colorSaturation: [0.9],
                itemStyle: {
                    borderWidth: 5,
                    gapWidth: 1,
                    borderColorSaturation: 0.7,
                },
            },
        ],
    },
};
