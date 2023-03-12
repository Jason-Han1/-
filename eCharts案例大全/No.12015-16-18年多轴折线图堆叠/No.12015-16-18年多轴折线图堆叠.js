var colors = ['#B34EE9','#5CF4FD','#2DD638','#FF00AE','#5793f3', '#d14a61', '#675bba'];
option = {
    color:colors,
    title: {
        text: '16-18年多轴折线图堆叠'
    },
    legend: {
        data:['烟台','青岛','山东','济南','莱芜'],
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
       name:'数值'
    },
    yAxis: {
        type: 'value',
        name:'组数'
    },
    series: [
        {
            name:'烟台',
            type:'line',
            
            data:[[20, 15,2016], [25, 120,2017], [30, 50,2018]],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function (value) {
 
                return value.data[2]+'年';
            }
                }
            }
            
        },
        {
            name:'青岛',
            type:'line',
           
            data:[[30, 120,2016], [25, 102,2017], [45, 50,2018]],
               label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function (value) {
 
                return value.data[2]+'年';
            }
                }
            }
        },
        {
            name:'山东',
            type:'line',
            
            data:[[20, 120,2016], [40, 155,2017], [30, 50,2018]],
               label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function (value) {
 
                return value.data[2]+'年';
            }
                }
            }
        },
        {
            name:'济南',
            type:'line',
           
            data:[[20, 150,2016], [50, 101,2017], [40, 50,2018]],
               label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function (value) {
 
                return value.data[2]+'年';
            }
                }
            }
        },
        {
            name:'莱芜',
            type:'line',
            
            data:[[10, 120,2016], [60, 89,2017], [60, 50,2018]],
               label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function (value) {
 
                return value.data[2]+'年';
            }
                }
            }
        }
    ]
};