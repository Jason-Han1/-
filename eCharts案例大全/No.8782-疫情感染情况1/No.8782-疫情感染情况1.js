var confirmed = [217, 440, 571, 830,1287,1975];
var similar = [7, 30, 393, 1072,1965,2684];
var heavy = [0, 0, 95, 177,237,324];
var death = [0, 9, 17, 25,41,56];
var total = [];
var total1 = [214, 479, 1000];
var myColor = ["#FE5656", "#3DD1F9", "#FFAD05", "#906BF9"];
var Datedata = ['20日', '21日', '22日', '23日','24日','25日'];
var situation=['确诊', '疑似', '病重', '死亡'];
var confirmedtotal = confirmed[confirmed.length - 1];
var similartotal = similar[similar.length - 1];
var deathtotal = death[death.length - 1];
var heavytotal = heavy[heavy.length - 1];
var data=[[217,7,0,0],[440,30,95,17],[571,393,95,17],[830,1072,177,25],[1287,1965,237,41],[1975,2684,324,56]
]

var data2=[
        [
            {name:'确诊',value:217},
            {name:'疑似',value:7},
            {name:'病重',value:0},
            {name:'死亡',value:0}
        ],
        [
            {name:'确诊',value:440},
            {name:'疑似',value:30},
            {name:'病重',value:95},
            {name:'死亡',value:17}
        ],
        [
            {name:'确诊',value:571},
            {name:'疑似',value:393},
            {name:'病重',value:95},
            {name:'死亡',value:17}
        ],
        [
            {name:'确诊',value:830},
            {name:'疑似',value:1072},
            {name:'病重',value:177},
            {name:'死亡',value:25}
        ],
        [
            {name:'确诊',value:1287},
            {name:'疑似',value:1965},
            {name:'病重',value:237},
            {name:'死亡',value:41}
        ],
        [
            {name:'确诊',value:1975},
            {name:'疑似',value:2684},
            {name:'病重',value:324},
            {name:'死亡',value:56}
        ],
    
    ];
option = {
    baseOption:{
    timeline:{data:Datedata},
    title:{
        text:'疫情感染情况',
        subtext:'数据来源：中国国家卫生健康委员会',
        left:'center',
        textStyle:{color:'#eee'},
    },
    backgroundColor:"#0B1837",
    color: ["#FE5656", "#3DD1F9", "#FFAD05", "#906BF9"],
    xAxis: {
        axisLabel:{
            textStyle:{color:'#eee'},
        },
        splitLine:{show:false},
        min:0,
        max:3000
        },
    yAxis: {
        show:true,
        position:'right',
        splitLine:{show:false},
        
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient:'vertical',
        left:'65%',
        top:'10%',
        data: situation,
        textStyle:{color:'#eee'},
        
    },
    grid: {
      left: 'center',

      top: '50%',
      bottom: '20%'
    },
    series: [{
            id:'bar',
            yAxisIndex:0,
            type: 'bar',
            name: '情况',
            itemStyle: {
            normal: {
                barBorderRadius: 20,
                color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
            }
        },
        }, 
        {
            id:'pie',
            name: '数据比重',
            type: 'pie',
            roseType:'radius',
            center: ['50%', '30%'],
            radius: ['20%', '30%'],
            label: {
                formatter: '{abg|}\n\n  {b|{b}：} {c|{c}}',
                avoidLabelOverlap:true,
                borderWidth: 1,
                borderRadius: 3,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    c: {
                        color: '#eee',
                        backgroundColor: "#5045f6",
                        fontSize: 25,
                        padding: [3, 20],
                        borderRadius: 30
                    }
                }
            },
            data: [

               

            ]
        }
    ]
    },
    options:[]
};
for(i=0;i<6;i++){
    option.options.push(
    {   
        yAxis: {
        type: 'category',
         axisLabel:{
            textStyle:{color:'#eee'},
        },
        data:data2[i].map(function(ele){return ele.name})
            },
        series:[{
        id:'bar',
        data:data2[i].map(function(ele){return ele.value})
    },
    {
        id:'pie',
        data: data2[i]
            
    }
    
    ]}
        )
}



