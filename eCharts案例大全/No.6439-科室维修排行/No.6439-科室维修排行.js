var data = [{
        name: '儿科',
        value: '20'
    },
    {
        name: '儿1科',
        value: '2160'
    },
    {
        name: '儿2科',
        value: '4240'
    },
    {
        name: '儿3科',
        value: '4260'
    },
    {
        name: '儿4科',
        value: '5760'
    },
    {
        name: '儿5科',
        value: '2320'
    },
    {
        name: '儿6科',
        value: '60'
    }
]
var colorList = ['#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac']
option = {
    backgroundColor: '#0F1948',


    series: [{
        name: '科室',
        type: 'pie',
        radius: ['40%', '55%'],
        avoidLabelOverlap: true,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        labelLine: {
            normal: {
                length: 50,
                length2: 50,
                lineStyle: {
                    color: '#2478EC'
                }
            }
        },
        
        label: {
            normal: {
                formatter: function(params) {

                        return(
                            '{a|'+ params.name + "}\n{b|" + params.value + '}'
                            ) 

                },
                show: true,
                padding: [-40 , -40, 0, -40],
                rich: {
                    a: {
                        fontSize: 10,
                        color: '#CFDCFF',
                        textAlign: 'center'
                    },
                    b: {
                        fontSize: 14,
                        color: '#2AD0FF',
                        height: 20,
                        textAlign: 'center'
                    }
                    
                }

            },

        },

        data: data

    }]
};