var data = [
        {name:'浙江',value:'765'},
        {name:'辽宁',value:'34'},
        {name:'上海',value:'29'},
        {name:'江西',value:'20'},
        {name:'美国',value:'20'},
        {name:'江苏',value:'6'},
        {name:'北京',value:'3'},
        {name:'四川',value:'3'},
        {name:'中国',value:'2'},
        {name:'广东',value:'1'},
        {name:'印度',value:'1'},
        {name:'德国',value:'1'},
        {name:'法国',value:'1'},
        {name:'英国',value:'1'},
    ]

option = {
    title: {
        text: '亲清在线攻击分布情况',
        left: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox:{
      show:true  
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
    },
    series: [
        {
            name: '区域',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: data,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


