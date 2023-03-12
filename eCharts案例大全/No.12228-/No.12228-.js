var uploadedDataURL = "/asset/get/s/data-1546500593017-S6IBnSdGx.png";

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    legend:{
        icon:"image://asset/get/s/data-1546500593017-S6IBnSdGx.png"
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        name:"aaa",
        label:{
            normal:{
                show:true,
            
            formatter:'{testa|}:{c}',
            rich:{
                 testa: {
                    backgroundColor: {
                        image: "/asset/get/s/data-1546500593017-S6IBnSdGx.png"
                    },
                    height: 20
                },
            }}
        }
    }]
};
