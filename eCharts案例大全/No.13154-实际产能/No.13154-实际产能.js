option = {
    title : {
        text: '实际产能',
        subtext: '',
        textStyle:{
            fontSize:50
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['正常产能','加班产能','外发产能'],
        top:70
    },
    toolbox: {
        show : false,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    grid:{
        
        top:100
        
    },
    xAxis : [
        {
            type : 'category',
            data : ['2018/06','2018/07','2018/08','2018/09','2018/10']
        }
    ],
    yAxis : [
        {
            type : 'value',
            top:150
        }
    ],
    series : [
        {
            name:'正常产能',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[3100,2500, 2800, 2300, 1500],
           
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'加班产能',
            type:'bar',
            data:[500, 700, 900, 1200, 900],
            markPoint : {
                data : [
                    {coord:[0,500],value:500},
                    {coord:[1,700],value:700},
                    {coord:[2,900],value:900},
                    {coord:[3,1200],value:1200},
                    {coord:[4,900],value:900}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'外发产能',
            type:'bar',
            data:[ 3600, 4200, 4700,  3500, 4400],
            markPoint:{
                data:[
                     {coord:[0,3600],value:3600},
                    {coord:[1,4200],value:4200},
                    {coord:[2,4700],value:4700},
                    {coord:[3,3500],value:3500},
                    {coord:[4,4400],value:4400}
                    
                    ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
