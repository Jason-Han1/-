option = {
   
    color: ['#2EACFF','#FFA61C','#2EC054','#8C64D7'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
       
    },
      legend: {
        orient: 'vertical',
        right:'10%',
        align:'left',
        top:'middle',
        textStyle: {
            color:'#8C8C8C'
        },
        icon: 'circle'
    },
    series : [
        {
            name:'业务警种',
            type:'pie',
            roseType: true,
            radius : [30, 150],
            label: {
              show: true,
              formatter: "{d}%"
            },
            data:[
                {value:20, name:'国宝'},
                {value:25, name:'治安'},
                {value:30, name:'rose3'},
                {value:35, name:'rose4'}
            ]
        }
    ]
};
