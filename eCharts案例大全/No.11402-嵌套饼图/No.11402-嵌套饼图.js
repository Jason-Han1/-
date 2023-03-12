option = {
    title: {
        text: '三资风险分布',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '3%',
        left: 'center',
    },
    backgroundColor: 'balck',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {

        left: 'center',
        top: '12%',
        data: ['大户', '天桥', '槐荫', '官庄', '历下', '历城', '市中', '高新'],
        textStyle: {
            color: [],
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 10,
        }

    },
    
    series: [
        {

            type: 'pie',
            selectedMode: 'single',
            
            radius: [0, '30%'],
            center: ['50%', '67.5%'],
            label: {
                normal: {
                  //  position: 'inner'
                }
            },
            itemStyle:{
                color:"red"
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            z:10,
            data: [{
                    "name": "资产闲置",
                    "value": 21
                }
            ]
        },
        {

            type: 'pie',
            selectedMode: 'single',
            radius: [0, '10%'],
            center: ['50%', '77.8%'],
            label: {
                normal: {
                  //  position: 'inner'
                }
            },
            itemStyle:{
                color:"yellow"
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            z:20,
            data: [{
                    "name": "资产闲置",
                    "value": 21
                }
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['0', '55%'],
            z:1,
            center: ['50%', '55%'],
            data: [{
                    "name": "资产闲置",
                    "value": 21
                }
                
            ],
            textStyle: {
                color: '#fff',
            }
        }
    ]
};