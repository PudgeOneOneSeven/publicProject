import {screenMatrix} from "./matrix.js"
//////////
let Block
let container = document.querySelector('.conteiner-zemlya');//выбираем контейнер


////////////

export function newBlock (i){// создаем блоки, работаем с матрицей[screenMatrix] , i=есть порядковый номер ячейки массива
    Block =document.createElement('div')//создаем новый блок и начинаем дальше добавлять ему свойства
    Block.style.position="absolute"//позиционируем блок с нуль-координат
    Block.id = `id${i}`//добавляем атрибут
    Block.dataset.block=`${i}`//добавляем атрибут
    container.append(Block)
    
}

export function changeBlock(matrix){
   matrix.forEach((element,index)=>{
    Block= document.querySelector(`[data-block="${index}"]`)
    Block.style.backgroundColor=element.color//считываем цвет
    Block.style.marginLeft=element.ord_X+"px"//позиционируем в пространстве(column)
    Block.style.marginTop=element.ord_Y+"px"//позиционируем в пространстве(row)
    Block.style.height = element.size+"px"//считываем размер
    Block.style.width = element.size+"px"//считываем размер
          
})
                     }
      
      


      