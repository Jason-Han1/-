
var colors = ['#1cd389', '#668eff', '#ffc751', '#ff6e73', '#8683e6', '#9692ff'];



var lineargroup = [{
        value: 100,
        name: '目标',
        oriname: "意向",
        number: 98756,
        //color: ["rgba(29,211,137,0.8)", "rgba(29,211,137,0)"]
    },
    {
        value: 80,
        name: '方案率',
        oriname: "方案",
        number: 88756,
       // color: ["rgba(102,142,255,0.7)", "rgba(102,142,255,0)"]
    },
    {
        value: 60,
        name: '商務率',
        oriname: "商務",
        number: 78756,
       // color: ["rgba(255,198,82,0.6)", "rgba(255,198,82,0)"]
    },
    {
        value: 40,
        name: '成交率',
        oriname: "即將成交",
        number: 68756,
       // color: ["rgba(255,110,115,0.5)", "rgba(255,110,115,0)"]
    },
    {
        value: 20,
        name: '贏單率',
        oriname: "贏單",
        number: 58756,
      //  color: ["rgba(134,131,230,0.4)", "rgba(134,131,230,0)"]
    }
];

var data1 = [];
var data2 = [];

for (var i = 0; i < lineargroup.length; i++) {
    var obj1 = {
        value: lineargroup[i].value,
        num: lineargroup[i].number,
        name: lineargroup[i].oriname
    };

    var obj2 = {
        value: lineargroup[i].value,
        name: lineargroup[i].name,
        itemStyle: {
             opacity: 0,
            /*normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: lineargroup[i].color[1]
                }, {
                    offset: 1,
                    color: lineargroup[i].color[0]
                }]),
                borderWidth: 0,
                opacity: 1
            }*/
        },
    };
    data1.push(obj1);
    data2.push(obj2);
}

var option = {
    color: colors,
    series: [{
            top: 0,
            type: 'funnel',
            height: '400',
            gap: 0,
            minSize: 150,
            left: '20%',
            width: '60%',
            label: {
                show: true,
                position: 'inside',
                fontSize: '14',
                formatter: function(d) {
                    var ins = d.name + '{aa|}\n' + d.data.num;
                    return ins
                },
                rich: {
                    aa: {
                        padding: [8, 0, 6, 0]
                    }
                }
            },
            data: data1
        },
        {
            top: 0,
            type: 'funnel',
            height: '400',
            gap: -1,
            minSize: 150,
            left: '20%',
            width: '60%',
            z: 2,
            label: {
                normal: {
                    color: '#333',
                    position: 'right',
                    formatter: function(d) {
                        var ins = '{aa|' + d.name + '}\n{bb|' + d.percent + '%}';
                        return ins
                    },
                    rich: {
                        aa: {
                            align: 'center',
                            color: '#666',
                            fontSize: '12',
                            lineHeight: '30'
                        },
                        bb: {
                            align: 'center',
                            color: '#333',
                            fontSize: '22'
                        }
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: data2
        }
    ]
};