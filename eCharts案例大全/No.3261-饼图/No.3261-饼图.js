
var data = [{
        value: 3,
        name: '剩余寿命里程>60W'
    },
    {
        value: 10,
        name: '剩余寿命里程<20w'
    },
    {
        value: 1,
        name: '剩余寿命里程20w<>60w'
    },
];
function getRich() {
    let result = {}
    colorArr.forEach((v, i) => {
        result[`normal${i}`]={
            fontSize: 18,
            align: 'left',
            padding: [10, 4],
            color: '#ACCFFF',
        },
        result[`value${i}`]={
            color: '#ACCFFF',
            align: 'left',
            fontSize: 14,
            padding: [10, 4],
        }
    })
    return result
}
var colorArr = ['#F1E402', '#138AF5', '#2DD7FE']
option = {
    backgroundColor:'#021434',
    color: colorArr,
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ["43%", "50%"],
            selectedMode: 'single',
            selectedOffset: 10,
            clockwise: true,
            label: {
                normal: {
                    formatter: function(params, ticket, callback) {
                        var percent = 0;
                        var total = 0;
                        var str=params.name
                         var namePev = str.substr(0,5)
                         var nameNext = str.substr(6,str.length-1)
                        for (var i = 0; i < data.length; i++) {
                            total += data[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0)+ '%';
                            const index = params.dataIndex
                        return  [`{value${index}|${namePev}}\n{normal${index}|${nameNext}/${percent}}`].join('\n');
                    },
                    padding: [0, -120,0,-120],
                    rich: getRich()
                }

            },
            labelLine: {
                length: 40,
                length2: 120,
                lineStyle: {
                    color: '#4B70C9',
                }
            },
            itemStyle: {
                normal: {
                    shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 15
                }
            },
            data: data
        }
    ]
};