var colors = ['#fa8d8d', '#ffc334', '#22d7bb', '#009cff'];



var lineargroup = [
    {
        value: 80,
        name: '方案率',
        oriname: "全年级认知平均分:",
        number: 88756,
        // color: ["rgba(102,142,255,0.7)", "rgba(102,142,255,0)"]
    },
    {
        value: 60,
        name: '商務率',
        oriname: "全区认知平均分:",
        number: 78756,
        // color: ["rgba(255,198,82,0.6)", "rgba(255,198,82,0)"]
    },
    {
        value: 40,
        name: '成交率',
        oriname: "全年级认知最高分:",
        number: 68756,
        // color: ["rgba(255,110,115,0.5)", "rgba(255,110,115,0)"]
    },
    {
        value: 20,
        name: '贏單率',
        oriname: "全区认知最高分:",
        number: 9500,
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
    backgroundColor:'#000',
    color: colors,
    series: [{
            top: 0,
            type: 'funnel',
            height: '400',

            sort: 'ascending',
            gap: 0,
            orient: "vertical",
            minSize: 150,
            left: '2%',
            width: '60%',
            funnelAlign: 'right',
            label: {
                show: true,
                position: 'right',
                fontSize: '14',
                formatter: function(d) {
                    var ins ='{bb|'+ d.name  + d.data.num+"分}"
                    return ins
                },
                rich: {
                    aa: {
                        padding: [8, 0, 6, 0]
                    },
                    bb: {
                        color:"#fff",
                        fontSize:12
                    }
                }
            },
            data: data1
        },
    ]
};