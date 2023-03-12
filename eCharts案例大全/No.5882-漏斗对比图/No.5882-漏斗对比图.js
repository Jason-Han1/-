option = {
    backgroundColor: "#ffffff",
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    calculable: true,
    series: [{
            color: ['#0000ff'],
            name: '计划投入',
            type: 'funnel',
            width: '45%',
            height: '70%',
            x: '5%',
           
            minSize: '10%',
            funnelAlign: 'right',

            center: ['50%', '50%'], // for pie

            data: [{
                    value: 30,
                    name: '下单30%'
                }, {
                    value: 55,
                    name: '咨询55%'
                },
                {
                    value: 65,
                    name: '点击65%'
                },
                {
                    value: 60,
                    name: '访问62%'
                }, {
                    value: 80,
                    name: '展现80%'
                }
            ].sort(function(a, b) {
                return a.value - b.value
            }),
            roseType: true,
            label: {
                normal: {
                    formatter: function(params) {

                    },
                    position: 'inside'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowOffsetY: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            }
        },

        {
            color: ['#67E0E3'],
            name: '实际投入',
            type: 'funnel',
            width: '45%',
            height: '70%',
            x: '50%',
         
            minSize: '10%',
            funnelAlign: 'left',

            center: ['50%', '50%'], // for pie

            data: [{
                    value: 35,
                    name: '下单35%'
                }, {
                    value: 40,
                    name: '咨询40%'
                },
                {
                    value: 70,
                    name: '访问70%'
                },
                {
                    value: 90,
                    name: '点击90%'
                },
                {
                    value: 95,
                    name: '展现95%'
                }
            ].sort(function(a, b) {
                return a.value - b.value
            }),
            roseType: true,
            label: {
                normal: {
                    position: 'inside'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowOffsetY: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            }
        },

    ]
};