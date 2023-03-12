option = {
    backgroundColor: '#192469',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        
        orient: 'vertical',
        x: 'right',
       itemWidth: 14,
        itemHeight: 14,
        align: 'left',
    
        data:['2D线','3D线','资源类','采集类','宝宝大全','2D视频','3D视频'],
                textStyle: {
            color: '#fff'
        }
    },
    series: [
       
        {
            name:'访问来源',
            type:'pie',
            radius: ['36%', '55%'],
            color: [ '#e889b5','#fa347a','#037dea','#5ddaf5','#00ffc6', '#a5fae7', '#e6eaf5'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
           
            data:[
                {value:49.34, name:'1'},
                {value:18.30, name:'2'},
                {value:10.07, name:'3'},
                {value:6.23, name:'4'},
                {value:4.14, name:'5'},
                {value:2.87, name:'6'},
                {value:4.73, name:'7-9'},
                {value:3.09, name:'10-15'},
                {value:1.15, name:'16-30'},
                {value:0.09, name:'30+'}
         
            ]
        }
    ]
};