//多联动饼状图
option = {
    backgroundColor:'#FFF',
        legend: {
            left: 'center',
            data: ['套餐内用户数', '套餐外用户数'],
            top: '120',
            textStyle: {
                color: ['#777']
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        title: [{
            // left: 'center',
            left: '49.5%',
            top: '46.5%',
            textAlign: 'center',
            text: 'IC卡套餐',
            textStyle: {
                fontSize: 13,
            },
            subtext: '2,485,037',
            subtextStyle: {
                fontSize: 13,
                color: ['#59adf3']
            },
        }, {
            left: '82.5%',
            top: '46.5%',
            textAlign: 'center',
            text: 'GPS卡套餐',
            textStyle: {
                fontSize: 13,
            },
            subtext: '2,485,037',
            subtextStyle: {
                fontSize: 13,
                color: ['#59adf3']
            },
        }],
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['15%', '25%'],
                center: ['50%', '50%'],
                data: [{
                        value: 700,
                        name: '套餐外用户数',
                        color:'#000'
                    },
                  
                    {
                        value: 1300,
                        name: '套餐内用户数'
                    }
                ],
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: ['15%', '25%'],
                center: ['83%', '50%'],
                data: [{
                        value: 500,
                        name: '套餐外用户数'
                    },
               
                    {
                        value: 1500,
                        name: '套餐内用户数'
                    }
                ],
            }
        ],
        color: [
            '#CCC',
            '#59adf3',
            '#8fe667',
            '#8fe667'
        ]
    };
    