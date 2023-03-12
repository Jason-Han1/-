var uploadedDataURL = "/asset/get/s/data-1548228575413-sDMw6YGjd.json";



option = {
    title: {
        text: '123'
        
    },
    geo:{
        map:'Tina'
    }
    
};
$.getJSON(uploadedDataURL,function(json){
        echarts.registerMap('Tina',json);
        myChart.setOption(Option)
    })