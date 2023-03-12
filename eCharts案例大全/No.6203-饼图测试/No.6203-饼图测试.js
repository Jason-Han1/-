var getinnername = ['双师能力', '教学教研', '师风师德', '科研与技术'];
var getinnervalue = [22, 22, 28, 28];
var getoutername = ['进修培训情况', '能力提升情况', '教学工作', '教研工作', '技能竞赛', '思想道德建设', '获奖情况', '年度考核', '成果获奖', '平台/团队建设', '科研项目', '学术成果'];
var getoutervalue = [8, 14, 6, 7, 9, 11, 7, 10, 6, 9, 8, 4];

let scale = 1;
var innervalue = [];
for (var i = 0; i < getinnername.length; i++) {
    innervalue.push({
        name: getinnername[i],
        value: getinnervalue[i]
    })
}
var outervalue = [];
for (var i = 0; i < getoutername.length; i++) {
    if (getoutername[i] == '进修培训情况' || getoutername[i] == '能力提升情况') {
        outervalue.push({
            name: getoutername[i],
            value: getoutervalue[i],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#81BEFF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#3295FF' // 100% 处的颜色
                        }]
                    }
                }
            }
        })
    }
    if (getoutername[i] == '教学工作' || getoutername[i] == '教研工作' || getoutername[i] == '技能竞赛') {
        outervalue.push({
            name: getoutername[i],
            value: getoutervalue[i],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#48D69E' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#70F3C2' // 100% 处的颜色
                        }]
                    }
                }
            }
        })
    }
    if (getoutername[i] == '思想道德建设' || getoutername[i] == '获奖情况' || getoutername[i] == '年度考核') {
        outervalue.push({
            name: getoutername[i],
            value: getoutervalue[i],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#FEAE5C' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FECC84' // 100% 处的颜色
                        }]
                    }
                }
            }
        })
    }
    if (getoutername[i] == '成果获奖' || getoutername[i] == '科研项目' || getoutername[i] == '学术成果' || getoutername[i] == '平台/团队建设') {
        outervalue.push({
            name: getoutername[i],
            value: getoutervalue[i],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#A1AEFF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#9686F3' // 100% 处的颜色
                        }]
                    }
                }
            }
        })
    }
}
let echartData = {
    inner: innervalue,
    outer: outervalue
};

let legend1 = echartData.inner.map(v => v.name);
let legend2 = echartData.outer.map(v => v.name);
let legendData = [...legend1, ...legend2];

option = {
    tooltip: {
        trigger: 'item',
        extraCssText: 'color:#000;padding-left:8px;line-height:30px;width:150px;height:30px;background:rgba(255,255,255,1);box-shadow:1px 5px 20px 0px rgba(1,11,19,0.2);border-radius:6px;',
        formatter: '{b}：{c}分'
    },
    series: [{
            color: [{
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#81BEFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#3295FF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#48D69E' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#70F3C2' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FEAE5C' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FECC84' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#A1AEFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#9686F3' // 100% 处的颜色
                }],
            }],
            type: 'pie',
            radius: [0, '35%'],
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                }
            },
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: echartData.inner
        },
        {
            type: 'pie',
            radius: ['40%', '110%'],
            roseType: "radius",
            data: echartData.outer,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
        }
    ]
};