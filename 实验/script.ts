class Guitar{
  name:string
  type:string
  constructor(name:string,type:string){
      this.name = name
      this.type = type
  }
}

var kapma = new Guitar('卡马','原声')
var martin = new Guitar('马丁','原声')
var ibanez = new Guitar('依班娜','电声')

var capo = []

//定义吉他品数1到21
for(let i = 0;i<21;i++){
  let j
  if((i+1)<10){
      j = '0'+ String(i+1)
  }
  else j = String(i+1);
  capo[i] =  j +'品'
}


// capo.forEach((element,index,Array) => {
//     console.log(element)
// });
