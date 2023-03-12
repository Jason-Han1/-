app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['服务咨询','教育科研','高新企业','华中科技大学','武汉大学','武汉理工大学','烽火科技','卓尔控股','生物城','九州通']
    },
    series: [
        {
            name:'来鄂去向',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'服务咨询', selected:true},
                {value:679, name:'教育科研'},
                {value:1548, name:'高新企业'}
            ]
        },
        {
            name:'来鄂去向',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'服务咨询'},
                {value:310, name:'华中科技大学'},
                {value:234, name:'武汉大学'},
                {value:135, name:'武汉理工大学'},
                {value:1048, name:'烽火科技'},
                {value:251, name:'卓尔控股'},
                {value:147, name:'生物城'},
                {value:102, name:'九州通'}
            ]
        }
    ]
};