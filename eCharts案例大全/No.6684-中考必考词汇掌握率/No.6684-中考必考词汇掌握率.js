option = {
    backgroundColor: "#03141c",
    title: {
        text: "中考必考词汇掌握率",
        subtext: '90%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 20,
            fontWeight: '900'
        },
        subtextStyle: {
            color: "#60CB6D",
            fontSize: 30,
            fontWeight: 'normal',
            fontWeight: '900'

        }
    },
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
    // },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose3', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    calculable: true,
    series: [

        {
            name: '总词汇量',
            type: 'pie',
            radius: [100, 130],
            center: ['50%', '50%'],
            data: [{
                    value: 4500,
                    name: '吴际帅\n牛亚莉',
                    itemStyle: {
                        color: '#60CB6D'
                        //color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        //    offset: 0,
                        //    color: '#f6e3a1'
                        //}, {
                        //    offset: 1,
                        //    color: '#ff4236'
                        //}])
                    },
                    label: {
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        formatter: '已掌握词汇量{c}个',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                },
                {
                    value: 500,
                    name: 'rose2',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [110, 120],
            center: ['50%', '50%'],
            data: [{
                    value: 4500,
                    name: '吴际帅\n牛亚莉',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 500,
                    name: 'rose2',
                    itemStyle: {},
                    label: {
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        formatter: '总词汇量5000个',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                }
            ]
        }
    ]
};