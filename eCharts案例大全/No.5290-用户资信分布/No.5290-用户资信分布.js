var datas = [{
        value: 1.58,
        name: 'AAA'
    }, {
        value: 4.62,
        name: 'AA'
    },
    {
        value: 24.24,
        name: 'A'
    },
    {
        value: 17.17,
        name: 'BBB'
    },
    {
        value: 10.41,
        name: 'BB'
    },
    {
        value: 9.10,
        name: 'B'
    },
    {
        value: 5.17,
        name: 'CCC'
    },
    {
        value: 2.59,
        name: 'CC'
    },
    {
        value: 25.13,
        name: 'C'
    }
]

datas = datas.map((item, index) => {
    if (index % 2 == 0) {
        item["label"] = {
                    position:'right'
                }
    } else {
        item["label"] = {
                    position:'left'
                }
    }
    return item;
})
console.log(datas)

option = {
    backgroundColor: '#141845',
    title: {
        text: '用户资信分布',
        textStyle: {
            color: '#fff',
        },
    },
    color: ['#8B3DFA', '#BB33FF', '#F927FF', '#EEE831', '#96ED31', '#69ED69', '#0066FF', '#3385FF', '#00D5FF'],

    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}%"
    },
    calculable: true,
    series: [{
        name: ' ',
        type: 'funnel',
        left: 'center',
        right: 'center',
        top: '6%',
        //x2: 80,
        bottom: '10%',
        width: '80%',
        // height: {totalHeight} - y - y2,
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'none',
        gap: 2,

        orient: 'vertical',
        labelLine: {
            normal: {
                length: 100,
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
        label: {
            normal: {
                formatter: function(params) {
                    return params.name + ' : ' + params.value + '%';
                },
                position: 'right'
            },
            emphasis: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        data: datas
    }]
};