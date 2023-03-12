
var qipaoObj =  {
    "bankCount2": 18,
    "bankCount1": 8,
    "userCount": 553,
    "responsibleAccount": "42.49%",
    "resignUserCount": 111,
    "assetCount": 376,
    "totalNpa": 394154,
    "bankCount": 26
};

var datas = [{
    "name": "不良资产累计总金额",
    "value": [Math.floor(qipaoObj.totalNpa / 10000)]
}, {
    "name": "一般直接责任占比",
    "value": [qipaoObj.responsibleAccount]
}, {
    "name": "涉及经营单位",
    "value": [qipaoObj.bankCount, qipaoObj.bankCount1, qipaoObj.bankCount2]
},{
    "name": "责任人总人数",
    "value": [qipaoObj.userCount, qipaoObj.resignUserCount]
}, {
    "name": "不良资产累计户数",
    "value": [qipaoObj.assetCount]
}];

var seriesData=[];
// 球的大小
var symbolSizeArr = [160,140,180, 160, 130];
// 球的位置
var postionArr = [
    {x: 0, y: 0},  
    {x: 40, y: 20},  
    {x: 200, y: 90},  
    {x: 75, y: 100},  
    {x: 55, y: 220},  
];
// 球的颜色
var colors =[
    '#27b6ff', '#00fffc', '#27b6ff', '#d1fe4a', '#27b6ff',
];

for(var i=0; i<5; i++) {
     var color=colors[i];
     var x = postionArr[i];
    var item ={
                "name": datas[i].name,
                "value": datas[i].value,
                "x": postionArr[i].x,
                "y": postionArr[i].y,
                label: {
                    show: true,
                    align: "center",
                    lineHeight: 27,
                    fontSize: 14,
                    formatter: function(params) {
                        console.log(params)
                        switch (params.dataIndex) {
                            case 0:
                                return `{bigNum|${params.value}}亿元 \n${params.name}`
                                break;
                           case 1:
                                return `{bigNum|${params.value}} \n${params.name}`
                                break;
                           case 2:
                                return `{bigNum|${params.value[0]}}家(总数) \n{bigNum|${params.value[1]}}家辖行{bigNum|${params.value[2]}}家本部中支 \n${params.name}`
                                break;
                                
                           case 3:
                                return `{bigNum|${params.value[0]}}人离职${params.value[1]}人 \n${params.name}`
                                break;
                           case 4:
                                return `{bigNum|${params.value}}户 \n${params.name}`
                                break;    
                                
                            default:
                                // code
                        }
                    },
                    rich: {
                        bigNum: {
    
                            fontSize: 29
                        },
                    }
                },
                "symbolSize": symbolSizeArr[i],
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 15,
                        "shadowColor":color ,
                        "color": "rgba(0,0,0,0.1)",
                        "borderWidth": 2,
                        "borderColor":color
                    }
                
                }
            };
            
        seriesData.push(item);
}

option = {
    tooltip: {
        formatter: function(params) {
            console.log(params)
            var str = params.marker + "" + params.data.name + "</br>" +
                "交易额：" + params.data.value + "万元</br>" ;
            return str;
        }
    },
    animationDurationUpdate: function(idx) {
        // 越往后的数据延迟越大
        return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],

    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 70,
            // edgeLength: 0
        },

        // roam: true, // 缩放
        // label: {
        //     show: true,
        //     formatter: function(params) {
        //         console.log('params',params);
        //     }
        // },
      
        data: seriesData
    }]
}