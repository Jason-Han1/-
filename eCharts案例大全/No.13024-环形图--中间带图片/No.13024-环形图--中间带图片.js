var giftImageUrl = "data:image/png;base64,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";
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    graphic: {
        elements: [{
            type: 'image',
            style: {
                // image: giftImageUrl,
                width: 130,
                height: 130
            },
            left: 'center',
            top: 'center'
        }]
    },
    /*legend: {
        orient: 'horizontal',
        icon: 'circle',
        bottom: 20,
        x: 'center',
        
        data: ['金融', '房地产', '专业服务业', '批发和零售业', '其他']
    },*/
    series: [{
        type: 'pie',
        radius: ['35%', '50%'],
        center: ['50%', '50%'],
        color: ['#46DF6C', '#EFDD1E', '#0071FB'],
        data: [{
                value: 126,
                name: '35岁以下'
            },
            {
                value: 279,
                name: '35~55岁'
            },
            {
                value: 52,
                name: '55岁以上'
            }
        ],
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 20,
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            }
        },
        label: {
            normal: {
                formatter: '{c|{b}}\n{d|{d}%}',
                rich: {
                    b: {
                        fontSize: 16,
                        color: '#12EABE',
                        align: 'left',
                        padding: 4
                    },
                    d: {
                        fontSize: 16,
                        align: 'left',
                        padding: 2
                    },
                    c: {
                        color: '#333',
                        fontSize: 16,
                        align: 'left',
                        padding: 2
                    }
                }
            }
        }
    }]
};