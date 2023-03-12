option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        bottom: 'center',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        formatter: function(name) {
            return name + ' 20次'
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            // 设置是否是实心圆
            radius: ['50%', '70%'],
            center: ['60%', '50%'],
            // avoidLabelOverlap: false,
            label: {
                show: true,
                // position: 'center'
            },
            // label: {
            //     formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            //     backgroundColor: '#eee',
            //     borderColor: '#aaa',
            //     borderWidth: 1,
            //     borderRadius: 4,
            //     // shadowBlur:3,
            //     // shadowOffsetX: 2,
            //     // shadowOffsetY: 2,
            //     // shadowColor: '#999',
            //     // padding: [0, 7],
            //     rich: {
            //         a: {
            //             color: '#999',
            //             lineHeight: 22,
            //             align: 'center'
            //         },
            //         // abg: {
            //         //     backgroundColor: '#333',
            //         //     width: '100%',
            //         //     align: 'right',
            //         //     height: 22,
            //         //     borderRadius: [4, 4, 0, 0]
            //         // },
            //         hr: {
            //             borderColor: '#aaa',
            //             width: '100%',
            //             borderWidth: 0.5,
            //             height: 0
            //         },
            //         b: {
            //             fontSize: 16,
            //             lineHeight: 33
            //         },
            //         per: {
            //             color: '#eee',
            //             backgroundColor: '#334455',
            //             padding: [2, 4],
            //             borderRadius: 2
            //         }
            //     }
            // },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            // 设置指向线
            // labelLine: {
            //     show: false
            // },
            data: [{
                    value: 335,
                    name: '直接访问'
                },
                {
                    value: 310,
                    name: '邮件营销'
                },
                {
                    value: 234,
                    name: '联盟广告'
                },
                {
                    value: 135,
                    name: '视频广告'
                },
                {
                    value: 1548,
                    name: '搜索引擎'
                }
            ]
        },
      

    ]
};