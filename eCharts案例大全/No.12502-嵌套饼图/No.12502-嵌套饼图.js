option = {
    title: {
        text: "",
        subtext: "",
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 18
        },
    },

    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:{c}({d}%)"
    },
    series: [{
        name: '点击访问商品详情页',
        type: 'pie',
        selectedMode: 'single',
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{
            value: 19,
            name: '免费商品兑换',selected: true
        }, {
            value: 11,
            name: '包年商品兑换'
        },{
            value: 11,
            name: '明星商品兑换'
        }]
    }]
};