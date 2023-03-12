
            option = {
                tooltip : {
                    trigger: 'axis'
                },
                toolbox: {
                    show : true,
                    y: 'bottom',
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                legend: {
                    data:['阅读理解','完形填空','语法填空','视频广告','搜索引擎','百度','谷歌','必应','其他']
                },
                xAxis : [
                    {
                        type : 'category',
                        splitLine : {show : false},
                        data : ['三人班','一对一']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        position: 'left'
                    }
                ],
                series : [
                    {
                        name:'阅读理解',
                        type:'bar',
                        tooltip : {trigger: 'item'},
                        stack: '费用',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'完形填空',
                        type:'bar',
                        tooltip : {trigger: 'item'},
                        stack: '费用',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'语法填空',
                        type:'bar',
                        tooltip : {trigger: 'item'},
                        stack: '费用',
                        data:[220, 182, 191, 234, 290, 330, 310]
                        
                    },
                    
                     {
                        name:'短文改错',
                        type:'bar',
                        tooltip : {trigger: 'item'},
                        stack: '费用',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'英文写作',
                        type:'bar',
                        tooltip : {trigger: 'item'},
                        stack: '广告',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    

                    {
                        name:'搜索引擎细分',
                        type:'pie',
                        tooltip : {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        center: [820,130],
                        radius : [0, 50],
                        itemStyle :　{
                            normal : {
                                labelLine : {
                                    length : 20
                                }
                            }
                        },
                        data:[
                            {value:1048, name:'百度'},
                            {value:251, name:'谷歌'},
                            {value:147, name:'必应'},
                            {value:102, name:'其他'}
                        ]
                    }
                ]
            };
