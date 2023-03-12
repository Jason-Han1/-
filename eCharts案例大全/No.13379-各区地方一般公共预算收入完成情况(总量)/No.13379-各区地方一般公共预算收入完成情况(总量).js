option = {
    title : {
        text: '各区地方一般公共预算收入完成情况(总量)',
        textStyle:{
            fontFamily:"楷体",
            fontSize:"21"
        },
        "left": "center",
        subtext: '扯淡的事情一件接一件',
        sublink: 'http://fuck.com'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    grid: [
        {bottom: '55%'},
        {top: '55%'}
    ],
    legend: {
        top:'8%',
        itemGap:1,
        itemWidth:50,
        right:'1%',
        orient:'vertical',
        data:['完成值','拼搏目标','预期目标']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
              axisLabel: {
                  interval: 0,
                 formatter:function(value)
                 {
                     debugger
                     var ret = "";//拼接加\n返回的类目项
                     var maxLength = 1;//每项显示文字个数
                     var valLength = value.length;//X轴类目项的文字个数
                     var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                     if (rowN > 1)//如果类目项的文字大于3,
                     {
                             for (var i = 0; i < rowN; i++) {
                                 var temp = "";//每次截取的字符串
                                 var start = i * maxLength;//开始截取的位置
                                 var end = start + maxLength;//结束截取的位置
                                 //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                 temp = value.substring(start, end) + "\n";
                                 ret += temp; //凭借最终的字符串
                        
                        }
                         
                         return ret;
                     }
                     else {
                         return value;
                     }
                 }
            } ,
            type : 'category',
            data : ['临空港开发区(东西湖区)','江岸区','硚口区','汉阳区','武昌区','青山区','洪山区','蔡甸区','江夏区','黄陂区','新洲区','武汉经']
        }
    ],
    yAxis : [
        
        {
            splitLine:{show: false},//去除网格线
            type : 'value',
            "name": "单位: 亿元",
            "nameTextStyle": {
            "color": "#7d838b"
        }
        }
    ],
    series : [

        {
            name:'完成值',
            type:'bar',
            data:[46.78, 62.05, 25.87, 58.61, 26.86, 42.01, 12.85, 34.61, 32.61, 20.02, 69.39, 41.82],
            label: {
                show: true,
                position: 'top',
                distance:10,
                color:'#fff',
                backgroundColor:'auto',
                borderColor:'#2f4554',
                borderWidth:1,
                padding:[1,3,1,3],
                borderRadius:2
            },
            zlevel:1,
            stack:"总量",
            animation:false,
            barWidth:30,
        },
        {
            name:'拼搏目标',
            type:'bar',
            label: {
                show: true,
                position: 'top',
                distance:10,
                color:'#fff',
                backgroundColor:'auto',
                borderColor:'#2f4554',
                borderWidth:1,
                padding:[1,3,1,3],
                borderRadius:2
            },
            zlevel:-1,
            barGap:'-50%',
            
            animation:false,
            barWidth:30,
            data:[116.42, 126.92, 229.01, 326.42, 428.73, 270.72, 275.61, 282.22, 248.72, 318.82, 186.01, 220.32],
        },
        {
            name:'预期目标',
            label: {
                show: true,
                position: 'top',
                distance:10,
                color:'#fff',
                backgroundColor:'auto',
                borderColor:'#2f4554',
                borderWidth:1,
                padding:[1,3,1,3],
                borderRadius:2
            },
            type:'bar',
            data:[24.6, 22.9, 31.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 212.31],
            stack:"总量",
        }
        
    ]
};
