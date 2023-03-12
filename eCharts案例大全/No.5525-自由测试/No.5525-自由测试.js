var equipment = ['塞乌素镇', '大库联乡', '五股泉乡', '民族团结乡', '鄂尔栋镇', '城关镇'];
var project = ['塞乌素镇', '大库联乡', '五股泉乡', '民族团结乡', '鄂尔栋镇', '城关镇', '张皋镇', '大同夭乡', '店子镇'];
var colorList = ['#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac']
option = {
    backgroundColor: '#fff',
    tooltip: {
        formatter: function(param) {
            if (param.data.type == null) {

                return param.data.name + ":" + param.value + '项';
            } else {

                return param.data.type + ":" + param.value + '项';
            }
        }
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
                    borderWidth: 2,
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },

            selectedMode: 'single',
            data: [{
                    value: 875,
                    name: '监督',

                },
                {
                    value: 1239,
                    name: '主体',

                },
            ]
        },
        {
            name: '招标方式',
            type: 'pie',
            radius: ['40%', '55%'],

            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            label: {
                normal: {
                    formatter: function(params) {

                        if (params.value != 0)
                            return params.data.type + ":" + params.value + '项';
                        else
                            return '';
                    },
                    show: true,

                },

            },

            data: [{
                    value: 135,
                    name: '监督',
                    type: equipment[0],

                },
                {
                    value: 200,
                    name: '监督',
                    type: equipment[1],

                },
                {
                    value: 100,
                    name: '监督',
                    type: equipment[2],

                },
                {
                    value: 50,
                    name: '监督',
                    type: equipment[3],

                },
                {
                    value: 300,
                    name: '监督',
                    type: equipment[4],

                },
                {
                    value: 90,
                    name: '监督',
                    type: equipment[5],

                },
                {
                    value: 310,
                    name: '主体',
                    type: project[0],

                },
                {
                    value: 234,
                    name: '主体',
                    type: project[1],

                },
                {
                    value: 35,
                    name: '主体',
                    type: project[2],

                },
                {
                    value: 100,
                    name: '主体',
                    type: project[3],

                },
                {
                    value: 40,
                    name: '主体',
                    type: project[4],

                },
                {
                    value: 400,
                    name: '主体',
                    type: project[5],

                },
                {
                    value: 100,
                    name: '主体',
                    type: project[6],

                },
                {
                    value: 20,
                    name: '主体',
                    type: project[7],

                },



            ]
        }
    ]
};