var data=[{name:'已缴',value:35},{name:'未缴',value:65}];
var percent=data[0]["value"]
console.log(percent)

//职称结构图表
var colorList = ["#66FECB","#8738E9"];
option = {
    backgroundColor:'#030F35',
    tooltip:{
      trigger:'item',
      formatter: function(params, ticket, callback) {
            let judge = /^_*[边框]{0}$/.test(params.name);
            if (judge) {
                //隐藏提示
                return ''
            } else {
                var value = params.value
                return `${params.name} <br/> ${params.percent}%`
            }
        },
    },
    title: {
        text: '已完成',
        subtext: percent+'%',
        textStyle: {
            color: '#00b5f3',
            fontSize: 12,
            
        },
        subtextStyle: {
            align: 'center',
            fontSize: 28,
            color: ['#85c7e3'],
        },
        x: 'center',
        y: 'center',
    },
    color:["#66FECB","#8738E9"],
    series: [
        {
        type: 'pie',
        radius: ['40%', '60%'],
        center: ["50%", "50%"],
        label:{show:false},
        data: data
    },{
        name:'边框',
        itemStyle: {
            normal: {
                color: 'rgba(34,41,69,0.4)',
            }
        },
        type: 'pie',
        hoverAnimation: false,
        radius: ['37%', '63%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                show:false
            }
        },
        data: [{
                value: 1,
            }],
        z:-1
    }]
};