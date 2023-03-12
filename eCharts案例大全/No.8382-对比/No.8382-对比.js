option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
     legend: {
        data:['加分','减分'],
        align: 'right',
        right: '2%',
        top:0,
    },
   		xAxis: [
        {
            type: 'category',
            axisTick: {
            alignWithLabel: true,
                
            },
            boundaryGap: ['0%', '0%'],
        "axisLabel": {
            interval:0,
            rotate:40,
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 4;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,4);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }

        },
         data: ['一年级','二年级','三年级','四年级','五年级','六年级','初一','初二','初三','高一','高二','高三',]
        }
    ],
    yAxis:[
        {
            name: '单位：分数',
        },
       
    ],
     grid: {
        right: '5%',
        bottom: '10%',
        left: '2%',
        top: '80px',
        containLabel: true
    },
    series: [
        {
            name:'加分',
            color: '#81d0d7',
            type:'bar',
            barWidth:'20%',
            data:[97,109,124,134,157,135,154,156,142,135,122,102]
        },
        {
            name:'减分',
            color: '#f29365',
            type:'bar',
            barWidth:'20%',
            data:[17,89,64,34,57,35,54,56,42,35,42,42]
        },
    ]
};