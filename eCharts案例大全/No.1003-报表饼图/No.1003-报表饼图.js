option = {
   
    color: ['#76B8FE','#B09BFE','#EFA1C5','#EFE7A1','#EFBDA1','#E5E5E5','#e7bcf3','#8378ea'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
       
    },
      legend: {
        itemlength:20,
        itemWidth:15,
        orient: 'vertical',
        left:'70%',
        align:'left',
        top:'middle',
        textStyle: {
            color:'#909399'
        },
        height:150
    },
    series : [
        {
            label:{
                 show:false,
            },
            name:'设备停机分布',
            type:'pie',
            radius : [0, 75],
            data:[
                {value:35, name:'3#'},
                {value:20, name:'24#'},
                {value:25, name:'19#'},
                {value:25, name:'12#'},
                {value:20, name:'智能工厂'},
                {value:12, name:'其他'},

            ]
        }
    ]
};
