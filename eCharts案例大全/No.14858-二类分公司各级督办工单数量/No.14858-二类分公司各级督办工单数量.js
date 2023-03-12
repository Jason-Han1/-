var color = ['black','rgba(198, 89, 17,0.5)','rgba(255, 0, 0,10)','rgba(255, 242, 204, 0.51)','rgba(84, 130, 93,0.7)',  'rgba(155, 194, 230,0.51)'];
option = {

    title: {
        text: '二类分公司各级督办工单数量',
       textStyle: {
        fontSize: 35,
        fontWeight: 'bolder',
        color: '#333'          // 主标题文字颜色
    }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            
            saveAsImage: {}
        }
    },
    legend: {
         left: '50%',
         data: ['大兴','昌平','通州','顺义','房山'],
        textStyle: {
        fontSize: 20,
        fontWeight: 'bolder',
        color: '#333'          // 主标题文字颜色
    }
    },
    series: [
        {
            name: '大兴',
            type: 'funnel',
            left: '1%',
            width: '80%',
           label: {
                normal: {
                    opacity: 1,
                    formatter: ''
                },
                
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                  
                     borderColor: 'black',
                   color:color[1],
                    borderWidth: 2
                   
                }
            },
            data: [
               {value: 2067, name: '一级督办'},	{value: 1677, name: '二级督办'},	{value: 1008, name: '三级督办'},	{value: 725, name: '四级督办'},	{value: 1, name: '五级督办'},		

            ]
        },
        {
            name: '昌平',
            type: 'funnel',
            left: '1%',
            width: '80%',
            label: {
                normal: {
                    opacity: 1,
                    formatter: ''
                },
                
            },
            
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color:color[2],
                    opacity: 0.5,
                    borderColor: 'black',
                    borderWidth: 2
                }
            },
            data: [
               {value: 1177, name: '一级督办'},	{value: 831, name: '二级督办'},	{value: 553, name: '三级督办'},	{value: 229, name: '四级督办'},	{value: 0, name: '五级督办'},		

            ]
        },
        {
            name: '通州',
            type: 'funnel',
            left: '1%',
            width: '80%',
           label: {
                normal: {
                    formatter: '{b}数量',
                    color:color[0],
                    textStyle: {
        fontSize:22,
        fontWeight: 'bolder',
        color: '#333'          // 主标题文字颜色
    }
                },
               
            },
           
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color:color[3],
                    opacity: 0.5,
                    borderColor: 'black',
                    borderWidth: 2
                }
            },
            data: [
           {value: 2791, name: '一级督办'},	{value: 2615, name: '二级督办'},	{value: 2448, name: '三级督办'},	{value: 2347, name: '四级督办'},	{value: 15, name: '五级督办'},		


            ]
        },
        {
            name: '顺义',
            type: 'funnel',
            left: '1%',
            width: '80%',
           
           label: {
                normal: {
                    opacity: 1,
                    formatter: ''
                },
                
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color:color[4],
                    opacity: 0.5,
                    borderColor: 'black',
                    borderWidth: 2
                }
            },
            data: [
             {value: 1234, name: '一级督办'},	{value: 1070, name: '二级督办'},	{value: 915, name: '三级督办'},	{value: 812, name: '四级督办'},	{value: 6, name: '五级督办'},		


            ]
        },
        {
            name: '房山',
            type: 'funnel',
            left: '1%',
            width: '80%',
           
           label: {
                normal: {
                    opacity: 1,
                    formatter: ''
                },
                
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color:color[5],
                    opacity: 0.5,
                    borderColor: 'black',
                    borderWidth: 2
                }
            },
            data: [
             {value: 1853, name: '一级督办'},	{value: 1717, name: '二级督办'},	{value: 1470, name: '三级督办'},	{value: 1339, name: '四级督办'},	{value: 1, name: '五级督办'},		


            ]
        }
    ]
};
