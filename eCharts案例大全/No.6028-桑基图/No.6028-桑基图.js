/*
桑基图支持重名节点
wx:yangtaoxf

内容来自网络

*/
var nodes =[
{"name":"11", "p1":"123", "p2":"123", "p3":"123", "p4":"123", label: "lable1"},
{"name":"22", "p1":"123", "p2":"123", "p3":"123", "p4":"123", label: "lable2"},
{"name":"33", "p1":"123", "p2":"123", "p3":"123", "p4":"123", label: "lable3"},
{"name":"44", "p1":"123", "p2":"123", "p3":"123", "p4":"123", label: "lable4"},
{"name":"55", "p1":"123", "p2":"123", "p3":"123", "p4":"123", label: "lable5"},
{"name":"66", "p1":"123", "p2":"123", "p3":"123", "p4":"123", label: "lable6"},
{"name":"77", "p1":"123", "p2":"123", "p3":"123", "p4":"123", label: "lable7"},
{"name":"88", "p1":"123", "p2":"123", "p3":"123", "p4":"123", label: "lable8"},
{"name":"99", "p1":"123", "p2":"123", "p3":"123", "p4":"123", label: "lable4"},
]

        var links = [
{"source":"11","target":"55","value":"20", sourceName: 'lable1', targetName: 'lable5'},
{"source":"11","target":"66","value":"30", sourceName: 'lable1', targetName: 'lable6'},
{"source":"11","target":"77","value":"50", sourceName: 'lable1', targetName: 'lable7'},
{"source":"22","target":"55","value":"10", sourceName: 'lable2', targetName: 'lable5'},
{"source":"22","target":"66","value":"40", sourceName: 'lable2', targetName: 'lable6'},
{"source":"22","target":"77","value":"50", sourceName: 'lable2', targetName: 'lable7'},
{"source":"33","target":"55","value":"30", sourceName: 'lable3', targetName: 'lable5'},
{"source":"33","target":"66","value":"30", sourceName: 'lable3', targetName: 'lable6'},
{"source":"33","target":"77","value":"40", sourceName: 'lable3', targetName: 'lable7'},
{"source":"44","target":"55","value":"30", sourceName: 'lable4', targetName: 'lable5'},
{"source":"44","target":"66","value":"10", sourceName: 'lable4', targetName: 'lable6'},
{"source":"44","target":"77","value":"60", sourceName: 'lable4', targetName: 'lable7'},
{"source":"55","target":"88","value":"40", sourceName: 'lable5', targetName: 'lable8'},
{"source":"55","target":"99","value":"60", sourceName: 'lable5', targetName: 'lable4'},
{"source":"66","target":"88","value":"70", sourceName: 'lable6', targetName: 'lable8'},
{"source":"66","target":"99","value":"30", sourceName: 'lable6', targetName: 'lable4'},
{"source":"77","target":"88","value":"20", sourceName: 'lable7', targetName: 'lable8'},
{"source":"77","target":"99","value":"80", sourceName: 'lable7', targetName: 'lable4'},
];

var option = {
    tooltip : {},
    backgroundColor : 'rgb(244, 245, 247)',
    color : [ 'rgb(0, 106, 212)', 'rgb(50, 190, 151)' ],
    series : [ {
        name : '桑基',
        type : 'sankey',
        nodeWidth : 100,
        nodeHeight : 100,
        nodes : nodes,
        links : links,
        lineStyle : {
            normal : {
                color : 'rgb(108, 165, 211)'
            }
        },
        itemStyle : {
            normal : {
                borderWidth : 0
            }
        },
        animation : true,
        tooltip : {
            formatter : function(a) {
                var data = eval(a['data']);
                if (data.label) {
                    return ('<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'
                            + a['color'] + '"></span>' + data.label + ' : ' + data.p1)
                } else {
                    return (data.sourceName + ' -> ' + data.targetName
                            + ' : ' + data.value)
                }
            }
        },
        label : {
            normal : {
                position : 'insideLeft|insideTop',
                formatter : function(a) {
                    var data = eval(a['data']);
                    return (data.label + '\n\n' + 'P1: ' + data.p1 + '\n'
                            + 'P2: ' + data.p2 + '\n' + 'P3: '
                            + data.p3 + '\n' + 'P4: ' + data.p4);
                },
                color : '#fff',
                padding : [ 10, 0, 0, 10 ]
            }
        },
    } ]
};