var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "#F7F7F7",
        borderColor: "#F7F7F7",
        borderWidth: 2
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        borderWidth: 0,
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var option = {
    legend: [{
        orient: '',
        icon: 'circle',
        right: '20%',
        top: '20%',
        data: ['TOP1 34216', 'TOP2 34216', 'TOP3 34216', 'TOP4 34216', 'TOP5 34216', ],
        textStyle: {
            fontStyle: 50
        },
        itemWidth: 5,
        itemHeight: 5,
        itemGap: 1,
    }],
    series: [{
            name: 'TOP1',
            type: 'pie',
            clockWise: false,
            radius: ["90%", "92%"],
            hoverAnimation: false,
            z: 2,
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF9C22',
                    borderColor: "#FF9C22",
                    borderWidth: 2
                }
            },
            data: [{
                    value: 100,
                    name: '01',

                },
                {
                    value: 50,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
        },
        {
            name: 'TOP1',
            type: 'pie',
            clockWise: false,
            radius: ["90%", "92%"],
            itemStyle: dataStyle,
            hoverAnimation: false,
            z: 1,
            data: [{
                    value: 270,
                    name: '01'
                },
                {
                    value: 90,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
        },
        {
            name: 'TOP2',
            type: 'pie',
            clockWise: false,
            radius: ['70%', '72%'],
            hoverAnimation: false,
            z: 2,
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF9C22',
                    borderColor: "#FF9C22",
                    borderWidth: 2
                }
            },
            data: [{
                    value: 200,
                    name: '02'
                },
                {
                    value: 90,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'TOP2',
            type: 'pie',
            clockWise: false,
            radius: ['70%', '72%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            z: 1,
            data: [{
                    value: 270,
                    name: '02'
                },
                {
                    value: 90,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'TOP3',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: ['50%', '52%'],
            z: 2,
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF9C22',
                    borderColor: "#FF9C22",
                    borderWidth: 2
                }
            },
            data: [{
                    value: 180,
                    name: '03'
                },
                {
                    value: 90,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'TOP3',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: ['50%', '52%'],
            itemStyle: dataStyle,
            z: 1,
            data: [{
                    value: 270,
                    name: '03'
                },
                {
                    value: 90,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        }, {
            name: 'TOP4',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: ['30%', '32%'],
            z: 2,
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF9C22',
                    borderColor: "#FF9C22",
                    borderWidth: 2
                }
            },
            data: [{
                    value: 150,
                    name: '04'
                },
                {
                    value: 90,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'TOP4',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: ['30%', '32%'],
            itemStyle: dataStyle,
            z: 1,
            data: [{
                    value: 270,
                    name: '04'
                },
                {
                    value: 90,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        }, {
            name: 'TOP5',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: ['10%', '12%'],
            z: 2,
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF9C22',
                    borderColor: "#FF9C22",
                    borderWidth: 2
                }
            },

            data: [{
                    value: 100,
                    name: '05'
                },
                {
                    value: 90,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'TOP5',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: ['10%', '12%'],
            itemStyle: dataStyle,
            z: 1,
            data: [{
                    value: 270,
                    name: '05'
                },
                {
                    value: 90,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        }, {
            type: 'pie',
            color: ['#f18d00', '#f18d00', "#f18d00", "#f18d00", "#f18d00"],
            data: [{
                value: '',
                name: 'TOP1 34216'
            }, {
                value: '',
                name: 'TOP2 34216',
            }, {
                value: '',
                name: 'TOP3 34216'
            }, {
                value: '',
                name: 'TOP4 34216'
            }, {
                value: '',
                name: 'TOP5 34216'
            }]
        }

    ]
};