app.title = '世界人口总量 - 条形图';

option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['已完成', '进行中', '未开始']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        position: "bottom",
        data: ['换流阀','换流变','平抗','GIS','换流阀','换流变','平抗','GIS','换流阀','换流变','平抗','GIS']
    },{
        type: 'category',
        position: "bottom",
      	axisTick: {
          	length: 50,
          	lineStyle: {
          	    color: '#000'
          	}          
        },
        offset: 20,
        data: [{
            value:'上海庙站',
            textStyle: {
                fontSize: 20,
                color: '#000'
            }
        },{
            value:'古泉站',
            textStyle: {
                fontSize: 20,
                color: '#000'
            }
        },{
            value:'昌吉站',
            textStyle: {
                fontSize: 20,
                color: '#000'
            }
        }]
    }],
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    series: [
        {
            name: '已完成',
            type: 'bar',
            stack: 'group',
            data: [11203, 13489, 13034, 104970, 131744, 130230]
        },
        {
            name: '进行中',
            type: 'bar',
            stack: 'group',
            data: [12325, 13438, 11000, 121594, 134141, 111807]
        },
        {
            name: '未开始',
            type: 'bar',
            stack: 'group',
            data: [121594, 134141, 101807, 15325, 10438, 11000]
        }
    ]
};
