option = {
    animation:false,
    backgroundColor:'white',

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        textStyle:{fontSize:20},
        data:['训练集','验证集']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '7%',
        top:'7%',
        containLabel: true
        
    },
    xAxis: {
        axisLabel:{ 
            textStyle:{
                fontSize:15,
            }
        },
        type: 'category',
        boundaryGap: false,
        name:"learning rate",
        nameTextStyle:{fontSize:20},
        nameGap:26,
        nameLocation:'middle',
        data: ['0','1','2','3','4',
               '5','6','7','8','9','10',
               '11','12','13','14','15','16']
    },
    yAxis: {
        axisLabel:{ 
            textStyle:{
                fontSize:15,
            }
        },
        type: 'value',
        name:"损失值",
        nameTextStyle:{fontSize:20},
        interval:0.05,
        min:0
    },
    series: [
        {
            name:'训练集',
            type:'line',
            smooth:true,
            symbol:'star',
            symbolSize:8,
            markPoint: {
                        symbolSize: 80,
                        data: [
                            {type: 'min', name: '最小值'},
                        ],
                        itemStyle: {
        	                    normal: {
        	                        label: {
        	                            show: true,
        	                            fontSize:15
        	                        }
        	                    },
                        }
                    },
            data:[0.4740,0.2493,0.1145,0.0591,0.0312,
                  0.0160,0.0170,0.0178,0.0185,0.0176,0.0185,
                  0.0192,0.0220,0.0234,0.0210,0.0195,0.0183
                  ]
        },
        {
            name:'验证集',
            type:'line',
            smooth:true,
            symbol:'circle',
            symbolSize:8,
            markPoint: {
                        symbolSize: 80,
                        data: [
                            {type: 'min', name: '最小值'},
                        ],
                        itemStyle: {
        	                    normal: {
        	                        label: {
        	                            show: true,
        	                            fontSize:15
        	                        }
        	                    },
                        }
                    },
            data:[0.0983,0.0845,0.0613,0.0486,0.0429,0.0392,
                  0.0370,0.0396,0.0395,0.0412,0.0383,0.0423,
                  0.0391,0.0395,0.0412,0.0387,0.0385
                  ]
        },
    ]
};
