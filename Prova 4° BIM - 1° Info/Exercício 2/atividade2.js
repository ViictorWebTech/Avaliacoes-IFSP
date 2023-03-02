function add(){
    var adi = document.querySelector(".tabela")
    adi.innerHTML += "<table> <tr> <td> # </td> <td>Lorem</td> <td>Ipsum </td> </tr> </table>"
}

function remover() {
   var removerTexto = document.querySelector('table') 
 removerTexto.remove()

}
function removert() {
    var removerTextoT = document.querySelector('.tabela') 
  removerTextoT.innerHTML = null
 
 }
 
 function passaCima(gg) {
    var btn = document.querySelector("button")
    btn.style.backgroundColor = gg
 }
 function passaCima2(gg) {
    var btn = document.querySelector(".botao1")
    btn.style.backgroundColor = gg
 }
 function passaCima3(gg) {
    var btn = document.querySelector(".botao2")
    btn.style.backgroundColor = gg
 }


