var dataset = {
	dimensions: ["访问来源", "访问人数"],
	source: [
		{ 访问来源: '直接访问', 访问人数: 335 },
        { 访问来源: '邮件营销', 访问人数: 310 },
        { 访问来源: '联盟广告', 访问人数: 234 },
        { 访问来源: '视频广告', 访问人数: 135 },
        { 访问来源: '搜索引擎', 访问人数: 1548 }
	]
}
var series = [
    { type: 'doughnut' }  
]

var solve_series = []
for(let i = 0; i < series.length; i++){
    if(series[i].type === 'doughnut'){
        solve_series.push({
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            }
        })
    }
}


option = {
    tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b}: {c} ({d}%)'
        formatter: function(params){
            return params.seriesName
            + `<br />${params.marker}` 
            + params.name + ': '
            + params.value[params.dimensionNames[params.encode.value[0]]] 
            + ' ( ' + params.percent+'% )'
        }
    },
    legend: { // 图例组件
        orient: 'vertical',
        left: 10
    },
    dataset: dataset, // dataset传值
    series: solve_series // 处理过的series值
};
