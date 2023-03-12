// function getsimboldata(mapName,XXX_ARR){
//     let temp_arr = [];
//     if (mapName === '中国'){
//         for (let arr of XXX_ARR){
//             if(temp_arr === []){temp_arr = arr.locs
//           } else{temp_arr = temp_arr.concat(arr.locs);
        
//                 }
//             console.log(arr.locs);
//             }
//         }
//     else{
        
        
//         temp_arr = arr.locs}    
        
//     return temp_arr;
// }

var JD_ARR = [{province:'广东',locs: [{
        name:
            'JD_16794K_广东省广州市增城市新塘镇陈家林凤凰城园区（京东华南第三物流中心）进入园区门口直走第二个路口右转后再左转',
        value: [113.560225, 23.128099, 16793.8],
    },
    {
        name: 'JD_4588K_广东省东莞市大岭山镇第一产业集团东莞大岭山松湖物流园2号楼1层',
        value: [113.842223, 22.899965, 4587.7]
    }]
},

{province:'北京', locs: [{
        name:
            'JD_16794K_广东省广州市增城市新塘镇陈家林凤凰城园区（京东华南第三物流中心）进入园区门口直走第二个路口右转后再左转',
        value: [113.560225, 23.128099, 16793.8],
    },
    {
        name: 'JD_4588K_广东省东莞市大岭山镇第一产业集团东莞大岭山松湖物流园2号楼1层',
        value: [113.842223, 22.899965, 4587.7]
    }]
}
]
;

/// another way
function getsimboldata(mapName,XXX_ARR){
    let temp_arr = [];
    let final_arr = [];
    for (let arr of XXX_ARR){
        if (mapName === '中国'){temp_arr = arr.locs}
        else if(mapName === arr.name){temp_arr = arr.locs}
        else {temp_arr = []}
        if(final_arr === []){final_arr = temp_arr;
       } else{final_arr = final_arr.concat(temp_arr);       
        }
      }
    return final_arr;                
}       
//   按照标记分类导入地址

console.log('怎么不对呢');

final_arr = getsimboldata('中国',JD_ARR);
console.log(final_arr);


// function getMappingValueArrayOfKey(array,keyName){
// 	if(Object.prototype.toString.call(array)=='[object Array]'){
// 	    console.log(Object.prototype.toString.call(array));
// 		return array.map((item,index)=>{
// 			return item[keyName]
// 		})
// 	}
// 	return 'null（参数一应为对象数组）';//不是数组
// }



