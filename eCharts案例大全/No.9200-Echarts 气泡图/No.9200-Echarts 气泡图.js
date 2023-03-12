var chartdata = [
    { name: '污水', sum: 208,size:50 },
    { name: '碳排放',sum: 80,size:60 },
    { name: '钢铁1', sum: 108,size:70 },
    { name: '碳排放1',sum: 80,size:80 },
    { name: '钢铁2', sum: 108,size:90 }
    ];
var color = ['#6DFFA1', '#56C7F6', '#F9F08A','#6DFFA1', '#56C7F6', '#F9F08A'];
var data=[]

chartdata.map((item,index)=>{
    data.push(
          {
        name:item.name+'\n\n'+item.sum,
        value: 111,
        symbolSize: item.size,
        draggable: true,
        label: {
            normal: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                        offset: 0.2,
                        color: 'rgba(27, 54, 72, 0.2)',
                    },
                    {
                        offset: 0.8,
                        color: color[index],
                    },
                ]),
                opacity: 1,
                borderWidth: 1,
                borderColor: color[index],
                shadowBlur: 7,
                symbolOffset: 0.6,
                shadowColor:color[index],
            },
        },
    },
        )
})

option = {
    backgroundColor: '#16222E',
    animationDurationUpdate: function (idx) {
        return idx * 100;
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params, ticket, callback) {
            return params.data.tips || params.name;
        },
    },
    animationEasingUpdate: 'bounceIn',
    itemStyle: {
        // color: 'red',
    },
    cursor: 'pointer',
    series: [
        {
            type: 'graph',
            layout: 'force',
            cursor: 'pointer',
            force: {
                repulsion: 200,
                edgeLength: 100,
            },
            roam: true,
            label: {
                normal: {
                    show: true,
                },
            },

            data,
        },
    ],
};
