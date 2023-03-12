option = {
        textStyle:{
          fontSize:10,
        },
        visualMap: {
        type: 'continuous',
        min: 0,
        max: 50,
        inRange: {
            color: ['#f5af19', '#a17fe0','#59C173']
        }
    },
        series:{
            type:'sunburst',
            center:['50%','50%'],

            levels: [{r0: '0%',
                    r: '5%',},{
                r0: '5%',
                    r: '25%',
            },{
                r0: '25%',
                    r: '45%',
            }, {
                    r0: '45%',
                    r: '50%',

                    label: {
                        position: 'outside',
                        padding: 3,
                        silent: false,
                       color:'#2F4F4F',
                        fontSize:8,



                    },
                    }],

            data:[





                {name: '长沙南',children:[
                        {name:'始发',value:8,children: [{name:'始发晚点',value:4}]},
                        {name:'终到',value:8,children:[{name:'终到晚点',value:3}]},
                        {name:'通过',value:23},
                        {name:'停站',value:24,children:[{name:'新增晚点',value:3},{name:'增强晚点',value:3},{name:'完全恢复',value:3},{name:'部分恢复',value:3}]}
                    ]},



                {name: '株洲西',children:[
                        {name:'通过',value:20},
                        {name:'停站',value:30,children:[{name:'新增晚点',value:5},{name:'增强晚点',value:3},{name:'完全恢复',value:5},{name:'部分恢复',value:2}]}
                    ]},


                {name: '韶关',children:[
                        {name:'通过',value:20},
                        {name:'停站',value:30,children:[{name:'新增晚点',value:5},{name:'增强晚点',value:3},{name:'完全恢复',value:5},{name:'部分恢复',value:2}]}
                    ]},


                {name: '广州北',children:[
                        {name:'始发',value:24,children: [{name:'始发晚点',value:4}]},
                        {name:'终到',value:20,children:[{name:'终到晚点',value:3}]},
                        {name:'通过',value:10},
                        {name:'停站',value:30,children:[{name:'新增晚点',value:7},{name:'增强晚点',value:3},{name:'完全恢复',value:5},{name:'部分恢复',value:2}]}
                    ]},

                {name: '广州南',children:[
                        {name:'始发',value:20,children: [{name:'始发晚点',value:4}]},
                        {name:'终到',value:20,children:[{name:'终到晚点',value:3}]},
                        {name:'通过',value:23},
                        {name:'停站',value:24,children:[{name:'新增晚点',value:3},{name:'增强晚点',value:3},{name:'完全恢复',value:3},{name:'部分恢复',value:3}]}
                    ]},



            ]
        }
    }