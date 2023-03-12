option = {
    title: {
        // 标题居中显示
        left: 'center',
        // 标题名称
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: function(params) {
            var htmlHeader = '<div>时间：2020-12-12 01:00:00</div>'
                + '<div>单位：(MW)</div>';
            var htmlList = ''
            for (var i = 0; i < params.length; i++) {
                const item = params[i]
                htmlList = (
                    htmlList 
                    + '<div>'
                    + item.marker
                    + '<span>'+ item.name 
                    +':'+item.value[1]
                    +'</span>（'+ item.value[2] +'MW）'
                    +'</div>'
                )
            }
            return (htmlHeader + htmlList)
        }
    },
    grid: {
        bottom: 80
    },
    legend: {
        data: [],
        left: 70,
        bottom: 0
    },
    xAxis: {
        type: 'time',
        // x 轴单位标注
        name: '时间',
        axisTick: {
            // x 轴线上的刻度点在轴线内显示
            inside: true
        },
        axisLine: {
            // x 轴线两端的形状
            symbol: ['none', 'arrow']
        }
    },
    yAxis: {
        type: 'value',
        name: '单位: 元',
        axisTick: {
            // y 轴线上的刻度点在轴线内显示
            inside: true
        },
        // max: 120,
        max: 2000,
        axisLine: {
            // y 轴线两端的形状
            symbol: ['none', 'arrow']
        }
    },
    series: [{
        type: 'line',
        name: '江苏',
        // 标准线
        markLine: {
            show: true,
            // 标准线两端的形状
            symbol: ['none', 'none'],
            label: {
                // 标准线上数字显示的位置
                position: 'middle',
            },
            data: [
                // 标准线大小位置
                { name: '额定', yAxis: 30 }    
            ]
        },
        data:[]
    }]
};
const city = [
    { name: '江苏' },
    { name: '南京' },
    { name: '无锡' },
    // { name: '泰州' },
    // { name: '扬州' },
    // { name: '苏州' },
    // { name: '徐州' },
    // { name: '连云港' },
    // { name: '盐城' },
    // { name: '淮安' },
    // { name: '宿迁' },
    // { name: '镇江' },
    // { name: '南通' },
    // { name: '常州' },
]
function setSeriesItemData (name) {
    const data = []
    const legend = []
    for (let i = 0; i < city.length; i++) {
        const name = city[i].name
        legend.push(name)
        data.push({
            type: 'line',
            name,
            // 折线每个点上的形状
            symbol: 'none',
            smooth: true,
            markLine: {
                show: true,
                data: [
                    { name: '标准线', yAxis: 1300 }    
                ]
            },
            data: getLineData(name)
        })
    }
    option.legend.data = legend
    option.series = data
}
function getLineData (name) {
    const data = []
    const date = '2020/01/01 00:00:00'
    let datetime = 1577808000000 - 86400000
    for (let i =0; i < 120; i++) {
        datetime = datetime + 86400000
        data.push({
            name,
            value: [
                moment(new Date(datetime)).format('YYYY-MM-DD hh:mm:ss'),
                (Math.random() * 1000).toFixed(2),
                (Math.random() * 1000).toFixed(2)
            ]
        })
    }
    return data
}
setSeriesItemData()
myChart.setOption(option);