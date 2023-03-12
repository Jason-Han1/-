        data = [{
                name: 'Bound\nForce',
                itemStyle: {
                    color: '#3aa255'
                },
                children: [{
                    name: 'Bound\nLength',
                    value: 1,
                    itemStyle: {
                        color: '#a2bb2b'
                    },
                    children: [{
                        name: '',
                        value: 1,
                        itemStyle: {
                            color: '#a2bb2b'
                        }
                    }]
                }, {
                    name: 'Bound\nAngle',
                    value: 1,
                    itemStyle: {
                        color: '#62aa3c'
                    },
                    children: [{
                        name: '',
                        value: 1,
                        itemStyle: {
                            color: '#62aa3c'
                        }
                    }]
                }, {
                    name: 'Dihedral\nAngle',
                    value: 1,
                    itemStyle: {
                        color: '#03a653'
                    },
                    children: [{
                        name: '',
                        value: 1,
                        itemStyle: {
                            color: '#03a653'
                        }
                    }]
                }]
            },
            {
                name: 'Not-Bounding\nForce',
                itemStyle: {
                    color: '#9db2b7'
                },
                children: [{
                        name: 'Long-Range',
                        value: 1,
                        itemStyle: {
                            color: '#9d5433'
                        },
                        children: [{
                            name: 'SPME',
                            value: 1,
                            itemStyle: {
                                color: '#b53b54'
                            }
                        }]
                    },
                    {
                        name: 'Short-Range',
                        itemStyle: {
                            color: '#d4ad12'
                        },
                        children: [{
                            name: 'Lennard\nJones',
                            value: 1,
                            itemStyle: {
                                color: '#c78869'
                            }
                        }, {
                            name: 'Coulomb\nForce',
                            value: 1,
                            itemStyle: {
                                color: '#ae341f'
                            }
                        }]
                    }
                ]

            }
        ];

        option = {
            title: {
                text: 'Forces Categories',
                textStyle: {
                    fontSize: 14,
                    align: 'center'
                },
                subtextStyle: {
                    align: 'center'
                }
            },
            series: {
                align: 'center',
                type: 'sunburst',
                highlightPolicy: 'ancestor',
                data: data,
                radius: [0, '95%'],
                sort: null,
                label: {
                    show: true,
                    fontWeight: 'bold',
                    fontSize: 15,
                },
                levels: [{}, {
                    r0: '15%',
                    r: '35%',
                    itemStyle: {
                        borderWidth: 2
                    },
                    label: {
                        rotate: 'tangential'
                    }
                }, {
                    r0: '35%',
                    r: '70%',
                    label: {
                        align: 'right'
                    }
                }, {
                    r0: '70%',
                    r: '75%',
                    label: {
                        position: 'outside',
                        padding: 8,
                        silent: false
                    },
                    itemStyle: {
                        borderWidth: 3
                    }
                }]
            }
        };