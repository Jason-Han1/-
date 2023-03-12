//本质是坐标轴的关系图

var data =  [
        {
            "symbolSize": 40,
            "name": "陕西煤业化工集团有限责任公司",
            "category": 0,
            value:[100,100]
        },
        {
            "symbolSize": 20.0,
            "name": "陕西陕煤曹家滩矿业有限公司",
            "category": 2.0,
            value:[200,200]
        },
        {
            "symbolSize": 30.0,
            "name": "陕西陕煤榆北煤业有限公司（本部）",
            "category": 1.0,
            value:[300,300]
        }
    ];
var link =  [
        {
            "msg": "支出：13050.0万元",
            "source": 0,
            "value": 4.0,
            "target": 2
        },
        {
            "msg": "收入：13050.0万元",
            "source": 0,
            "value": 4.0,
            "target": 1
        },
        {
            "msg": "上缴：37000.0万元<br>拨款：338329.04万元",
            "source": 2,
            "value": 2.0,
            "target": 1
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
        show : true,
        data : [{
            name : '一级单位',
        },
        {
            name : '二级单位',
        },
        {
            name : '三级单位',
        },
        {
            name : '四级单位',
        }]
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
          	data:data,
            categories : [ //symbol name：用于和 legend 对应以及格式化 tooltip 的内容。 label有效
            {
                name : '一级单位',
            },
            {
                name : '二级单位',
            },
            {
                name : '三级单位',
            },
            {
                name : '四级单位',
            }],
            links: link,
            roam: true,
            focusNodeAdjacency: true,
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
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
        }, {
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        z: 1,
        effect: {
            show: true,
            smooth: false,
            trailLength: 0,
            symbol: "arrow",
            color: '#ff000096',
            symbolSize: 12
        },
        lineStyle: {
           
            normal: {
                color: 'rgba(55,155,255,0)',
                curveness: 0.3
            }
        },
        data: [[{
            coord: [100,100]
        }, {
            coord: [200, 200]
        }],[{
            coord: [100,100]
        }, {
            coord: [300, 300]
        }],[{
            coord: [300,300]
        }, {
            coord: [200, 200]
        }]]
    }
    ]
};