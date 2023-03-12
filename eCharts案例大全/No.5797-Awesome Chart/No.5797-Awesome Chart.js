var population= [
                {"source": "健康环境", "target": "水",  "value": 600.3},
                {"source": "健康卫生", "target": "水",  "value": 50},
                {"source": "健康卫生", "target": "水",  "value": 50},

                {"source": "健康环境", "target": "光",  "value": 600.2},
                {"source": "健康环境", "target": "声环境",  "value": 400.4},
                {"source": "健康环境", "target": "空气",  "value": 600.9},
                {"source": "健康环境", "target": "热舒适",  "value": 600.2},

                {"source": "健康居住", "target": "健康建筑",  "value": 2100.6},
                {"source": "健康居住", "target": "材料",  "value": 200.23},

                {"source": "健康社会", "target": "社区",  "value": 800},
                {"source": "健康设施", "target": "社区",  "value": 200},
                {"source": "健康服务", "target": "营养",  "value": 700},

                {"source": "健康交通", "target": "空气",  "value": 100},
                {"source": "健康交通", "target": "运动",  "value": 500},


                {"source": "健康活动", "target": "运动",  "value": 500},


                {"source": "健康社会", "target": "精神",  "value": 900.97},


                {"source": "健康卫生", "target": "材料",  "value": 200},
                {"source": "健康卫生", "target": "精神",  "value": 450.97},
                {"source": "健康卫生", "target": "社区",  "value": 100},
                
                {"source": "健康居住", "target": "创新",  "value": 600.81},

                
                {"source": "健康政策", "target": "社区",  "value": 200.81},

            ]

var city={
    '健康环境':'#e9bae8',
    '健康居住':'#3dc5e7',
    '健康设施':'#2aa12d',
    '健康交通':'#e88886',
    '健康活动':'#feda66',
    '健康社会':'#c92123',
    '健康卫生':'#8bc77b',
    '健康服务':'#8ac74b',
    '健康政策':'#2a564b',

    '精神':'#E37332',
    '材料':'#4393c3',
    '社区':'#2166ac',
    '运动':'#f97494',
    '水':'#fb7f10',
    '光':'#e492d0',
    '空气':'#2aa12d',
    '声环境':'#fb7f10',
    '健康建筑':'#98c0fd',
    '创新':'#DE4F3C',
    '营养':'#46B39D',
    '热舒适':'#46B39D',


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
        text: 'well',
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
                    fontSize:'20',
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