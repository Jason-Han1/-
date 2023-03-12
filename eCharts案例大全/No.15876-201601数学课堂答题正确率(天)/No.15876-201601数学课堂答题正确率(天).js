option = {
    title : {
        text: '201601数学课堂答题正确率(天)',
        subtext: 'X区X学校X年级X班X同学'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['正确率','班级平均正确率','年级平均正确率','区域平均正确率']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} %'
            }
        }
    ],
    series : [
        {
            name:'正确率',
            type:'line',
            data:[98, 90, 85, 70, 85, 85, 72],
          	markPoint : {
                data : [
                    {name : '', value : 98, xAxis: 0, yAxis: 98},
                  {name : '', value : 90, xAxis: 1, yAxis: 90},
                  {name : '', value : 85, xAxis: 2, yAxis: 85},
                  {name : '', value : 70, xAxis: 3, yAxis: 70},
                  {name : '', value : 85, xAxis: 4, yAxis: 85},
                  {name : '', value : 85, xAxis: 5, yAxis: 85},
                  {name : '', value : 72, xAxis: 6, yAxis: 72}
                ]
            }
        },
        {
            name:'班级平均正确率',
            type:'line',
            data:[80, 82, 82, 65, 83, 85, 78],
            markPoint : {
               data : [
                    {name : '', value : 80, xAxis: 0, yAxis: 80},
                  {name : '', value : 82, xAxis: 1, yAxis: 82},
                  {name : '', value : 82, xAxis: 2, yAxis: 82},
                  {name : '', value : 65, xAxis: 3, yAxis: 65},
                  {name : '', value : 83, xAxis: 4, yAxis: 83},
                  {name : '', value : 85, xAxis: 5, yAxis: 85},
                  {name : '', value : 78, xAxis: 6, yAxis: 78}
                ]
            }
        },
      {
            name:'年级平均正确率',
            type:'line',
            data:[71, 72, 72, 75, 73, 72, 78],
            markPoint : {
               data : [
                    {name : '', value : 71, xAxis: 0, yAxis: 71},
                  {name : '', value : 72, xAxis: 1, yAxis: 72},
                  {name : '', value : 72, xAxis: 2, yAxis: 72},
                  {name : '', value : 75, xAxis: 3, yAxis: 75},
                  {name : '', value : 73, xAxis: 4, yAxis: 73},
                  {name : '', value : 72, xAxis: 5, yAxis: 72},
                  {name : '', value : 78, xAxis: 6, yAxis: 78}
                ]
            }
           
        },{
            name:'区域平均正确率',
            type:'line',
            data:[61, 62, 72, 55, 63, 72, 80],
            markPoint : {
                data : [
                    {name : '', value : 61, xAxis: 0, yAxis: 61},
                  {name : '', value : 62, xAxis: 1, yAxis: 62},
                  {name : '', value : 72, xAxis: 2, yAxis: 72},
                  {name : '', value : 55, xAxis: 3, yAxis: 55},
                  {name : '', value : 63, xAxis: 4, yAxis: 63},
                  {name : '', value : 72, xAxis: 5, yAxis: 72},
                  {name : '', value : 80, xAxis: 6, yAxis: 80}
                ]
            }
        }
    ]
};
                    