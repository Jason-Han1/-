option = {
       backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8","#FFDB5C",],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },

    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
        
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value:100, name: '展现'},
                {value:80, name: '点击'},
                {value:60, name: '访问'},
                {value:21, name: '咨询'},
                {value:10, name: '订单'},
                
            ]
        }
    ]
};
