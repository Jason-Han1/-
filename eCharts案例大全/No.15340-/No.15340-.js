
option = {
    legend:{
        show:true,
        right:0,
        bottom:'20%',
        orient:'vertical',
        data:['市级部门','禅城区','南海区','顺德区','高明区','三水区']
    },
    xAxis: {
        show:true,
        offset:10,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel:{
            textStyle:{
                fontSize:"14",
                color:"#333",
                baseline:'middle'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
       show:false,
        max:3000
    },
    series: [
        {
            name:'三水区',
            type: 'bar',
            barWidth:25,
            barGap:20,
            barCategoryGap: 20,
            stack:'历年工单量趋势',
            z:4,
            data:[140, 82, 191, 234],
            itemStyle:{
                normal:{
                    color:'#FC8C7A'
                }
            }   
        },
        {
            name:'高明区',
            type: 'bar',
            stack:'历年工单量趋势',
            z:4,
            data:[310, 52, 191, 234],
            itemStyle:{
                normal:{
                    color:'#4BC459'
                }
            }   
        },
        {
            name:'顺德区',
            type: 'bar',
            stack:'历年工单量趋势',
            z:4,
            data:[140, 92, 191, 234],
            itemStyle:{
                normal:{
                    color:'#45ACE3'
                }
            }   
        },
        {
            name:'南海区',
            type: 'bar',
            stack:'历年工单量趋势',
            z:4,
            data:[105, 62, 191, 234],
            itemStyle:{
                normal:{
                    color:'#FCD13E'
                }
            }
        },
        {
            name:'禅城区',
            type: 'bar',
            stack:'历年工单量趋势',
            z:4,
            data:[103, 69, 191, 234],
            itemStyle:{
                normal:{
                    color:'#3DD2B5'
                }
            }
        },
        {
            name:'市级部门',
            type: 'bar',
            stack:'历年工单量趋势',
            z:4,
            data:[104, 84, 191, 234],
            itemStyle:{
                normal:{
                    color:'#FC746A'
                }
            }
        },
        
        { 
            name:' ',
            type: 'bar',
            inverse:true,
            barWidth:16,
            silent:true,
            itemStyle: {
                normal: {color: '#EBEBEB'}
            },
            z:2,
            barWidth:25,    
            barGap:'-100%',
            barCategoryGap: '-100%',
            data:[0,0,0,0,3000,3000,3000,3000,3000,3000,3000,3000]
        }
        
    ]
};