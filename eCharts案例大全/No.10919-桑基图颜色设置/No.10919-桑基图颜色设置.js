var population= [
                {"source": "惠城区", "target": "商服用地",  "value": 712359.3},
                {"source": "惠城区", "target": "商住用地",  "value": 12500.2},
                {"source": "惠城区", "target": "科教用地",  "value": 50241.4},
                {"source": "惠城区", "target": "仓储用地",  "value": 42212.9},
                {"source": "惠城区", "target": "工业用地",  "value": 180555.06},
                {"source": "惠城区", "target": "其他用地",  "value": 8560.2},

                {"source": "仲恺区", "target": "商服用地",  "value": 618180.6},
                {"source": "仲恺区", "target": "商住用地",  "value": 436696.23},
                {"source": "仲恺区", "target": "科教用地",  "value": 213535},
                {"source": "仲恺区", "target": "工业用地",  "value": 1856227.4},

                {"source": "惠阳区", "target": "商服用地",  "value": 8950},
                {"source": "惠阳区", "target": "商住用地",  "value": 177577.6},
                {"source": "惠阳区", "target": "工业用地",  "value": 523499},
                {"source": "惠阳区", "target": "其他用地",  "value": 110113},

                {"source": "大亚湾", "target": "商服用地",  "value": 145857},
                {"source": "大亚湾", "target": "商住用地",  "value": 413287.5},
                {"source": "大亚湾", "target": "住宅用地",  "value": 73910.8},
                {"source": "大亚湾", "target": "工业用地",  "value": 442695},
                {"source": "大亚湾", "target": "其他用地",  "value": 2764.4},

                {"source": "博罗县", "target": "商服用地",  "value": 134172},
                {"source": "博罗县", "target": "商住用地",  "value": 294527},
                {"source": "博罗县", "target": "住宅用地",  "value": 6851},
                {"source": "博罗县", "target": "科教用地",  "value": 121422},
                {"source": "博罗县", "target": "工业用地",  "value": 989856.58},
                {"source": "博罗县", "target": "其他用地",  "value": 9134},

                {"source": "惠东县", "target": "商服用地",  "value": 33732.97},
                {"source": "惠东县", "target": "商住用地",  "value": 65556.41},
                {"source": "惠东县", "target": "住宅用地",  "value": 295348.5},
                {"source": "惠东县", "target": "商业用地",  "value": 7391.31},
                {"source": "惠东县", "target": "工业用地",  "value": 549721.16},

                {"source": "龙门县", "target": "商服用地",  "value": 146022.81},
                {"source": "龙门县", "target": "住宅用地",  "value": 146422.47},
                {"source": "龙门县", "target": "商业用地",  "value": 49587.21},
                {"source": "龙门县", "target": "仓储用地",  "value": 36218.96},
                {"source": "龙门县", "target": "工业用地",  "value": 267393.02},
                {"source": "龙门县", "target": "其他用地",  "value": 4131.95},
            ]

var city={
    '惠城区':'#e9bae8',
    '仲恺区':'#3dc5e7',
    '惠阳区':'#2aa12d',
    '大亚湾':'#e88886',
    '博罗县':'#feda66',
    '惠东县':'#c92123',
    '龙门县':'#8bc77b',

    '商服用地':'#fb7f10',
    '商住用地':'#e492d0',
    '住宅用地':'#2aa12d',
    '商业用地':'#fb7f10',
    '科教用地':'#98c0fd',
    '仓储用地':'#4393c3',
    '工业用地':'#2166ac',
    '其他用地':'#f97494',

}
var citylist=[];
//遍历city
for(var key in city){
    citylist.push(
            {name: key,itemStyle: {normal:  {color:city[key]}}}   //构造节点对象，包括name和itemStyle
    )
}
console.log(citylist)
var data=[];
for(var i=0;i<population.length;i++){
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: city[population[i].source]  //获取起始节点的颜色属性
            },{
                offset: 1,
                color: city[population[i].target]  //获取结尾节点的颜色属性
            }]
    )
    data.push({
                source: population[i].source,
                target: population[i].target,
                value: population[i].value,
                lineStyle: {   //添加样式配置
                    normal: {
                        color:color
                    }

                }
            }
    )
}


var option = {
    backgroundColor:'#000',
    title: {
        text: '区域成交用地性质占比',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 20,
            color: '#F1F1F3'
        },
        top: "3%",
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'sankey',
            data: citylist,
            links: data,
            top:'10%',
            right:'10%',
            bottom:'5%',
            focusNodeAdjacency: 'allEdges',
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#fff',
                    opacity:1
                }
            },
            label:{
                normal: {
                    fontSize:'14',
                    color: '#fff'
                }
            },
            lineStyle: {
                normal: {
                    curveness: 0.5,
                    opacity:0.5
                }
            }
        }
    ]
};