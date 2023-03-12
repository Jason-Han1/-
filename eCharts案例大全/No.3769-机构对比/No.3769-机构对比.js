
let data = [
    {
        name: '复旦大学',
        data: [
            {
                type: '专利',
                count: 8
            },{
                type: '人才数量',
                count: 12
            },{
                type: '活跃度',
                count: 12
            },{
                type: '项目',
                count: 10
            },{
                type: '论文',
                count: 12
            },
        ]
    },{
        name: '清华大学',
        data: [
            {
                type: '专利',
                count: 9
            },{
                type: '人才数量',
                count: 12
            },{
                type: '活跃度',
                count: 11
            },{
                type: '项目',
                count: 9
            },{
                type: '论文',
                count: 12
            },
        ]
    }
]
let max = 0;
let indicatorData = [];
data.forEach( (item,ind) => {
    item.value = item.data.map( v => v.count );
    item.data.map( v => {
        max = Math.max(v.count);
    })
    if(ind === 0){
        item.data.map( (v,i) => {
            indicatorData.push({
                name: v.type,
                max,
                axisLabel: {
                    show: i === 0 
                }
            })
        })
    }
})

option = {
    backgroundColor: '#fff',
    color: ['#73AFF9', '#F4CD49'],
    title: {
        show: false,
        text: '机构对比',
        left: 'center',
        top: 20,
        textStyle: {
            fontWeight: 500
        }
    },
    tooltip: {
        show: true,
        trigger: "item",
    },
    legend: {
        show: true,
        itemGap: 100,
        bottom: 80,
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
        data: data.map( item => item.name ),
    },
    radar: {
        name: {
            textStyle: {
                fontSize: 14,
                color: '#666'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#949494'   
            }
        },
        splitNumber: 3,
        splitLine: {
            lineStyle: {
                color: '#ccc',
            }
            
        },
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        indicator: indicatorData
    },
    series: [{
        type: 'radar',
        symbol: 'circle',
        symbolSize: 6,
        // areaStyle: {
        //     normal: {
        //         show: false,
        //         opacity: .3
        //     }
        // },
        itemStyle: {
            // color:'rgba(245, 166, 35, 1)',
            borderWidth: 5,
        },
        lineStyle: {
            normal: {
                // color: "#4B95F3",
                width: 2
            }
        },
        data: data
    }]
};