option = {
    title: {
        text: '100+关注者',
        subtext: '性别人数及比例'
        //爬取张佳玮138w+知乎关注者：数据可视化
        //https://zhuanlan.zhihu.com/p/28890605
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
  	datarange:'',
    color:['#FCCE10','#ff1493','#60C0DD',
            '#FCCE10','#ff1493','#60C0DD',
            '#FCCE10','#ff1493','#60C0DD',
            '#FCCE10','#ff1493','#60C0DD',
            //'#60C0DD','#ff1493'
            ],
    legend: {
        //data:['利润', '支出', '收入']
      data:['女', '男'],
      x: 313,
      y: 20
    },
    toolbox: {
        show : true,
        feature : {
            //mark : {show: true},
            //dataView : {show: true, readOnly: false},
            //magicType : {show: true, type: ['line', 'bar']},
            //restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['100-1k','1k-1w','1w-10w','10w+']
        }
    ],
    series : [
       /* {
            name:'利润',
            type:'bar',
            itemStyle : { normal: {label : {show: true, position: 'inside'}}},
            data:'',//[200, 170, 240, 244, 200, 220, 210]
        },*/
        {
            name:'男',
            type:'bar',
            stack: '数量',
            color:['#60C0DD'],
            barWidth : 25,
            itemStyle: {normal: {
                label : {show: true}
            }},
            data:[+20730,+4377,+925,+143]
        },
        {
            name:'女',
            type:'bar',
            stack: '数量',
            color:['#ff1493'],
          	//color:'#ff1493',
            itemStyle: {normal: {
                label : {show: true, position: 'left'}
            }},
            data:[-12037,-2432,-441,-44]
        },
       {
            name:'10w+关注者性别比例',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            center: [200,120],
            radius : [0, 25],
            itemStyle :　{
                normal : {
                    labelLine : {
                        length : 8
                    }
                }
            },
            data:[
                {value:3, name:'1.58%'},
                {value:44, name:'23.16%'},
                {value:143, name:'75.26%'}
            ]
        },
       {
            name:'1w-10w关注者性别比例',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            center: [540,247],
            radius : [0, 25],
            itemStyle :　{
                normal : {
                    labelLine : {
                        length : 8
                    }
                }
            },
            data:[
                {value:14, name:'1.01%'},
                {value:441, name:'31.96%'},
                {value:925, name:'67.03%'}
            ]
        },
       {
            name:'1k-1w关注者性别比例',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            center: [200,364],
            radius : [0, 25],
            itemStyle :　{
                normal : {
                    labelLine : {
                        length : 8
                    }
                }
            },
            data:[
                {value:129, name:'1.86%'},
                {value:2432, name:'35.05%'},
                {value:4377, name:'63.09%'}
            ]
        },
       {
            name:'100-1k关注者性别比例',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            center: [650,400],
            radius : [0, 25],
            itemStyle :　{
                normal : {
                    labelLine : {
                        length : 8
                    }
                }
            },
            data:[
                {value:669, name:'2.00%'},
                {value:12037, name:'32.00%'},
                {value:20730, name:'62.00%'}
            ]
        }
    ]
};
                    