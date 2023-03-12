var questionnaires = [{
    question: '对喝咖啡的看法',
    answers: [{
        option: '坚决不喝',
        juniorGirl: 3,
        juniorBoy: 3,
        seniorGirl: 1,
        seniorBoy: 1
    }, {
        option: '一般不喝',
        juniorGirl: 5,
        juniorBoy: 5,
        seniorGirl: 6,
        seniorBoy: 2
    }, {
        option: '有时会喝',
        juniorGirl: 27,
        juniorBoy: 13,
        seniorGirl: 3,
        seniorBoy: 3
    }, {
        option: '频繁会喝',
        juniorGirl: 8,
        juniorBoy: 9,
        seniorGirl: 4,
        seniorBoy: 2
    }]
}, {
    question: '了解咖啡的制作工艺',
    answers: [{
        option: '了解',
        juniorGirl: 2,
        juniorBoy: 6,
        seniorGirl: 1,
        seniorBoy: 0
    }, {
        option: '只知道喝',
        juniorGirl: 16,
        juniorBoy: 8,
        seniorGirl: 2,
        seniorBoy: 3
    }, {
        option: '略有耳闻',
        juniorGirl: 26,
        juniorBoy: 16,
        seniorGirl: 9,
        seniorBoy: 4
    }]
}, {
    question: '您认为喝咖啡对您的身体',
    answers: [{
        option: '非常有害，拒绝喝咖啡',
        juniorGirl: 2,
        juniorBoy: 1,
        seniorGirl: 1,
        seniorBoy: 1
    }, {
        option: '很有害，但有时可用来提神醒脑',
        juniorGirl: 0,
        juniorBoy: 0,
        seniorGirl: 2,
        seniorBoy: 0
    }, {
        option: '害处大于益处，应控制',
        juniorGirl: 4,
        juniorBoy: 4,
        seniorGirl: 2,
        seniorBoy: 0
    }, {
        option: '有益也有害，平时喝点问题不大',
        juniorGirl: 34,
        juniorBoy: 16,
        seniorGirl: 7,
        seniorBoy: 5
    }, {
        option: '有益于身体，要多喝',
        juniorGirl: 1,
        juniorBoy: 7,
        seniorGirl: 1,
        seniorBoy: 2
    }]
}, {
    question: '是否会提倡大家喝咖啡',
    answers: [{
        option: '会',
        juniorGirl: 8,
        juniorBoy: 7,
        seniorGirl: 3,
        seniorBoy: 1
    }, {
        option: '不会',
        juniorGirl: 8,
        juniorBoy: 3,
        seniorGirl: 3,
        seniorBoy: 2
    }, {
        option: '顺其自然',
        juniorGirl: 27,
        juniorBoy: 18,
        seniorGirl: 7,
        seniorBoy: 5
    }]
}, {
    question: '是否支持我们的研究',
    answers: [{
        option: '非常支持',
        juniorGirl: 38,
        juniorBoy: 22,
        seniorGirl: 10,
        seniorBoy: 8
    }, {
        option: '垃圾',
        juniorGirl: 4,
        juniorBoy: 4,
        seniorGirl: 1,
        seniorBoy: 0
    }]
}]

var questionnaire = questionnaires[4]
option = {
    title: {
        text: questionnaire.question,
        left: 'center'
    },
    toolbox: {
        show: true,
        showTitle: false,
        feature: {
            saveAsImage: {
                show: true,
                title: 'Save As Image'
            },
            dataView: {
                show: true,
                title: 'Data View'
            },
        }
    },
    legend: {
        bottom: 10,
        left: 'center',
        data: questionnaire.answers.map(item => {
            return item.option
        })
    },
    series: [{
        type: 'pie',
        radius: ['30%', '50%'],
        center: ['50%', '50%'],
        selectedMode: 'single',
        itemStyle: {
            normal: {
                // 每根柱子颜色设置
                color: function(params) {
                    let colors = [
                        '#733938', '#809d87', '#cf9490',
                        '#f6c094', '#b5ccbd', '#f3e1d5'
                    ]
                    let index = params.dataIndex % colors.length
                    return colors[index]
                }
            }
        },
        data: questionnaire.answers.map(item => {
            return {
                name: item.option,
                value: item.juniorGirl + item.juniorBoy + item.seniorGirl + item.seniorBoy,
                label: {
                    formatter: [
                        '{title| {b} }{abg|}',
                        ' {textHead|人群分类}{valueHead|人数}',
                        '{hr|}',
                        '{text|18岁以下女}{value|' + item.juniorGirl + '}',
                        '{text|18岁以下男}{value|' + item.juniorBoy + '}',
                        '{text|18岁以下女}{value|' + item.seniorGirl + '}',
                        '{text|18岁以下难}{value|' + item.seniorBoy + '}'
                    ].join('\n'),
                    backgroundColor: '#eee',
                    borderColor: '#777',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        title: {
                            color: '#eee',
                            align: 'center'
                        },
                        abg: {
                            backgroundColor: '#333',
                            width: '100%',
                            align: 'right',
                            height: 25,
                            borderRadius: [4, 4, 0, 0]
                        },
                        iconHead: {
                            color: '#333',
                            height: 24,
                            align: 'left'
                        },
                        hr: {
                            borderColor: '#777',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        text: {
                            width: 40,
                            padding: [0, 20, 0, 30],
                            align: 'left'
                        },
                        textHead: {
                            color: '#333',
                            width: 40,
                            padding: [0, 20, 0, 30],
                            align: 'center'
                        },
                        value: {
                            width: 20,
                            align: 'right',
                            padding: [0, 10, 0, 0]
                        },
                        valueHead: {
                            color: '#333',
                            width: 20,
                            align: 'center',
                            padding: [0, 10, 0, 0]
                        }
                    }
                }
            }
        }),
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
}