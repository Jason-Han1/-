var legendList = ['单项选择', '听短对话', '听长对话', '作文', '英译中'];
var serList = [{
        value: 335,
        name: '单项选择'
    },
    {
        value: 335,
        name: '听短对话'
    },
    {
        value: 335,
        name: '听长对话'
    },
    {
        value: 335,
        name: '作文'
    },
    {
        value: 335,
        name: '英译中'
    }
]
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['#ffbd76', '#58b1f5', '#9cd3e8', '#57c28c','#ff847a'],
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'middle',
        data: legendList,
    },
    series: [{
        name: '题型分布图',
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: serList,
        label: {
            normal: {
                show: false
            }
        },
    }]
};