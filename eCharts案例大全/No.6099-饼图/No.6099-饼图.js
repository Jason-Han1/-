var datas=[{
        name: "电商版",
        value: "20"
    }, {
        name: "企店版",
        value: "30"
    }, {
        name: "订货通",
        value: "80"
    }]

option = {
    backgroundColor: "#050F2A",
    legend: {
        orient: 'horizontal',
        top: "bottom",
        right: "center",
        icon:'square',
        // data: ['订货通', '企店版', '电商版',],
        textStyle: {
            color: "#fff",
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "数量：" + parms.data.value + "家</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    series: [{
        name: '店铺分类占比',
        type: 'pie',
        radius: ['30%', '80%'],
        center: ['40%', '50%'],
        roseType: 'radius',
        label: {
            show: false,
        },
        labelLine: {
            show:false,
            length: 1,
            length2: 20,
            smooth: true
        },
        data: [
            {
                value: datas[0]["value"],
                name: datas[0]["name"],
                itemStyle: {
                    color: "rgba(244,201,7,0.7)",
                    borderColor: "rgba(244,201,7,1)",
                    borderWidth: 3
                }
            },
            {
                value: datas[1]["value"],
                name: datas[1]["name"],
                itemStyle: {
                    color: "rgba(23,216,161,0.7)",
                    borderColor: "rgba(23,216,161,1)",
                    borderWidth: 3
                }
            },
            
            {
                value: datas[2]["value"],
                name: datas[2]["name"],
                itemStyle: {
                    
                    color: "rgba(50,123,250,0.7)",
                    borderColor: "rgba(50,123,250,1)",
                    borderWidth: 3
                }
            },
            
        ]
    }]
};