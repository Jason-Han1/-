var symbolIcon = "/asset/get/s/data-1565836233540-7UHP9D1bb.png";

var ringBg = "/asset/get/s/data-1565835657730-Gg-Tn_mWy.png";

let minorityPeople = 70 // 少数民族人数
let hanNationality = 100 - minorityPeople

option = {
    backgroundColor: "#03141c",
    tooltip: {
        trigger: 'item',
        formatter:function (p){
            let dom = `${p.marker} ${p.name} ${p.value}%`
            return dom
        }
    },
    legend: {
          x: "center",
          bottom: "5%",
          orient: "horizontal",
          itemWidth:12,
          itemHeight:12,
          itemGap: 20,
          textStyle: {
            color: "#fff",
          },
    },
    calculable: true,
    xAxis: {
        max: 10,
        show: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        max: 10,
        show: false,
        splitLine: {
            show: false
        }
    },
    series: [
        {
            // name:'少数民族人数',
            type: 'pie',
            roseType: 'radius',
            radius: [80, 120],
            center: ['50%', '50%'],
             data: [
              {
                name: "女性",
                value: 80,
                itemStyle: {
                  color: "#f53468",
                },
                labelLine: {
                  length: 0,
                  length2: 0,
                },
                label: {
                  position: "inside",
                  color: "rgba(0,0,0,0)",
                  width: 40,
                  height: 40,
                  backgroundColor: {
                    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFdklEQVRYhbVYfWxTVRT/9b32lZa2G3Mb+3IdGIYiDkaCTBwYyKIS/QNMRLJlkKhg9A+F6CAYEyTxI4Esi5JIJIqJClE0ihpFhkFxmyNuUHHAZG5ItwaF4Qbbunbte605j3e72/Vjr6v8kpf2nHffvb93z3nn4xoKixdiCpgBoBLAfABOAA4AXgD/AjgPoBnAxWTTetyuuHpjClzsAJ4FUAOgTMf4ywC+ArAfQLveRfQQKtGIbNU7qYYC7Tm6aDu2deVWHEuXEO3GXm13IrAZRNwrOTBHtKJQlFTZFw5hMCyjW/bhVHAIfcoY/0g5gMbSqydbiGBXbkVHogWT+dA72ttFsFzKRLVlJpabM2GEIembdMmj+Nzfj099V1SyHLoBrPe4Xa2pEPoOwCom3Gm04lX7LCwy2eONTYqBUBC7Rnrxpb8f4fGBtH2rPG7Xj3oIfayZSkWNZSa225yQDELKZHj8MDaAuqEeeMMK09JXudLjdv3Kj5u4ymaezFZbMXbYZ6VNhlBlzsJHM+YhSzAx1XTNP6PAr7QUQAMTnrEW4GlrQdpEeMw3Tse7GXNhGX/BRUXO8ucTEdoTYSZlYIut+H8lw7DAZMPLthJe9VaRs/yeiYRWEFv6Q+xft8+OsWU8CEtLYW3bC+OmB1Mi9YQlFxWSg1dFTMfWfYMpai15KBTNuiYW75un/ipNZ1MiRNhmc/KB4/4iZ7mZESLnqlAXgAEbrPm6JxWXlkHpvIhw5+WUCd1tnI4KKYNX1TJCDzMN+U7O+FeQFGQuoTgfSvOZlMkwrJ6WzYsPQUsdlUyzLJpxFCwnGmCwTovRSxvXqNdk8L/QgNAvXVGjKqXMKJERWsw0ZSZbwml9D2yJJnjkTcgnOxDceTBmrPnDOoSvDCBQ935SmmSNfFHC30qAxLwiZ/ntZLJSNqBEjN2BeDC9uBqG7Ewox+JXFYKzAKE/+3TNVSJaeLGUCEXsZDfoK4+MVUugtJ+LMQFBXHfTA5TDcXNnDKhS4OBIOSfQgrQ78jctce+bHl+J0PkehK8Opzq1CiJ0gwnDYXnSBwwOK8KjfhjXVcUERJIN2TMQePsL3QRGxpMtYYhsRPueQ9Ilxc8nv7iQ9zWqFy0uVi6Aac0K1blDbZ0w1ayC/PWJlOLSJcXHi10CX+92BL26JyJSY+t3I7DnEEyPLoN55yZg1I9g/WHdc/SHguwLI/zjcbv6BK1DUNEUuK57MkOuHaYd1SoRitZj9QegnO1Wc5u0+yn1/mRojl5P5UEm+55pWgI3VNbJojWREO4ohHjXbMg/tUcFPOWTZgRzD8FUtxaWb3ep94P7jyQ04WH/NV48Cq5ibGX5bJO1AC/FKT0o2Ak5WTf95UKvuvikO1i3FsLsQoy98l4MqXOyF48NdPBl7TSP2zXGCFH5cRxa+XH0toXIE6SkC6aLDdc70RqIfOAtHrdLDWAsDlGxfZr+UIewfagHoVtAguEz31WeDPjuhg+MkWRFvtQw0ntLyJwJjuC1kUu8arPH7Yr0aaIjI4/9d1NgYmXAqeCwar6ptD6JQH6z8cYFDI8Hw9Met+tJfvjE1EFF/gEmUD+1c/gvBMLpG5DaoNrB82qfpsE7sRHFhB1ioLi/BMAckjtkL44HBjHXaEW+ztKWx2BIVl+q3tuHwPg3RdHwEY/bFZMQ4xGCtkszWa10LRRU22Kyv0Mwokg0Q9DRSu8bvaw2h7/LI/wtaqVXe9yupnjPJas3niP/5g8bfg5cVy+7QcRiyYFSoxUFQvRhw0XZh7bYwwaGtA4bGKZ6HMPjN+04ppHpKMVMlRADFXJErBpApLFLAnZg9QGAtonjEp2gpXukR8Qoz/BHen9oiZJ8JSHiEgLwHxAX487Ryt3uAAAAAElFTkSuQmCC',
                  },
                  rich: {},
                },
              },
              {
                name: "男性",
                value: 20,
                itemStyle: {
                  color: "#119dff",
                },
                labelLine: {
                  length: 0,
                  length2: 0,
                },
                label: {
                  position: "inside",
                  color: "rgba(0,0,0,0)",
                  width: 40,
                  height: 40,
                  backgroundColor: {
                    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFAklEQVRYhbWYe4hUdRTHP/fendlHuba4muLolPlAc5e2IvJJC5VLmRDYEkhqJIWaiX8YtWBUEEH2IPtDJfFBSGiIVBSuBT6ydaNifGyaW8nO7ijt1voed+d1b5zr3OHO9d55rNMXLvzO+b2+v9859/x+56eMHX8fQ4QfmAiMA6qBQaAPOANcyjdkJBxy1ZcVyWUy8CzwJPBQjnYdwGHgS2B/MRMUSqgJeBcodDunp78VwHng7WhL++ZCOuYz2f3ARtfd0HzoNQGM6jsxym9DScZQohdRLnSjDF51GysMrIq2tH8twsWXyosmtBDYBaiWwvBXkpr6KMlpj5EK1IOvwqWbgdr3F1rnYXwnvkG5dM7ZYH20pf3VYgmtAjZkJM1H4sFmEjOXYFRWey3AhZtO2W/78R/ciHKl117zI7A8Eg6dLITQi0DG3vqIILGn30EfNbFwIs5J4tfxt75P2clvs0hFwqHZzraqQ55nJ5MKPsDg0q23RAbT1FXEnnqDeONKoWepZwWCDe/lIjQS2JYhE6hjsPkD02FLhcSM54g3LrePtjYQbFjgRUhajjFXNGwksYXrPZz21pCYsZhk3RP2MTbYBYvQBOAtSxmbvw6j6o6Sk7EQn7fWDBdpBAPBhsy2WYQyitSkOaTuzhWEbx0SPuKNK+zjrLMK1l92AaiRwsCSLehjp7tOujSo8lGTryhCa/Yl2B7Wb64wdCo3PYN6MROnmiLhUKscHXMtMvrICZ5k7KjZHMuSdzeWMXqYwtyvEll6r+BnQlFJ1s/HfyjzU4tzt4rJMrEgNWlu/iWXEOIeNpiC7NCsDKFx9QXN5rXynDviAn3UPRjlt6PErkllXSDYMFwI3Ws11WsnFDRQSUxmQsGovQvlXIelmComq7Uko2p4USssBYzKrPBSKztUlRELDISlMpnA8GX1qRJClwGTpjJ4DaNiWN5BnCbzQiEE5eC14aqYrCdTeaUvZ2eJJ04yEpu8Jpa2rjHITij7WtItO3RCPFwkte9P0/PdkC8oepHqu2YwZWfcvVMyhtrfbdd0CqEjwCKRtPCvJKfPc+0rK93uYqozi/wcP6/TfCB5U53193lB6zkOeqbfT5FwKCEmO2BptM6DkEp4DuBGRuBGRpCLjKDs9Pd20by9qek86pQIysAV88qZD4cX+EwTyc54mkP8YIzK31cN1zpl4DLaqe/sqt3Y0qAPgS1S8LXtuGE2NTtDerNOY/XMG7qP25I3BUE3HxP/8do939HPUOIDlngsEg79juNOLe4+SgrxOctIzFmWd6eGCslKKrcusfuPedLjuDG+bBX8R7aidf38v5CRc6t8b4vTmVstwU7oC+CoWTJ0yve8jtrbWVo2yRjle15D7Q9bGsN+OXQSIl3Za62kYudKtG73R4FioVy/RMXnr6B1/WLv2RwJh7Im0KqHj7bLveldWixklWScso59KHrqRqaqakMio51tp2LXGtR/ztrVqyPh0DZnW6/MVS5Le4ERlkLy+MTs50lOe9zMZAuBeq4Df9sOtD9+cLaWrHWT2xC5cnupkIeGh+1KSaVTkx8xk0jzgiWPDXIgJwbM2KL+24XWc8wkIX+TA3KBfiHa0t46lMcGC/Lo8IkE3oK2xRuSWWyMtrT3M8TXDyckMK0BphVBQq42n6afdLIcqBQvaBLJ5ZsCNKaTA7kljE/fp6KArP50+sAWxzlUxPgA/AfhqbPt67XSFgAAAABJRU5ErkJggg==',
                  },
                  rich: {},
                },
              },
            ],
            emphasis: {
              labelLine: {
                show: false,
              },
            },
        },
        {
            type: 'scatter', 
            zlevel: 60,
            hoverAnimation:false,
            animation:false,
            silent:true,
            itemStyle: {
                opacity: 1 // 控制 满意icon的 透明度
            },
            data: [
                { // 外圈 点状圈
                    value: 5,
                    symbol: 'image://'+ringBg, 
                    symbolSize: 290, 
                    symbolOffset: [0, 0]
                },
            ]
            
        },
        
    ]
};