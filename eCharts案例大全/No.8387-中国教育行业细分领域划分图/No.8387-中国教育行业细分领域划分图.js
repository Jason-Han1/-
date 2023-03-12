var data = [
    
    {
    name: '校外',
   
    itemStyle: {
        color: '#292929'
    },
    
    
    children: [ {
        name: '职业培训领域',
        itemStyle: {
            color: '#a3a3a3'
        },
        
        
        
        children:  [{
            name: '职业考试培训',
            value: 1,
            itemStyle: {
                color: '#8b8c90'
                       }
                   },
        
           {
            name: '职业技能培训',
            value: 1,
            itemStyle: {
                color: '#9d977f'
                       }
           }, 
        
        
            {
            name: '企业培训',
            value: 1,
            itemStyle: {
                color: '#c9b583'
                       }
            
            }
            
                  ]
                  
                  
                },
                
            
                
                
                 { name: '高等教育领域',itemStyle: {color: '#686868'},
         
          children: [{name: '成人继续教育',value: 1,itemStyle: {color: '#80a89d'}},
                     {name: '考研',value: 1,itemStyle: {color: '#7a9bae'}},
                     {name: '留学',value: 1,itemStyle: {color: '#039fb8'}}
                    ]
                },
                  { name: '早/幼教领域',itemStyle: {color: '#434343'},
         
          children: [{name: '亲子园/早教园',value: 1,itemStyle: {color: '#5e777b'}},
                     {name: '启蒙内容',value: 1,itemStyle: {color: '#120c0c'}}
                    ]
                },
            ]
    
    
    }, 




{
    name: '校内',
    itemStyle: {
        color: '#db6d2c'
    },
   
     children: 
           [ {name: '教育信息化领域',itemStyle: {color: '#ffa46d'},
        
                children:
                 [{name: '幼儿园',value: 1,itemStyle: {color: '#cfade2'}},
                 {name: '小学',value: 1,itemStyle: {color: '#8f85b0'}  },
                 {name: '初中', value: 1,itemStyle: { color: '#7e89b3'} },
                 {name: '普通高中',value: 1,itemStyle: {color: '#de5e94'}  },
                 {name: '中专/职高/技校', value: 1,itemStyle: {color: '#e65656'}  }, 
                 {name: '普通本/专科',value: 1,itemStyle: {color: '#e73451'}  },  
                 {name: '硕博/MBA',value: 1,itemStyle: {color: '#f2684b'}  },
                 {name: '成人本/专科',value: 1,itemStyle: {color: '#dd4c51'}  }  ]
             }
           ]
    
    
}, 


];

option = {
    title: {
        text: '',
       
        textStyle: {
            fontSize: 14,
            align: 'center'
        },
        subtextStyle: {
            align: 'center'
        },
        sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
    },
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        center:['50%','53%'],
        radius: [0,'25%'],
        sort: null,
        levels: [{}, {
            r0: '15%',
            r: '30%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential',
                fontSize:'13',
            }
        }, {
            r0: '30%',
            r: '63%',
            label: {
                align: 'left',
                   fontSize:'13',
            }
        }, {
            r0: '60%',
            r: '63%',
            label: {fontSize:'13',
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};