// console.log(getMappingValueArrayOfKey(JD_ARR,'locs')[0].name);//["汪汪", "哼哼", "喵喵"]




 var myarr=[
    {
      "name": "航空项目",
      "total": 6,
      "finished": 1,
      "unfinished": 5,
      "finishedProject": [
        {
          "delivery": "2018-9-1",
          "project_no": "B181001",
          "tProjectPersonsNameList": [
            {
              "project_no": "B181001",
              "employee_id": null,
              "id": null,
              "employee": "陈雪"
            },
            {
              "project_no": "B181001",
              "employee_id": null,
              "id": null,
              "employee": "梁丹丹"
            },
            {
              "project_no": "B181001",
              "employee_id": null,
              "id": null,
              "employee": "陈礼超"
            }
          ],
          "project": "首都机场安全监控平台",
          "numberofpeople": 9,
          "customer": "千方科技"
        }
      ],
      "unFinishedProject": [
        {
          "delivery": "2018-12-31",
          "project_no": "B181002",
          "tProjectPersonsNameList": [
            {
              "project_no": "B181002",
              "employee_id": null,
              "id": null,
              "employee": "陈雪"
            },
            {
              "project_no": "B181002",
              "employee_id": null,
              "id": null,
              "employee": "梁丹丹"
            }
          ],
          "project": "山航运行品质分析系统",
          "numberofpeople": 2,
          "customer": "山东航空"
        },
        {
          "delivery": "2018-12-31",
          "project_no": "B181003",
          "tProjectPersonsNameList": [
            {
              "project_no": "B181003",
              "employee_id": null,
              "id": null,
              "employee": "陈雪"
            },
            {
              "project_no": "B181003",
              "employee_id": null,
              "id": null,
              "employee": "梁丹丹"
            }
          ],
          "project": "山东航空大屏",
          "numberofpeople": 7,
          "customer": "山东航空"
        },
        {
          "delivery": "2018-12-31",
          "project_no": "B181004",
          "tProjectPersonsNameList": [
            {
              "project_no": "B181004",
              "employee_id": null,
              "id": null,
              "employee": "陈雪"
            },
            {
              "project_no": "B181004",
              "employee_id": null,
              "id": null,
              "employee": "梁丹丹"
            },
            {
              "project_no": "B181004",
              "employee_id": null,
              "id": null,
              "employee": "袁智"
            },
            {
              "project_no": "B181004",
              "employee_id": null,
              "id": null,
              "employee": "王梦男"
            }
          ],
          "project": "山东航空PC",
          "numberofpeople": 15,
          "customer": "山东航空"
        },
        {
          "delivery": "2018-12-31",
          "project_no": "B181005",
          "tProjectPersonsNameList": [
            {
              "project_no": "B181005",
              "employee_id": null,
              "id": null,
              "employee": "陈雪"
            },
            {
              "project_no": "B181005",
              "employee_id": null,
              "id": null,
              "employee": "梁丹丹"
            }
          ],
          "project": "山东航空移动",
          "numberofpeople": 2,
          "customer": "山东航空"
        },
        {
          "delivery": "2018-12-31",
          "project_no": "B181006",
          "tProjectPersonsNameList": [
            {
              "project_no": "B181006",
              "employee_id": null,
              "id": null,
              "employee": "陈雪"
            },
            {
              "project_no": "B181006",
              "employee_id": null,
              "id": null,
              "employee": "王静"
            }
          ],
          "project": "昆明航空机场管控",
          "numberofpeople": 6,
          "customer": "昆明航空"
        }
      ]
    },
    {
      "name": "能源项目",
      "total": 7,
      "finished": 3,
      "unfinished": 4,
      "finishedProject": [
        {
          "delivery": "2018-9-1",
          "project_no": "C181001",
          "tProjectPersonsNameList": [
            {
              "project_no": "C181001",
              "employee_id": null,
              "id": null,
              "employee": "陈昱琨"
            },
            {
              "project_no": "C181001",
              "employee_id": null,
              "id": null,
              "employee": "丁学进"
            }
          ],
          "project": "美丽青岛",
          "numberofpeople": 5,
          "customer": "大圣"
        },
        {
          "delivery": "2018-9-1",
          "project_no": "C181002",
          "tProjectPersonsNameList": [
            {
              "project_no": "C181002",
              "employee_id": null,
              "id": null,
              "employee": "陈昱琨"
            },
            {
              "project_no": "C181002",
              "employee_id": null,
              "id": null,
              "employee": "丁学进"
            }
          ],
          "project": "青海国网",
          "numberofpeople": 5,
          "customer": "昆仑数据"
        },
        {
          "delivery": "2018-9-1",
          "project_no": "C181003",
          "tProjectPersonsNameList": [
            {
              "project_no": "C181003",
              "employee_id": null,
              "id": null,
              "employee": "陈昱琨"
            },
            {
              "project_no": "C181003",
              "employee_id": null,
              "id": null,
              "employee": "梁丹丹"
            }
          ],
          "project": "哑终端",
          "numberofpeople": 4,
          "customer": "XXX"
        }
      ],
      "unFinishedProject": [
        {
          "delivery": "2018-12-31",
          "project_no": "C181004",
          "tProjectPersonsNameList": [
            {
              "project_no": "C181004",
              "employee_id": null,
              "id": null,
              "employee": "陈昱琨"
            },
            {
              "project_no": "C181004",
              "employee_id": null,
              "id": null,
              "employee": "丁学进"
            }
          ],
          "project": "山东电网PC",
          "numberofpeople": 5,
          "customer": "山东鲁能"
        },
        {
          "delivery": "2018-12-31",
          "project_no": "C181005",
          "tProjectPersonsNameList": [
            {
              "project_no": "C181005",
              "employee_id": null,
              "id": null,
              "employee": "陈昱琨"
            },
            {
              "project_no": "C181005",
              "employee_id": null,
              "id": null,
              "employee": "丁学进"
            }
          ],
          "project": "山东电网大屏",
          "numberofpeople": 6,
          "customer": "山东鲁能"
        },
        {
          "delivery": "2018-12-31",
          "project_no": "C181006",
          "tProjectPersonsNameList": [
            {
              "project_no": "C181006",
              "employee_id": null,
              "id": null,
              "employee": "陈昱琨"
            },
            {
              "project_no": "C181006",
              "employee_id": null,
              "id": null,
              "employee": "丁学进"
            }
          ],
          "project": "鲁能智能",
          "numberofpeople": 3,
          "customer": "山东鲁能"
        },
        {
          "delivery": "2018-12-31",
          "project_no": "C181007",
          "tProjectPersonsNameList": [
            {
              "project_no": "C181007",
              "employee_id": null,
              "id": null,
              "employee": "陈昱琨"
            },
            {
              "project_no": "C181007",
              "employee_id": null,
              "id": null,
              "employee": "丁学进"
            }
          ],
          "project": "信通埃森哲",
          "numberofpeople": 2,
          "customer": "埃森哲"
        }
      ]
    },
    {
      "name": "综合项目",
      "total": 6,
      "finished": 6,
      "unfinished": 0,
      "finishedProject": [
        {
          "delivery": "2018-10-30",
          "project_no": "A181001",
          "tProjectPersonsNameList": [
            {
              "project_no": "A181001",
              "employee_id": null,
              "id": null,
              "employee": "袁智"
            },
            {
              "project_no": "A181001",
              "employee_id": null,
              "id": null,
              "employee": "张郁东"
            }
          ],
          "project": "920公安项目",
          "numberofpeople": 2,
          "customer": "腾讯"
        },
        {
          "delivery": "2018-9-1",
          "project_no": "A181002",
          "tProjectPersonsNameList": [
            {
              "project_no": "A181002",
              "employee_id": null,
              "id": null,
              "employee": "袁智"
            },
            {
              "project_no": "A181002",
              "employee_id": null,
              "id": null,
              "employee": "张郁东"
            }
          ],
          "project": "杭州智慧城市",
          "numberofpeople": 2,
          "customer": "阿里巴巴"
        },
        {
          "delivery": "2018-9-1",
          "project_no": "A181003",
          "tProjectPersonsNameList": [
            {
              "project_no": "A181003",
              "employee_id": null,
              "id": null,
              "employee": "袁智"
            },
            {
              "project_no": "A181003",
              "employee_id": null,
              "id": null,
              "employee": "张郁东"
            }
          ],
          "project": "辉略交通数据平台",
          "numberofpeople": 2,
          "customer": "辉略"
        },
        {
          "delivery": "2018-9-1",
          "project_no": "A181005",
          "tProjectPersonsNameList": [
            {
              "project_no": "A181005",
              "employee_id": null,
              "id": null,
              "employee": "袁智"
            },
            {
              "project_no": "A181005",
              "employee_id": null,
              "id": null,
              "employee": "张郁东"
            }
          ],
          "project": "腾讯FDC项目",
          "numberofpeople": 3,
          "customer": "腾讯"
        },
        {
          "delivery": "2018-9-1",
          "project_no": "A181006",
          "tProjectPersonsNameList": [
            {
              "project_no": "A181006",
              "employee_id": null,
              "id": null,
              "employee": "袁智"
            },
            {
              "project_no": "A181006",
              "employee_id": null,
              "id": null,
              "employee": "张郁东"
            }
          ],
          "project": "危货运输企业智能分析系统",
          "numberofpeople": 7,
          "customer": "博康"
        },
        {
          "delivery": "2018-9-1",
          "project_no": "A181007",
          "tProjectPersonsNameList": [
            {
              "project_no": "A181007",
              "employee_id": null,
              "id": null,
              "employee": "袁智"
            },
            {
              "project_no": "A181007",
              "employee_id": null,
              "id": null,
              "employee": "张郁东"
            }
          ],
          "project": "智慧农业",
          "numberofpeople": 4,
          "customer": "贵州航天智慧农业"
        }
      ],
      "unFinishedProject": []
    }
  ]
  
//这个是拿到所有的已完成的项目
var newMyDataArr=myarr.map(o=>o.finishedProject)
//建立一个空数组
let myfinally = [];
if (newMyDataArr && newMyDataArr.length > 0) {
    newMyDataArr.map(val => {
        if (val) {
        myfinally = [...myfinally, ...val];
        } else {
        myfinally = [...myfinally];
        }
    });
}

console.log("myfinally",myfinally)


