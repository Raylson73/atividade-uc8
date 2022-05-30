var caixa =[];
var pecas=[
    {tipo:"saco de pregos",peso: 100},
    {tipo:"Chave de philips",peso: 20}, 
    {tipo:"vaso",peso:150}, 
    {tipo:"Rojao",peso:40}, 
    {tipo:"furadeira",peso:10}, 
    {tipo:"lajota",peso:50}
];


function add_pecas(tipo_,peso_){
    let obj = {tipo:tipo_, peso: peso_};
    pecas.push(obj);

}

function add_to_caixa(peca){
     if (caixa.length===10){
         return "add a lista de compras";
     }
     else{
         
        if(peca.peso>100){
            return "Peso nao e viavel";
        }
        caixa.push(peca)
     }
}

