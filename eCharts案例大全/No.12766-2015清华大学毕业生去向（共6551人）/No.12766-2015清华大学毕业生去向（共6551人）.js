var data = [{
        name: "深造",
        itemStyle: {
            color: '#7591CC',
        },
        children: [{
            name: "深造-国内",
            value: 1795,
            itemStyle: {
               // colorSaturation: 0.55,
              //  colorAlpha: 1
            },
            
            children: [{
            name: "深造-国内-本科生",
            value: 1530,
            itemStyle: {
             //   color: '#f3aa02',
                colorSaturation: 0.55,
                colorAlpha: 1
            },
        },{
            name: "深造-国内-硕士生",
            value: 62,
            itemStyle: {
              //  color: '#f3aa02',
                colorSaturation: 0.6,
               // colorAlpha: 0.7
            },
        },{
            name: "深造-国内-博士生",
            value: 203,
            itemStyle: {
              //  color: '#f3aa02',
                colorSaturation: 0.65,
              //  colorAlpha: 0.5
            },
            
            },]
            
        }, {
            name: "深造-出国（境）",
            value: 1059,
            itemStyle: {
              //  color: '#f3aa02',
                colorSaturation: 0.55,
            },
             children: [{
            name: "深造-出国-本科生",
            value: 796,
            itemStyle: {
             //   color: '#f3aa02',
                colorSaturation: 0.45,
                colorAlpha: 1
            },
        },{
            name: "深造-出国-硕士生",
            value: 165,
            itemStyle: {
              //  color: '#f3aa02',
                colorSaturation: 0.4,
               // colorAlpha: 0.7
            },
        },{
            name: "深造-出国-博士生",
            value: 98,
            itemStyle: {
              //  color: '#f3aa02',
                colorSaturation: 0.35,
                colorAlpha: 1
            },
            },]
            
        },]
    },
    {
        name: "就业",
        itemStyle: {
                color: '#CC355B',
               // colorSaturation: 0.35,
               // colorAlpha: 1
            },
        children: [{
            name: "签约就业",
            value: 2727,
            itemStyle: {
                colorSaturation: 0.55,
            },
            children: [{
            name: "签约就业-本科生",
            value: 152,
            itemStyle: {
                colorSaturation: 0.55,
                colorAlpha: 1
            },
        },{
            name: "签约就业-硕士生",
            value: 1851,
            itemStyle: {
                colorSaturation: 0.6,
                colorAlpha: 1
            },
        },{
            name: "签约就业-博士生",
            value: 724,
            itemStyle: {
                colorSaturation: 0.65,
                colorAlpha: 1
            },
            },]
        }, {
            name: "灵活就业",
            value: 815,
           //             itemStyle: {
          //      colorSaturation: 0.55,
           // },
             children: [{
            name: "灵活就业-本科生",
            value: 318,
            itemStyle: {
                colorSaturation: 0.45,
                colorAlpha: 1
            },
        },{
            name: "灵活就业-硕士生",
            value: 432,
            itemStyle: {
                colorSaturation: 0.4,
                colorAlpha: 1
            },
        },{
            name: "灵活就业-博士生",
            value: 65,
            itemStyle: {
                colorSaturation: 0.35,
                colorAlpha: 1
            },
            },]
        }, {
            name: "自主创业",
            value: 60,
            // itemStyle: {
            //     colorSaturation: 0.55,
            // },
             children: [{
            name: "自主创业-本科生",
            value: 20,
            itemStyle: {
                colorSaturation: 0.25,
                colorAlpha: 1
            },
        },{
            name: "自主创业-硕士生",
            value: 31,
            itemStyle: {
                colorSaturation: 0.2,
                colorAlpha: 1
            },
        },{
            name: "自主创业-博士生",
            value: 9,
            itemStyle: {
                colorSaturation: 0.15,
                colorAlpha: 1
            },
            },]
        }, {
        }, ]
    },
    {
        name: "未就业",
        itemStyle: {
                color: '#5CC9CC',
                colorSaturation: 0.35,
                colorAlpha: 1
            },
        children: [{
            name: "未就业-拟继续深造",
            value: 56,
            // itemStyle: {
            //     colorSaturation: 0.55,
            // },
             children: [{
            name: "拟继续深造-本科生",
            value: 44,
            itemStyle: {
                colorSaturation: 0.55,
                colorAlpha: 1
            },
        },{
            name: "拟继续深造-硕士生",
            value: 4,
            itemStyle: {
                colorSaturation: 0.6,
                colorAlpha: 1
            },
        },{
            name: "拟继续深造-博士生",
            value: 8,
            itemStyle: {
                colorSaturation: 0.65,
                colorAlpha: 1
            },
            },]
        }, {
            name: "待就业",
            value: 35,
            // itemStyle: {
            //     colorSaturation: 0.4,
            // },
             children: [{
            name: "待就业-本科生",
            value: 15,
            itemStyle: {
                colorSaturation: 0.45,
                colorAlpha: 1
            },
        },{
            name: "待就业-硕士生",
            value: 9,
            itemStyle: {
                colorSaturation: 0.4,
                colorAlpha: 1
            },
        },{
            name: "待就业-博士生",
            value: 11,
            itemStyle: {
                colorSaturation: 0.35,
                colorAlpha: 1
            },
            },]
        }, {
            name: "去向未定",
            value: 24,
            // itemStyle: {
            //     colorSaturation: 0.4,
            // },
             children: [{
            name: "去向未定-本科生",
            value: 5,
            itemStyle: {
                colorSaturation: 0.25,
                colorAlpha: 1
            },
        },{
            name: "去向未定-硕士生",
            value: 7,
            itemStyle: {
                colorSaturation: 0.2,
                colorAlpha: 1
            },
        },{
            name: "去向未定-博士生",
            value: 12,
            itemStyle: {
                colorSaturation: 0.15,
                colorAlpha: 1
            },
            },]
        }, ]
    }
]
// var modes = ['2012Budget', '2011Budget', 'Growth'];
option = {
    title: {
        left: 0,
        top: "4%",
        text: ['{c|}' + '{d|2015清华大学毕业生去向（共6551人）}'],
        // text:[],
        textStyle: {
            rich: {
                c: {
                    color: '#0000',
                    fontSize: 25,
                    fontWeight: 'bold',
                    width: 4,
                    height: 15,
                    backgroundColor: '#2196f3',

                },
                d: {
               //     color: '#3e4956',
                    fontWeight: 'bold',
                    fontSize: 17,
                    padding: [0, 0, 0, 30],
                },
            }
        },
    },
    tooltip: {},
    series: [{
        name: '全部',
        type: 'treemap',
        visibleMin: 300,
        data: data,
        leafDepth: 4, //呈现层级，若为1加载时仅展开一层，接下来的每一层通过单击进入，如上面的效果图所示，  
        //每一层级呈现的样式  
        label: {
            
            show: true ,
            fontSize: 10,
          //  color: '#000000',
            formatter: function(params) {
                var arr = [
                    params.name,
                    params.value + '人'
                ];
                return arr.join('\n');
            }
        },
        levels: [{
                 colorSaturation: [0.2, 0.8],
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        gapWidth: 1
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.7],
                colorMappingBy: 'id',
                itemStyle: {
                    normal: {
                        // borderColorSaturation: 0.7,
                        gapWidth: 2,
                        borderWidth: 2
                    }
                }
            },
        ]
    }]
};