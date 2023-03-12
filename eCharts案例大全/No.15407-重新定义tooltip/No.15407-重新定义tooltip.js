option = {
    color: ['#ff3d3d', '#00a0e9', '#f603ff', '#00b419', '#5f52a0'],
    legend: {
        x: 'left',
        padding: [10, 20, 0, 20],
        data: ['顺丰', '邮政', '圆通', '中通', '天天'],
    },
    grid: {
        left: '0',
        right: '3%',
        bottom: '3%',
        top: '13%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#b1b1b1'],
                type: 'dashed'
            }
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        max: 4,
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#b1b1b1'],
                type: 'dashed'
            }
        }
    },
    series: [{
        smooth: true,
        name: '',
        type: 'line',
        symbol: 'circle',
        // symbolSize: 0,
       // showSymbol: false,
        data: [{
            name: ["'智能快递柜'", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出..."],
            value: 0
        }, {
            name: ["顺丰要上市", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 1
        }, {
            name: ["'智能快递柜'", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 1
        }, {
            name: ["顺丰要上市", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 2
        }, {
            name: ["'智能快递柜'", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 1
        }, {
            name: ["顺丰要上市", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 0
        }, {
            name: ["'智能快递柜'", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 1
        }],
        label: {
            normal: {
                show: true,
                // symbolSize:0,
                position: 'top', //值显示
                formatter: function(params) {
                    console.log(params);
                    if (params.dataIndex === 5) {
                        return '{b|'+ '' + '}'
                    }
                },
                rich: {
                    b: {
                        width: 10,
                        height: 10,
                        // color: 'red',
                        borderColor: 'blue',
                        borderRadius: 10,
                        borderWidth: 10,
                        // lineHeight: 10,
                    }
                }
            }
        }
    }]
};