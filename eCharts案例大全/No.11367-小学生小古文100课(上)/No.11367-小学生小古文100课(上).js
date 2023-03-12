var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
var bgColor = '#2E2733';

var itemStyle = {
    star5: {
        color: colors[0]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[3]
    }
};

var data =
    //
    [
        {
            //name: '小学生小古文100课',
            name: '上',
            itemStyle: {
                normal: {
                    // color:  colors[1]
                    //color: 'transparent'
                }
            },
            children: [{
                    name: '乡村即景',
                    children: [{
                        name: '1',
                        children: [{
                            name: '《放风筝》'
                        }]
                    },
                    {
                        name: '2',
                        children: [{
                            name: '《乡村》'
                        }]
                    },
                    {
                        name: '3',
                        children: [{
                            name: '《芦花》'
                        }]
                    },
                    {
                        name: '4',
                        children: [{
                            name: '《荷》'
                        }]
                    },
                    {
                        name: '5',
                        children: [{
                            name: '《菊》'
                        }]
                    }]
                },
                {
                    name: '天的魔术',
                    children: [{
                            name: '6',
                            children: [{
                                name: '《雨》'
                            }]
                        },
                        {
                            name: '7',
                            children: [{
                                name: '《雪》'
                            }]
                        },
                        {
                            name: '8',
                            children: [{
                                name: '《日月星》'
                            }]
                        },
                        {
                            name: '9',
                            children: [{
                                name: '《日时》'
                            }]
                        }
                    ]
                },
                {
                    name: '别样的争和辩',
                    children: [{
                            name: '10',
                            children: [{
                                name: '《猫捕鱼》'
                            }]
                        },
                        {
                            name: '11',
                            children: [{
                                name: '《猫斗》'
                            }]
                        },
                        {
                            name: '12',
                            children: [{
                                name: '《龟兔竞走》'
                            }]
                        },
                        {
                            name: '13',
                            children: [{
                                name: '《五官争功》'
                            }]
                        }
                    ]
                },
                {
                    name: '草木的性情',
                    children: [{
                            name: '14',
                            children: [{
                                name: '《松》'
                            }]
                        },
                        {
                            name: '15',
                            children: [{
                                name: '《桂》'
                            }]
                        },
                        {
                            name: '16',
                            children: [{
                                name: '《莲》'
                            }]
                        },
                        {
                            name: '17',
                            children: [{
                                name: '《杨柳》'
                            }]
                        },
                        {
                            name: '18',
                            children: [{
                                name: '《岁寒三友》'
                            }]
                        }
                    ]
                },
                {
                    name: '读书要得法',
                    children: [{
                            name: '19',
                            children: [{
                                name: '《读书》'
                            }]
                        },
                        {
                            name: '20',
                            children: [{
                                name: '《读书有三刻》'
                            }]
                        },
                        {
                            name: '21',
                            children: [{
                                name: '《读书须有疑》'
                            }]
                        },
                        {
                            name: '22',
                            children: [{
                                name: '《铁杵磨针》'
                            }]
                        }
                    ]
                },
                {
                    name: '智慧少年',
                    children: [{
                            name: '23',
                            children: [{
                                name: '《曹冲称象》'
                            }]
                        },
                        {
                            name: '24',
                            children: [{
                                name: '《道边李苦》'
                            }]
                        },
                        {
                            name: '25',
                            children: [{
                                name: '《破瓮救友》'
                            }]
                        },
                        {
                            name: '26',
                            children: [{
                                name: '《孔融让梨》'
                            }]
                        }
                    ]
                },
                {
                    name: '寓言故事',
                    children: [{
                            name: '27',
                            children: [{
                                name: '《守株待兔》'
                            }]
                        },
                        {
                            name: '28',
                            children: [{
                                name: '揠苗助长》'
                            }]
                        },
                        {
                            name: '29',
                            children: [{
                                name: '《狐假虎威》'
                            }]
                        },
                        {
                            name: '30',
                            children: [{
                                name: '《南辕北辙》'
                            }]
                        }
                    ]
                },
                {
                    name: '神话传说',
                    children: [{
                            name: '31',
                            children: [{
                                name: '《盘古开天地》'
                            }]
                       },
                       {
                            name: '32',
                            children: [{
                                name: '《夸父逐日》'
                            }]
                        },
                        {
                            name: '33',
                            children: [{
                                name: '《共工触山》'
                            }]
                        },
                        {
                            name: '34',
                            children: [{
                                name: '《刑天舞干戚》'
                            }]
                        },
                        {
                            name: '35',
                            children: [{
                                name: '《舜耕历山》'
                            }]
                        }
                   ]
                },
                {
                    name: '那些勤奋的人儿',
                    children: [{
                            name: '36',
                            children: [{
                                name: '《欧阳苦读》'
                            }]
                        },
                        {
                            name: '37',
                            children: [{
                                name: '《推敲》'
                            }]
                        },
                        {
                            name: '38',
                            children: [{
                                name: '《怀素写字》'
                            }]
                        },
                        {
                            name: '39',
                            children: [{
                                name: '《王冕好学》'
                            }]
                        },
                        {
                            name: '40',
                            children: [{
                                name: '《宋濂嗜学》'
                            }]
                        }
                    ]
                },
                {
                    name: '人类的朋友',
                    children: [{
                            name: '41',
                            children: [{
                                name: '《母鸡》'
                            }]
                        },
                        {
                            name: '42',
                            children: [{
                                name: '《义鹊》'
                            }]
                        },
                        {
                            name: '43',
                            children: [{
                                name: '《鹦鹉灭火》'
                            }]
                        },
                        {
                            name: '44',
                            children: [{
                                name: '《义犬救主》'
                            }]
                        },
                        {
                            name: '45',
                            children: [{
                                name: '《已死的母熊》'
                            }]
                        }
                    ]
                },
                {
                    name: '小故事里的大智慧',
                    children: [{
                            name: '46',
                            children: [{
                                name: '《叶公好龙》'
                            }]
                        },
                        {
                            name: '47',
                            children: [{
                                name: '《郑人买履》'
                            }]
                        },
                        {
                            name: '48',
                            children: [{
                                name: '《买椟还珠》'
                            }]
                        },{
                            name: '49',
                            children: [{
                                name: '《自相矛盾》'
                            }]
                        },
                        {
                            name: '50',
                            children: [{
                                name: '《滥竽充数》'
                            }]
                        }
                    ]
                }
            ]
        }
    ]

