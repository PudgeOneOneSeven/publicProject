import { newBlock } from "./block.js"
////////
export const screenMatrix =[]//нужно получать матрицу с сервера!!!!
let column_display=7//"----->"
let row_display=7
let blockSize=100
////////////////////////

export function initScreen(){
   
    for(let y=0; y<row_display;y++){
       for(let x=0; x<column_display;x++)
          {screenMatrix[x+(y*column_display)]={
                            "color": `#37ff05`,
                            "size": blockSize,
                            "row": y,
                            "column": x,
                            "ord_X": x*blockSize-blockSize,
                            "ord_Y": y*blockSize-blockSize,
                            "dataBlock":`[data-block="${x+(y*column_display)}"]`
                        } 
          newBlock(x+(y*column_display)) }}}





