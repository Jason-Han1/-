var equipment = ['按比例就业', '自主创业灵活就业'];
var project = ['按比例就业', '自主创业灵活就业'];
var colorList = ['#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac']
option = {
    backgroundColor: '#000C1C',
    series: [{
            name: '整体分类',
            type: 'pie',
            radius: [0, '30%'],
            label: {
                position: 'inner',
                fontSize: 11
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 5,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            selectedMode: 'single',
            data: [{
                    value: 41568,
                    name: '劳动年龄残疾人\n女：41568',
                    itemStyle: {
                        color: '#FE4C2E',
                    }
                },
                {
                    value: 122732,
                    name: '劳动年龄残疾人\n男：122732',
                    itemStyle: {
                        color: '#57AEFF',
                    }
                },
            ]
        },
        {
            name: '就业',
            type: 'pie',
            radius: ['35%', '50%'],
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 5,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            label: {
                normal: {
                    formatter: function(params) {
                        if (params.value != 0)
                            return params.data.type + "\n" + params.value + '人';
                        else
                            return '';
                    },
                    show: true,
                    fontSize: 11
                },
            },
            data: [{
                    value: 20508,
                    name: '女',
                    type: equipment[0],
                    itemStyle: {
                        color: '#FF5565',
                    }
                },
                {
                    value: 5830,
                    name: '女',
                    type: equipment[1],
                    itemStyle: {
                        color: '#FFA593',
                    }
                },
                {
                    value: 53677,
                    name: '男',
                    type: project[0],
                    itemStyle: {
                        color: '#00C794',
                    }
                },
                {
                    value: 15298,
                    name: '男',
                    type: project[1],
                    itemStyle: {
                        color: '#8AA1FC',
                    }
                }
            ]
        }
    ]
};