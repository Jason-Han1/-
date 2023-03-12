option = {
    title: {
        text: '1300w+玩家',
        subtext: 'PUBG玩家击杀人数（金字塔图）'
        //PUBG 1300+玩家击杀人数：数据可视化
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['30+','20-30','10-20','5-10','1-5','0']
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min:0,
            max: 8043195,
            minSize: '0%',
            maxSize: '100%',
            sort: 'none',
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
                {value: 482, name: '30+'},
                {value: 2151, name: '20-30'},
                {value: 44495, name: '10-20'},
                {value: 410169, name: '5-10'},
                {value: 5348795, name: '1-5'},
                {value: 8043195, name: '0'}        
            ]
        },
         {
            name: '占比',
            type: 'pie',
            radius : '20%',
            center: ['20%', '30%'],
            //#总：261277
            data:[
                {value: 482, name: '30+: 0.003%'},
                {value: 2151, name: '20-30: 0.016%'},
                {value: 44495, name: '10-20: 0.321%'},
                {value: 410169, name: '5-10: 2.962%'},
                {value: 5348795, name: '1-5: 38.62%'},
                {value: 8043195, name: '0: 58.07%'}  
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
    ]
};