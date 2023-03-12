const dataList = [{
        name: '机构',
        value: 50
    },
    {
        name: '个人',
        value: 20
    }
]
option = {
    color: ['rgb(136,94,66)', "rgb(238,210,182)"],
    legend: {  
        icon: 'circle',
        orient: 'vertical',
        left: '5%',
        top: '20%',
        itemWidth: 8,
        itemHeight: 8,
        formatter: function (name) {
             if (dataList && dataList.length) {
                 for(let i=0; i<dataList.length;i++){
                    if (name === dataList[i].name){
                         return dataList[i].name + dataList[i].value
                    }
                 }
             }
        }
    },
    series: [{
        type: 'pie',
        radius: ['40%', '55%'],
        center: 'center',
        data: dataList,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        }
    }]
};