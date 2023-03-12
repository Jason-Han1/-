var uploadedDataURL = "/asset/get/s/data-1557127768277-VykwmqY7O.json";
var util = {
    //pollutionName 污染物名称,dateType 筛选类型
    getlevelValueByPollution: function(pollutionName){
        var num0,
            num1,
            num2,
            num3,
            num4,
            num5,
            num6;
        switch(pollutionName.toUpperCase()){
            case"SO2":
                num0=0;num1=75;num2=150;num3=500;num4=650;num5=800;num6=1600
                break;
            case"NO2":
                num0=0;num1=50;num2=100;num3=200;num4=700;num5=1200;num6=2340
                break;
            case"CO":
                num0=0;num1=2.5;num2=5;num3=10;num4=35;num5=60;num6=90;
                break;
            case"O3":
                num0=0;num1=80;num2=160;num3=200;num4=300;num5=400;num6=800;
                break;
            case"PM10":
                num0=0;num1=25;num2=50;num3=150;num4=250;num5=350;num6=420;
                break;
            case"PM25":
                num0=0;num1=17.5;num2=35;num3=75;num4=115;num5=150;num6=250;
                break;
            case"AQI":
                num0=0;num1=25;num2=50;num3=100;num4=150;num5=200;num6=300;
                break;
            default: break
        }
        return[
            num0,
            num1,
            num2,
            num3,
            num4,
            num5,
            num6
        ]
    },
    //传入污染物的值
    getLevelPollution: function(pollutionName,value){
        var color = '';
        var num0, num1, num2, num3, num4, num5,num6;
        var result=this.getlevelValueByPollution(pollutionName);
        num0=result[0];
        num1=result[1];
        num2=result[2];
        num3=result[3];
        num4=result[4];
        num5=result[5];
        num6=result[6];
        if (value>num0&&value<=num1){
            color="#79E73C";
        } else if (value>=num1&&value<=num2){
            color="#79E73C";
        } else if (value>num2&&value<=num3){
            color="#FFD800";
        } else if (value>num3&&value<=num4){
            color="#FF9000";
        } else if (value>num4&&value<=num5){
            color="#FF2A00";
        } else if (value>num5&&value<=num6){
            color="#EB007F";
        } else if (value>num6){
            color="#C7021D";
        }else{
            color="#666666";
        }
        return color;
    }
}


var data = [
    {
        PQMC : '渝东北片区',
        AQI : 118
    },
    {
        PQMC : '渝西片区',
        AQI : 112
    },{
        PQMC : '渝东南片区',
        AQI : 97
    },
    {
        PQMC : '主城片区',
        AQI : 97
    }   
]


var seriesData = [];
data.forEach(function(item){
    
    var color = util.getLevelPollution('AQI', item.AQI);
    var obj = {
        name: item.PQMC,
        itemStyle: {
            normal: {
                color: color
            }
        }
        
    }
    seriesData.push(obj);
})



myChart.showLoading();
$.get(uploadedDataURL, function(chinaJson) {
    echarts.registerMap('chongqing', chinaJson);
    myChart.hideLoading();
    myChart.setOption({

        series: [{
            type: 'map',
            map: 'chongqing',
            
            selectedMode:'single',
            itemStyle:{
                normal:{
                    label:{
                        show:true
                    }
                },
                emphasis:{
                    areaColor: '#F95B5A',
                    label:{
                        show:true
                    }
                }
            },
            data:seriesData
        }]
    });
});