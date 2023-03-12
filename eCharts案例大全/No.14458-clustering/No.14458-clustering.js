option = {
    backgroundColor: '#174B78',
    grid: {
        x: 0,
        x2: 0,
        y: 0,
        y2: 0
    },
    title: {
        text: "",
        subtext: "",
        textStyle: {
            color: "#81D4FA",
            fontSize: 18
        },
        top: "top",
        left: "center"
    },
    tooltip: {},
    legend: {},
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
        name: 'Moive Reviews',
        type: 'graph',
        layout: 'force',

        force: {
            // initLayout: 'circular',
            repulsion: 180,
            gravity: 0.2,
            edgeLength: 90
        },

        data: [{
            "name": "twitter",
            "symbolSize": 24,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "I wanna see",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Description",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "I will see",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Official Marketing",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Personal Reviews",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "PR_neg",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "PR_pos",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        },{
            "name": "Happy death day was the most dumbest movie ever.wasted 30 dollars on foolery",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "HAPPY DEATH DAY WAS THE STUPIDEST MOVIE EVEEEEERRRRR",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "happy death day frustrated me beyond belief",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Happy Death Day is the most frustrating show I have ever watched. Mhm.",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Happy death day is the weirdest movie ever",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Happy Death Day is easily the greatest movie of 2017",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Happy Death Day seems interesting",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Happy Death Day was sooooooooo good",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Happy death day is suprisingly good 7/10",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "happy death day was pretttty good",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "will_pos",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "will_neg",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "wanna_neg",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "wanna_pos",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "OM_neg",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "OM_pos",
            "symbolSize": 10,
            "category": "category",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Bloody Daily Horror News! STRANGER THINGS final trailer HAPPY DEATH DAY kills Box Office HAPPY DEATH DAY sequel",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Happy Death Day Has Killer Box Office Debut - Happy Death Day had a strong opening weekend at the domestic box",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Young Audiences Flock to Happy Death Day Continuing a horror boom at the box office,  Happy Death Day  arrived as the No. 1 movie in",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Latest: Horror keeps box office alive as ‘ Happy Death Day ’ tops charts",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Happy Death Day ' tops US box office Comedy horror slasher  Happy Death Day had an excuse to celebrate this wee",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Box office glory a piece of cake for ‘ Happy Death Day ’: Comedy horror slasher  Happy Death Day had an excuse to",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "really wanna see happy death day but...whenever i go to see horror movies in theaters, i get too scared and will scream/jump so annoying",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "I've never done a movie by myself before but T is super tired and I really wanna go see happy death day tonight?!",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "I wanna see Happy Death Day :/",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "i wanna see happy death day , looks promising for a dark comedy horror",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "I wanna see Happy Death Day so badly I need to find the perfect people to go with",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "I really wanna see Happy Death Day mannnnnnn it looks good",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Me: Wow I'm so happy I liked Happy Death Day despite saying it looked dumb! Also me: Does that mean you think Geostorm will be good then despite what you said? Me: Jesus himself could come down from Heaven and even he couldn't make that good.",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "i do want to warn anyone who plans on seeing happy death day that there are a few troubling jokes i can warn for specifically if u dm me",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Saw the movie  Happy Death Day today. Don't let the stupid title fool you, it's a smart movie w/ lots of twists that really makes you think",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Went on a cute lil Friday the 13th movie date with my man tonight and saw Happy Death Day . I was actually surprised I absolutely loved it!",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "guys I LOVED #HappyDeathDay movie & it comes out TODAYYYY!! you should definitely go check it out. Get tix",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }, {
            "name": "Happy Death Day is one of more creative spins on slasher film. Whole lot of fun & surprisingly touching. Jessica Rothe makes it all work.",
            "symbolSize": 1,
            "category": "tweet",
            "draggable": "true",
            "value": 1
        }],
        links: [{
            "source": "twitter",
            "target": "I will see"
        }, {
            "source": "twitter",
            "target": "Description"
        }, {
            "source": "twitter",
            "target": "Official Marketing"
        }, {
            "source": "twitter",
            "target": "I wanna see"
        }, {
            "source": "twitter",
            "target": "Personal Reviews"
        }, {
            "source": "twitter",
            "target": "Description"
        }, {
            "source": "Personal Reviews",
            "target": "PR_neg"
        }, {
            "source": "PR_neg",
            "target": "HAPPY DEATH DAY WAS THE STUPIDEST MOVIE EVEEEEERRRRR"
        }, {
            "source": "PR_neg",
            "target": "Happy death day was the most dumbest movie ever.wasted 30 dollars on foolery"
        }, {
            "source": "PR_neg",
            "target": "happy death day frustrated me beyond belief"
        }, {
            "source": "PR_neg",
            "target": "Happy Death Day is the most frustrating show I have ever watched. Mhm."
        }, {
            "source": "PR_neg",
            "target": "Happy death day is the weirdest movie ever"
        }, {
            "source": "Personal Reviews",
            "target": "PR_pos"
        }, {
            "source": "PR_pos",
            "target": "Happy Death Day is easily the greatest movie of 2017"
        }, {
            "source": "PR_pos",
            "target": "Happy Death Day seems interesting"
        }, {
            "source": "PR_pos",
            "target": "Happy Death Day was sooooooooo good"
        }, {
            "source": "PR_pos",
            "target": "Happy death day is suprisingly good 7/10"
        }, {
            "source": "PR_pos",
            "target": "happy death day was pretttty good"
        }, {
            "source": "Official Marketing",
            "target": "OM_neg"
        }, {
            "source": "OM_neg",
            "target": "Bloody Daily Horror News! STRANGER THINGS final trailer HAPPY DEATH DAY kills Box Office HAPPY DEATH DAY sequel"
        }, {
            "source": "OM_neg",
            "target": "Happy Death Day Has Killer Box Office Debut - Happy Death Day had a strong opening weekend at the domestic box"
        }, {
            "source": "OM_neg",
            "target": "Young Audiences Flock to Happy Death Day Continuing a horror boom at the box office,  Happy Death Day  arrived as the No. 1 movie in"
        }, {
            "source": "Official Marketing",
            "target": "OM_pos"
        }, {
            "source": "OM_pos",
            "target": "Latest: Horror keeps box office alive as ‘ Happy Death Day ’ tops charts"
        }, {
            "source": "OM_pos",
            "target": "Happy Death Day ' tops US box office Comedy horror slasher  Happy Death Day had an excuse to celebrate this wee"
        }, {
            "source": "OM_pos",
            "target": "Box office glory a piece of cake for ‘ Happy Death Day ’: Comedy horror slasher  Happy Death Day had an excuse to"
        }, {
            "source": "I will see",
            "target": "will_neg"
        }, {
            "source": "will_neg",
            "target": "Me: Wow I'm so happy I liked Happy Death Day despite saying it looked dumb! Also me: Does that mean you think Geostorm will be good then despite what you said? Me: Jesus himself could come down from Heaven and even he couldn't make that good."
        }, {
            "source": "will_neg",
            "target": "i do want to warn anyone who plans on seeing happy death day that there are a few troubling jokes i can warn for specifically if u dm me"
        }, {
            "source": "will_neg",
            "target": "Saw the movie  Happy Death Day today. Don't let the stupid title fool you, it's a smart movie w/ lots of twists that really makes you think"
        }, {
            "source": "I will see",
            "target": "will_pos"
        }, {
            "source": "will_pos",
            "target": "Went on a cute lil Friday the 13th movie date with my man tonight and saw Happy Death Day . I was actually surprised I absolutely loved it!"
        }, {
            "source": "will_pos",
            "target": "guys I LOVED #HappyDeathDay movie & it comes out TODAYYYY!! you should definitely go check it out. Get tix"
        }, {
            "source": "will_pos",
            "target": "Happy Death Day is one of more creative spins on slasher film. Whole lot of fun & surprisingly touching. Jessica Rothe makes it all work."
        }, {
            "source": "I wanna see",
            "target": "wanna_neg"
        }, {
            "source": "wanna_neg",
            "target": "really wanna see happy death day but...whenever i go to see horror movies in theaters, i get too scared and will scream/jump so annoying"
        }, {
            "source": "wanna_neg",
            "target": "I've never done a movie by myself before but T is super tired and I really wanna go see happy death day tonight?!"
        }, {
            "source": "wanna_neg",
            "target": "I wanna see Happy Death Day :/"
        }, {
            "source": "I wanna see",
            "target": "wanna_pos"
        }, {
            "source": "wanna_pos",
            "target": "i wanna see happy death day , looks promising for a dark comedy horror"
        }, {
            "source": "wanna_pos",
            "target": "I wanna see Happy Death Day so badly I need to find the perfect people to go with"
        }, {
            "source": "wanna_pos",
            "target": "I really wanna see Happy Death Day mannnnnnn it looks good"
        }],
        categories: [{
            "name": "category"
        }, {
            "name": "tweet"
        }],

        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'top',
                textStyle: {
                    fontSize: 14
                }
            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0
                    //type: "solid"
            }
        }
    }]
};