import { initScreen, screenMatrix } from "./matrix.js"
import { go } from "./user.js"

import { changeBlock } from "./block.js"


initScreen() 
setInterval(()=>{changeBlock(screenMatrix)},4)            
go()
