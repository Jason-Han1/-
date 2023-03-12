data = [{
        name: "公路工程",
        value: 754,
        num: 12,
        percentage: 20
    },
    {
        name: "高速公路",
        value: 611,
        num: 13,
        percentage: 40
    },
    {
        name: "综合交通枢纽及一体化设施",
        value: 400,
        num: 14,
        percentage: 10
    },
    {
        name: "普通公路",
        value: 200,
        num: 15,
        percentage: 30
    }
]
arrName = getArrayValue(data, "name");
objData = array2obj(data, "name");
console.log(objData)

function getArrayValue(array, key) {
    var key = key || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
}

function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
var option = {
    backgroundColor: '#03060F',
    legend: {
        show: true,
        icon: "circle",
        top: "center",
        right: '20%',
        data: ['公路工程', '高速公路', '综合交通枢纽及一体化设施', '普通公路'],
        width: 50,
        padding: [0, 5],
        itemGap: 25,
        formatter: function(name) {
            var text = name
            if (name.length > 7 && name.length <= 16) {
                text = `${name.slice(0,7)}\n${name.slice(7)}`
            }
            var result = "{title|" + text + " " + (objData[name].percentage) + "%}"
            return result
        },

        textStyle: {
            rich: {
                title: {
                    fontSize: 14,
                    lineHeight: 15,
                    color: "#ffffff"
                },
            }
        },
    },
    tooltip: {
        show: true,
        trigger: "item",
        formatter: function(params) {
            console.log(objData[params.name].num)
            var result = params.name + '<br>';
            result = '<span style="display:inline-block;margin-right:5px;border-radius:10px;' +
                'width:9px;height:9px;background-color:' + params.color.colorStops[0].color + '"></span>' + result;
            result += '\n投资额(万元)：' + objData[params.name].value
            result += '<br>项目数(件)：' + objData[params.name].num
            // 判断设置增长还是降低
            return result;
        }
    },
    title: {
        text: '普通公路',
        subtext: '30%',
        textStyle: {
            fontSize: 14,
            color: '#ffffff'
        },
        subtextStyle: {
            color: '#ffffff',
            fontSize: 32,
        },
        x: '22%',
        y: '46%',
    },
    series: [{
        type: 'pie',
        center: ["25%", "50%"],
        color: [{
                type: 'radial',
                x: 0.1,
                r: 1,
                colorStops: [{
                    offset: 0,
                    color: '#007aff' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#133ffd' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            {
                type: 'radial',
                x: 0.1,
                r: 1,
                colorStops: [{
                    offset: 0,
                    color: '#6a47ff' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#637fea' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            {
                type: 'radial',
                x: 0.1,
                r: 1,
                colorStops: [{
                    offset: 0,
                    color: '#e4ad37' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#d5ffac' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            {
                type: 'radial',
                x: 0.1,
                r: 1,
                colorStops: [{
                    offset: 0,
                    color: '#29c5ff' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#20ddff' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },

        ],
        radius: [60, 90],
        label: {
            show: false,
        },
        data: data
    }]
};