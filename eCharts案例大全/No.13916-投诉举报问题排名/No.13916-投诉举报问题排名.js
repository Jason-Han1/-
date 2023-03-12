option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '投诉举报问题排名',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['投诉举报数'],
        top:30,
        left:'17%'
    },
    grid: {
        left: '1%',
        right: '50%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        position:'top',
        splitLine: {show: false},
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        "axisLabel": {
             interval: {default: 0},
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
                    tempStr=params.substring(0,15);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }
        },
        data: ['无证生产',
        '违法转让、出租生产许可证',
        '改变生产工艺等许可条件而未依法办理变更手续的',
        '委托无《食品生产许可证》企业进行生产',
        '违法使用或者滥用食品添加剂、非法添加非食用物质',
        '违法使用或者滥用食品添加剂、非法添加非食用物质',
        '使用不合格原辅材料（过期的、失效的、变质的、污秽不洁的、回收的、受到其他污染的食品）',
        '生产国家明令禁止生产的食品',
        '生产场所不能持续保持应当具备的环境条件、卫生要求',
        '食品生产人员未建立或执行从业人员健康管理制度',
        '采购食品原材料、食品添加剂未建立进货台账',
        '食品产品未进行出厂检验',
        '违反《食品标识管理规定》',
        '未按规定实施食品责令召回',
        '未按规定实施食品主动召回',
        '婴幼儿配方乳粉未按规定进行备案',
        '其他']
    },
    series: [
        {
            name: '投诉举报数',
             barWidth:'60%',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#60C0DD',
                           
                        ];
                        return colorList[params.dataIndex]
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: [263,423,623,953,1103,1403,1805,2163,2520, 2734, 2994, 3270, 3444, 3630,3820, 4034, 4294]
        }
    ]
};
