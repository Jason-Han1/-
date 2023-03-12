option = {
    backgroundColor: "#fff",
    dataset: {
        source: [
            ["value", "签约"],
            ["非流动资产", 100],
            ["所有者权益", 200],
            ["流动资产", 10],
            ["非流动负债", 500],
            ["流动负债", 100]
        ]
    },
    series: {
        "type": "custom",
        "coordinateSystem": "none",
        "seriesLayoutBy": "row",
        "label": {
            "show": true,
            "formatter": function(arg) {
                return arg.value[0]
            }
        },
        "renderItem": function(params, api) {
            console.log('aaa');

            var style = api.style();
            var cw = api.getWidth(),
                ch = api.getHeight(),
                rw = cw / 2,
                rh = ch,
                av = api.value(1),
                avText = "非流动资产\n￥" + api.value(1),
                bv = api.value(2),
                bvText = "所有者权益\n￥" + api.value(2),
                av2 = api.value(3),
                av2Text = "流动资产\n￥" + api.value(3),
                bv2 = api.value(4),
                bv2Text = "非流动负债\n￥" + api.value(4),
                bv3 = api.value(5),
                bv3Text = "流动负债\n￥" + api.value(5),
                arh = rh * av / (av + av2), //1
                arh2 = rh * av2 / (av + av2), //3
                brh = rh * bv / (bv + bv2 + bv3), //2
                brh2 = rh * bv2 / (bv + bv2 + bv3), //4
                brh3 = rh * bv3 / (bv + bv2 + bv3); //5
            // unit = 1,
            //  ul = '(亿元)',
            //   cul = '亿元';
            //   var text = style.text[1] + api.value(1);
            return {
                type: 'group',
                position: [0, ch],
                children: [{
                    type: 'group',
                    position: [0, 0],
                    children: [{ //蓝色
                            type: 'rect',
                            shape: {
                                width: rw,
                                height: -arh,
                            },
                            style: {
                                fill: 'rgb(151,213,168)'
                            },
                            styleEmphasis: {
                                fill: 'rgb(151,213,168)'
                            },
                        },
                        { //绿色
                            type: 'rect',
                            shape: {
                                width: rw,
                                height: -arh2,
                            },
                            style: {
                                fill: 'rgb(186,226,179)'
                            },
                            styleEmphasis: {
                                fill: 'green'
                            },
                            position: [0, -arh]
                        },
                        { //浅蓝色
                            type: 'rect',
                            shape: {
                                width: rw,
                                height: -brh,
                            },
                            style: {
                                fill: 'rgb(123,189,221)'
                            },
                            styleEmphasis: {
                                fill: 'rgb(123,189,221)'
                            },
                            position: [rw, 0]
                        },
                        { //红色
                            type: 'rect',
                            shape: {
                                width: rw,
                                height: -brh2,
                            },
                            style: {
                                fill: 'rgb(201,37,33)'
                            },
                            styleEmphasis: {
                                fill: 'rgb(201,37,33)'
                            },
                            position: [rw, -brh]
                        },
                        { //紫色
                            type: 'rect',
                            shape: {
                                width: rw,
                                height: -brh3,
                            },
                            style: {
                                fill: 'rgb(243,187,186) '
                            },
                            styleEmphasis: {
                                fill: 'rgb(243,187,186) '
                            },
                            position: [rw, -brh - brh2]
                        },
                    ]

                }, {
                    type: 'group',
                    position: [0, 0],
                    children: [{ //蓝
                            type: 'text',
                            shape: {
                                width: rw,
                                height: arh,
                            },
                            style: {
                                fontSize: 12,
                                textAlign: 'center',
                                textFill: '#424658',
                                textVerticalAlign: 'middle',
                                text: avText,
                            },
                            position: [rw / 2, -arh / 2]
                        },
                        { //绿
                            type: 'text',
                            shape: {
                                width: rw,
                                height: arh2,
                            },
                            style: {
                                fontSize: 12,
                                textAlign: 'center',
                                textFill: '#424658',
                                textVerticalAlign: 'middle',
                                text: av2Text,
                            },
                            position: [rw / 2, -arh + (-arh2 / 2)]
                        },
                        { //浅蓝
                            type: 'text',
                            shape: {
                                width: rw,
                                height: brh,
                            },
                            style: {
                                fontSize: 12,
                                textAlign: 'center',
                                textFill: '#424658',
                                textVerticalAlign: 'middle',
                                text: bvText,
                            },
                            position: [rw * 3 / 2, -brh / 2]
                        },
                        { //红
                            type: 'text',
                            shape: {
                                width: rw,
                                height: brh2,
                            },
                            style: {
                                fontSize: 12,
                                textAlign: 'center',
                                textFill: '#424658',
                                textVerticalAlign: 'middle',
                                text: bv2Text,
                            },
                            position: [rw * 3 / 2, -brh + (-brh2 / 2)]
                        },
                        { //紫
                            type: 'text',
                            shape: {
                                width: rw,
                                height: brh3,
                            },
                            style: {
                                fontSize: 12,
                                textAlign: 'center',
                                textFill: '#424658',
                                textVerticalAlign: 'middle',
                                text: bv3Text,
                            },
                            position: [rw * 3 / 2, -brh - brh2 + (-brh3 / 2)]
                        },

                    ]
                }]

            }
        }
    }
}