option = {
    title: {
        text: '',
        left: 'center',
        textStyle: {
            color: '#1a1b4e',
            fontStyle: 'normal',
            fontSize: 30
        }

    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
   
    series: [{
        type: 'treemap',
        left: 'center',
        width: '60%',
        height: '70%',
        breadcrumb:{
            show:false
        },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    formatter: "{b}"
                },
                borderWidth:2
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        label: {
            normal: {
                fontSize: 17
            }
        },
        data: [{
                name: '中幼龄林\n\n64.66%',
                value: 64.66
            }, {
                name: '近成过熟林\n\n64.66%%',
                value: 35.34
            }
        ]
    }],
    color: ["#FFBD9D",  "#F75000"]
};