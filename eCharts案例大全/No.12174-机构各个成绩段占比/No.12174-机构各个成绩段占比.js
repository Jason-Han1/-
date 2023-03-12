var Listcolor = ["#00ffff", "#00cfff", "#006ced", "#ffa800", "#ff5b00"];
var ListCount = [{name:"90分以上",value:100},{name:"80分-89分",value:80},{name:"70分-79分",value:300},{name:"60分-69分",value:130},{name:"60分以上",value:100}];
option = {
    title: {
        text: '机构各个成绩段占比',
        x: 'center'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        selected: {
            '90分以上': false
        }
    },
    series: [{
        name: '成绩段',
        type: 'pie',
        radius: ['40%', '55%'],
        itemStyle: {
            color: function(params) {
                return Listcolor[params.dataIndex]
            },

        },
        label: {
            normal: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}人  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,

                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 18,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 23
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2,

                    }
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        data:ListCount
    }]
};