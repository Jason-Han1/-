var data = {
    "level": 1,
    "name": "flare",
    "children": [{
            "level": 2,
            "name": "analytics",
            "children": [{
                    "level": 3,
                    "name": "cluster",
                    "children": [{
                            "name": "AgglomerativeCluster",
                            "value": 3938
                        },
                        {
                            "name": "CommunityStructure",
                            "value": 3812
                        },
                        {
                            "name": "HierarchicalCluster",
                            "value": 6714
                        },
                        {
                            "name": "MergeEdge",
                            "value": 743
                        }
                    ]
                },

                {
                    "level": 3,
                    "name": "graph",
                    "children": [{
                            "name": "BetweennessCentrality",
                            "value": 3534
                        },
                        {
                            "name": "LinkDistance",
                            "value": 5731
                        },
                        {
                            "name": "MaxFlowMinCut",
                            "value": 7840
                        },
                        {
                            "name": "ShortestPaths",
                            "value": 5914
                        },
                        {
                            "name": "SpanningTree",
                            "value": 3416
                        }
                    ]
                },
                {
                    "level": 3,
                    "name": "optimization",
                    "children": [{
                        "name": "AspectRatioBanker",
                        "value": 7074
                    }]
                }
            ]
        },
        {
            "level": 2,
            "name": "animate",
            "children": [{
                    "level": 3,
                    "name": "Easing",
                    "value": 17010
                },
                {
                    "level": 3,
                    "name": "FunctionSequence",
                    "value": 5842
                },
                {
                    "level": 3,
                    "name": "interpolate",
                    "children": [{
                            "name": "ArrayInterpolator",
                            "value": 1983
                        },
                        {
                            "name": "ColorInterpolator",
                            "value": 2047
                        },
                        {
                            "name": "DateInterpolator",
                            "value": 1375
                        },
                        {
                            "name": "Interpolator",
                            "value": 8746
                        },
                        {
                            "name": "MatrixInterpolator",
                            "value": 2202
                        },
                        {
                            "name": "NumberInterpolator",
                            "value": 1382
                        },
                        {
                            "name": "ObjectInterpolator",
                            "value": 1629
                        },
                        {
                            "name": "PointInterpolator",
                            "value": 1675
                        },
                        {
                            "name": "RectangleInterpolator",
                            "value": 2042
                        }
                    ]
                },
                {
                    "level": 3,
                    "name": "ISchedulable",
                    "value": 1041
                },
                {
                    "level": 3,
                    "name": "Parallel",
                    "value": 5176
                },
                {
                    "level": 3,
                    "name": "Pause",
                    "value": 449
                },
                {
                    "level": 3,
                    "name": "Scheduler",
                    "value": 5593
                },
                {
                    "level": 3,
                    "name": "Sequence",
                    "value": 5534
                },
                {
                    "level": 3,
                    "name": "Transition",
                    "value": 9201
                },
                {
                    "level": 3,
                    "name": "Transitioner",
                    "value": 19975
                },
                {
                    "level": 3,
                    "name": "TransitionEvent",
                    "value": 1116
                },
                {
                    "level": 3,
                    "name": "Tween",
                    "value": 6006
                }
            ]
        }
    ]
};

option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [{
        type: 'tree',
        data: [data],
        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',
        symbolSize: 7,
        label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 12,
            lineHeight: 24,
            formatter: function(params) {
                console.log(params)
                if (params.data.level === 1) {
                    return '{a|' + params.name + '}'
                } else if (params.data.level === 2) {
                    return '{b|' + params.name + '}'
                } else if (params.data.level === 3) {
                    return '{c|' + params.name + '}'
                } else {
                    return '{d|' + params.name + '}'
                }
            },
            rich: {
                a: {
                    padding: 6,
                    borderRadius: 3,
                    color:'#fff',
                    backgroundColor: '#546fc6'
                },
                b: {
                    padding: 6,
                    borderRadius: 3,
                    color:'#fff',
                    backgroundColor: '#7ab1a6'
                },
                c: {
                    padding: 6,
                    borderRadius: 3,
                    color:'#fff',
                    backgroundColor: '#bec985'
                },
                d: {
                    padding: 6,
                    borderRadius: 3,
                    color:'#fff',
                    backgroundColor: '#fed360'
                }
            }
        },
        lineStyle:{
            color:'#91cd75'
        },
        leaves: {
            label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
            }
        },

        emphasis: {
            focus: 'descendant'
        },

        expandAndCollapse: false,
        animationDuration: 550,
        animationDurationUpdate: 750
    }]
}