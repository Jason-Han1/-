var Xnamelist = ["架113", "架93", "架73", "架53", "架33", "架13"];
var data1 = ["29.10", "21.10", "40.10", "27.90", "26.30", "35.40"];
var data2 = ["30.50", "20.60", "28.40", "26.70", "28.20", "34.50"];
var namevaluecount = 102;
var namevaluelist =  [
                    { value: 12, name: '架113' },
                    { value: 0, name: '架93' },
                    { value: 23, name: '架73' },
                    { value: 11, name: '架53' },
                    { value: 45, name: '架33' },
                    { value: 11, name: '架13' }
                ];
var tittlename = "工作面报警统计";
var Ytpye1 = "";
var Ytpye2 = "";
var Ytpye3 = "";
var Ytpye4 = "";
var Xtpye = "";
var fontcolor = "#fff";
var maxValue = "";
var maxName = "";
var minValue = "";
var minName = "";
var colorlist = ['#3AA7F9', '#F56C7C', '#FD9A36', '#EBE028', '#31CE65', '#20DACD', '#D671F5', '#F430E8', '#8A31FB'];
option = {
        backgroundColor: '#011c3a',
        grid: {
            left: '1%',
            right: '1%',
            bottom: '3%',
            containLabel: true
        },
        title: {
            text: "",
            subtext: namevaluecount,
            subtextStyle: {
                fontSize: 20,
                padding: 20,
                color: '#fff',
            },
            x: 'center',
            y: '54%',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#fff',
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            textStyle: {
                color: 'white',
            },
            orient: 'vertical',
            left: 'left',
            top: "25%",
            data: Xnamelist
        },
        color:colorlist,
        series: [
            {
                name: tittlename,
                type: 'pie',
                radius: ['35%', '85%'],
                center: ['50%', '50%'],
                data: namevaluelist,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };