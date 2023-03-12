let colorNumber = ['#FF6767', '#FF9D6B', '#55CA69', '#16D8B8', '#67CCFF']
let pieData = [
    {value:1335, name:'搜索引擎'},
    {value:1110, name:'邮件营销'},
    {value:934, name:'联盟广告'},
    {value:655, name:'视频广告'},
    {value:342, name:'直接访问'}
]
let rich = {
    txtStyle: {
        fontSize: 12,
        padding: [0, 3],
        align: 'center'
    }
}
let legendName = [];
pieData.forEach((v, i) => {
    legendName.push(v.name)
    let value = 'num' + i
    rich[value] = {
        width: 15,
        height: 10,
        backgroundColor: colorNumber[i],
        color: '#fff',
        align: 'center',
        fontSize: 12,
        padding: [3, 2]
    }
})

option = {
    backgroundColor: '#0E2A43',
    color: colorNumber,
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        itemWidth: 5,
        itemHeight: 0,
        itemGap: 10,
        data: legendName,
        formatter: name => {
            let data = legendName;
            let idx = data.indexOf(name);
            let number = idx + 1;
            return '{num' + idx + '|' + number + '}{txtStyle|}' + name
        },
        textStyle: {
            color: '#fff',
            fontSize: 12,
            rich: rich
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: pieData
        }
    ]
};
