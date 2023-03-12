option = {
   
    color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
       
    },
      legend: {
        type:"scroll",
        orient: 'vertical',
        left:'10%',
        align:'left',
        top:'middle',
        textStyle: {
            color:'#8C8C8C'
        },
        height:150
    },
    series : [
        {
            name:'业务警种',
            type:'pie',
            radius : [0, 150],
            
          
            data:[
                {value:20, name:'国宝'},
                {value:30, name:'治安'},
                {value:25, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        }
    ]
};
