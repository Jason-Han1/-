option = {
    color:["#09d"],
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisLabel:{
            color: '#333',
            formatter: (value) => {
                if(value===0){
                    return  `{wjk|未监控}  `
                }
                if(value === 1){
                     return  `{zc|正常}  `
                }
                if(value === 2){
                     return `{wz|未知}  `
                }
                if(value === 3){
                     return `{gz|关注} `
                }
                if(value === 4){
                     return  `{jg|警告}  `
                }
                if(value === 5){
                     return  `{yz|严重} `
                }
            },
            rich: {
                wjk: {
                    backgroundColor: '#fff',
                    color: '#000',
                    borderRadius: 3,
                    padding: [0,2,3,2],
                    lineHeight:30,
                    align: 'center',
                    width: 45,
                    height: 20,
                    textareaBorderColor:"red",
                    borderColor:"#000"
                },
                zc: {
                    backgroundColor: '#0b8',
                    color: '#fff',
                    borderRadius: 3,
                    padding: [0,2,3,2],
                    lineHeight:30,
                    align: 'center',
                    width: 45,
                    height: 20,
                    borderColor:"#000"
                },
                wz: {
                    backgroundColor: '#a4a5a9',
                    color: '#fff',
                    borderRadius: 3,
                    padding: [0,2,3,2],
                    lineHeight:30,
                    align: 'center',
                    width: 45,
                    height: 20,
                    borderColor:"#000"
                },
                gz: {
                    backgroundColor: '#0ce',
                    color: '#fff',
                    borderRadius: 3,
                    padding: [0,2,3,2],
                    lineHeight:30,
                    align: 'center',
                    width: 45,
                    height: 20,
                    borderColor:"#000"
                },
                jg: {
                    backgroundColor: '#f81',
                    color: '#fff',
                    borderRadius: 3,
                    padding: [0,2,3,2],
                    lineHeight:30,
                    align: 'center',
                    width: 45,
                    height: 20,
                    borderColor:"#000"
                },
                yz: {
                    backgroundColor: '#f65',
                    color: '#fff',
                    borderRadius: 3,
                    padding: [0,2,3,2],
                    lineHeight:30,
                    align: 'center',
                    width: 45,
                    height: 20,
                    borderColor:"#000"
                }
            }
        }
    },
    series: [{
        data: [1, 2, 3, 4, 5, 0, 2],
        type: 'line'
    }]
};
