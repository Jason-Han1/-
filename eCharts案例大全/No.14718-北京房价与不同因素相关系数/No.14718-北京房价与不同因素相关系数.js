var data = [];
var labelData = [];
labelData =[{
   value:2,
   name:'Number of bedrooms'
},
{
   value:2,
   name:'Floor'
},{
   value:2,
   name:'Area'
},{
   value:2,
   name:'Number of livingrooms'
},{
   value:2,
   name:'Bulit time'
},{
   value:2,
   name:'Decoration'
},{
   value:2,
   name:'District'
},{
   value:2,
   name:'Distance to subway'
}
];

data =[{
   value:0.067439776,
   name:'Number of bedrooms'
},{
   value:0.062579883,
   name:'Floor'
},{
   value:0.093156898,
   name:'Area'
},{
   value:0.085,
   name:'Number of livingrooms'
},{
   value:0.278530251,
   name:'Bulit time'
},{
   value:0.111,
   name:'Decoration'
},{
   value:0.914,
   name:'District'
},{
   value:0.266988,
   name:'Distance to subway'
},
]

option = {
    title: {
        left: '50%',
        textAlign: 'center',
        top: '20%'
    },
    color: ['#3EACE5','#3EACE5','#3EACE5','#3EACE5','#3EACE5','#3EACE5','#EE31C3','#EE31C3'],
    
    series: [{
        type: 'pie',
        data: data,
        roseType: 'area',
        zlevel: 2,
        itemStyle: {
            normal: {
                color: 'white',
                borderColor: ['#3EACE5','#3EACE5','#3EACE5','#3EACE5','#3EACE5','#3EACE5','#EE31C3','#EE31C3'],
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        label: {
            normal: {
                show: false
            }
        }
    }, {
        type: 'pie',
        data: labelData,
        radius: ['80%', '100%'],
        zlevel: 4,
        itemStyle: {
            normal: {
                borderColor: 'white'
            }
        },
        label: {
            normal: {
                position: 'inside'
            }
        }
    }]
};
