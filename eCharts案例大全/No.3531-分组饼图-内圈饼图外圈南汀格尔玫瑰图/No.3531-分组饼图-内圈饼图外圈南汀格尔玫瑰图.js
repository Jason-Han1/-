var zhengprofessor = ['一级正教授', '二级正教授', '三级正教授', '四级正教授'];
var fuprofessor = ['一级副教授', '二级副教授', '三级副教授'];
var colorList = ['#1a9dff', '#ffa93b'];
option = {
    backgroundColor: '#fff',
    tooltip: {
        formatter: function (param) {
            if (param.data.type === null) {
                return param.data.name + ':' + param.value + '个';
            } else {
                return param.data.type + ':' + param.value + '个';
            }
        },
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: '10%',
        top: 'center',
        itemGap: 30,
        selectedMode: false,
        // icon: 'pin',
        icon: 'circle',
        data: ['正教授', '副教授'],
        textStyle: {
            color: '#77899c',
            rich: {
                uname: {
                    width: 100,
                },
                unum: {
                    color: '#4ed139',
                    width: 40,
                    align: 'right',
                },
            },
        },
        // formatter: function (params) {
        //     if (params.value !== 0) return params.data.type + ':' + params.value + '个';
        //     else return '';
        // },
    },

    series: [
        {
            name: '整体分类',
            type: 'pie',
            radius: ['15%', '30%'],
            label: {
                // position: 'inner',
                show: false,
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },

            selectedMode: 'single',
            data: [
                {
                    value: 60,
                    name: '正教授',
                },
                {
                    value: 40,
                    name: '副教授',
                },
            ],
        },
        {
            name: '外层分类',
            type: 'pie',
            radius: ['40%', '55%'],
            roseType: 'radius',
            itemStyle: {
                normal: {
                    color: function (params) {
                        if (params.name == '正教授') {
                            return colorList[0];
                        } else {
                            return colorList[1];
                        }
                    },
                },
            },
            label: {
                show: false,
                // normal: {
                //     formatter: function (params) {
                //         if (params.value !== 0) return params.data.type + ':' + params.value + '个';
                //         else return '';
                //     },
                //     show: true,
                // },
            },

            data: [
                {
                    value: 10,
                    name: '正教授',
                    type: zhengprofessor[0],
                },
                {
                    value: 20,
                    name: '正教授',
                    type: zhengprofessor[1],
                },
                {
                    value: 15,
                    name: '正教授',
                    type: zhengprofessor[2],
                },
                {
                    value: 8,
                    name: '正教授',
                    type: zhengprofessor[3],
                },
                {
                    value: 10,
                    name: '副教授',
                    type: fuprofessor[0],
                },
                {
                    value: 20,
                    name: '副教授',
                    type: fuprofessor[1],
                },
                {
                    value: 15,
                    name: '副教授',
                    type: fuprofessor[2],
                },
            ],
        },
    ],
};
