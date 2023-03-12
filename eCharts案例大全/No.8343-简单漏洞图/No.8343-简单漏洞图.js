
option = {
    backgroundColor:'#034380',
    calculable: true,
    color:['#00a1e4','#24c768','#e5ce10','#ff7e00','#ff0000'],
    series: [
        {
            name:'服务评价分析',
            type:'funnel',
            left: '5%',
            right:'35%',
            top: '10%',
            bottom: '10%',
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            label: {
                show: true,
                formatter: "{b|{b}}",
                rich: {
                    b: {
                        color: 'rgba(222,240,255,1)',
                        fontSize: 16
                    }
                }
            },
            labelLine: {
                length: 30,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            data: [
                {value: 1, name: '五星'},
                {value: 2, name: '四星'},
                {value: 3, name: '三星'},
                {value: 4, name: '二星'},
                {value: 5, name: '一星'} 
            ]
        }
    ]
};
