var cellphoneBrand = ['水工作业', '助航设施', '水上活动','碍航物','航道变化','其他'];
var cellphoneBrand1 = ['中文'];
var cellphoneBrand2 = ['英文'];
var Chinese = [21,8,9,6,7,9];
var English = [3,3,2,5,1,0];

var data1 = [];
for (var i = 0; i < 6; ++i) {
    data1.push({
        name: cellphoneBrand[i],
        label: {
            position: 'inside',
            rotate: 'tangential'
        },
        children: [{
            name: cellphoneBrand1[0],
            value: Chinese[i],
            label: {
                position: 'inside',
                rotate: 'tangential'
            }

        }, {
            name: cellphoneBrand2[0],
            value: English[i],
            label: {
                position: 'intside',
                rotate: 'tangential'
            }
        }]
    });
}


option = {
    width:500,
    height:500,
    backgroundColor: '#0E2A43',
    //color: ['#FF66CC', '#4d59e6', '#0472d9', '#4eb2d4','#C7E907','#FFCC33', '#3c13a8','#42947f','#5c63c5',],
    //color: [ '#FF66CC','#5c63c5','#4d59e6', '#0472d9', '#4eb2d4','#FFCC33','#C7E907','#3c13a8','#42947f',],
    //color: ['#4d59e6','#FF66CC','#FFCC33','#4eb2d4', '#0472d9', '#C7E907','#5c63c5', '#3c13a8','#42947f',],
    //color: ['#00b0ff','#FF66CC','#FFCC33','#C7E907', '#0472d9', '#5c63c5', '#C7E907','#3c13a8','#42947f',],
    color: ['#4d59e6','#FF66CC','#FFCC33','#4eb2d4', '#0472d9', '#5c63c5', '#C7E907','#3c13a8','#42947f',],
    title: {
        text: '通告发布情况统计',
        link: '',
        left: '40%',
        top:"10%",
        textStyle:{
            color:'#dddddd'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            return params.name + " : " + params.data.value;
        }
    },
    legend: {
        //type:'scroll',
        bottom: '10%',
        x: 'center',
        textStyle:{
            color:'#fff',
        },
        data: ['水工作业', '助航设施', '水上活动','碍航物','航道变化','其他']
    },

    series: [ {
        type: 'sunburst',
        nodeClick: false,
        levels: [{}, {
            r0: '23%',
            r: '44%',
            label: {},
            itemStyle: {
                //shadowBlur: 2,
                borderWidth: 1,
                borderColor: '#42ced1',
            }
        }, {
            r0: '50%',
            r: '60%',
            label: {},
            itemStyle: {
                borderWidth: 1,
                borderColor: '#42b0d1',
                opacity: 0.8
            }
        }, {
            r0: '60%',
            r: '66%',

            itemStyle: {
                borderWidth: 1,
                borderColor: '#22bfb1',
                opacity: 0.6
            }
        }],
        data: data1,

    }]
};