  var option = {
    backgroundColor:'#000',  
    color:['#6D54F4','#00B0FF','#EFE722','#FFA21D','#00D386','#59EBE8','#2CC4C6','#95706D','#F57474','#FF9080','#E5AFA7'],
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    legend: {
        bottom:'5%',
        itemGap:16,
        textStyle:{
            color:'#fff',
            fontSize:12
        },
        data:['项目申报','咨询洽谈','项目代办','项目服务','项目初审','联合评审','项目发布']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                }
            },
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#ADAFB7'
                }
            },
            axisTick: {
                show: false
            },
            data :["02月","03月","04月","05月","06月","07月","08月","09月"]
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine : {show : false},
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                }
            },
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#ADAFB7'
                }
            },
            axisTick: {
                show: false
            },
            position: 'right'
        }
    ],
    grid: {
        left: '1%',
        right: '3.2%',
        bottom: '15%',
        top: '25%',
        containLabel: true
    },
    series : [
        {
            name:'项目申报',
            type:'bar',
            barMaxWidth:60,
            itemStyle:{
                normal:{
                    barBorderRadius:10
                }
            },
            data:[0,0,0,0,24,38,4,1]
        },
        {
            name:'咨询洽谈',
            type:'bar',
            barMaxWidth:60,
            itemStyle:{
                normal:{
                    barBorderRadius:10
                }
            },
            stack: '咨询洽谈',
            tooltip : {trigger: 'item'},
            data:[1,3,10,12,4,3,1,4]
        },
        {
            name:'项目代办',
            type:'bar',
            barMaxWidth:60,
            itemStyle:{
                normal:{
                    barBorderRadius:10
                }
            },
            tooltip : {trigger: 'item'},
            stack: '咨询洽谈',
            data:[1,3,10,12,4,3,1,4]
        },
        {
            name:'项目服务',
            type:'bar',
            barMaxWidth:60,
            itemStyle:{
                normal:{
                    barBorderRadius:10
                }
            },
            tooltip : {trigger: 'item'},
            stack: '咨询洽谈',
            data:[1,3,10,12,4,3,1,4]
        },
        {
            name:'项目初审',
            type:'line',
            barMaxWidth:60,
            data:[13,2,0,32,3,4,1,4]
        },
        {
            name:'联合评审',
            type:'line',
            barMaxWidth:60,
            data:[1,3,10,12,4,3,1,4]
        },
        {
            name:'项目发布',
            type:'line',
            barMaxWidth:60,
            data:[1,3,13,12,21,3,2,4]
        }
    ]
};
 var key = 0;
 setInterval(function() {
    if(key>3){
        key=0;
    }
    switch (key){
        case 0:
            $.each(option.series,function (index, value) {
                if(index<4){
                    value.type = 'line'
                }
            });
            break;
        case 1:
            $.each(option.series,function (index, value) {
                if(index<4){
                    value.type = 'bar';
                    value.stack='项目申报';
                }
            });
            break;
        case 2:
            $.each(option.series,function (index, value) {
                if(index<4){
                    value.stack = '';
                    value.type = 'bar'
                }
            });
            break;
        case 3:
            $.each(option.series,function (index, value) {
                if(index==0){
                    value.stack = '';
                    value.type = 'bar'
                }else if(index<4){
                    value.stack = '咨询洽谈';
                    value.type = 'bar'
                }
            });
            break
    }
    key++;
    myChart.setOption(option, true);
},3000);