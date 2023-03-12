let linksSetTmp = [{"name":"广州生物医药与健康研究院-广州生物医药与健康研究院","num":27},
    {"name":"北京基因组研究所-北京基因组研究所","num":8},
    {"name":"中国科学技术大学-中国科学技术大学","num":20},
    {"name":"中国科学技术大学-广州生物医药与健康研究院","num":4},
    {"name":"动物研究所-动物研究所","num":48},
    {"name":"生物化学与细胞生物学研究所-生物化学与细胞生物学研究所","num":5},
    {"name":"上海营养与健康研究院-上海营养与健康研究院","num":1},
    {"name":"动物研究所-北京基因组研究所","num":2},
    {"name":"中国科学技术大学-动物研究所","num":5},
    {"name":"广州生物医药与健康研究院-动物研究所","num":5},
    {"name":"苏州生物医学工程技术研究所-苏州生物医学工程技术研究所","num":3},
    {"name":"广州生物医药与健康研究院-北京基因组研究所","num":6},
    {"name":"中国科学技术大学-北京基因组研究所","num":4},
    {"name":"中国科学技术大学-上海营养与健康研究院","num":1},
    {"name":"广州生物医药与健康研究院-生物化学与细胞生物学研究所","num":7},
    {"name":"动物研究所-生物化学与细胞生物学研究所","num":1},
    {"name":"广州生物医药与健康研究院-苏州生物医学工程技术研究所","num":1}]

function getIdxByName(arry, name) {
    for (let i = 0; i< arry.length; i++) {
        if (arry[i].id == name) {
            return i
        }
    }
    return -1
}

let nodes = [{"id":"广州生物医药与健康研究院"},{"id":"北京基因组研究所"},{"id":"中国科学技术大学"},{"id":"动物研究所"},{"id":"生物化学与细胞生物学研究所"},{"id":"上海营养与健康研究院"},{"id":"苏州生物医学工程技术研究所"}]
nodes.map((item)=>{
    item.symbolSize = 40
    item.category = item.id
    item.name = item.id
})
let nodesTmp = JSON.parse(JSON.stringify(nodes))
let linkList = []
let arry = null
let nodeItem = {}
let nodeList = JSON.parse(JSON.stringify(nodes))
linksSetTmp.map((item)=> {
    arry = item.name.split("-")
    linkList.push({
        source: arry[0],
        target: arry[1]
    })
    if (item.num > 1) {
        //如果自己到自己且不只一条
        for (let i = 1; i < item.num; i++) {
            addNodes(nodeList, {id: arry[1] + i, category: arry[1], symbolSize: 10, name: ''})
            linkList.push({
                source: arry[0],
                target: arry[1] + i,
            })
         }
        if (arry[0] == arry[1]) {
             for (let i = 1; i < item.num; i++) {
                addNodes(nodeList, {id: arry[1] + i, category: arry[1], symbolSize: 10, name: ''})
                linkList.push({
                    source: arry[0],
                    target: arry[1] + i,
                })
             }
        } else {
            for (let i = 1; i < item.num; i++) {
              addNodes(nodeList, {id: arry[1] + i, category: arry[1], symbolSize: 10, name: ''})
                linkList.push({
                    source: arry[0],
                    target: arry[1] + i,
                })
             }
        }
    }
})

function addNodes(arry, cell) {
    if (arry.some(function(res){
       return res.id == cell.id
    })) {
        return
    }
    arry.push(cell)
}
// console.log(nodeList)
myChart.showLoading();
    myChart.hideLoading();
    option = {
        legend: [{
            data: nodes.map(function (a) {
                return a.id;
            })
        }],
        series : [
            {
                type: 'graph',
                layout: 'force',
                data: nodeList,
                links: linkList,
                categories: nodesTmp,
                roam: true,
                label: {
                    position: 'right'
                },
                force: {
                    repulsion: 100
                }
            }
        ]
    };

    myChart.setOption(option);