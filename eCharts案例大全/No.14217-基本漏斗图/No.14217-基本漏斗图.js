option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },

    calculable: true,
    series: [{
        name: 'DATA',
        type: 'funnel',
        left: 100,
        right: 100,
        min: 0,
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
            normal: {
                show: true,
                position: 'right'
            },
        },
        labelLine: {
            normal: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 1
            }
        },
        data: [{
                value: 10,
                name: '10%'
            },
            {
                value: 20,
                name: '20%'
            },
            {
                value: 30,
                name: '30%'
            },
            {
                value: 40,
                name: '40%'
            }
        ]
    }]
};