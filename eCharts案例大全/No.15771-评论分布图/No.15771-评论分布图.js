colors = ['#1790CF', '#1BB2D8', '#99D2DD', '#88B0BB', '#1C7099','#038CC4'];
data = [23692,18084,14964,13246,5226,5153,5119,4947,2947,2255,22170]
categories = [
'好奇','妈咪宝贝','帮宝适（Pampers）','花王','雀氏（Chiaus）','爹地宝贝',
'安儿乐（Anerle）','大王（GOO.N）','菲比（Fitti）','倍康（Baken）','其它'
]
backgroundColor = 'rgb(255,255,255)';

option = {
    color: colors,
    backgroundColor: backgroundColor,
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        //orient: 'vertical',
        //right: '0',
        //top: '35%',
        bottom: '20',
        data: categories,
        icon: 'square'
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '50%',
            // center: ['50%', '60%'],
            data:[
                {value:data[0], name:categories[0]},
                {value:data[1], name:categories[1]},
                {value:data[2], name:categories[2]},
                {value:data[3], name:categories[3]},
                {value:data[4], name:categories[4]},
                {value:data[5], name:categories[5]},
                {value:data[6], name:categories[6]},
                {value:data[7], name:categories[7]},
                {value:data[8], name:categories[8]},
                {value:data[9], name:categories[9]},
                {value:data[10], name:categories[10]},
                {value:data[11], name:categories[11]},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
