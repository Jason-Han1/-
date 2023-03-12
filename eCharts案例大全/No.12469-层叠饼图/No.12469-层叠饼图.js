myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 1,
    dataIndex: 1
});
myChart.on('mouseover', function(e) {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1,
        dataIndex: 0
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: e.dataIndex
    });
});
myChart.on('mouseout', function(e) {
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: 0
    });
});
myChart.on('legendselectchanged', function(params) {
    if (!params.selected[params.name]) {
        myChart.dispatchAction({
            type: 'legendUnSelect',
            name: params.name
        });
    } else {
        myChart.dispatchAction({
            type: 'legendSelect',
            name: params.name
        });
    }
});
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: "{a}：{b} {d}% ({c})"
    },
    legend: [{
        orient: 'vertical',
        icon: "circle",
        x: "80%",
        y: "center",
        data: ['商网用户登录','垃圾邮件信息','互联网用户登录','管理员邮件登录'],
        formatter: function(name) {
            var oa = option.series[1].data;
            var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
            for (var i = 0; i < option.series[1].data.length; i++) {
                if (name == oa[i].name) {
                    return oa[i].value;
                }
            }
        },
        textStyle: {
            color: "#324889",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 14,
            padding: [2, 0, 0, 0],
        },

    }, {
        orient: 'vertical',
        icon: "none",
        x: "85%",
        y: "center",
        data: ['商网用户登录','垃圾邮件信息','互联网用户登录','管理员邮件登录'],
        textStyle: {
            color: "#666",
            fontSize: 14,
            padding: [2, 0, 0, 0],

        },
    }],
    series: [{
        name: '',
        type: 'pie',
        zlevel: 0,
        silent: true,
        center: ['40%', '55%'],
        radius: ['0', '75%'],
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            value: 1000,
            name: '弱口令',
            itemStyle: {
                color: '#fbfcfd'
            }
        }, ]
    }, {
        color: ['#2623e5', '#5e77ff', '#879aff', '#f1f3ff'],
        name: '攻击类型',
        type: 'pie',
        zlevel: 99,
        // selectedMode: 'single',
        center: ['40%', '55%'],
        radius: [0, '65%'],
        hoverOffset: 45,
        label: {
            normal: {
                show: false,
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 901,
                name: '商网用户登录'
            },
            {
                value: 249,
                name: '垃圾邮件信息'
            },
            {
                value: 261,
                name: '互联网用户登录'
            },
            {
                value: 457,
                name: '管理员邮件登录'
            }
        ]
    }, ]
};
// myChart.setOption(option);