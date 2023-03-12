var  getname= ['市级直派案件', '市级直转案件','其他网络案件'];

var  getvalue=[140,125,118];
var  getbl=[40,30,18];
let radius1 =  ['45%', '55%'];
let radius2 = ['40%', '45%'];
let center =  ["25%", "50%"];
var data = [];

for(var i = 0;i<getname.length;i++){

	data.push({name:getname[i],value:getvalue[i]})

}

var colorList = ['rgba(205,22,49,1)','rgba(7,219,220,1)','rgba(255,155,61,1)'];

var colorList1 = ['rgba(205,22,49,0.8)','rgba(7,219,220,0.8)','rgba(255,155,61,0.8)'];

option = {
    backgroundColor:"#000",
    tooltip: {

        trigger: 'item',

        show: false

    },

 title: {
        text: '设备状态',
        top: '48%',
        textAlign: "center",
        left: "25%",
        textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: '400'
        }
    },
    legend: {

     

        icon:"circle",
        itemGap: 50,
        itemWidth:10,
        itemHeight: 10,
        top:"35%",
        left:"50%",
        data: getname,
        width:280,
        formatter: function(name) {

            for (var i = 0; i<getname.length; i++) {

				if (name == data[i].name) {

					return '{name|' + name+'}{value|\n'+getvalue[i] +'}{cell|(件)}{rate|\n' + getbl[i].toFixed(0) + '}{cell2|%}'  

				}

            }

        },

        textStyle: {

            rich: {

                name: {
                    fontSize: 13,

                    fontWeight: 400,

                    width: 50,

                    height: 35,

                    padding:[75,0,0,0],

					color:'#ffffff'

                },

                value: {

                    fontSize: 13,

                    fontWeight: 400,

                    width: 50,

                    height: 35,

                    //padding:[0,0,0,1],

					color:'#ffffff'

                },
                cell:{
                     fontSize: 13,

                    fontWeight: 400,

                    width: 50,
	color:'#ffffff',
                    height: 35,
                },

                rate: {

                    fontSize: 13,

                    fontWeight: 500,

                    height: 35,

                    width: 55,

                    align:'left',

					color:'#ffffff'

                },
                cell2:{
                      fontSize: 13,
	color:'#ffffff',
                    fontWeight: 500,
                }

            }

        }        



    },

    series: [{

        type: 'pie',

        radius:radius1,

        center:center,

        itemStyle: {

            normal: {

                color: function(params) {

                    return colorList[params.dataIndex]

                }

            }

        },

        label: {

            normal: {

                show: false,

            },

        },

        labelLine: {

            normal: {

                show: false

            }

        },

        data: data

    },{

        type: 'pie',

        radius: radius2,

        center: center,

        itemStyle: {

            normal: {

                color: function(params) {

                    return colorList1[params.dataIndex]

                }

            }

        },

        label: {

            normal: {

                show: false,

            },

        },

        labelLine: {

            normal: {

                show: false

            }

        },

        data: data

    }]

};

return option; 

