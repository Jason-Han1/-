var color =["#BC8DEE", "#8693F3","#89C3F8","#F2A695","#FCC667","#AEB7F9","#748BFA"]
var legendData = ["信息技术", "云制造及科创服务", "装备制造", "贸易业务", "物业及其它"];
var seriesData = [{name:"信息技术" ,value:"25988.77"},
{name:"云制造及科创服务" ,value:"55101.33"},
{name:"装备制造" ,value:"75785.45"},
{name:"贸易业务" ,value:"1126765.84"},
{name:"物业及其它" ,value:"31978.38"}];


option = {
    color:color,
    legend: {
        icon: "circle",
        bottom: "5%",
        itemGap: 5,
        itemWidth: 10,
        itemHeight: 10,
        data: legendData
    },
    calculable: true,
    series: {
        name: '',
        type: 'pie',
        radius: '50%',
        radius: ["30%", "58%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{text|{b}}\n{value|{d}%}',
                rich: {
                    text: {
                        color: "#666",
                        fontSize: 14,
                        align: 'center',
                        verticalAlign: 'middle',
                        padding: 5
                    },
                    value: {
                        color: "#8693F3",
                        fontSize: 24,
                        align: 'center',
                        verticalAlign: 'middle',
                    },
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 46,
                }
            }
        },
        data: seriesData
    }
};
