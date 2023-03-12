//[1990,1991] = [15,20]
var DataShenghui=[15,20];
var DatafeiShenghui=[15,20];
var Datazhixia=[15,20];
var Datadangmei=[15,20];
var Datafeidangmei=[15,20];


option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            orient:'horizontal',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 2500,
            // controlStyle: {
            //     position: 'left'
            // },
            data: ['1990', '1991', '1992', '1993']
        },
        title: {
            subtext: ' ',
            subtextStyle: {
                align: 'center'
            }
        },
        tooltip: {},
        toolbox:{
            show:true
        },
        legend: {
            type:'plain',
            orient: 'vertical',
            x: 'right',
            data: ['省会城市,非省会城市,直辖市,党媒,非党媒'],
            selectedMode: 'multiple'
        },
        calculable: true,
        series: [{
            name: '地区分布',
            type: 'pie',
            selectedMode: 'multiple',
            radius: [0, '50%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
 },
 {
            name: '地布',
            type: 'pie',
            selectedMode: 'multiple',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
 }]},
    options: [{
        title: {
            text: '第一届获奖地区分布',
        },
        series: [{
            name: '地区分布',
            data: [{
                name: '省会城市',
                value: 59,
            }, {
                name: '非省会城市',
                value: 16
            }, {
                name: '直辖市',
                value: 58
            }]
        },
        {
            name: '地布',
            data: [{
                name: '省会城市',
                value: 73
            }, {
                name: '非省会城市',
                value: 16
            }, {
                name: '直辖市',
                value: 58
            }]
        }]
    }, {
        title: {
            text: '第二届获奖地区分布'
        },
        series: [{
           name: '地区分布',
            data: [{
                name: '省会城市',
                value: 59
            }, {
                name: '非省会城市',
                value: 13
            }, {
                name: '直辖市',
                value: 79
            }]
        },
        {
            name: '地布',
            data: [{
                name: '省会城市',
                value: 73
            }, {
                name: '非省会城市',
                value: 16
            }, {
                name: '直辖市',
                value: 58
            }]
        }]
    }, {
        title: {
            text: '第三届获奖地区分布'
        },
        series: [{
           name: '地区分布',
            data: [{
                name: '省会城市',
                value: 67
            }, {
                name: '非省会城市',
                value: 14
            }, {
                name: '直辖市',
                value: 75
            }]
        },
        {
            name: '地布',
            data: [{
                name: '省会城市',
                value: 73
            }, {
                name: '非省会城市',
                value: 16
            }, {
                name: '直辖市',
                value: 58
            }]
        }]
    }, {
        title: {
            text: '第四届获奖地区分布'
        },
        series: [{
           name: '地区分布',
            data: [{
                name: '省会城市',
                value: 71
            }, {
                name: '非省会城市',
                value: 16
            }, {
                name: '直辖市',
                value: 71
            }]
        },
        {
            name: '地布',
            data: [{
                name: '省会城市',
                value: 73
            }, {
                name: '非省会城市',
                value: 16
            }, {
                name: '直辖市',
                value: 58
            }]
        }]
    }]
};