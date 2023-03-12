option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#404a59'
    }, {
        offset: 1,
        color: '#404a59'
    }]),
    title: {
        text: "",
        subtext: "",
        top: "top",
        left: "center"
    },
    tooltip: {},
    legend: [{

        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: false
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['2010', '2011', '2012', '2007', '2008', '2009', '2013', '2014', '2015', '2016', '法学院', '公共管理学院', '卫斯理安学院', '政治与公民教育学院', '旅游学院', '教育学院', '环境科学与工程学院', '化学化工学院', '物理与电子工程学院', '建筑与城市规划学院', '美术与设计学院', '生命科学学院', '体育学院', '音乐舞蹈学院']
    }],
    toolbox: {
        show: false,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: 'Billboard Year End——2007-2016 Top 5',
        type: 'graph',
        layout: 'force',
        height: 100,

        force: {
            repulsion: 100
        },
        data: [{
            //       "name": "Billboard Year End——2007-2016 Top 5",
            //       // "x": 0,
            //       // y: 0,
            //       "symbolSize": 20,
            //       "draggable": "true",
            //       "value": 27

            //   }, {
            "name": "2010",
            "value": 3,
            "symbolSize": 50,
            "category": "2010",
            "draggable": "true"
        }, {
            "name": "Tik Tok -Kesha",
            "symbolSize": 40,
            "category": "2010",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Need You Now - Lady antebellum",
            "symbolSize": 30,
            "category": "2010",
            "draggable": "true",
            "value": 2
        }, {
            "name": "Hey Soul Sister - Train",
            "symbolSize": 20,
            "category": "2010",
            "draggable": "true",
            "value": 3
        }, {
            "name": "California Gurls - Katy Perry",
            "symbolSize": 10,
            "category": "2010",
            "draggable": "true",
            "value": 4
        }, {
            "name": "OMG - Usher",
            "symbolSize": 8,
            "category": "2010",
            "draggable": "true",
            "value": 5
        }, {
            "name": "2011",
            "value": 6,
            "symbolSize": 10,
            "category": "2011",
            "draggable": "true"
        }, {
            "name": "Rolling In The Deep - Adele",
            "symbolSize": 4,
            "category": "2011",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Party Rock Anthem - LMFAO",
            "symbolSize": 3,
            "category": "2011",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Fire Work - Katy Perry",
            "symbolSize": 2,
            "category": "2011",
            "draggable": "true",
            "value": 1
        }, {
            "name": "ET - Katy Perry",
            "symbolSize": 1,
            "category": "2011",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Give Me Everything - Pitbull",
            "symbolSize": 8,
            "category": "2011",
            "draggable": "true",
            "value": 1

        }, {
            "name": "2012",
            "value": 5,
            "symbolSize": 10,
            "category": "2012",
            "draggable": "true"
        }, {
            "name": " Somebody That I Used To Know - Eotye",
            "symbolSize": 4,
            "category": "2012",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Call Me Baby - Carly Rae Jepsen",
            "symbolSize": 3,
            "category": "2012",
            "draggable": "true",
            "value": 1
        }, {
            "name": "We Are Young - Fun.",
            "symbolSize": 2,
            "category": "2012",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Payphone - Maroon 5",
            "symbolSize": 1,
            "category": "2012",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Lights - Ellie Goulding",
            "symbolSize": 8,
            "category": "2012",
            "draggable": "true",
            "value": 1
        }, {
            "name": "2007",
            "value": 6,
            "symbolSize": 10,
            "category": "2007",
            "draggable": "true"
        }, {
            "name": "Irreplaceable- Beyonce",
            "symbolSize": 4,
            "category": "2007",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Umbrella - Rihanna",
            "symbolSize": 3,
            "category": "2007",
            "draggable": "true",
            "value": 1
        }, {
            "name": "The Sweet Escape - Gwen stefani",
            "symbolSize": 2,
            "category": "2007",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Big Girls Don't cry - Fergie",
            "symbolSize": 10,
            "category": "2007",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Buy U A Drank - T-pain",
            "symbolSize": 8,
            "category": "2007",
            "draggable": "true",
            "value": 1

        }, {
            "name": "2008",
            "value": 8,
            "symbolSize": 10,
            "category": "2008",
            "draggable": "true"
        }, {
            "name": "Bleeding love - Leona Lewis",
            "symbolSize": 4,
            "category": "2008",
            "draggable": "true",
            "value": 1
        }, {
            "name": "No one - Alicia keys",
            "symbolSize": 3,
            "category": "2008",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Lollipop - Lil Wayne",
            "symbolSize": 2,
            "category": "2008",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Apologize - Timbaland Feat",
            "symbolSize": 1,
            "category": "2008",
            "draggable": "true",
            "value": 1
        }, {
            "name": "No Air - Jordin Sparks",
            "symbolSize": 8,
            "category": "2008",
            "draggable": "true",
            "value": 1
        }, {
            "name": "2009",
            "value": 5,
            "symbolSize": 10,
            "category": "2009",
            "draggable": "true"
        }, {
            "name": "Boom Boom Pow - Black Eyed Peas",
            "symbolSize": 4,
            "category": "2009",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Poker Face - Lady Gaga",
            "symbolSize": 3,
            "category": "2009",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Just Dance - Lady Gaga",
            "symbolSize": 2,
            "category": "2009",
            "draggable": "true",
            "value": 1
        }, {
            "name": "I Gotta Feeling - Black Eyed Peas",
            "symbolSize": 1,
            "category": "2009",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Right Round - Flo Rida",
            "symbolSize": 8,
            "category": "2009",
            "draggable": "true",
            "value": 1
        }, {
            "name": "2013",
            "value": 6,
            "symbolSize": 10,
            "category": "2013",
            "draggable": "true"
        }, {
            "name": "Gangnam Style - PSY",
            "symbolSize": 4,
            "category": "2013",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Thrift shop - Macklemore",
            "symbolSize": 3,
            "category": "2013",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Blurred Lines - Robin Thicke",
            "symbolSize": 20,
            "category": "2013",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Radioactive - Imagine Dragons",
            "symbolSize": 1,
            "category": "2013",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Harlem Shake - Baauer",
            "symbolSize": 8,
            "category": "2013",
            "draggable": "true",
            "value": 1
        }, {
            "name": "2014",
            "value": 10,
            "symbolSize": 10,
            "category": "2014",
            "draggable": "true"
        }, {
            "name": "Happy - Pharrell Williams",
            "symbolSize": 4,
            "category": "2014",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Dark House - Katy Perry",
            "symbolSize": 3,
            "category": "2014",
            "draggable": "true",
            "value": 1
        }, {
            "name": "All of me - John Legend ",
            "symbolSize": 2,
            "category": "2014",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Fancy - Iggy Azalea",
            "symbolSize": 1,
            "category": "2014",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Counting Stars - One Republic",
            "symbolSize": 8,
            "category": "2014",
            "draggable": "true",
            "value": 1
        }, {
            "name": "2015",
            "value": 6,
            "symbolSize": 10,
            "category": "2015",
            "draggable": "true"
        }, {
            "name": "Uptown Funk - Bruno Mars",
            "symbolSize": 4,
            "category": "2015",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Thinking Out Loud - Ed sheeran",
            "symbolSize": 3,
            "category": "2015",
            "draggable": "true",
            "value": 1
        }, {
            "name": "See You Again - Charlie Puth",
            "symbolSize": 2,
            "category": "2015",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Trap Queen - Fetty Wap",
            "symbolSize": 1,
            "category": "2015",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Sugar - Maroon 5",
            "symbolSize": 8,
            "category": "2015",
            "draggable": "true",
            "value": 1
        }, {
            "name": "2016",
            "value": 6,
            "symbolSize": 10,
            "category": "2016",
            "draggable": "true"
        }, {
            "name": "Love Yourself - Justin Bieber",
            "symbolSize": 4,
            "category": "2016",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Sorry - Justin Bieber",
            "symbolSize": 3,
            "category": "2016",
            "draggable": "true",
            "value": 1
        }, {
            "name": "One Dance - Drake",
            "symbolSize": 2,
            "category": "2016",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Work - Rihanna",
            "symbolSize": 1,
            "category": "2016",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Stressed Out - Twenty One Pilots",
            "symbolSize": 8,
            "category": "2016",
            "draggable": "true",
            "value": 1
        }],
        links: [{
            "source": "Billboard Year End——2007-2016 Top 5",
            "target": "2010"
        }, {
            "source": "2010",
            "target": "Tik Tok -Kesha"
        }, {
            "source": "2010",
            "target": "Need You Now - Lady antebellum"
        }, {
            "source": "2010",
            "target": "Hey Soul Sister - Train"
        }, {
            "source": "2010",
            "target": "California Gurls - Katy Perry"
        }, {
            "source": "2010",
            "target": "OMG - Usher"
        }, {
            "source": "Billboard Year End——2007-2016 Top 5",
            "target": "2011"
        }, {
            "source": "2011",
            "target": "Rolling In The Deep - Adele"
        }, {
            "source": "2014",
            "target": "Dark House - Katy Perry"
        }, {
            "source": "2014",
            "target": "All of me - John Legend "
        }, {
            "source": "2014",
            "target": "Fancy - Iggy Azalea"
        }, {
            "source": "2014",
            "target": "Counting Stars - One Republic"
        }, {
            "source": "2015",
            "target": "See You Again - Charlie Puth"
        }, {
            "source": "2015",
            "target": "Trap Queen - Fetty Wap"
        }, {
            "source": "2015",
            "target": "Sugar - Maroon 5"
        }, {
            "source": "Billboard Year End——2007-2016 Top 5",
            "target": "2016"
        }, {
            "source": "2016",
            "target": "Love Yourself - Justin Bieber"
        }],
        categories: [{
            'name': '2010'
        }, {
            'name': '2011'
        }, {
            'name': '2012'
        }, {
            'name': '2007'
        }, {
            'name': '2008'
        }, {
            'name': '2009'
        }, {
            'name': '2013'
        }, {
            'name': '2014'
        }, {
            'name': '2015'
        }, {
            'name': '2016'
        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: false,
                position: 'bottom',

            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};