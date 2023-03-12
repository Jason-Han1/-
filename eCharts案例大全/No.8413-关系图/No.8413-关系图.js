option = {
    grid:{
        left:0,
        right:0,
        bottom:0,
        top:0
    },
    title: {
        text: '关系图'
    },
    xAxis: {
        show:false,
        type:'value',
        position:'top',
        max:100
    },
    yAxis: {
        show:false,
        type:'value',
        inverse:true,
        max:100
        
    },
    series: [{
        type: 'custom',
        data:[{
            value:[0,0],
            name:"节点1"
        }],
        renderItem(params,api){
            let location = api.size([90,90])
            console.log(window)
            return {
                type:'group',
                children:[{
                    type:"circle",
                    shape:{
                        cx:location[0],
                        cy:location[1],
                        r:10
                    },
                    // onmousewheel(...res){
                    //     console.log(res)
                    // },
                    onclick:function(res){
                        console.log(res)
                    },
                    // onmouseover:function(...res){
                    //     console.log(res)
                    // }
                }],
            }
        }
    }]
};