option = {
    dataset: {
        source: [
            ['Country', 'Confirmed'],
            ['住建', 19],
            ['市场监管', 9],
            ['应急', 7]

        ]
    },
    toolbox: {
        show: true, //false则不显示工具栏
        feature: {
            saveAsImage: {
                show: true,
                type: 'jpeg'
            }
        }
    },
    calculable: true,
    series: [{
        name: '半径模式',
        type: 'pie',
        clockWise: false,
        radius: [20, 400],
        center: ['50%', '60%'],
        roseType: 'area',
        encode: {
            itemName: 'Country',
            value: 'Confirmed'
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                        "#a71a4f", "#bc1540", "#c71b1b", "#d93824", "#ce4018", "#d15122", "#e7741b", "#e58b3d", "#e59524", "#dc9e31", "#da9c2d", "#d2b130", "#bbd337", "#8cc13f", "#67b52d", "#53b440", "#48af54", "#479c7f", "#48a698", "#57868c"
                    ];
                    return colorList[params.dataIndex]
                },
                label: {
                    position: 'inside',
                    textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FAFAFA',
                        fontSize: 10
                    },
                    //formatter:'{b} \n{@Confirmed}例 \n死亡{@Dead}',//注意这里大小写敏感哦
                    formatter: function(params) {
                            return params.data[0] + '\n' + params.data[1] + "例"

                    },

                },
            },
        },

    }]

};