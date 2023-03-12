var colors = ['#FDBFAA','#FFA483','#F97F53','#F45922'];
var unit='亿元';
option = {
    color: ['#3398DB'],
    title: {
        text: '单位:  '+unit,
        right:0,
        textStyle: {
            color: '#000',
            fontSize:14,
        }
    },
   
    /*legend: {
        data: [date]
    },*/
    grid: {
        left: '2%',
        right: '10%',
        top:'10%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        min: 0,
        max: 100,
        interval: 0,
        axisLabel: {
            show:false,
            formatter: '{value}%',
            textStyle: {
                //color: '#fff',  
                fontWeight: '80'
            }
        },
        axisLine:{
            show:false
        }
    },
    yAxis: {
        type: 'category',
        data: ['Q1', 'Q2', 'Q3','Q4'],
        inverse:true,
        position:'top',
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 0,
            margin: 10,
            inside: false,
            textStyle: {
                //color: '#fff',
                fontSize:14,
                // fontWeight: '50'
            }
        },
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        }
    },
    series: [{
        type: 'bar',
        barMaxWidth:30,
        itemStyle:{
            normal:{
                color:function (param){
                    return colors[param.dataIndex];
                },
            }
        },
        label: {
            normal: {
                show: true,
                fontSize:30,
                fontWeight:'bold',
                position:'right',
                // formatter: '{c}',
                // formatter: function(v) {
                //     var val = v.data;
                //     if (val == 0) {
                //         return '';
                //     }
                //     return val;
                // },
                color: '#000'
            }
        },
        data: [10, 20, 30,40]
    }]
};