let result = {
    "msg": "success",
    "code": 0,
    "count": 123, //同等级书籍数量
    "avg": 82.12, //学员平均成绩
    "didCount": 12 //学员做过的书籍数量
};
let stuName = "张三";
option = {
    backgroundColor: "#eee",
    title: {
        text: result.avg.toFixed(2),
        subtext: '该级别平均成绩',
        x: 'center',
        y: 'center',
        textStyle: {
            color: "#000",
            fontSize: 30,
            fontWeight: 'normal'
        },
        subtextStyle: {
            color: "rgba(0,0,0,.8)",
            fontSize: 14,
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}本，占同级别书籍{d}%"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose3', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    calculable: true,
    series: [{
            name: '占比',
            type: 'pie',
            radius: [100, 130],
            center: ['50%', '50%'],
            data: [{
                    value: result.didCount,
                    name: '已做',
                    itemStyle: {

                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#f6e3a1'
                        }, {
                            offset: 1,
                            color: '#ff4236'
                        }])
                    },
                    label: {
                        color: "rgba(0,0,0,.8)",
                        fontSize: 14,
                        formatter: '学员 ' + stuName + ' 已做此级别\n' + result.didCount + '本',
                        rich: {
                            a: {
                                color: "#000",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                },
                {
                    value: result.count - result.didCount,
                    name: '未做',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: '暂未定义',
            type: 'pie',
            radius: [110, 120],
            center: ['50%', '50%'],
            data: [{
                    value: result.didCount,
                    name: '已做次级别',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: result.count - result.didCount,
                    name: '未做解蔽',
                    itemStyle: {

                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#348fe6'
                        }, {
                            offset: 1,
                            color: '#625bef'
                        }])
                    },
                    label: {
                        color: "rgba(0,0,0,.8)",
                        fontSize: 14,
                        formatter: '该级别共有书籍\n' + result.count + '本',
                        rich: {
                            a: {
                                color: "#000",
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