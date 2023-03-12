//图例是对同一类型,多个数据值的数据显隐;多类型值就一个可如下
option = {
    tooltip: {
        trigger: 'item',
		formatter:  function (obj) { // trigger: 值不同,此参数不同
            return obj.data[0]+":"+obj.data[1];
        }
    },
    legend: {
        data: ['周一', '周二']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
          type: 'value'
    },
    series: [
        {
            name: '周一',
            type: 'bar', 
			stack: 'total', //此用于折叠数据,猜:值不能是"",且一样就生效(主要用处:使y轴居中)
            data: [["周一",11]]
        },
        {
            name: '周二',
            type: 'bar',
			stack: 'total',
            data: [["周二",12]]
        } 
    ]
};