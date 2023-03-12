
let chartData = [
        {companyName:"西郊1",weight:125,type:"批发"},
        {companyName:"西郊2",weight:110,type:"配送"},
        {companyName:"西郊3",weight:100,type:"伙食团"},
        {companyName:"西郊4",weight:85,type:"生鲜电商"},
        {companyName:"西郊5",weight:61,type:"菜市场"},
        {companyName:"西郊6",weight:44,type:"超市卖场"},
        {companyName:"西郊7",weight:20,type:"直营门店"},
        {companyName:"西郊8",weight:5,type:"熟制品"}
    ]


option = {
    color:[
        "rgba(37,165,190,1)",
        "rgba(77,203,183,1)",
        "rgba(108,107,200,1)",
        "rgba(206,133,92,1)",
        "rgba(210,154,56,1)",
        "rgba(62,163,230,1)",
        "rgba(11,109,234,1)",
        "rgba(39,53,131,1)"
        ],
    legend: {
        orient: 'vertical',
        top: "center",
        right: "10%",
        itemWidth:15,
        itemHeight:15,
        data: chartData?chartData.map((it)=>{
            return it.type;
        }):[],
        textStyle: {
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter:function(params){
            let str=`${params.seriesName}<br/>${params.marker}${params.data.title}:${params.data.value}吨(${params.percent}%)`;
            return str;
        }
    },
    series: [{
        name: '渠道去向',
        type: 'pie',
        radius: ['30%', '70%'],
        center: ['40%', '50%'],
        roseType: 'radius',
        clockwise: false ,
        label: {
            normal: {
                show: false,
                position: 'outside',
                fontSize: 14
            }
        },
        labelLine: {
            show: false,
            smooth: true
        },
        data:chartData?chartData.map((it)=>{
            return {name:it.type,value:it.weight,title:it.companyName};
        }):[],
    }]
};