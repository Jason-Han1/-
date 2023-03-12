option = {
    dataset: {
        source: [
            ['Country', 'Confirmed1', 'Confirmed'],
            ["", "", 226],
            ["", "", 176],
            ["", "", 146],
            ["", "", 134],
            ["", "", 106],
            ["", "", 100],
            ["", "", 97],
            ["", "", 94],
            ["", "", 89],
            ["", "", 80],
            ["", "", 76],
            ["", "", 74],
            ["", "", 72],
            ["", "", 70],
            ["", "", 68],
            ["", "", 66],
            ["", "", 64],
            ["", "", 62],
            ["", "", 60],
            ["", "", 59],
            ["", "", 58],
            ["", "", 57],
            ["", "", 56],
            ["", "", 55],
            ["", "", 54],
            ["", "", 53],
            ["", "", 52],
            ["", "", 50],
            ["", "", 49],
            ["", "", 47.8],
            ["", "", 46.5],
            ["", "", 45.2],
            ["", "", 43.9],
            ["", "", 42.6],
            ["", "", 41.3],
            ["", "", 40],
            ["", "", 39],
            ["", "", 38]


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
         radius: [20, 450],
        center: ['50%', '70%'],
        roseType: 'area',
        encode: {
            itemName: 'Country',
            value: 'Confirmed'
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = ["RGB(175,7,82)", "RGB(200,13,66)", "RGB(224,10,46)", "RGB(209,17,16)", "RGB(218,38,21)", "RGB(232,52,35)", "RGB(229,74,18)", "RGB(216,62,8)", "RGB(234,69,13)", "RGB(219,81,32)", "RGB(219,94,30)", "RGB(213,105,48)", "RGB(243,123,7)", "RGB(240,131,38)", "RGB(239,153,16)", "RGB(239,161,37)", "RGB(221,150,39)", "RGB(221,184,41)", "RGB(221,210,41)", "RGB(195,222,41)", "RGB(136,219,40)", "RGB(122,241,18)", "RGB(55,233,16)", "RGB(39,227,21)", "RGB(29,225,51)", "RGB(29,208,46)", "RGB(48,197,54)", "RGB(54,200,99)", "RGB(38,197,79)", "RGB(57,187,91)", "RGB(74,176,122)", "RGB(68,159,128)", "RGB(90,186,164)", "RGB(67,174,152)", "RGB(75,172,161)", "RGB(91,166,161)", "RGB(89,139,146)", "RGB(89,121,146)"];
                    return colorList[params.dataIndex];
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
                        return (
                            params.data[0] +
                            '\n' +
                            params.data[1]
                        );
                    }
                }
            }
        }
    }]
};