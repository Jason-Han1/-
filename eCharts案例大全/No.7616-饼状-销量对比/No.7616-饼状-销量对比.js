var placeHolderStyle = {
    normal: {
        color: 'rgba(124,228,245,0.2)',
    },
};
option = {
    backgroundColor:'rgba(2, 120, 200, 1)',
     title: {
        text: '销量对比',
        textStyle: {
            fontWeight: 'bold',
            fontSize: 14,
            color: '#0ab7ff'
        },
        left: '5%',
        top: '25'
    },
    tooltip: {
        show: true,
        formatter: "{a}：{d}%"
    },
    legend: {
          orient: '',
        itemGap: 12,
        left:'5%',
        top:'center',
        textStyle: {
            color: "#fff",
        },
        data: ['销量1', '销量2', '销量3']
    },

    series: [{
            name: '销量3',
            type: 'pie',
             hoverAnimation: false, //鼠标移入变大
            clockWise: false,
            radius: ['55%', '60%'],
            itemStyle: {
                 normal: {
                    color: '#4cabfe',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                    value:50,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value:50,
                    name: '销量3'
                }

            ],

        },
        {
            name: '销量2',
            type: 'pie',
            clockWise: false,
             hoverAnimation: false, //鼠标移入变大
            radius: ['45%', '50%'],
            itemStyle: {
                 normal: {
                    color: '#ffaf00',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
          
            data: [{
                    value: 60,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 40,
                    name: '销量2'
                }
            ]
        },
        {
            name: '销量1',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false, //鼠标移入变大
             radius: ['35%', '40%'],
            itemStyle: {
                 normal: {
                    color: '#01ebb9',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },

            data: [{
                    value: 70,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 30,
                    name: '销量1'
                }
            ]
        }

    ]
};