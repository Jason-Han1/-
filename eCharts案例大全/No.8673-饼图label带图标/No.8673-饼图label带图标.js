let img1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAh1BMVEUAAAC+6nm+6nq28na+6nq/63nD7Ha+6nq+6nq+63q/6Xq+63u/6nqh/2u+6nq+6nq/6nq+6nq/63q/6Xq96nm97X656H++63q/63m+6Xq+6nq/6nq/6nq/63q+6ni97Hm+6Hy+6nq+6nq96Xq+6nm+6nq/6nq+6nq/6nm/6nq+6ny/6Xu+6nrEFxhlAAAALHRSTlMAqt0G0kwN9vDXIqF2AuvMtoV9LRwRC5Rj+cfBvXBHNBXlmYxqXFP4jlZDOrUCCSwAAAEoSURBVDjL3dFZtoIwDAbgH6hCoWUUEUHBecr+13eptHhQcQH3eyFJc2jTQsm3eJMVEY9XjkmF62MkJX5NrZItdO6werR+pI3sPj7jS1150AkvrZf0wcJLTW0f5his3LmODrap5bsAg0NkojM5QGIpnKyBHfZfHzfVkLmeyhjFpqFS4ZoKoGDPLen8PFAy7BcWWLLIge+K/oSeuoZNmUE7URJ0tcbumhQnYt28MlrL1xzEiorqVue+p2ZoyuNw024cV8FMwpjRSo3n6atd8rWDseTSdHXb6rMg9PFG1nYO3M/6Kbb40O5iORwgwRePUj/MnFcOvtnoH1vhAp/Miun7ZIZrLikmZe41t2uJaSdiuxa/7OmOn2Y0//cNQoiAUiFumMDtXjCq/gEGGBP31YkXRgAAAABJRU5ErkJggg==';
let img2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAolBMVEUAAADz6ir16yr06yr06ir16ir16yr07Cn06yn06in16yr06Sr16Sn06yr06ir06yn06ir16irv7Cj06ir16ir06yn06yn16in16in16yn06ir16ir37Cr//y/16yn06yr16ir06ir06in06in06Sny6ir26Sr16in06in06inz6irz6yn27Cr16yj06ir06ir06in26Sn06CL16in26ir06ipiqh6XAAAANXRSTlMA3bz77NHnKrn2lfn41IxvVEgP8NzHs6p5ZF8wHQTk4cOedFxEPCIY2JqCPzUzpJCIUAuzbO5G2rgAAAE7SURBVDjLrZLZcoIwGIV/IChR2XcFQcR9qbU97/9qrYQSRjpe+d1kMvMlOTkJvRlbVY3NKyHgCj5eChG9EG4A9gSAu/8LKjtgRGBXVDTECRTOSPsV9AxMMcfPwkRTtZkQxmAh5gNhSqwTjMXbhUpRfG3TEyaPnAspRDw2kOjLTjD5l4q1FOIlUaGr5p8QwqINHCmsfKIUo07gfkYuXOonJLLA7dnyAv2AaU30iZMULOSPMvdo0KItEa1xlsIRXjOeLbU0vjN6kKLXdoLd8O9g+zy5p3HAwcxJ3V8ktzsxsGhlXUsNpSeOFbSB7qxw82bmJdpKBG8RV8pwoBavKJurd4hSYoT2Zedt69tIc5ryOkSteVK0PYS1qF9yaR9mMa+OtiPSRwFJxkiHX1gnSYa9+owfkiQ3lCEVvYkfYd4lVwfZiRoAAAAASUVORK5CYII=';
// 数据及颜色设置
let bgColor = '#051234';
let scale = 1;
let echartData = [{
        name: 'A类',
        value: 30,
        unit: '元',
        detail: [{name: 'TypeA', value: 22},{name: 'TypeB', value: 8}]
    },
    {
        name: 'B类',
        value: 20,
        unit: '元',
        detail: [{name: 'TypeA', value: 12},{name: 'TypeB', value: 8}]
    }, {
        name: 'C类',
        value: 30,
        unit: '元',
        detail: [{name: 'TypeA', value: 12},{name: 'TypeB', value: 18}]
    }, {
        name: 'D类',
        value: 20,
        unit: '元',
        detail: [{name: 'TypeA', value: 3},{name: 'TypeB', value: 17}]
    }
];
let total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0)


option = {
    backgroundColor: bgColor,
    color: ['#2EB2FA', '#43CC31', '#FFC145', '#FFA8A8'],
    title: [{
        text: '异常分布情况',
        x: 'center',
        y: 20,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24 * scale,
            color: "#fff",
        }
    },{
        text: '分类统计',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 20 * scale,
            color: "#ccc",
        }
    }],
    tooltip: {
        show: false
    },
    legend: {
        icon: 'square',
        itemWidth: 12 * scale,
        itemGap: 25,
        top: 20,
        right: 30,
        textStyle: {
            color: '#fff'
        },
        data: [{
            name: 'TypeA',
            icon: 'image://'+img1
        }, {
            name: 'TypeB',
            icon: 'image://'+img2
        }]
    },
    series: [{
            type: 'pie',
            name: 'TypeB',  // 内层细圆环2
            radius: ['45%', '46%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0.05,
                        color: 'rgba(0,117,255, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(0,117,255, 0.1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,117,255, 1)'
                    }]),
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            name: 'TypeA',  // 外层圆环1（用于遮挡labelLine）
            radius: ['56%', '60%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: bgColor,
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            name: 'TypeB', // 最外层细圆环
            hoverAnimation: false,
            clockWise: false,
            radius: ['60%', '61%'],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0.05,
                        color: 'rgba(0,117,255, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(0,117,255, 0.1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,117,255, 1)'
                    }]),
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            name: '饼图内容区',
            type: 'pie',
            clockWise: false,
            radius: ['50%', '56%'],
            hoverAnimation: false,
            data: echartData,
            label: {
                normal: {
                    formatter: function(params, ticket, callback) {
                        return '{normal|' + params.name + '}\n{A|}{value|' + params.data.detail[0].value + '个}\n{B|}{value|' + params.data.detail[1].value + '个}';
                    },
                    padding: [0, -80],
                    rich: {
                        normal: {
                            color: '#fff',
                            fontSize: 14 * scale,
                            padding: [20, 4],
                            align: 'left'
                        },
                        value: {
                            color: '#fff',
                            align: 'left',
                            fontSize: 14 * scale,
                            padding: [2, 4],
                        },
                        A: {
                            width: 14,
                            height: 14,
                            align: 'left',
                            backgroundColor: {
                                image: img1
                            }
                        },
                        B: {
                            width: 14,
                            height: 14,
                            align: 'left',
                            backgroundColor: {
                                image: img2
                            }
                        }
                    }
                }

            },
            labelLine: {
                length: 30,
                length2: 100
            }
        }
    ]
};