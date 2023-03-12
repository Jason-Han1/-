option = {
    backgroundColor: '#233a64',


    series: [{
        label: {
            normal: {
                color: '#fff',
                fontSize:24,
            },
            
        },
        type: 'pie',
        itemStyle: {
            normal: {
                color: function(params) {
                    var colors = [
                        '#6192ca',
                        '#f67879',
                        '#7853e1',
                        '#1ba0c1',
                        '#71cedf',
                        '#295c9d',
                        '#ebcb5c',
                        '#d675b8',
                        '#8074a6',
                        '#954d4e',
                        '#e99235'
                    ];
                    return colors[params.dataIndex];
                }
            }
        },
        labelLine: {
            normal: {
                // length2: 25,
                length: 25,
                
            }
        },
        data: [{
            fontSize:{
                
            },
            name: '国有企业在职职工：10%',
            value: 10
        }, {
            name: '民营、私营、外资企业在职职工：10%',
            value: 10
        }, {
            name: '农名：24%',
            value: 24
        }, {
            name: '党政机关在职工作人员：13%',
            value: 13
        }, {
            name: '在职教师：2%',
            value: 2
        },{
            name:'离退休干部职工：4%',
            value:4
        },{
            name:'科研、文化、卫生、新闻、出版社等事业单位在职职工：19%',
            value:19
        },{
            name:'外出劳务、经商、流动人员：2%',
            value:2
        },{
            name:'私营企业主：2%',
            value:2
        },{
            name:'个体劳动者：4%',
            value:4
        },{
            name:'其他：2%',
            value:2
        }]
    }]
};