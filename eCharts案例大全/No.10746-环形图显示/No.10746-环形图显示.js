var color = ['#F03232', '#F68C2F', '#35509A', '#0194AC', '#B63480', '#02BFEE', '#FFBF00', '#FF7A4D', '#69687E', '#3C9C55']
var data = [{
        value: 335,
        name: '扫描器1'
    },
    {
        value: 310,
        name: '扫描器2'
    },
    {
        value: 274,
        name: '扫描器3'
    },
    {
        value: 235,
        name: '扫描器4'
    },
    {
        value: 400,
        name: '扫描器5'
    }
]

function fmtData(arr) {
    arr.sort(function(a, b) {
        return a.value - b.value;
    })
    return arr.map(function(item, i) {
        item.label = {}
        item.label.textStyle = {}
        item.label.textStyle.color = color[i % color.length]
        item.labelLine = {}
        item.labelLine.lineStyle = {}
        item.labelLine.lineStyle.color = color[i % color.length]
        return item
    })
}

option = {
    color: color,
    title: {
        text: '共计受到 1000 种扫描器攻击 \n 123123 攻击次数',
        left: 'center',
        top: 'center',
        textStyle: {
            color: color[0]
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : <br/> 攻击 {c} 次 <br/> 占比 {d}%"
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['52%', '60%'],
        center: ['50%', '50%'],
        data: fmtData(data),
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
            return Math.random() * 200;
        }
    }]
};