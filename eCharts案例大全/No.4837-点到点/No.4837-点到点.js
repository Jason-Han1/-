let nodes = [{"id":"Guangzhou Institutes of Biomedicine and Health"},{"id":"Beijing Institute of Genomics"},{"id":"University of Science and Technology of China"},{"id":"Institute of Zoology"},{"id":"Shanghai Institute of Biochemistry and Cell Biology"},{"id":"Shanghai Institute for Biological Sciences Chinese Academy of Sciences"},{"id":"Suzhou Institute of Biomedical Engineering and Technology"}]
let linksSetTmp = [
    {"name":"Guangzhou Institutes of Biomedicine and Health-Guangzhou Institutes of Biomedicine and Health","num":277},
    {"name":"Beijing Institute of Genomics-Beijing Institute of Genomics","num":81},
    {"name":"University of Science and Technology of China-University of Science and Technology of China","num":260},
    {"name":"University of Science and Technology of China-Guangzhou Institutes of Biomedicine and Health","num":1},
    {"name":"Institute of Zoology-Institute of Zoology","num":1},
    {"name":"Shanghai Institute of Biochemistry and Cell Biology-Shanghai Institute of Biochemistry and Cell Biology","num":2},
    {"name":"Shanghai Institute for Biological Sciences Chinese Academy of Sciences-Shanghai Institute for Biological Sciences Chinese Academy of Sciences","num":1},
    {"name":"Institute of Zoology-Beijing Institute of Genomics","num":1},
    {"name":"University of Science and Technology of China-Institute of Zoology","num":2},
    {"name":"Guangzhou Institutes of Biomedicine and Health-Institute of Zoology","num":1},
    {"name":"Suzhou Institute of Biomedical Engineering and Technology-Suzhou Institute of Biomedical Engineering and Technology","num":2},
    {"name":"Guangzhou Institutes of Biomedicine and Health-Beijing Institute of Genomics","num":1},
    {"name":"University of Science and Technology of China-Beijing Institute of Genomics","num":1},
    {"name":"University of Science and Technology of China-Shanghai Institute for Biological Sciences Chinese Academy of Sciences","num":2},
    {"name":"Guangzhou Institutes of Biomedicine and Health-Shanghai Institute of Biochemistry and Cell Biology","num":1},
    {"name":"Institute of Zoology-Shanghai Institute of Biochemistry and Cell Biology","num":1},
    {"name":"Guangzhou Institutes of Biomedicine and Health-Suzhou Institute of Biomedical Engineering and Technology","num":1}]

nodes.map((item)=>{
    item.symbolSize = 40
    item.category = item.id
    item.name = item.id
})
let nodesTmp = JSON.parse(JSON.stringify(nodes))
let linkList = []
let arry = null
let nodeItem = {}
linksSetTmp.map((item)=> {
    arry = item.name.split("-")
    linkList.push({
        source: arry[0],
        target: arry[1]
    })
    nodeItem = {id: arry[0], category: arry[0], symbolSize: 40, name: arry[0]}
    for (let i = 1; i < item.num; i++) {
        arry = item.name.split("-")
        nodeItem = {id: arry[1] + i, category: arry[0], symbolSize: 10, name: ''}
        linkList.push({
            source: arry[0],
            target: arry[1] + i,
        })
    }
})
myChart.showLoading();
    myChart.hideLoading();
    option = {
        legend: [{
            data: nodes.map(function (a) {
                return a.id;
            })
        }],
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: nodes,
                links: linkList,
                categories: nodesTmp,
                label: {
                    show: true
                },
                roam: true,
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        ]
    };

    myChart.setOption(option);