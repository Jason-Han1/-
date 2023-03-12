var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 30,
        shadowColor: 'rgba(40, 40, 40, 0.3)',
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
    backgroundColor: '#1C0D22',
    color: ["#857ABA", "#4C3CAE", "#8C0F86", "#CA2C95", "#E1A4C4", "#857ABA" ],
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        itemGap: 12,
        top: '10%',
         textStyle: {
            color: '#FE80C8',
        },
        data: ['01', '02', '03', '04', '05', '06']
    },
    
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [180, 200],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [{
                    value: 300,
                    name: '01'
                },
                {
                    value: 50,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [160, 180],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                    value: 250,
                    name: '02'
                },
                {
                    value: 50,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [140, 160],
            itemStyle: dataStyle,

            data: [{
                    value: 160,
                    name: '03'
                },
                {
                    value: 50,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'Line 4',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [120, 140],
            itemStyle: dataStyle,
            data: [{
                    value: 120,
                    name: '04'
                },
                {
                    value: 50,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'Line 5',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [100, 120],
            itemStyle: dataStyle,

            data: [{
                    value: 80,
                    name: '05'
                },
                {
                    value: 50,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'Line 6',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [80, 100],
            itemStyle: dataStyle,

            data: [{
                    value: 60,
                    name: '06'
                },
                {
                    value: 50,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },

    ]
};