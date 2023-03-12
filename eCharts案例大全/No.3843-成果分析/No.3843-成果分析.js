option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid'
            }
        }
    },

    legend: {
        itemWidth: 15,
        itemHeight: 15,
        itemGap: 30,
        // borderRadius: '50%',
        data: ['DQ', 'TY', 'SS', 'QG', 'SY']
    },

    singleAxis: {
        top: '20%',
        bottom: '20%',
        axisTick: {},
        axisLabel: {
            show: true,
            inside: false,
            // rotate: -30,
            margin: 10,
            overflow: 'breakAll',
            formatter: '{yyyy}-{MM}-{dd}'
        },
        type: 'time',
        axisPointer: {
            animation: true,
            // label: {
            //     show: true
            // }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                opacity: 1
            }
        }
    },

    series: [
        {
            type: 'themeRiver',
            itemStyle: {
                color: (pa) => {
                        let colorList = ['#FFA657','#FFD0A1','#C6D8EF','#6CBD6C','#63A0CB'];
                        let color = '';
                        option.legend.data.map( (item,ind) => {
                            if(pa.name == item){
                                color = colorList[ind]
                            }
                        })
                        return color;
                    }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            },
            data: [
                ['2015/01/01',1,'DQ'],['2016/01/01',15,'DQ'],['2017/01/01',35,'DQ'],
                ['2018/01/01',38,'DQ'],['2019/01/01',22,'DQ'],['2020/01/01',2,'DQ'],
                
                ['2015/01/01',3,'TY'],['2016/01/01',25,'TY'],['2017/01/01',15,'TY'],
                ['2018/01/01',38,'TY'],['2019/01/01',32,'TY'],['2020/01/01',7,'TY'],
                
                ['2015/01/01',5,'SS'],['2016/01/01',25,'SS'],['2017/01/01',25,'SS'],
                ['2018/01/01',38,'SS'],['2019/01/01',32,'SS'],['2020/01/01',8,'SS'],
                
                ['2015/01/01',4,'QG'],['2016/01/01',25,'QG'],['2017/01/01',45,'QG'],
                ['2018/01/01',38,'QG'],['2019/01/01',32,'QG'],['2020/01/01',6,'QG'],
                
                ['2015/01/01',5,'SY'],['2016/01/01',25,'SY'],['2017/01/01',45,'SY'],
                ['2018/01/01',31,'SY'],['2019/01/01',22,'SY'],['2020/01/01',10,'SY'],
             
            ]
        }
    ]
};