const datatheme = '商品链接分类';
const data =  [
                {value: 335, name: '新发现'},
                {value: 310, name: '已添加'},
                {value: 234, name: '已忽略'},
            ];
myChart.resize({width:350,height:236})

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
        {
            name: datatheme,
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '55%'],
            data:data,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label:{
                formatter:`{b} {c} \n\n {d}%`
            }
        }
    ]
};

