
var source = [{"industry":"银行","name":"平安银行","涨跌幅":-0.14,"量比":0.83,"Amount":87362.43},{"industry":"全国地产","name":"万 科Ａ","涨跌幅":1.3,"量比":1.69,"Amount":197637.2},{"industry":"生物制药","name":"国农科技","涨跌幅":-3.39,"量比":0.0,"Amount":3449.41},{"industry":"环境保护","name":"世纪星源","涨跌幅":10.1,"量比":2.89,"Amount":12274.01},{"industry":"区域地产","name":"深振业Ａ","涨跌幅":1.44,"量比":2.39,"Amount":6369.07},{"industry":"酒店餐饮","name":"全新好","涨跌幅":-0.73,"量比":1.3,"Amount":2305.26},{"industry":"运输设备","name":"神州高铁","涨跌幅":0.26,"量比":0.89,"Amount":4129.22},{"industry":"综合类","name":"中国宝安","涨跌幅":-0.52,"量比":0.72,"Amount":5128.63},{"industry":"建筑施工","name":"*ST美丽","涨跌幅":2.04,"量比":0.0,"Amount":729.37},{"industry":"区域地产","name":"深物业A","涨跌幅":4.24,"量比":5.19,"Amount":8691.59},{"industry":"玻璃","name":"南 玻Ａ","涨跌幅":0.24,"量比":0.74,"Amount":2706.7},{"industry":"全国地产","name":"沙河股份","涨跌幅":3.15,"量比":3.65,"Amount":8607.37},{"industry":"家用电器","name":"深康佳Ａ","涨跌幅":0.47,"量比":0.88,"Amount":4960.5},{"industry":"文教休闲","name":"深中华A","涨跌幅":0.44,"量比":0.85,"Amount":1076.83},{"industry":"装修装饰","name":"*ST神城","涨跌幅":5.11,"量比":0.0,"Amount":6582.9},{"industry":"其他商业","name":"深粮控股","涨跌幅":-1.64,"量比":1.3,"Amount":5383.55},{"industry":"元器件","name":"深华发Ａ","涨跌幅":1.93,"量比":2.81,"Amount":2101.73},{"industry":"电脑设备","name":"深科技","涨跌幅":-0.12,"量比":0.6,"Amount":8031.7},{"industry":"其他建材","name":"深天地Ａ","涨跌幅":0.92,"量比":1.4,"Amount":2597.53},{"industry":"汽车服务","name":"特 力Ａ","涨跌幅":-0.58,"量比":0.73,"Amount":5263.19},{"industry":"其他商业","name":"飞亚达Ａ","涨跌幅":0.51,"量比":1.09,"Amount":2195.08},{"industry":"火力发电","name":"深圳能源","涨跌幅":0.64,"量比":0.93,"Amount":3636.08},{"industry":"医药商业","name":"国药一致","涨跌幅":-0.35,"量比":1.22,"Amount":4880.9},{"industry":"汽车配件","name":"富奥股份","涨跌幅":0.42,"量比":0.65,"Amount":695.9},{"industry":"全国地产","name":"大悦城","涨跌幅":2.29,"量比":1.96,"Amount":10547.66},{"industry":"元器件","name":"深桑达Ａ","涨跌幅":1.6,"量比":0.75,"Amount":3038.67},{"industry":"综合类","name":"神州数码","涨跌幅":-0.3,"量比":0.79,"Amount":5104.54},{"industry":"环境保护","name":"中国天楹","涨跌幅":1.76,"量比":0.95,"Amount":43531.08},{"industry":"全国地产","name":"华联控股","涨跌幅":0.2,"量比":0.76,"Amount":4961.56},{"industry":"火力发电","name":"深南电A","涨跌幅":-2.98,"量比":1.18,"Amount":5699.69},{"industry":"广告包装","name":"深大通","涨跌幅":-3.94,"量比":1.38,"Amount":16266.95},{"industry":"轻工机械","name":"中集集团","涨跌幅":0.0,"量比":0.68,"Amount":5116.99}];


