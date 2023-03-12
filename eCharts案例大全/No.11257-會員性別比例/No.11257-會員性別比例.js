const data = [{
                value: 335,
                name: '男性',
                rate: '10%',
                emphasis: {
                    show: true,
                    itemStyle: {
                        color: '#1890ff',
                        fontSize: 20
                    }
                }
            },
            {
                value: 310,
                name: '女性',
                rate: '30%'
            },
            {
                value: 1548,
                name: '未知',
                rate: '60%'
            }
        ]
option = {
    color: ['#1890ff', '#f04864', '#13c2c2', '#facc14'],
    backgroundColor: '#fff',
    series: [{
        type: 'pie',
        radius: 120,
        center: ['50%', '50%'],
        data,
        itemStyle: { //图形样式
            normal: {
                borderColor: '#fff',
                borderWidth: 4,
            },
        },
        label: {

            show: true,
            formatter: (obj) => {
                console.log(obj)
                return `{name|${obj.data.name}} {per|${obj.data.rate}}`
            },
            textStyle: {
                fontSize: 30,

            },
            position: 'outside',
            emphasis: {
                show: true
            },
            lineHeight: 14,
            fontSize: 14,
            rich: {
                name: {
                    color: "rgba(0, 0, 0, 0.65)"
                },
                per: {
                    color: "rgba(0, 0, 0, 0.45)"
                }
            }
        },
    }]
};