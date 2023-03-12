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
            color: ['#4DFFE3','#4DE0FF','#4DFF8F','#ADFF4D'],
            tooltip : {
                show: true,
                formatter: "{b} : {c}"
            },

            legend: {
                top: "13.5%",
                x: 'right',
                left: "42%",
                itemWidth:0,itemHeight:0,
                data: ['已婚已育','已婚未育','未婚' ,'学生'],
                itemGap: 38,
                textStyle: {
                    color: '#fff',
                    align:'right',
                    x: 'right',
                    textAlign:'right'
                },

                selectedMode: true,
                orient: "vertical",

            },
            series: [
                {
                name: 'Line 4',
                type: 'pie',
                clockWise: true,
                hoverAnimation: false,
                radius: ['65%', '75%'],
                itemStyle: dataStyle,

            data: [{
                value: 7645434,
                name: '已婚已育'
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
            radius: ['50%', '60%'],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                value: 2632321,
                name: '已婚未育'
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
            radius: ['35%', '45%'],
            itemStyle: dataStyle,

                    data: [{
                        value: 1823323,
                        name: '未婚'
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

                    radius: ['20%', '30%'],
                    itemStyle: dataStyle,
                    hoverAnimation: false,

                    data: [ {
                        value: 1342221,
                        name: '学生'
                    },{
                        value:1912343,
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