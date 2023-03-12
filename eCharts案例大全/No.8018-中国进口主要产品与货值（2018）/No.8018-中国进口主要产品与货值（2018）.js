var data = [{
    name: '01活动物',
    value: 29360,
    children: [
{"name":"活动物","value":"411"},
{"name":"肉","value":"11018"},
{"name":"鱼","value":"11599"},
{"name":"乳蛋品","value":"5601"},
{"name":"其他动物","value":"729"}]},
   {
    name: '02植物产品',
    value: 62454,
    children: [
{"name":"树、插花","value":"292"},
{"name":"蔬菜","value":"2037"},
{"name":"水果","value":"8682"},
{"name":"咖啡茶","value":"633"},
{"name":"谷物","value":"5793"},
{"name":"淀粉","value":"1178"},
{"name":"含油子仁果实","value":"43379"},
{"name":"树胶树脂","value":"313"},
{"name":"编结植物","value":"142"}]},
   {
    name: '03动植物油脂',
    value: 8608,
    children: [
{"name":"动植物油","value":"8608"}]},
   {
    name: '04食品饮料',
    value: 25924,
    children: [
{"name":"肉鱼","value":"394"},
{"name":"糖","value":"1421"},
{"name":"可可","value":"787"},
{"name":"谷物糕饼","value":"6665"},
{"name":"蔬菜水果制品","value":"1401"},
{"name":"杂项食品","value":"3256"},
{"name":"饮料酒醋","value":"6434"},
{"name":"食品残渣动物饲料额","value":"3804"},
{"name":"烟草","value":"1758"}]},
   {
    name: '05矿产品',
    value: 493260,
    children: [
{"name":"盐石膏料","value":"8024"},
{"name":"矿砂","value":"135868"},
{"name":"石油","value":"349367"}]},
   {
    name: '06化学工业',
    value: 155552,
    children: [
{"name":"无机化学品","value":"10835"},
{"name":"有机化学品","value":"67304"},
{"name":"药品","value":"27931"},
{"name":"肥料","value":"2731"},
{"name":"染料墨水","value":"5036"},
{"name":"精油盥洗品","value":"12383"},
{"name":"洗涤润滑剂","value":"4914"},
{"name":"蛋白类","value":"3600"},
{"name":"炸药火柴","value":"139"},
{"name":"照相用品","value":"2603"},
{"name":"杂项化学","value":"18070"}]},
   {
    name: '07塑料橡胶制品',
    value: 91795,   
    children: [
{"name":"塑料","value":"74885"},
{"name":"橡胶","value":"16910"}]},
   {
    name: '08皮革制品',
    value: 9131,
    children: [
{"name":"生皮","value":"4778"},
{"name":"皮革制品","value":"3314"},
{"name":"毛皮人造毛皮","value":"1038"}]},
   {
    name: '09木制品',
    value: 24991,
    children: [
{"name":"木及木制品","value":"24919"},
{"name":"软木及软木制品","value":"56"},
{"name":"编结制品","value":"15"}]},
   {
    name: '10木浆与纸',
    value: 32287,
    children: [
{"name":"木浆","value":"24010"},
{"name":"纸","value":"6203"},
{"name":"书报","value":"2073"}]},
   {
    name: '11纺织品',
    value: 34137,
    children: [
{"name":"蚕丝","value":"53"},
{"name":"羊毛","value":"4197"},
{"name":"棉花","value":"9889"},
{"name":"植物纺织纤维","value":"916"},
{"name":"化学长丝","value":"3153"},
{"name":"化学短纤","value":"2477"},
{"name":"线绳","value":"1325"},
{"name":"地毯","value":"136"},
{"name":"机织刺绣","value":"512"},
{"name":"工业用纺","value":"1809"},
{"name":"针织物","value":"1638"},
{"name":"针织服装","value":"3380"},
{"name":"配件","value":"4158"},
{"name":"其他纺织品","value":"486"}]},
   {
    name: '12鞋靴产品',
    value: 5024,
    children: [
{"name":"鞋靴","value":"4660"},
{"name":"帽","value":"99"},
{"name":"伞杖","value":"33"},
{"name":"加工羽毛","value":"230"}]},
   {
    name: '13陶瓷石材',
    value: 10849,
    children: [
{"name":"石料水泥","value":"1842"},
{"name":"陶瓷","value":"1222"},
{"name":"玻璃","value":"7784"}]},
   {
    name: '14珍珠宝石',
    value: 78020,
    children: [
{"name":"珍珠宝石","value":"78020"}]},
   {
    name: '15金属',
    value: 106523,
    children: [
{"name":"钢铁","value":"22369"},
{"name":"钢铁制品","value":"10760"},
{"name":"铜","value":"47536"},
{"name":"镍","value":"5486"},
{"name":"铝","value":"6643"},
{"name":"铅","value":"401"},
{"name":"锌","value":"2573"},
{"name":"锡","value":"178"},
{"name":"其他金属","value":"4780"},
{"name":"金属器具","value":"3851"},
{"name":"金属杂项","value":"1940"}]},
   {
    name: '16机械设备',
    value: 723809,
    children: [
{"name":"核反应堆锅炉","value":"202192"},
{"name":"电气设备","value":"521617"}]},
   {
    name: '17车辆船舶',
    value: 114910,
    children: [
{"name":"铁道及车辆","value":"792"},
{"name":"车辆","value":"81519"},
{"name":"航空器","value":"30541"},
{"name":"船舶","value":"2057"}]},
   {
    name: '18精密仪器',
    value: 106905,
    children: [
{"name":"光学","value":"102626"},
{"name":"钟表","value":"3790"},
{"name":"乐器","value":"488"}]},
   {
    name: '19杂项',
    value: 22186,
    children: [
{"name":"武器","value":"8"},
{"name":"家具","value":"3968"},
{"name":"玩具","value":"2108"},
{"name":"杂项","value":"2591"},
{"name":"艺术收藏","value":"173"},
{"name":"特殊","value":"13335"},
]
}]
// var modes = ['2012Budget', '2011Budget', 'Growth'];
option = {
    title: {
        left: 0,
        top: "4%",
        text: ['{c|}' + '{d|中国进口主要产品与货值（2018）}'],
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
            fontSize: 12,
          //  color: '#000000',
            formatter: function(params) {
                var arr = [
                    params.name,
                    params.value + '（百万美元）'
                ];
                return arr.join('\n');
            }
        },
        upperLabel: {
                    show: true,
                    height: 20
                },                
                itemStyle: {
                    borderColor: '#333'
                },
        levels: [{
                 colorSaturation: [0.2, 0.8],
                itemStyle: {
                    normal: {
                        borderColor: '#333',
                        borderWidth: 1,
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
                        gapWidth: 2,
                        borderWidth: 2
                    }
                }
            },
        ]
    }]
};