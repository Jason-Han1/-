
options = 
   [
        {
            backgroundColor: '#ffffff',
    title : {
        text: '各抽检环节异议情况分析',
        subtext: '2017年'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        
        orient: 'vertical',
        x: 'right',
       itemWidth: 14,
        itemHeight: 14,
        align: 'left',
    
    },
    series: [
        {
            name:'各主体业态检查批次比例',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['31%', '35%'],
            color: ['#915872', '#3077b7', '#9a8169'
],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
               
            },
            tooltip: {
               show:false,
               
               
            },
            data:[ {value:20392, name:''},
                {value:13922, name:''},
                {value:40392, name:''}]
        },
        {
            name:'量化分级评定信息统计',
            type:'pie',
            radius: ['35%', '65%'],
            color: ['#d74e67', '#0092ff', '#eba954'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[ {value:20392, name:'生产环节'},
                {value:13922, name:'餐饮环节'},
                {value:40392, name:'销售环节'}]
        }
    ]
}
]
    ;