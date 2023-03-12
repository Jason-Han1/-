option = {
    backgroundColor: '#000',
    title: {
        text: '转化率',
        subtext: '转化的百分率或分率',
        link: 'https://gallery.echartsjs.com/explore.html?u=bd-1841183165&type=work',
        target: 'blank',
        x: 'center',
        top: '10',
        textStyle: {
            color: '#FFF',
            fontSize: 16,
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },

    legend: {
        data: ['A', 'B', 'C', 'D', 'E'],
        x: 'center',
        y: '92%',
        textStyle: {
            color: '#FFF'
        }
    },

    color: ['#d6ae71', '#6D300E', '#52301C', '#471C05', '#52301C', '#6D300E', ],

    series: [

        {
            name: 'TIT',
            type: 'funnel',
            left: 'center',
            width: '90%',
            // sort: 'ascending',
            label: {
                normal: {
                    formatter: '{b}',
                    backgroundColor:'#6D480E',
                    color:'#fff',
                    borderRadius :3,
                    padding :[5,5,1,5],
                    shadowBlur: 0,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                    shadowColor: '#9E853A'
                },

            },
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    lineStyle: {
                    type: 'solid',
                    color: "#6D480E"
                },
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#000',
                    borderWidth: 2,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, .6)'
                }
            },
            tooltip: {
                show: false
            },

            data: [{
                    value: 10,
                    name: 'A'
                }, {
                    value: 20,
                    name: 'B'
                },
                {
                    value: 40,
                    name: 'C'
                },
                {
                    value: 60,
                    name: 'D'
                },
                {
                    value: 80,
                    name: 'E'
                },
                {
                    value: 100,
                    name: 'F'
                }
            ]
        },

        {
            name: 'TIT',
            type: 'funnel',
            left: 'center',
            width: '80%',
            maxSize: '80%',
            // sort: 'ascending',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff',
                        fontSize:14,
                    },
                },
                emphasis: {
                    position: 'inside',
                    formatter: '{b}: {c}%'
                }
            },
            
            itemStyle: {
                normal: {
                    opacity: .9,
                    borderColor: '#B6883F',
                    borderWidth: 2,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, .6)'
                }
            },

            data: [{
                    value: 2,
                    name: 'A'
                }, {
                    value: 5,
                    name: 'B'
                },
                {
                    value: 12,
                    name: 'C'
                },
                {
                    value: 18,
                    name: 'D'
                },
                {
                    value: 25,
                    name: 'E'
                },
                {
                    value: 40,
                    name: 'F'
                }
            ]
        }
    ]
};