/*
var source = [{"industry":"银行","name":"平安银行","涨跌幅":-0.14,"量比":0.83,"Amount":87362.43},{"industry":"全国地产","name":"万 科Ａ","涨跌幅":1.3,"量比":1.69,"Amount":197637.2},{"industry":"生物制药","name":"国农科技","涨跌幅":-3.39,"量比":0.0,"Amount":3449.41},{"industry":"环境保护","name":"世纪星源","涨跌幅":10.1,"量比":2.89,"Amount":12274.01},{"industry":"区域地产","name":"深振业Ａ","涨跌幅":1.44,"量比":2.39,"Amount":6369.07},{"industry":"酒店餐饮","name":"全新好","涨跌幅":-0.73,"量比":1.3,"Amount":2305.26},{"industry":"运输设备","name":"神州高铁","涨跌幅":0.26,"量比":0.89,"Amount":4129.22},{"industry":"综合类","name":"中国宝安","涨跌幅":-0.52,"量比":0.72,"Amount":5128.63},{"industry":"建筑施工","name":"*ST美丽","涨跌幅":2.04,"量比":0.0,"Amount":729.37},{"industry":"区域地产","name":"深物业A","涨跌幅":4.24,"量比":5.19,"Amount":8691.59},{"industry":"玻璃","name":"南 玻Ａ","涨跌幅":0.24,"量比":0.74,"Amount":2706.7},{"industry":"全国地产","name":"沙河股份","涨跌幅":3.15,"量比":3.65,"Amount":8607.37},{"industry":"家用电器","name":"深康佳Ａ","涨跌幅":0.47,"量比":0.88,"Amount":4960.5},{"industry":"文教休闲","name":"深中华A","涨跌幅":0.44,"量比":0.85,"Amount":1076.83},{"industry":"装修装饰","name":"*ST神城","涨跌幅":5.11,"量比":0.0,"Amount":6582.9},{"industry":"其他商业","name":"深粮控股","涨跌幅":-1.64,"量比":1.3,"Amount":5383.55},{"industry":"元器件","name":"深华发Ａ","涨跌幅":1.93,"量比":2.81,"Amount":2101.73},{"industry":"电脑设备","name":"深科技","涨跌幅":-0.12,"量比":0.6,"Amount":8031.7},{"industry":"其他建材","name":"深天地Ａ","涨跌幅":0.92,"量比":1.4,"Amount":2597.53},{"industry":"汽车服务","name":"特 力Ａ","涨跌幅":-0.58,"量比":0.73,"Amount":5263.19}
];


var source = [
    {
        "industry": "银行",
        "name": "平安银行",
        "涨跌幅": -0.14
    },
    {
        "industry": "全国地产",
        "name": "万 科Ａ",
        "涨跌幅": 1.3
    },
    {
        "industry": "生物制药",
        "name": "国农科技",
        "涨跌幅": -3.39
    },
    {
        "industry": "环境保护",
        "name": "世纪星源",
        "涨跌幅": 10.1
    },
    {
        "industry": "区域地产",
        "name": "深振业Ａ",
        "涨跌幅": 1.44
    },
    {
        "industry": "酒店餐饮",
        "name": "全新好",
        "涨跌幅": -0.73
    },
    {
        "industry": "运输设备",
        "name": "神州高铁",
        "涨跌幅": 0.26
    },
    {
        "industry": "综合类",
        "name": "中国宝安",
        "涨跌幅": -0.52
    },
    {
        "industry": "建筑施工",
        "name": "*ST美丽",
        "涨跌幅": 2.04
    },
    {
        "industry": "区域地产",
        "name": "深物业A",
        "涨跌幅": 4.24
    },
    {
        "industry": "玻璃",
        "name": "南 玻Ａ",
        "涨跌幅": 0.24
    },
    {
        "industry": "全国地产",
        "name": "沙河股份",
        "涨跌幅": 3.15
    },
    {
        "industry": "家用电器",
        "name": "深康佳Ａ",
        "涨跌幅": 0.47
    },
    {
        "industry": "文教休闲",
        "name": "深中华A",
        "涨跌幅": 0.44
    },
    {
        "industry": "装修装饰",
        "name": "*ST神城",
        "涨跌幅": 5.11
    },
    {
        "industry": "其他商业",
        "name": "深粮控股",
        "涨跌幅": -1.64
    },
    {
        "industry": "元器件",
        "name": "深华发Ａ",
        "涨跌幅": 1.93
    },
    {
        "industry": "电脑设备",
        "name": "深科技",
        "涨跌幅": -0.12
    },
    {
        "industry": "其他建材",
        "name": "深天地Ａ",
        "涨跌幅": 0.92
    },
    {
        "industry": "汽车服务",
        "name": "特 力Ａ",
        "涨跌幅": -0.58
    },
    {
        "industry": "其他商业",
        "name": "飞亚达Ａ",
        "涨跌幅": 0.51
    },
    {
        "industry": "火力发电",
        "name": "深圳能源",
        "涨跌幅": 0.64
    },
    {
        "industry": "医药商业",
        "name": "国药一致",
        "涨跌幅": -0.35
    },
    {
        "industry": "汽车配件",
        "name": "富奥股份",
        "涨跌幅": 0.42
    },
    {
        "industry": "全国地产",
        "name": "大悦城",
        "涨跌幅": 2.29
    },
    {
        "industry": "元器件",
        "name": "深桑达Ａ",
        "涨跌幅": 1.6
    },
    {
        "industry": "综合类",
        "name": "神州数码",
        "涨跌幅": -0.3
    },
    {
        "industry": "环境保护",
        "name": "中国天楹",
        "涨跌幅": 1.76
    },
    {
        "industry": "全国地产",
        "name": "华联控股",
        "涨跌幅": 0.2
    }
];

*/

