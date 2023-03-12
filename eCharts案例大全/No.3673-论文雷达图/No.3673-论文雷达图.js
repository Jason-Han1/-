option = {
     tooltip: {},
                         legend: {
                            type: 'scroll',
                            bottom: 0,
                            textStyle: {fontSize: 15,color:'#c87f51'},
                            data: ['区间总行车量','区间新增晚点量', '区间增强晚点量','区间部分恢复量', '区间完全恢复量',]},
                         radar: {shape: 'circle',
                                 name: {
                                        textStyle: {
                                            color: '#c87f51',
                                            borderRadius: 2,
                                            padding: [1, 3],
                                            fontSize:15
                                            }
                                       },
                                       indicator: [
            { name: '长沙南-株洲西'},
            { name: '株洲西-衡山西'},
            { name: '衡山西-衡阳东'},
            { name: '衡阳东-耒阳西'},
            { name: '耒阳西-郴州西'},
            { name: '郴州西-乐昌东'}
        ]
                            },
                        series: {
                            name: '区间运行统计',
                            type: 'radar',
                            symbol:'none',
                            lineStyle: {
                                 width: 4
                                   },
                                   data: [
            {
                value: [430, 420, 480, 460, 440, 490],
                name: '区间总行车量'},
            {
                value: [53, 81, 25, 46, 64, 49],
                name: '区间新增晚点量'},
            {
                value: [22, 36, 44, 10, 77, 40], 
                name: '区间增强晚点量'},
            {
                value: [16, 29, 40, 60, 42, 10], 
                name: '区间部分恢复量'},
            {
                value: [31, 13,22, 16, 8, 0], 
                name: '区间完全恢复量'}]
    }};
    