class Guitar{
    name
    type
    constructor(name,type){
        this.name = name
        this.type = type
    }
}

var kapma = new Guitar('卡马','原声')
var martin = new Guitar('马丁','原声')
var ibanez = new Guitar('依班娜','电声')

//对象
// var igusa_seiji = {
//     name:'井草圣二',
//     birth:['unknown','unknown','unknown'],
//     height:'unknowen',
//     type:'fingerstyle'
// }

//定义吉他品数1到21
var capo = []
capo.length = 21
for(let i = 0;i<21;i++){
    if((i+1)<10){
        j = '0'+ String(i+1)
    }
    else j = String(i+1);

    capo[i] =  j +'品'
}

//存储属性集合
var artist = new Set();
artist.add(['name','birth','contury','gender'])

// for(let x of artist){
//     console.log(x)
// }

// for (const x of capo) {
//     console.log(x)
// }

// capo.forEach((element,index,array) => {
//     console.log('elem=' + element+' indx=' + index)
//     // console.log('arry = ' + array)

// });

artist.forEach((Element)=>{
    console.log(Element)
})
