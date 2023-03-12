var legenddata = [{
            name: '北海中学',
            Confirmed: 1226
        },
        {
            name: '廉州中学',
            Confirmed: 1141
        },
        {
            name: '北海七中',
            Confirmed: 961
        },
        {
            name: '合浦一中',
            Confirmed: 923
        },
        {
            name: '合浦二中',
            Confirmed: 603
        },
        {
            name: '北海二中',
            Confirmed: 575
        },
        {
            name: '公馆中学',
            Confirmed: 358
        },
        {
            name: '合浦四中',
            Confirmed: 346
        },
        {
            name: '南康中学',
            Confirmed: 297
        },
        {
            name: '西场中学',
            Confirmed: 250
        },
        {
            name: '北师附中',
            Confirmed: 223
        },
        {
            name: '北海九中',
            Confirmed: 219
        },
        {
            name: '北海五中',
            Confirmed: 204
        },
        {
            name: '山口中学',
            Confirmed: 181
        },
        {
            name: '石康中学',
            Confirmed: 147
        },
        {
            name: '国际学校',
            Confirmed: 89
        },
        {
            name: '东方外语',
            Confirmed: 71
        },
        {
            name: '国发高中',
            Confirmed: 63
        },
        {
            name: '营盘中学',
            Confirmed: 41
        },
        {
            name: '福成中学',
            Confirmed: 33
        }

    ],
    option = {
        dataset: {
            source: [
                ['Country', 'Confirmed', 'SQRT', 'Dead'],
                ['北海中学', 1226, 292.9846412, 1296],
                ['廉州中学', 1141, 283.8820177, 8215],
                ['北海七中', 961, 240.3871877, 4365],
                ['合浦一中', 923, 209.6139308, 267],
                ['合浦二中', 603, 171.9476665, 1698],
                ['北海二中', 575, 171.4817775, 2234],
                ['公馆中学', 358, 108.6830254, 580],
                ['南康中学', 297, 108.6784247, 191],
                ['西场中学', 250, 96.60227741, 139],
                ['北师附中', 223,90.53150426, 60],
                ['北海九中', 219, 86.42337647, 435],
                ['北海五中', 204, 83.12039461, 49],
                ['山口中学', 181, 78.96201618, 220],
                ['石康中学', 147, 63.60817558, 39],
                ['国际学校', 89, 60.24118193, 75],
                ['东方外语', 71, 58.06892456, 14],
                ['福成中学', 33, 53.29165038, 77]

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
        title: {
            text: '各校四模参考人数',

            x: '60%',
            y: '150',
            textStyle: {
                fontSize: 27,
                fontWeight: 'bold',
                fontFamily: 'Microsoft YaHei',
                color: '#000'
            },
            subtextStyle: {
                fontStyle: 'italic',
                fontSize: 14
            }
        },
        legend: {
            x: '60%', //水平位置，【left\center\right\数字】
            y: '350', //垂直位置，【top\center\bottom\数字】
            align: 'left', //字在图例的左边或右边【left/right】
            orient: 'vertical', //图例方向【horizontal/vertical】
            icon: "circle", //图例形状【circle\rect\roundRect\triangle\diamond\pin\arrow\none】
            textStyle: //图例文字
            {
                fontFamily: '微软雅黑',
                color: '#000',

            },
            data: ['北海中学', '廉州中学', '北海七中', '合浦一中', '合浦二中', '北海二中', '公馆中学', '合浦四中', '南康中学', '西场中学', '北师附中', '北海九中', '北海五中', '山口中学', '石康中学', '国际学校', '东方外语', '国发高中', '营盘中学', '福成中学', '行知高中'],
            formatter: function(params) {
                console.log('图例参数', params)
                for (var i = 0; i < legenddata.length; i++) {
                    if (legenddata[i].name == params) {
                        return params + "\t参考人数:" + legenddata[i].Confirmed;
                    }
                }
            }

        },

        calculable: true,
        series: [{
                name: '半径模式',
                type: 'pie',
                clockWise: false,
                radius: [20, 400],
                center: ['40%', '60%'],
                roseType: 'area',
                encode: {
                    itemName: 'Country',
                    value: 'SQRT'
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
                                console.log('参数列表', params)
                                if (params.data[1] > 30) {
                                    return params.data[0] + '\n' + params.data[1] + "人"
                                } else {
                                    return "";
                                }
                            },

                        },
                    },
                },

            },
            {
                name: '透明圆圈',
                type: 'pie',
                radius: [10, 27],
                center: ['40%', '60%'],
                itemStyle: {
                    color: 'rgba(250, 250, 250, 0.3)',
                },
                data: [{
                    value: 10,
                    name: ''
                }]
            },
            {
                name: '透明圆圈',
                type: 'pie',
                radius: [10, 35],
                center: ['40%', '60%'],
                itemStyle: {
                    color: 'rgba(250, 250, 250, 0.3)',
                },
                data: [{
                    value: 10,
                    name: ''
                }]
            }
        ]

    };