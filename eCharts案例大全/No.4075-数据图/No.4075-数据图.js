option = {
    backgroundColor:"#0B1837",
    color: ["#A96FFF", "#FFDE4C", "#23C3FF", "#7BE09A"],
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    title: {
        text: '{a|'+ '20000' +'}\n{c|'+ '企业总数' +'}',
        top:'47%',
        left:'45%',
        textStyle: {
            rich:{
                a: {
                    fontSize: 26,
                    color: '#23C3FF'
                },
                c: {
                    fontSize: 16,
                    color: '#EEEEEE',
                    padding: [5,5]
                }
            }
        }
    },
    calculable: true,
    series: [{
        stack: 'a',
        type: 'pie',
        radius: ['30%', '50%'],
        roseType: 'area',
        zlevel:10,
        label: {
            show: true,
            position: 'outside',
            formatter: function(params, ticket, callback) {
                        return '{value|' + params.value +'%'+ '}\n{name|' + params.name + '}';
                    },
                    padding: [0, -80],
                    rich: {
                        value: {
                            fontSize: 16,
                            padding: [15, 0],
                            align: 'left'
                        },
                        name: {
                            color: '#eeeeee',
                            align: 'left',
                            fontSize: 14,
                            padding: [15, 0],
                        },
                    }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 150,
                lineStyle:{
                    width:3
                }
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 40,
                name: '成都科学城'
            },
            {
                value: 30,
                name: '天府总部商务'
            },
            {
                value: 20,
                name: '乡村振兴'
            },
            {
                value: 10,
                name: '天府文创城'
            }
        ]
    }, ]
}