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
        data: ['0','1','2','3','4','5','6','7','8','9','10']
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
            sort: 'ascending',
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
                {value: 14602, name: '10'},
                {value: 22902, name: '9'},
                {value: 36581, name: '8'},
                {value: 60653, name: '7'},
                {value: 104366, name: '6'},
                {value: 185667, name: '5'},
                {value: 355166, name: '4'},
                {value: 683446, name: '3'},
                {value: 1428630, name: '2'},
                {value: 2881553, name: '1'},
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
                {value: 14602, name: '10: 0.11%'},
                {value: 22902, name: '9: 0.17%'},
                {value: 36581, name: '8: 0.26%'},
                {value: 60653, name: '7: 0.44%'},
                {value: 104366, name: '6: 0.76%'},
                {value: 185667, name: '5: 1.34%'},
                {value: 355166, name: '4: 2.57%'},
                {value: 683446, name: '3: 4.95%'},
                {value: 1428630, name: '2: 10.34%'},
                {value: 2881553, name: '1: 20.86%'},
                {value: 8043195, name: '0: 58.21%'}  
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