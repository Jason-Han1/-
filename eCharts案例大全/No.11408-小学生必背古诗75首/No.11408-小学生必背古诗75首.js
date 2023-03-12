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
    [{
            //name: '小学生必背古诗75首',
            name: '',
            itemStyle: {
                normal: {
                    // color:  colors[1]
                    //color: 'transparent'
                }
            },
            children:
                // --start
                [{
                        name: '汉乐府',
                        children: [{
                                name: '1',
                                children: [{
                                    name: '《江南》'
                                }]
                            },
                            {
                                name: '2',
                                children: [{
                                    name: '《长歌行》'
                                }]
                            }
                        ]
                    }
                    // {
                    //     name: '北朝民歌',
                    //     children: [{
                    //         name: '3',
                    //         children: [{
                    //             name: '《敕勒歌》chì lè gē'
                    //         }]
                    //     }]
                    // },
                ]

            // --end
        },
        {
            //name: '小学生必背古诗75首',
            name: '',
            itemStyle: {
                normal: {
                    // color:  colors[1]
                    //color: 'transparent'
                }
            },
            children: [{
                name: '北朝民歌',
                children: [{
                    name: '3',
                    children: [{
                        name: '《敕chì勒lè歌》'
                    }]
                }]
            }]
        },
        {
            //name: '小学生必背古诗75首',
            name: '唐',
            itemStyle: {
                normal: {
                    // color:  colors[1]
                    //color: 'transparent'
                }
            },
            children: [{
                    name: '骆宾王',
                    children: [{
                        name: '4',
                        children: [{
                            name: '《咏鹅》'
                        }]
                    }]
                },
                {
                    name: '李峤',
                    children: [{
                        name: '5',
                        children: [{
                            name: '《风》'
                        }]
                    }]
                },
                {
                    name: '贺知章',
                    children: [{
                            name: '6',
                            children: [{
                                name: '《咏柳》'
                            }]
                        },
                        {
                            name: '7',
                            children: [{
                                name: '《回乡偶书》'
                            }]
                        }
                    ]
                },
                {
                    name: '王之涣',
                    children: [{
                            name: '8',
                            children: [{
                                name: '《凉州词》'
                            }]
                        },
                        {
                            name: '9',
                            children: [{
                                name: '《登鹳雀楼》'
                            }]
                        }
                    ]
                },
                {
                    name: '孟浩然',
                    children: [{
                        name: '10',
                        children: [{
                            name: '《春晓》'
                        }]
                    }]
                },
                {
                    name: '王翰hàn',
                    children: [{
                        name: '11',
                        children: [{
                            name: '《凉州词》'
                        }]
                    }]
                },
                {
                    name: '王昌龄',
                    children: [{
                            name: '12',
                            children: [{
                                name: '《出塞》'
                            }]
                        },
                        {
                            name: '13',
                            children: [{
                                name: '《芙蓉楼送辛渐》'
                            }]
                        }
                    ]
                },
                {
                    name: '王维',
                    children: [{
                            name: '14',
                            children: [{
                                name: '《鹿柴》'
                            }]
                        },
                        {
                            name: '15',
                            children: [{
                                name: '《送元二使安西》'
                            }]
                        },
                        {
                            name: '16',
                            children: [{
                                name: '《九月九日忆山东兄弟》'
                            }]
                        }
                    ]
                },
                {
                    name: '李白',
                    children: [{
                            name: '17',
                            children: [{
                                name: '《静夜思》'
                            }]
                        },
                        {
                            name: '18',
                            children: [{
                                name: '《古朗月行》'
                            }]
                        },
                        {
                            name: '19',
                            children: [{
                                name: '《望庐山瀑布》'
                            }]
                        },
                        {
                            name: '20',
                            children: [{
                                name: '《赠汪伦》'
                            }]
                        },
                        {
                            name: '21',
                            children: [{
                                name: '《黄鹤楼送孟浩然之广陵》'
                            }]
                        },
                        {
                            name: '22',
                            children: [{
                                name: '《早发白帝城》'
                            }]
                        },
                        {
                            name: '23',
                            children: [{
                                name: '《望天门山》'
                            }]
                        }
                    ]
                },
                {
                    name: '高适',
                    children: [{
                        name: '24',
                        children: [{
                            name: '《别董大》'
                        }]
                    }]
                },
                {
                    name: '杜甫',
                    children: [{
                            name: '25',
                            children: [{
                                name: '《绝句》之一'
                            }]
                        },
                        {
                            name: '26',
                            children: [{
                                name: '《春夜喜雨》'
                            }]
                        },
                        {
                            name: '27',
                            children: [{
                                name: '《绝句》之二'
                            }]
                        },
                        {
                            name: '28',
                            children: [{
                                name: '《江畔独步寻花》'
                            }]
                        }
                    ]
                },
                {
                    name: '张继',
                    children: [{
                        name: '29',
                        children: [{
                            name: '《枫桥夜泊》'
                        }]
                    }]
                },
                {
                    name: '韦应物',
                    children: [{
                        name: '30',
                        children: [{
                            name: '《滁州西涧》'
                        }]
                    }]
                },
                {
                    name: '孟郊',
                    children: [{
                        name: '31',
                        children: [{
                            name: '《游子吟》'
                        }]
                    }]
                },
                {
                    name: '韩愈',
                    children: [{
                        name: '32',
                        children: [{
                            name: '《早春呈水部张十八员外》'
                        }]
                    }]
                },
                {
                    name: '张志和',
                    children: [{
                        name: '33',
                        children: [{
                            name: '《渔歌子》'
                        }]
                    }]
                },
                {
                    name: '卢纶',
                    children: [{
                        name: '34',
                        children: [{
                            name: '《塞下曲》'
                        }]
                    }]
                },
                {
                    name: '刘禹锡',
                    children: [{
                            name: '35',
                            children: [{
                                name: '《望洞庭》'
                            }]
                        },
                        {
                            name: '36',
                            children: [{
                                name: '《浪淘沙》'
                            }]
                        }
                    ]
                },
                {
                    name: '白居易',
                    children: [{
                            name: '37',
                            children: [{
                                name: '《赋得古原草送别》'
                            }]
                        },
                        {
                            name: '38',
                            children: [{
                                name: '《池上》'
                            }]
                        },
                        {
                            name: '39',
                            children: [{
                                name: '《忆江南》'
                            }]
                        }
                    ]
                },
                {
                    name: '胡令能',
                    children: [{
                        name: '40',
                        children: [{
                            name: '《小儿垂钓》'
                        }]
                    }]
                },
                {
                    name: '李绅',
                    children: [{
                            name: '41',
                            children: [{
                                name: '《悯农》（一）'
                            }]
                        },
                        {
                            name: '42',
                            children: [{
                                name: '《悯农》（二）'
                            }]
                        }
                    ]
                },
                {
                    name: '柳宗元',
                    children: [{
                        name: '43',
                        children: [{
                            name: '《江雪》'
                        }]
                    }]
                },
                {
                    name: '贾岛',
                    children: [{
                        name: '44',
                        children: [{
                            name: '《寻隐者不遇》'
                        }]
                    }]
                },
                {
                    name: '杜牧',
                    children: [{
                            name: '45',
                            children: [{
                                name: '《山行》'
                            }]
                        },
                        {
                            name: '46',
                            children: [{
                                name: '《清明》'
                            }]
                        },
                        {
                            name: '47',
                            children: [{
                                name: '《江南春》'
                            }]
                        }
                    ]
                },
                {
                    name: '罗隐',
                    children: [{
                        name: '48',
                        children: [{
                            name: '《蜂》'
                        }]
                    }]
                }
            ]
        },
        {
            //name: '小学生必背古诗75首',
            name: '宋',
            itemStyle: {
                normal: {
                    // color:  colors[1]
                    //color: 'transparent'
                }
            },
            children: [{
                    name: '范仲淹',
                    children: [{
                        name: '49',
                        children: [{
                            name: '《江上渔者》'
                        }]
                    }]
                },
                {
                    name: '王安石',
                    children: [{
                            name: '50',
                            children: [{
                                name: '《元日》'
                            }]
                        },
                        {
                            name: '51',
                            children: [{
                                name: '《泊bó船瓜洲》'
                            }]
                        },
                        {
                            name: '52',
                            children: [{
                                name: '《书湖阴先生壁》'
                            }]
                        }
                    ]
                },
                {
                    name: '苏轼',
                    children: [{
                            name: '53',
                            children: [{
                                name: '《六月二十七日望湖楼醉书》'
                            }]
                        },
                        {
                            name: '54',
                            children: [{
                                name: '《饮湖上初晴后雨》'
                            }]
                        },
                        {
                            name: '55',
                            children: [{
                                name: '《惠崇春江晓景》'
                            }]
                        },
                        {
                            name: '56',
                            children: [{
                                name: '《题西林壁》'
                            }]
                        }
                    ]
                },
                {
                    name: '李清照',
                    children: [{
                        name: '57',
                        children: [{
                            name: '《夏日绝句》'
                        }]
                    }]
                },
                {
                    name: '曾几',
                    children: [{
                        name: '58',
                        children: [{
                            name: '《三衢道中》'
                        }]
                    }]
                },
                {
                    name: '陆游',
                    children: [{
                            name: '59',
                            children: [{
                                name: '《示儿》'
                            }]
                        },
                        {
                            name: '60',
                            children: [{
                                name: '《秋夜将晓出篱门迎凉有感》'
                            }]
                        }
                    ]
                },
                {
                    name: '范成大',
                    children: [{
                            name: '61',
                            children: [{
                                name: '《四时田园杂兴》（选一）'
                            }]
                        },
                        {
                            name: '62',
                            children: [{
                                name: '《四时田园杂兴》（选二）'
                            }]
                        }
                    ]
                },
                {
                    name: '杨万里',
                    children: [{
                            name: '63',
                            children: [{
                                name: '《小池》'
                            }]
                        },
                        {
                            name: '64',
                            children: [{
                                name: '《晓出净慈寺送林子方》'
                            }]
                        }
                    ]
                },
                {
                    name: '朱熹',
                    children: [{
                            name: '65',
                            children: [{
                                name: '《春日》'
                            }]
                        },
                        {
                            name: '66',
                            children: [{
                                name: '《观书有感》'
                            }]
                        }
                    ]
                },
                {
                    name: '林升',
                    children: [{
                        name: '67',
                        children: [{
                            name: '《题临安邸》'
                        }]
                    }]
                },
                {
                    name: '叶绍翁',
                    children: [{
                        name: '68',
                        children: [{
                            name: '《游园不值》'
                        }]
                    }]
                },
                {
                    name: '翁卷（juǎn）',
                    children: [{
                        name: '69',
                        children: [{
                            name: '《乡村四月》'
                        }]
                    }]
                }
            ]
        },

        {
            //name: '小学生必背古诗75首',
            name: '',
            itemStyle: {
                normal: {
                    // color:  colors[1]
                    //color: 'transparent'
                }
            },
            children: [{
                name: '(元)王冕miǎn',
                children: [{
                    name: '70',
                    children: [{
                        name: '《墨梅》'
                    }]
                }]
            }]
        },

        {
            //name: '小学生必背古诗75首',
            name: '',
            itemStyle: {
                normal: {
                    // color:  colors[1]
                    //color: 'transparent'
                }
            },
            children: [{
                name: '(明)于谦',
                children: [{
                    name: '71',
                    children: [{
                        name: '《石灰吟》'
                    }]
                }]
            }]
        },

        {
            //name: '小学生必背古诗75首',
            name: '清',
            itemStyle: {
                normal: {
                    // color:  colors[1]
                    //color: 'transparent'
                }
            },
            children: [{
                    name: '郑燮xiè',
                    children: [{
                        name: '72',
                        children: [{
                            name: '《竹石》'
                        }]
                    }]
                },
                {
                    name: '袁枚',
                    children: [{
                        name: '73',
                        children: [{
                            name: '《所见》'
                        }]
                    }]
                },
                {
                    name: '高鼎',
                    children: [{
                        name: '74',
                        children: [{
                            name: '《村居》'
                        }]
                    }]
                },
                {
                    name: '龚自珍',
                    children: [{
                        name: '75',
                        children: [{
                            name: '《己亥杂诗》'
                        }]
                    }]
                }
            ]
        }
    ];

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
        text: '小学生必背古诗75首',
        left: 'center'
    },
    textStyle: {
        fontFamily: 'Microsoft YaHei'
    },
    //backgroundColor: bgColor,
    //color: colors,
    series: [{
        type: 'sunburst',
        center: ['50%', '50%'],
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