const data = 75
option = {
    series: {
        type: 'pie',
        radius: ['50%', "55%"],
        hoverAnimation: false,
        data: [ {
            value: data,
            label: {
                normal: {
                    color: '#6AA0E4',
                    fontSize: 22,
                    fontWeight: 'bold',
                    formatter: function(params) {
                        return params.value + '%';
                    },
                    position: 'center',
                    show: true,
                }
            },
            itemStyle: {
                normal: {
                    color: '#6AA0E4'
                }
            }
        },{
            value: 100-data,
            name: '',
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#D8D8D8'
                },
                emphasis:{
                    color:'#D8D8D8'
                }
            }
        }]
    }
}