for (var j = 0; j < data.length; ++j) {
    var level1 = data[j].children;
    for (var i = 0; i < level1.length; ++i) {
        var block = level1[i].children;
        var bookScore = [];
        var bookScoreId;
        for (var star = 0; star < block.length; ++star) {
            var style = (function(name) {
                switch (name) {
                    //  case '5☆':
                    //      bookScoreId = 0;
                    //      return itemStyle.star5;
                    //  case '4☆':
                    //      bookScoreId = 1;
                    //      return itemStyle.star4;
                    //  case '3☆':
                    //      bookScoreId = 2;
                    //      return itemStyle.star3;
                    //  case '2☆':
                    //      bookScoreId = 3;
                    //      return itemStyle.star2;
                    default:
                        bookScoreId = 0;
                        return itemStyle.star5;
                }
            })(block[star].name);

            block[star].label = {
                //color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };

            if (block[star].children) {
                style = {
                    opacity: 1,
                    // color: style.color
                };
                block[star].children.forEach(function(book) {
                    book.value = 1;
                    book.itemStyle = style;

                    book.label = {
                        // color: style.color
                    };

                    var value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }

                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    } else {
                        bookScore[bookScoreId] = {
                            // color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }

        level1[i].itemStyle = {
            //   color: data[j].itemStyle.color
        };
    }
}

option = {
    title: {
        text: '小学生小古文100课(上)',
        left: 'center'
    },
    textStyle: {
        fontFamily: 'Microsoft YaHei'
    },
    //backgroundColor: bgColor,
    //color: colors,
    series: [{
        type: 'sunburst',
        center: ['50%', '52%'],
        data: data,
        sort: function(a, b) {
            if (a.depth === 1) {
                return b.getValue() - a.getValue();
            } else {
                return a.dataIndex - b.dataIndex;
            }
        },
        label: {
            rotate: 'radial',
            color: bgColor
        },
        itemStyle: {
            //borderColor: bgColor,
            borderWidth: 1
        },
        levels: [{}, {
            r0: '0.5%',
            r: '28%',
            label: {
                rotate: 0,
                fontSize: 18,
                fontWeight: 600
            },
            itemStyle: {
                // shadowBlur: 2,
                //   shadowColor: colors[2],
                color: '#e0e0e0' // 'transparent'
            },
        }, {
            r0: '30%',
            r: '61%',
            itemStyle: {
                // shadowBlur: 2,
                //   shadowColor: colors[2],
                color: '#bdbdbd' // 'transparent'
            },
        }, {
            r0: '62%',
            r: '67%',
            itemStyle: {
                // shadowBlur: 2,
                //   shadowColor: colors[2],
                color: '#9e9e9e' // 'transparent'
            },
            label: {
                rotate: 'tangential',
                fontSize: 10,
                //color: colors[0]
            }
        }, {
            r0: '68%',
            r: '70%',
            itemStyle: {
                color: '#616161',
                shadowBlur: 80,
                shadowColor: colors[0],

            },
            label: {
                position: 'outside',
                //textShadowBlur: 5,
                //textShadowColor: '#333',
            },
            downplay: {
                label: {
                    opacity: 0.5
                }
            }
        }]
    }]
};