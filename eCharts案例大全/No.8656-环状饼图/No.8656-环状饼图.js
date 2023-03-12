var scale = 1;
var data = [
    ["男性", 5],
    ["女性", 10],

];
var total = 0;
data.forEach(item => {
    total += item[1];
});
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 14,
        align: 'left',
        padding: [0, 5, 0, 0]
    },
    white: {
        color: "#fff",
        align: 'left',
        fontSize: 14,
        padding: [6, 0]
    },
    hr: {
        width: '100%',
        borderColor: "#53FFAC",
        borderWidth: 2,
        height: 0,
    }
};
option = {
    backgroundColor: '#2A496A',
    color: ["#01D1CE", "#FF78F5"],
    title: {
        text: total,
        subtext: "民工总人数",
        left: 'center',
        top: 'center',
        padding: [24, 0],
        textStyle: {
            color: '#fff',
            fontSize: 16,
            align: 'center',
            fontWeight: "normal",
            lineHeight: 20
        },
        subtextStyle: {
            color: "#fff"
        }
    },
    legend: {
        show: false
    },
    dataset: {
        source: data
    },
    tooltip: {},
    series: [{
        name: '民工人数',
        type: 'pie',
        radius: ['42%', '50%'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var percent = params.percent; //
                    console.log(params)
                    return '{white|' + params.name +
                        '}\n{hr|}\n{yellow|' +
                        percent + '% }{white| ' +
                        params.value[1] +
                        '人}';
                },
                rich: rich
            },
        },
        labelLine: {
            normal: {
                length: 40 * scale,
                length2: 20,
                lineStyle: {
                    // color: '#0b5263'
                }
            }
        },
    }]
};