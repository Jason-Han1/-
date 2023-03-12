var pingdu = "/asset/get/s/data-1483067894283-HJ0xGUXrg.json";//pingdu

var laixi = "/asset/get/s/data-1483067888252-B1ugMUXrl.json";//laixi

var jimo = "/asset/get/s/data-1483067881660-BJfxf8Xrg.json";//jimo

var jiaozhou = "/asset/get/s/data-1483067768021-BJlYWI7Hl.json";//jiaozhou

var laoshan = "/asset/get/s/data-1483067759307-HkwuZI7He.json";//laoshan

var huangdao = "/asset/get/s/data-1483067748020-rJhwZLmrl.json";//huangdao

var chengyang = "/asset/get/s/data-1483067726478-HyIUZ8QHe.json";//chengyang

var licang = "/asset/get/s/data-1483067720288-S1lLZ8mSl.json";//licang

var shinan = "/asset/get/s/data-1483067708437-H1VSZLQrg.json";//shinan

var shibei = "/asset/get/s/data-1483067702527-BkJBZ87rx.json";//shibei

var qingdao = "/asset/get/s/data-1483067692839-rkBEZ87rl.json";//qingdao



var chart = myChart;


var cityProper = {
    '城阳区': chengyang,
    '崂山区': laoshan,
    '李沧区': licang,
    '市北区': shibei,
    '市南区': shinan,
    '黄岛区': huangdao,
    '胶州市': jiaozhou,
    '即墨市': jimo,
    '莱西市': laixi,
    '平度市': pingdu
};
var data = [{
    name: '城阳区',
    value:'233',
    height:'3'
}, {
    name: '崂山区',
    value:'455',
    height:'2'
}, {
    name: '李沧区',
    value:'341',
    height:'20'
}, {
    name: '市北区',
    value:'498',
    height:'10'
}, {
    name: '市南区',
    value:'98',
    height:'20'
}, {
    name: '黄岛区',
    value:'498',
    height:'5'
}, {
    name: '胶州市',
    value:'8',
    height:'0.5'
}, {
    name: '即墨市',
    value:'58',
    height:'8'
}, {
    name: '莱西市',
    value:'57',
    height:'0.5'
}, {
    name: '平度市',
    value:'57',
    height:'1'
}];

    
$.get(qingdao, function(getJSON) {
    echarts.registerMap("city",getJSON)
        option = {
        visualMap: {
           max: 1000,
             inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#d73027', '#a50026']
             }
        },
             series: [{
                 
             type: 'map3D',
             map: 'city',
             shading: 'color',
            /* light: {
               main: {
                intensity: 2,
                shadow: false,
                alpha: 150,
                beta: 70
               },
               ambient: {
                intensity: 0
               },
             },*/
             groundPlane: {
                show: true,
                color: '#2a2f53'
            },
             
             data:data,
             }],
             itemStyle:{
                 borderWidth:0,
                 //borderColor:'#333',
                 opacity:0.4
             }
        };


    chart.setOption(option, true);
      
})