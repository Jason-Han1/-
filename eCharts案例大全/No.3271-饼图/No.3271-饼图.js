option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    
    backgroundColor:'#021434',
    legend: {
        show:false,
        orient: 'vertical',
        x: 'left',
        data:['农业','城镇','农村','工业']
    },
    series: [
        {
            name:'里圈',
            type:'pie',
            color:['#0561FF','#0589FD','#02DAFF','#FF0456','#FFDE55'],
            selectedMode: 'single',
            radius: ['25%', '45%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#000884',
                    borderWidth:0.5,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:10, name:'车门1'},
                {value:70, name:'车门2'},
                {value:10, name:'车门3'},
                {value:10, name:'车门4'},
                {value:10, name:'车门5'}
            ]
        },
        {
            name:'外圈',
            type:'pie',
            color:['#0561FF','#0589FD','#0589FD','#0589FD','#0589FD','#0589FD','#02DAFF','#FF0456','#FFDE55'],
            radius: ['45%', '60%'],
            itemStyle: {
                normal: {
                    borderColor: '#000884',
                    borderWidth:0.5,
                }
            },
            label: {
                normal: {
                    formatter: ' {b}: {d}% ',
                    
                   color:'#FFF',
                }
            },
            labelLine: {
                length: 10,
                length2: 20,
                lineStyle: {
                    color: '#0066FF',
                }
            },
            data:[
                {value:10, name:'车门11'},
                {value:30, name:'车门21'},
                {value:10, name:'车门22'},
                {value:10, name:'车门23'},
                {value:10, name:'车门24'},
                {value:10, name:'车门25'},
                {value:10, name:'车门31'},
                {value:10, name:'车门41'},
                {value:10, name:'车门51'}
                
            ]
        }
    ]
};