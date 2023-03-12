option = {
    backgroundColor: '#233a64',
    tooltip:{
        trigger:'item'
    },

    series: [{
        label: {
            normal: {
                color: '#fff',
                fontSize:24,
            },
            emphasis:{
                color: '#fff',
                fontSize:24,
            }
        },
        type: 'pie',
        itemStyle: {
            normal: {
                color: function(params) {
                    var colors = [
                        '#ebcb5c',
                        '#d675b8',
                        '#6293cb',
                        '#f67879',
                        '#1ba0c1'
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
            
            name: '高中:39%',
            value: 39
        }, {
            name: '初中:7%',
            value: 7
        }, {
            name: '小学及以下:12%',
            value: 12
        }, {
            name: '研究生:10%',
            value: 10
        }, {
            name: '大学:32',
            value: 32
        }],
        tooltip:{
            show:true,
           formatter:'{b}:{d}%' 
        }
    }]
};