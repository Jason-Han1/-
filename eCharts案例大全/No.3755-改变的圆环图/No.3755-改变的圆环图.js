    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            // shadowBlur: 15,
            // shadowColor: 'white',
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
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    option = {
        backgroundColor: '#0b214a',
        color: ['#2F80ED', '#1CD6FF', '#00DE73', '#FDDD60','#FFB72D'],
        tooltip: {
            show: true,
            formatter: "{b} : {c}"
        },

        legend: {
            top: "22.5%",
            x: 'right',
            left: "42%",
            itemWidth: 0,
            itemHeight: 0,
            data: ['一等地', '二等地', '三等地', '四等地','五等地'],
            itemGap: 25,
            textStyle: {
                color: '#ttf',
                fontFamily:'Alibaba PuHuiTi',
                align: 'right',
                fontSize:'14px',
                x: 'right',
                textAlign: 'right'
            },
            selectedMode: true,
            orient: "vertical",

        },
        series: [{
                name: 'Line 4',
                type: 'pie',
                clockWise: true,
                hoverAnimation: false,
                radius: ['50%', '55%'],
                itemStyle: dataStyle,

                data: [{
                        value: 7645434,
                        name: '一等地'
                    }, {
                        value: 3612343,
                        name: '总数',
                        tooltip: {
                            show: false
                        },
                        itemStyle: placeHolderStyle
                    }

                ]
            }, {
                name: 'Line 3',
                type: 'pie',
                clockWise: true,
                radius: ['40%', '45%'],
                itemStyle: dataStyle,
                hoverAnimation: false,

                data: [{
                    value: 2632321,
                    name: '二等地'
                }, {
                    value: 2212343,
                    name: '总数',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                }]
            }, {
                name: 'Line 2',
                type: 'pie',
                clockWise: true,
                hoverAnimation: false,
                radius: ['30%', '35%'],
                itemStyle: dataStyle,

                data: [{
                    value: 1823323,
                    name: '三等地'
                }, {
                    value: 1812343,
                    name: '总数',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                }]
            },
            {
                name: 'Line 1',
                type: 'pie',
                clockWise: true,

                radius: ['20%', '25%'],
                itemStyle:dataStyle,
                hoverAnimation: false,

                data: [{
                        value: 1342221,
                        name: '四等地'
                    }, {
                        value: 1912343,
                        name: '总数',
                        tooltip: {
                            show: false
                        },
                        itemStyle: placeHolderStyle
                    }

                ]
            },
             {
                name: 'Line 0',
                type: 'pie',
                clockWise: true,

                radius: ['10%', '15%'],
                itemStyle: dataStyle,
                hoverAnimation: false,

                data: [{
                        value: 1342221,
                        name: '五等地'
                    }, {
                        value: 1912343,
                        name: '总数',
                        tooltip: {
                            show: false
                        },
                        itemStyle: placeHolderStyle
                    }

                ]
            }
        ]
    };