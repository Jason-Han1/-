var myData=[]
var myLinks=[]

// 初始化数据
var data=
{
	"wl_lx_ydhl_s002": ["wl_lx_ydhl_s001"],
	"wl_lx_ydhl_s003": ["wl_lx_ydhl_s002"],
	"wl_lx_ydhl_s001": [],
	"wl_lx_ydhl_s010": ["wl_lx_ydhl_s009"],
	"wl_lx_ydhl_s008": [],
	"wl_lx_ydhl_s009": ["wl_lx_ydhl_s008"],
	"wl_lx_ydhl_s006": ["wl_lx_ydhl_s005"],
	"wl_lx_ydhl_s007": ["wl_lx_ydhl_s005"],
	"wl_lx_ydhl_s004": ["wl_lx_ydhl_s003"],
	"wl_lx_ydhl_s005": ["wl_lx_ydhl_s002"]
}
// 当前节点
var curCode = "wl_lx_ydhl_s002"

let i =0
for(let key in data){
    var obj = {
        category:1,
        draggable:true,
        id:key,
        name:key,
        value:''
    }
    if(data[key].length>0){
        for(let index in data[key]){
            var link={
                source:key,
                target:data[key][index],
                value:''
            }
            myLinks.push(link)
        }
    }
    if(key == curCode){
        obj.category = 0
    }
    myData.push(obj)
}


// 编写echart参数
option = {
    title: {
        text: '逻辑关系'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            }
        }
    },
    legend: {
        x: 'center',
        data: ['当前知识点', '可推荐知识点', ],
        tooltip: {
            show: true
        }
    },
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 45,
        legendHoverLink: true,
        focusNodeAdjacency: true,
        roam: true,
        categories: [{
            name: '当前知识点',
            itemStyle: {
                normal: {
                    color: '#ff1931'
                }
            }
        }, {
            name: '可推荐知识点',
            itemStyle: {
                normal: {
                    color: '#d6c7d9'
                }
            }
        }],
        label: {
            normal: {
                color: '#050101',
                show: true,
                textStyle: {
                    fontSize: 12
                }
            }
        },
        force: {
            repulsion: 1000
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 10
                },
                formatter: '{c}'
            }
        },
        data: myData,
        links: myLinks,
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0
            }
        }
    }]
}