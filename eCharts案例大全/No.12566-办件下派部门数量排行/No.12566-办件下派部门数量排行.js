option = {
    backgroundColor: '#141845',
    title: {
        text: '办件下派部门数量排行',
        textStyle: {
            color: '#fff',
        },
    },
    color: ['#5D4AD8', '#1C90F3', '#28F2FF', '#81D923', '#FFCE71'],

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    calculable: true,
    series: [{
        name: ' ',
        type: 'funnel',
        left: '10%',
        top: '6%',
        //x2: 80,
        bottom: '10%',
        width: '80%',
        // height: {totalHeight} - y - y2,
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
            normal: {
                show: true,
                position: 'inside'
            },
            emphasis: {
                textStyle: {
                    fontSize: 20
                }
            }
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
        label: {
            normal: {
                formatter: function(params) {
                    return params.name + ' : ' + params.value + '%';
                },
                position: 'center'
            }
        },
        data: [{
                value: 60,
                name: '部门5'
            },
            {
                value: 40,
                name: '部门4'
            },
            {
                value: 20,
                name: '部门3'
            },
            {
                value: 80,
                name: '部门2'
            },
            {
                value: 100,
                name: '部门1'
            }
        ]
    }]
};