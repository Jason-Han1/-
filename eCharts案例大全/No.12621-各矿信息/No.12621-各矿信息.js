 //柱状图
    option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        
        xAxis: [
               {
                   type: 'category',
                   data: ["许厂", "岱庄", "亭南", "唐口", "新河", "双欣", "巴彦高勒", "高家堡"],

                   axisTick: {
                       alignWithLabel: true
                   },
                   axisLabel: {
                       formatter: function (params)
                       {
                           var newParamsName = "";
                           var paramsNameNumber = params.length;
                           var provideNumber = 2;  //一行显示几个字
                           var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                           if (paramsNameNumber > provideNumber)
                           {
                               for (var p = 0; p < rowNumber; p++)
                               {
                                   var tempStr = "";
                                   var start = p * provideNumber;
                                   var end = start + provideNumber;
                                   if (p == rowNumber - 1)
                                   {
                                       tempStr = params.substring(start, paramsNameNumber);
                                   } else
                                   {
                                       tempStr = params.substring(start, end) + "\n";
                                   }
                                   newParamsName += tempStr;
                               }

                           } else
                           {
                               newParamsName = params;
                           }
                           return newParamsName
                       },
                       textStyle: {
                           color: '#28FF28',
                           fontSize: 15,
                           fontFamily: '宋体'
                       }

                   }
               }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#28FF28',
                        fontSize: 15,
                        fontFamily: '宋体'
                    }
                }
            },

        ],
        series: [
            {
                name: '人员总数',
                type: 'bar',
                stack: 'sum',
                barWidth: '60%',
                data: ["564", "455", "323", "227", "436", "267", "345", "177"],
                itemStyle: {
                    normal: {
                        color: '#FF8C00',
                    }
                },
                label: {
                            normal: {
                                fontSize: 15,
                                color: '#28FF28',
                                show: true,
                                position: "top",
                            }
                        }
            }
        ]
    };