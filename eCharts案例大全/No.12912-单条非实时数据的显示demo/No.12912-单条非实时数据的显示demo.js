option = {
    title: {
        text: '2018-11-12温度走势'
        //,subtext: 'From ExcelHome'
        //,sublink: 'http://e.weibo.com/1341556070/AjQH99che'
    },
     legend: {
        data:['温度','湿度']
     },
     toolbox:{
         show:true,
         feature:{
             saveAsImage:{
                 show:true
             }
         }
     },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            //debugger
            var len=params.length;
            var showHtml=params[0].name+"<br/>";
            for(var i=0;i<len;i++){
                 var tar = params[i];
                if(tar.seriesIndex==2 || tar.seriesIndex==5)continue;
                //console.log(tar);
                if(tar.value.length>1){
                     showHtml+=('最高温度: ' +(tar.value[1]+tar.value[3]) + '<br/>');
                     showHtml+=('平均温度: ' +tar.value[2] + '<br/>');
                }else{
                     showHtml+=('最低温度' + ' : ' + tar.value+ '<br/>');
                }
            }
            
            return showHtml;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['14:00:12\n','14:01:12','14:02:12','14:03:12','14:04:12']
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '设备1最低温度',
            type: 'bar',
            stack:  '设备1data',
            cursor:'auto',
            barWidth:2,
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [7, 2, 0, 5, 10]//最低温度值
        },
        {
            name: '温度',
            type: 'bar',
            stack: '设备1data',
            data:[[0,1,8,7], [1,8,7,2], [2,7,7,0], [3,6,6,5], [4,0.1,6,10]]//最高温度=最高温度-最低温度
        },
        {
            name:'设备1最高温度标线',
            type:'line',
            //yAxisIndex: 1,
            itemStyle:{normal:{color:'#c23531'}},
            data:[8, 10,7,11,10],
             markPoint : {
                color:'blue',
                data : [
                    {type : 'max', name : '最大值'}/*,
                    {type : 'min', name : '最小值'}*/
                ]
            }
        }
        
    ]
};
