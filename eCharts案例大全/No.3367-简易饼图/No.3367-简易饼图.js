var colorList = ['#0090ff', '#06d3c4']
option = {
   
    backgroundColor: 'rgb(20,28,52)',
    tooltip: {
        
    },
    series: [{
            name: '整体分类',
            type: 'pie',
            radius: [0, '30%'],
            label: {
                position: 'inner',

            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 0,
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            selectedMode: 'single',
            data: [{
                    value: 875,
                    name: '',

                },
                {
                    value: 1239,
                    name: '人数占比\n 40%',

                },
            ]
        },
        
    ]
};
