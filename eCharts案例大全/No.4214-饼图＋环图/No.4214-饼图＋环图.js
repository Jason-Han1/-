var equipment = ['城镇生活', '农村生活', '工业', '其他', '畜牧养殖', '耕地','农地','林地'];
var colorList = ['#FFA800', '#00E9F1', '#FFA085', '#68C8FF', '#41ACFF', '#5667F9', '#374BF4', '#152CF3']
option = {
    backgroundColor: '#fff',
    tooltip: {
        formatter: function(param) {
            if (param.data.type == null) {

                return param.data.name + ":" + param.value + '个';
            } else {

                return param.data.type + ":" + param.value + '个';
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
                    value: 1085,
                    name: '城镇',

                },
                {
                    value: 1280,
                    name: '农村',

                },
                {
                    value: 985,
                    name: '工业',

                },
                {
                    value: 4371,
                    name: '农业',

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
                            return params.data.type + ":" + params.percent + '%\n';
                        else
                            return '';
                    },
                    padding: [0,-80, 0, -80],
                    show: true,

                },

            },
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 80,
                    lineStyle: {
                        color: '#808080'
                    },
                }
            },
            data: [{
                    value: 1085,
                    name: '城镇',
                    type: equipment[0],

                },
                {
                    value: 1280,
                    name: '农村',
                    type: equipment[1],

                },
                {
                    value: 985,
                    name: '工业',
                    type: equipment[2],

                },
                {
                    value: 158,
                    name: '农业',
                    type: equipment[3],

                },
                {
                    value: 519,
                    name: '农业',
                    type: equipment[4],

                },
                {
                    value: 190,
                    name: '农业',
                    type: equipment[5],

                },
                {
                    value: 190,
                    name: '农业',
                    type: equipment[6],

                },
                {
                    value: 3314,
                    name: '农业',
                    type: equipment[7],

                }
            ]
        }
    ]
};