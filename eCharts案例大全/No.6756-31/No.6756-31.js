let uploadedDataURLbl = "/asset/get/s/data-1595994089286-z0pj3urBF.png";

let uploadedDataURLor = "/asset/get/s/data-1595994074119-gvRvZffEN.png";


let dataPie = [

    {
        value: 25,
        name: '挂式空调'
    },
    {
        value: 6,
        name: '中央空调'
    },

];
option = {
                // backgroundColor: '#021228',
                title: [{
                    text: '31',
                    subtext: '空调总数',
                    textAlign: 'center',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 14,
                        lineHeight: 12
                    },
                    subtextStyle: {
                        color: '#acb7c2',
                        fontSize: 12,
                        // fontWeight:800
                    },
                    x: '20%',
                    y: 'center',
                }],
                legend: {
                    right: '5px',
                    top: 'center',
                    orient: 'horizontal',
                    itemGap: 20,
                    itemWidth: 15,
                    itemHeight: 8,
                    formatter: function(name) {

                        let target, percent;
                        for (let i = 0; i < dataPie.length; i++) {
                            if (dataPie[i].name === name) {
                                target = dataPie[i].value;

                            }
                        }
                        let arr = [' {blue|' + name + '}', ' {white|' + target + '}'+'台'];
                        return arr.join("\n")

                    },
                    textStyle: {

                        lineHeight: 20,
                        color: '#a5dbff',
                        align: 'right',

                        rich: {
                            white: {
                                color: '#00ebff',
                                align: 'right',
                                padding:[0, 5]

                            },
                            blue: {
                                color: '#8fd5f3',
                                align: 'right',

                            },
                        }

                    },
                    data: [{
                        name: '挂式空调',
                        icon: 'image://' + uploadedDataURLbl
                    },
                        {
                            name: '中央空调',
                            icon: 'image://' + uploadedDataURLor
                        },

                    ],

                },

                series: [{
                    name: '',
                    type: 'pie',
                    radius: ['80%', '85%'],
                    center: ['20%', '50%'],
                    clockWise: true,
                    startAngle: 400,
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },

                    labelLine: {
                        show: false
                    },
                    hoverAnimation: false,

                    data: [{

                        tooltip: {
                            show: false
                        },
                        itemStyle: {

                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#348fe6'
                            }, {
                                offset: 1,
                                color: '#625bef'
                            }])
                        },
                        value: 6,
                        name: ''
                    },

                    ]
                },
                    {
                        name: '空调总数',
                        type: 'pie',
                        radius: ['70%', '95%'],
                        center: ['20%', '50%'],
                        clockWise: true,
                        startAngle: 450,
                        avoidLabelOverlap: false,
                        hoverAnimation: false,
                        label: {
                            show: false,
                            position: 'center'
                        },

                        labelLine: {
                            show: false
                        },

                        data: [{

                            tooltip: {
                                trigger: 'item',
                                formatter: '{a} <br/>{b}: {c} ({d}%)'
                            },
                            itemStyle: {

                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#f6e3a1'
                                }, {
                                    offset: 1,
                                    color: '#ff4236'
                                }])
                            },
                            value: dataPie[1].value,
                            name: dataPie[1].name
                        },
                            {

                                tooltip: {
                                    show: false
                                },
                                itemStyle: {

                                    color: 'transparent'
                                },
                                value: dataPie[0].value,
                                name: dataPie[0].name
                            },

                        ]
                    },
                ]
            };