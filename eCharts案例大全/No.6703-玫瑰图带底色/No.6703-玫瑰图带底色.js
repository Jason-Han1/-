 // mock
let mockData = [ { name: '农、林、牧、鱼业', value: 1200.58 }, { name: '制造业', value: 1100.58 }, { name: '电力、热力、燃气及水生产和供应业', value: 1200.58 }, { name: '建筑业', value: 1100.58 }, { name: '批发和零售业', value: 1200.58 }, { name: '住宿和餐饮业', value: 1100.58 }, { name: '金融业', value: 1200.58 }]

let color = ['#e8ae75','#efea9a', '#65c9be', '#2ea4dc', '#0f6ef2', '#b48fff', '#ff8f92' ]

let legendData = [], seriesData = []

mockData.map((v,i) => {
    legendData.push(v.name)
    seriesData.push({ value: v.value, name: v.name, itemStyle: { color: color[i] } })
})

for (let i = 0; i < 7; i++) {
    seriesData.push({ value: 0, name: "", label: { show: false }, labelLine: { show: false }, itemStyle: { color: 'rgba(0,0,0,0)'} })
}         

option = {
    backgroundColor: "rgba(0,0,0,.5)",
    legend: {
        icon: 'circle',
        data: legendData,
        textStyle: { color: '#fff', fontSize: 18 },
        right: '20%',
        top: 'center',
        orient: 'vertical'
    },
    // 遗留一个问题，hover时底图会遮住，暂时没有解决
   series: [{
        // 禁止放大
        hoverAnimation: false,
        radius: [0, '85%'],
        center: ['5%', '50%'],
        type: 'pie',
        label: {  normal: { show: false }, emphasis: { show: false } },
        labelLine: { normal: { show: false }, emphasis: { show: false }},
        animation: false,
        tooltip: { show: false },
        // 阴影颜色
        itemStyle: { color:'rgba(39,85,255,.21)'},
        data: [{ value: 1 }, { value: 1,itemStyle: { color: 'rgba(0,0,0,0)'} }],
    },{
        name: "",
        type: "pie",
        radius: [ 0, '80%'],
        avoidLabelOverlap: false,
        startAngle: 90,
        center: [ "5%", "50%" ],
        roseType: "area",
        selectedMode: "single",
        label: {
            show:false,
        },
        data: seriesData
    }]
};