var temp = {};
for (var i = 0; i < source.length; i++) {
    var industry = source[i]["industry"];
    if(!temp[industry]) {
        temp[industry] = [];
    }
    temp[industry].push(source[i]);
}

var data = [];
var colors = ['#7591CC', '#5CC9CC', '#CC355B'],
    idx = 0;
for(var industry in temp) {
    if(!!industry && !!temp[industry] && temp[industry].length > 0) {
        var item = {
            name: industry,
            value:industry.legend,
            itemStyle: {
                color: colors[idx++ % 3],
            },
            children: []
        }
        for (var i = 0; i < temp[industry].length; i++) {
            var name = temp[industry][i]["name"],
                change = temp[industry][i]["涨跌幅"],
                sname = name[i].length;
            item["children"].push({
                name: industry + '-' + name,
                value:sname,
                value1:change,
                itemStyle: {
                    colorSaturation: change/10,
                    colorAlpha: 0.8
                }
            });
        }
        data.push(item);
    }
}

// var modes = ['2012Budget', '2011Budget', 'Growth'];
var option = {
    title: {
        left: 0,
        top: "4%",
        text: ['{c|}' + '{d|（行业分类）}'],
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
                 //   color: '#3e4956',
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
                    '涨跌幅: ' + params.value
                ];
                return arr.join('\n');
            }
        },
        
        levels: [{
                 colorSaturation: [0.3, 0.7],
                itemStyle: {
                    normal: {
                        borderColor: 'black',
                        borderWidth: 0.5,
                        gapWidth: 2
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.7],
                colorMappingBy: 'id',
                itemStyle: {
                    normal: {
                        // borderColorSaturation: 0.7,
                        gapWidth: 1,
                        borderWidth: 2
                    }
                }
            },
        ]
        
        

    }]
};