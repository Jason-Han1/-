let aa ='';
let scale = 1;
var data = [{
        value: 13,
        name: '武汉'
    },
    {
        value: 12,
        name: '广州'
    },
    {
        value: 12,
        name: '西安'
    },
    {
        value: 5,
        name: '北京'
    },
    {
        value: 13,
        name: '成都'
    },
    {
        value: 5,
        name: '太原'
    },
    {
        value: 40,
        name: '上海'
    },
];
function getRich() {
    let result = {}
    colorArr.forEach((v, i) => {
        result[`normal${i}`]={
            fontSize: 20 * scale,
            align: 'left',
            padding: [10, 4],
            color: '#ACCFFF',
        },
        result[`value${i}`]={
            color: '#ACCFFF',
            align: 'left',
            fontSize: 14 * scale,
            padding: [2, 4],
        }
    })
    return result
}
var colorArr = ['#61a0a8', '#F87D7C', '#41E1FF', '#55D5B5', '#616BA6', '#6978F2', '#3769F4', '#01FFFF', '#FEDF00']
option = {
    backgroundColor:'#021434',
    color: colorArr,
    legend: {
        orient: 'vertical',
        right: 5,
        top: '30%',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 15,
        textStyle: {
            color: '#ACCFFF',
            fontSize: 12,
        },
        data: ['武汉', '广州', '西安', '北京', '成都', '太原', '上海', '一般待料', '紧急待料']
    },
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
                        aa = params.dataIndex
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < data.length; i++) {
                            total += data[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0)+ '%';
                            const index = params.dataIndex
                            // return [`{a${index}|${params.name}：${percent}}`].join('\n')
                        return  [`{normal${index}|${percent}}\n{value${index}|${params.name}}`].join('\n');
                    },
                    padding: [0, -80],
                    rich: getRich()
                }

            },
            labelLine: {
                length: 10,
                length2: 80,
                lineStyle: {
                    color: '#4B70C9',
                }
            },
            // label: {
            //     normal: {
            //         fontSize: 16,
            //         color: '#4B70C9',
            //         formatter: '{b}{d}%'
            //     },
            // },
            itemStyle: {
                normal: {
                    shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 15
                }
            },
            // labelLine: {
            //     normal: {
            //         length: 30,
            //         length2: 20,
            //         lineStyle: {
            //             color: '#4B70C9',
            //         }
            //     }
            // },
            data: data
        }
    ]
};