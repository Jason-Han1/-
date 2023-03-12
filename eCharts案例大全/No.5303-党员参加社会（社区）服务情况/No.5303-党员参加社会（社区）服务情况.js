option = {
    title: {
        text: '党员参加社会（社区）服务情况',
        top: 10,
        left: 10
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
    },
    toolbox: {
        show: true,
        top: 10,
        right: 10,
        feature: {
            mark: {
                show: true
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    grid: {
        top: 60,
        right: 70,
        bottom: 30,
        left: 60
    },
    legend: {
        top: 32,
        left: 'center',
        data: ['参与率', '参与时长']
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['王老师', '李老师', '刘老师', '赵老师']
    }],
    yAxis: [{
            type: 'value',
            name: "参\n与\n率",
            nameLocation: "center",
            nameGap: 35,
            nameRotate: 0,
            nameTextStyle: {
                fontSize: 16,
            },
            min: 0,
            max: 100,
            //默认以千分位显示，不想用的可以在这加一段
            axisLabel: { //调整左侧Y轴刻度， 直接按对应数据显示
                show: true,
                showMinLabel: true,
                showMaxLabel: true,
                formatter: function(value) {
                    return value;
                }
            }
        },
        {
            type: 'value',
            name: "时\n长",
            nameLocation: "center",
            nameGap: 50,
            nameRotate: 0,
            nameTextStyle: {
                fontSize: 16,
            },
            min: 0,
            max: 150,
            //默认以千分位显示，不想用的可以在这加一段
            axisLabel: { //调整左侧Y轴刻度， 直接按对应数据显示
                show: true,
                showMinLabel: true,
                showMaxLabel: true,
                formatter: function(value) {
                    return value;
                }
            }
        }
    ],
    series: [{
        name: '参与率',
        type: 'bar',
        yAxisIndex: 0,
        data: [39, 53, 79, 68],
        // itemStyle : { normal: {label : {show: true}}},
        // markPoint : {
        //     data : [
        //         {type : 'max', name: '最大值'},
        //         {type : 'min', name: '最小值'}
        //     ]
        // }
    }, {
        name: '参与时长',
        type: 'bar',
        yAxisIndex: 1,
        data: [68, 123, 56, 87],
        // itemStyle : { normal: {label : {show: true}}},
        // markPoint : {
        //     data : [
        //         {type : 'max', name: '最大值'},
        //         {type : 'min', name: '最小值'}
        //     ]
        // }
    }]
};