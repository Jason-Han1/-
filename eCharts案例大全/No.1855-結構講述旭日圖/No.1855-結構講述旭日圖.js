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

var data = [{
    name: 'DV',
    itemStyle: {
        color: colors[1]
    },
    children: [{
        name: 'OFDI(flow)',
        children: [{
            name: '5☆',
            children: []
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: [{
                name: 'OFDI(flow)'
            }]
        }]
    }, {
        name: '其他',
        children: [{
            name: '5☆',
            children: []
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: []
        }]
    }]
}, {
    name: 'CV',
    itemStyle: {
        color: colors[3]
    },
    children: [{
        name: 'inflationrate',
        children: [{
            name: '5☆',
            children: [{
                name: 'inflationrate'
            }]
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: [{
                name: 'OFDI(flow)'
            }]
        }]
    }, {
        name: 'sumwgi',
        children: [{
            name: '5☆',
            children: [{
                name: 'sumwgi'
            }]
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: []
        }]
    }, {
        name: 'ef',
        children: [{
            name: '5☆',
            children: [{
                name: 'ef'
            }]
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: []
        }]
    }, {
        name: 'pgdp',
        children: [{
            name: '5☆',
            children: [{
                name: 'pgdp'
            }]
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: []
        }]
    }, {
        name: 'fuel',
        children: [{
            name: '5☆',
            children: [{
                name: 'fuel'
            }]
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: []
        }] 
      }, {
        name: 'hightech',
        children: [{
            name: '5☆',
            children: [{
                name: 'hightech'
            }]
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: []
        }]
    }, {
        name: 'fdi',
        children: [{
            name: '5☆',
            children: [{
                name: 'fdi'
            }]
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: []
        }]
    }, {
        name: 'gdp',
        children: [{
            name: '5☆',
            children: [{
                name: 'gdp'
            }]
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: []
        }]
    }]
}, {
    name: 'CEV',
    itemStyle: {
        color: colors[2]
    },
    children: [{
        name: 'actdist',
        children: [{
            name: '5☆',
            children: [{
                name: 'actdist'
            }]
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: []
        }]
    }, {
        name: 'culdist',
        children: [{
            name: '5☆',
            children: [{
                name: 'Power Distance'
            }]
        }, {
            name: '4☆',
            children: [{
                name: 'Individualism'
            }, {
                name: 'Masculinity'
            }]
        }, {
            name: '3☆', 
            children: [{
                name: 'Uncertainty Avoidance'
            }, {
                name:'Long Term Orientation'
            }]
        },{
            name: '2☆',
            children: [{
                name: 'Indulgence'
            }]
        }]
    }, {
        name: 'wgidist',
        children: [{
            name: '5☆',
            children: [{
                name: 'VoiceandAccountability'
            }]
        }, {
            name: '4☆',
            children: [{
                name: 'Political StabilityNoViolence'
            }, {
                name: 'GovernmentEffectiveness'
            }]
        }, {
            name: '3☆', 
            children: [{
                name: 'RuleofLaw'
            }, {
                name:'ControlofCorruption'
            }]
        },{
            name: '2☆',
            children: [{
                name: 'RegulatoryQuality'
            }]
        }]
    }, {
        name: 'efdist',
        children: [{
            name: '5☆',
            children: [{
                name: 'property rights'
            }]
        }, {
            name: '4☆',
            children: [{
                name: 'government integrity'
            }, {
                name: 'judicial effectiveness'
            }, {
                name: 'tax burden'
            }, {
                name: 'government spending'
            }, {
                name: 'fiscal health'
            }, {
                name: 'business freedom'
            }, {
                name: 'labor freedom'
            }, {
                name: 'monetary freedom'
            }]
        }, {
            name: '3☆', 
            children: [{
                name: 'Uncertrade freedom'
            }, {
                name:'investment freedom'
            }]
        },{
            name: '2☆',
            children: [{
                name: 'financial freedom'
            }]
        }]
    }, {
        name: '绘本',
        children: [{
            name: '5☆',
            children: []
        }, {
            name: '4☆',
            children: []
        }, {
            name: '3☆',
            children: []
        }]
    }, {
        name: '哲学',
        children: [{
            name: '4☆',
            children: []
        }]
    }, {
        name: '技术',
        children: [{
            name: '5☆',
            children: []
        }, {
            name: '4☆',
            children: []
        }]
    }]
}];

for (var j = 0; j < data.length; ++j) {
    var level1 = data[j].children;
    for (var i = 0; i < level1.length; ++i) {
        var block = level1[i].children;
        var bookScore = [];
        var bookScoreId;
        for (var star = 0; star < block.length; ++star) {
            var style = (function (name) {
                switch (name) {
                    case '5☆':
                        bookScoreId = 0;
                        return itemStyle.star5;
                    case '4☆':
                        bookScoreId = 1;
                        return itemStyle.star4;
                    case '3☆':
                        bookScoreId = 2;
                        return itemStyle.star3;
                    case '2☆':
                        bookScoreId = 3;
                        return itemStyle.star2;
                }
            })(block[star].name);

            block[star].label = {
                color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };

            if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                };
                block[star].children.forEach(function (book) {
                    book.value = 1;
                    book.itemStyle = style;

                    book.label = {
                        color: style.color
                    };

                    var value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }

                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    }
                    else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }

        level1[i].itemStyle = {
            color: data[j].itemStyle.color
        };
    }
}

option = {
    backgroundColor: bgColor,
    color: colors,
    series: [{
        type: 'sunburst',
        center: ['50%', '50%'],
        data: data,
        sort: function (a, b) {
            if (a.depth === 1) {
                return b.getValue() - a.getValue();
            }
            else {
                return a.dataIndex - b.dataIndex;
            }
        },
        label: {
            rotate: 'radial',
            color: bgColor
        },
        itemStyle: {
            borderColor: bgColor,
            borderWidth: 2
        },
        levels: [{}, {
            r0: 10,
            r: 40,
            label: {
                rotate: 0
            }
        }, {
            r0: 40,
            r: 105
        }, {
            r0: 115,
            r: 140,
            itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: 'transparent'
            },
            label: {
                rotate: 'tangential',
                fontSize: 5,
                color: colors[0]
            }
        }, {
            r0: 140,
            r: 145,
            itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0]
            },
            label: {
                position: 'outside',
                textShadowBlur: 5,
                textShadowColor: '#333',
            },
            downplay: {
                label: {
                    opacity: 0.5
                }
            }
        }]
    }]
};
