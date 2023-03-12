option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    
    legend: {
        show:false,
        orient: 'vertical',
        x: 'left',
        data:['农业','城镇','农村','工业']
    },
    series: [
        {
            name:'测试集',
            type:'pie',
            color:['#00b2ec','#05d8df','#e68ea6','#ff9c7f'],
            selectedMode: 'single',
            radius: [0, '35%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:70, name:'农业'},
                {value:10, name:'城镇'},
                {value:10, name:'农村'},
                {value:10, name:'工业'}
            ]
        },
        {
            name:'分类',
            type:'pie',
            color:['#6ac9ff','#42acff','#0c84fc','#3666ee','#7978fa','#00dbe3','#f97da1','#ff9e85'],
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: ' {b}: {d}% ',
                    
                   
                    rich: {
                        
                        b: {
                            fontSize: 18,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:30, name:'1'},
                {value:10, name:'2'},
                {value:10, name:'3'},
                {value:10, name:'4'},
                {value:10, name:'5'},
                {value:10, name:'6'},
                {value:10, name:'7'},
                {value:10, name:'8'}
                
            ]
        }
    ]
};