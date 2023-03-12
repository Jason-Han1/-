app.title = '工单在途归档情况';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['客服工单','政务工单']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['市直','德城区','陵城区','禹城市','乐陵市','临邑县','平原县','夏津县','武城县','庆云县','宁津县','齐河县']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
    
        {
            name:'客服工单',
            type:'bar',
            data:['10','11','8','7','9','12','17','5','7','8','3','8'],
        },
        {
            name:'在途',
            type:'bar',
            barWidth : 5,
            stack: '客服工单',
            data:['8','9','5','4','6','8','9','1','3','4','1','5']
        },
        {
            name:'归档',
            type:'bar',
            stack: '客服工单',
            data:['2','2','3','3','3','4','8','4','4','4','2','3']
        },
          {
            name:'政务工单',
            type:'bar',
            data:['7','6'],
        },
        {
            name:'在途',
            type:'bar',
            barWidth : 5,
            stack: '政务工单',
            data:['5','3']
        },
        {
            name:'归档',
            type:'bar',
            stack: '政务工单',
            data:['2','3']
        }
    ]
};
