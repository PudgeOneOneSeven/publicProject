
import { screenMatrix } from "./matrix.js"
//////////
export function go () {
    
    document.onkeydown = function (e) {

    if (e.key == "ArrowRight"){screenRight()}
    if (e.key == "ArrowLeft"){screenLeft()} 
    if (e.key == "ArrowUp"){screenUp()}
    if (e.key == "ArrowDown"){screenDown()}
    }
}

 function screenRight(){
    screenMatrix.forEach((element)=>{
        element.ord_X-=10})}  

function screenLeft(){
    screenMatrix.forEach((element)=>{
        element.ord_X+=10})} 

function screenUp(){
    screenMatrix.forEach((element)=>{
        element.ord_Y+=10})}  

function screenDown(){
    screenMatrix.forEach((element)=>{
        element.ord_Y-=10})}  