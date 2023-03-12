option = {
    legend: {
        show:true,
        x: 'center',
        y:'85%',
        selectedMode:false,
        data:["大浦管理处","官窑管理处1","官窑管理处2"]
    },
    series: [{
        type: 'pie',
        radius: '60%',
        center: ['50%', '40%'],
        data: [
            {
                name: '大浦管理处',
                value: 25,
            }, {
                name: '官窑管理处1',
                value: 25,
            }, {
                name: '官窑管理处2',
                value: 25,
            }
        ],
        label: {
            normal: {
                formatter:function(params){
                    return params.name+"\n"+params.percent+"%"
                },
                fontSize: 20,
            }

        },
        labelLine: {
            normal: {
                length: 30,
            }
        }
    }]
};