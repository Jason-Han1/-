myChart.showLoading();

var data = {
    "name": "flare",
    "children": [
        {
            "name": "data",
            "children": [
                {
                    "name": "converters",
                    "children": [
                        { "name": "Converters", "value": 721 },
                        {
                            "name": "DelimitedTextConverter", "value": 4294,
                            "children": [
                                { "name": "Converters", "value": 721 },
                                {
                                    "name": "DelimitedTextConverter", "value": 4294,
                                    "children": [
                                        { "name": "Converters", "value": 721 },
                                        {
                                            "name": "DelimitedTextConverter", "value": 4294,
                                            "children": [
                                                {
                                                    "name": "Converters", "value": 721,
                                                    "children": [
                                                        { "name": "Converters", "value": 721 },
                                                        { "name": "DelimitedTextConverter", "value": 4294 }
                                                    ]
                                                },
                                                {
                                                    "name": "DelimitedTextConverter", "value": 4294,
                                                    "children": [
                                                        { "name": "Converters", "value": 721 },
                                                        { "name": "DelimitedTextConverter", "value": 4294 }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DataUtil",
                    "value": 3322
                }
            ]
        },
        {
            "name": "display",
            "children": [
                {
                    "name": "", "value": 8833,
                    itemStyle: {
                        opacity: 0
                    },
                    "children": [
                        {
                            "name": "DirtySprite", "value": 8833,
                            itemStyle: {
                                opacity: 0
                            },
                            "children": [
                                {
                                    "name": "DirtySprite", "value": 8833,
                                    "children": [
                                        { "name": "DirtySprite", "value": 8833 }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

var data2 = {
    "name": "flare",
    "children": [
        {
            "name": "flex",
            "children": [
                { "name": "FlareVis", "value": 4116 }
            ]
        },
        {
            "name": "scale",
            "children": [
                { "name": "IScaleMap", "value": 2105 },
                { "name": "LinearScale", "value": 1316 },
                { "name": "LogScale", "value": 3151 },
                { "name": "OrdinalScale", "value": 3770 },
                { "name": "QuantileScale", "value": 2435 },
                { "name": "QuantitativeScale", "value": 4839 },
                { "name": "RootScale", "value": 1756 },
                { "name": "Scale", "value": 4268 },
                { "name": "ScaleType", "value": 1821 },
                { "name": "TimeScale", "value": 5833 }
            ]
        },
        {
            "name": "display",
            "children": [
                { "name": "DirtySprite", "value": 8833 }
            ]
        }
    ]
};

myChart.hideLoading();

myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'tree',
            orient: 'BT',
            data: [data],
            roam: true,
            top: '0',
            left: '5%',
            bottom: '0',
            right: '5%',
            edgeShape: 'polyline',
            width: 500,
            height: 2000,
            center: [100, 2500],
            symbolSize: 7,

            label: {
                position: 'top',
                verticalAlign: 'middle',
                align: 'center'
            },

            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            expandAndCollapse: true,

            initialTreeDepth: -1,
            animationDuration: 550,
            animationDurationUpdate: 750

        }
    ]
});

