var colorList = ['#51C3A2','#409FC4','#5071DC','#3A478E'];
option = {
    backgroundColor:'#034380',
    calculable: true,
    color:colorList,
    series: [
        {
            name:'漏斗图',
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
                formatter: "{a|{c}}\n{b|{b}}",
                rich: {
                    a: {
                        color: 'rgba(222,240,255,1)',
                        fontSize: 30
                    },
                    b: {
                       color: 'rgba(101,166,196,1)',
                       fontSize: 14
                    }
                }
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            data: [
                {value: 1, name: '处置数'},
                {value: 2, name: '新建数'},
                {value: 3, name: '修改数'},
                {value: 4, name: '已完成'} 
            ]
        }
    ]
};
