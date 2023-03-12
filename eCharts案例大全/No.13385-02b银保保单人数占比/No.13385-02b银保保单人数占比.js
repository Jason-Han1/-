option = {
    title: {
        text: '02b银保保单人数占比',
        textStyle:{
            color:'#ffffff'
        }
    },
    backgroundColor: '#00265f',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        data: ['有1张保单', '有2张保单', '有3张保单'],
        align: 'right',
        //right: 10,
        top: '5%',
        textStyle: {
            color: "#fff"
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        selectedMode: 'single',
        radius: ['25%', '50%'],
        label: {
            normal: {
                fontSize: 14,
                formatter: '{c}({d}%)'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        labelLine: {

        },
        data: [{
                value: 142615,
                name: '有1张保单',
                itemStyle: {
                    normal: {
                        color: "#0089fa"

                    }
                }

            },
            {
                value: 23701,
                name: '有2张保单',
                itemStyle: {
                    normal: {
                        color: "#ffed25"

                    }
                }
            },
            {
                value: 5749,
                name: '有3张保单',
                itemStyle: {
                    normal: {
                        color: "#ff664d"

                    }
                }

            }
        ]
    }]
};