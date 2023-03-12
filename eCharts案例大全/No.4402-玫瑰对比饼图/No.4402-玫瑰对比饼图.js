let dataArr = [{
        name: "2019销售额",
        data: [{
                name: "上城区",
                value: 20
            },
            {
                name: "下城区",
                value: 30
            }, {
                name: "江干区",
                value: 40
            }, {
                name: "拱墅区",
                value: 50
            }, {
                name: "西湖区",
                value: 60
            }, {
                name: "滨江区",
                value: 70
            }, {
                name: "萧山区",
                value: 80
            }, {
                name: "余杭区",
                value: 90
            }, {
                name: "桐庐县",
                value: 100
            }, {
                name: "淳安区",
                value: 110
            }, {
                name: "建德市",
                value: 120
            }, {
                name: "富阳区",
                value: 130
            }, {
                name: "临安区",
                value: 140
            }, {
                name: "其他",
                value: 150
            }
        ]
    },
    {
        name: "2020销售额",
        data: [{
                name: "上城区",
                value: 20
            },
            {
                name: "下城区",
                value: 30
            }, {
                name: "江干区",
                value: 40
            }, {
                name: "拱墅区",
                value: 50
            }, {
                name: "西湖区",
                value: 60
            }, {
                name: "滨江区",
                value: 70
            }, {
                name: "萧山区",
                value: 80
            }, {
                name: "余杭区",
                value: 90
            }, {
                name: "桐庐县",
                value: 100
            }, {
                name: "淳安区",
                value: 110
            }, {
                name: "建德市",
                value: 120
            }, {
                name: "富阳区",
                value: 130
            }, {
                name: "临安区",
                value: 140
            }, {
                name: "其他",
                value: 150
            }
        ]
    }
];

let titleArr = [],
    legendArr = [],
    seriesArr = [],
    colorsArr = ['#0ac1c9', '#378afd', '#6560e7', '#35a8fe', '#d160c9', '#de4c38', '#9900CC', '#ff9031', '#fd7b19', '#25ede6', '#90ed7d', '#29c980', '#ff688a', '#cfd2d1'];
dataArr.forEach(function(item, index) {
    titleArr.push({
            text: item.name,
            left: index * 50 + 25 + '%',
            top: "center",
            textAlign: 'center',
            textStyle: {
                fontWeight: 'bold',
                fontSize: '16',
                textAlign: 'center',
            },
        }

    );

    legendArr.push({
            left: 'center',
            itemWidth: 14,
            itemHeight: 14,
            top: '10%',
            data: dataArr.data,
            // // 图例上下对齐
            // formatter: function(name) {
            //     return '{a|' + name + '}';
            // },
            // textStyle: {
            //     rich: {
            //         a: {
            //             width: 100
            //         }
            //     }
            // }
        }),

        seriesArr.push({
            name: item.name,
            type: 'pie',
            center: [index * 50 + 25 + '%', "50%"],
            radius: ['25%', '40%'],
            roseType: 'area',
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 2,

            itemStyle: {
                normal: {
                    color: function(params) {
                        console.log(params)
                        return colorsArr[params.dataIndex]
                    }
                }
            },
            label: {
                show: true,
                position: 'outside',
                formatter: '{b}{d}%',
                fontSize: 12,
            },

            labelLine: {
                normal: {
                    length: 5,
                    length2: 8,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: item.data
        })
});


option = {
     backgroundColor:'#dbf6e9',
    title: titleArr,
    legend: legendArr,
    series: seriesArr
}