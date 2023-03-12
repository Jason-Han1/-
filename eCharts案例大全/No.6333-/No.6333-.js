var data =  [
        {
            "symbolSize": 40,
            "name": "陕西煤业化工集团有限责任公司",
            "category": 0,
            itemStyle: {
                color: '#5F9CFE'
            },
        },
        {
            "symbolSize": 20.0,
            "name": "陕西陕煤曹家滩矿业有限公司",
            "category": 2.0,
            itemStyle: {
                color: '#5F9CFE'
            },
        },
        {
            "msg": "支出：13050.0万元",
            "symbolSize": 20.0,
            "name": "陕西陕煤曹家滩矿业有限公司_支出",
            "category": 2.0,
            itemStyle: {
                color: '#F4686D'
            },
        },
        {
            "msg": "收入：13050.0万元",
            "symbolSize": 20.0,
            "name": "陕西陕煤曹家滩矿业有限公司_收入",
            "category": 2.0,
            itemStyle: {
                color: '#F4686D'
            },
        },
        {
            "symbolSize": 30.0,
            "name": "陕西陕煤榆北煤业有限公司（本部）",
            "category": 1.0,
            itemStyle: {
                color: '#5F9CFE'
            },
        },
        {
            "msg": "支出：1.29万元",
            "symbolSize": 30.0,
            "name": "陕西陕煤榆北煤业有限公司（本部）_支出",
            "category": 1.0,
            itemStyle: {
                color: '#F4686D'
            },
        },
        {
            "msg": "收入：1.29万元",
            "symbolSize": 30.0,
            "name": "陕西陕煤榆北煤业有限公司（本部）_收入",
            "category": 1.0,
            itemStyle: {
                color: '#F4686D'
            },
        }
    ];
var link =  [
        {
            "msg": "支出：13050.0万元",
            "source": 1,
            "value": 4.0,
            "target": 2
        },
        {
            "msg": "收入：13050.0万元",
            "source": 1,
            "value": 4.0,
            "target": 3
        },
        {
            "msg": "上缴：37000.0万元<br>拨款：338329.04万元",
            "source": 1,
            "value": 2.0,
            "target": 0
        },
        {
            "msg": "上缴：13050.0万元<br>拨款：13050.0万元",
            "source": 1,
            "value": 3.0,
            "target": 4
        },
        {
            "msg": "支出：1.29万元",
            "source": 4,
            "value": 4.0,
            "target": 5
        },
        {
            "msg": "收入：1.29万元",
            "source": 4,
            "value": 4.0,
            "target": 6
        },
        {
            "msg": "上缴：1.29万元<br>拨款：6098.0万元",
            "source": 4,
            "value": 3.0,
            "target": 0
        }
    ]
option = {
    tooltip: {
        trigger: 'item',
        formatter: function (params) {//连接线上提示文字格式化
            if (params.data.source) {//注意判断，else是将节点的文字也初始化成想要的格式
               return params.data.msg;
            }
            else {
                return params.name;
            }
        }
    },
    legend : { //=========圖表控件
        show : false,
        data : [{
            name : '一级',
        },
        {
            name : '二级',
        },
        {
            name : '三级',
        },
        {
            name : '四级',
        }]
    },
    backgroundColor:'#EEF2F9',
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
           
            name: 'Les Miserables',
            type: 'graph',
            layout: 'force',
            force : { //力引导图基本配置
                repulsion : 600,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                gravity : 0.03,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                edgeLength :[100,300],//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                layoutAnimation : true
            },
          	data:data,
            categories : [ //symbol name：用于和 legend 对应以及格式化 tooltip 的内容。 label有效
            {
                name : '一级',
            },
            {
                name : '二级',
            },
            {
                name : '三级',
            },
            {
                name : '四级',
            }],
            links: link,
            roam: true,
            focusNodeAdjacency: true,
            itemStyle: {
                shadowBlur: 5,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
            },
            label: {
                position: 'left',
                formatter: function(e){
//                     	console.log(e);
                	if(e.name.indexOf("_") != -1){
                		return e.name.substring(e.name.indexOf("_")+1);
                	}else{
                    	return e.name;
                	}
                }
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3
            },
            emphasis: {
                lineStyle: {
                    width: 10
                }
            }
        }
    ]
};