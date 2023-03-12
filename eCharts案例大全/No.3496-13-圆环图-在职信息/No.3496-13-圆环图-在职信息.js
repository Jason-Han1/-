var  getname= ['专必', '专选','通必', '通选'];

var  getvalue=[140,125,118,112];

var  getbl=[40,30,18,12];

var data = [];

for(var i = 0;i<getname.length;i++){

	data.push({name:getname[i],value:getvalue[i]})

}

var colorList = ['#1890FF','#B9A9FF','#12DDA1','#FFB026'];

var colorList1 = ['#1183ED','#A793FF','#00CF92','#EF9D0F'];

option = {

    tooltip: {

        trigger: 'item',

        show: false

    },


    legend: {

        type:"scroll",

        orient: 'vertical',

		height:'88%',

        right: '11%',

        top: 'center',

        icon: 'circle',

        itemWidth: 10,

        itemHeight: 10,
        
        itemGap:10,

        data: getname,

        formatter: function(name) {

            for (var i = 0; i<getname.length; i++) {

				if (name == data[i].name) {

					return '{name|' + name+'}{value|'+getvalue[i] +'门}{rate|' + getbl[i].toFixed(0) + '%}'  

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

                    padding:[0,0,0,10],

					color:'#666666'

                },

                value: {

                    fontSize: 13,

                    fontWeight: 400,

                    width: 50,

                    height: 35,

                    //padding:[0,0,0,1],

					color:'#333333'

                },

                rate: {

                    fontSize: 13,

                    fontWeight: 500,

                    height: 35,

                    width: 55,

                    align:'left',

					color:'#666666'

                }

            }

        }        



    },

    series: [{

        type: 'pie',

        radius: ['35%', '55%'],

        center: ["25%", "50%"],

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

        radius: ['30%', '40%'],

        center: ["25%", "50%"],

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

