 let data1 = [
        { value: 998, name: "1-1" },
        { value: 673, name: "1-2" },
        { value: 797, name: "1-3" },
        { value: 521, name: "1-4" }
    ];
    let colorList = [
        "#02F2F3",
        "#68B5FB",
        "#D45A49",
        "#F3E58D",
        "#C0FE5D",
        "#15DE57",
        "#F9F936"
    ];
 option = {
    tooltip: {
            trigger: "item",
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            bottom: "25%",
            right: "5%",
            textStyle: {
                fontSize: 14,
                color: "black"
            },
    formatter:function(name){
        let percent = 0;
        let total = 0;
        for (let i = 0; i < data1.length; i++) {
            total += data1[i].value;
        }
    const item = data1.filter((item) => item.name === name)[0];
        percent = (
            (item.value / total) *
            100
        ).toFixed(1);
    return `${name}：${percent}%`;
    }
        },
        series: [
            {
                type: "pie",
                center: ["35%", "50%"],
                radius: ["30%", "50%"],
                avoidLabelOverlap: false,
                roseType:'radius',
                label: {
                    show: false,
                    position: "center"
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex];
                        }
                    }
                },
                labelLine: {
                    show: false
                },
                data: data1
            }
        ]
    };