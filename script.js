// put you hand in the html element
let input = document.querySelector("#inputt") ;
let btn = document.querySelector("#btn") ;
let boxs = document.querySelectorAll(".box"); 

let drag = null;
// $$$$----this function is trigger or work when click on ADD button---$$$$
btn.onclick =function(){
    ////////// check that input value not equal null ///////////
    if (inputt.value !=" ") {
        // use += instead of use = only 
        //  beacause +  is allow you preserve all old result and add new one
        // =   add new and delete all old result
        // box[0]==meaning first item in array which return from select all
        boxs[0].innerHTML +=
        `<p class="item" draggable="true">${input.value}</p>`
        // its importnt to use `` instead of "" or ''  
        
        input.value=" ";
        //////// to empty the input field after finishing/////////
    }
    dragitem();

}

function dragitem() {
    // كده انا بحدد كل العناصر الى سيتم انشاءها فى المستقبل وعندها class ="item"
    let items = document.querySelectorAll(".item");
    // we use select all to make array of elements to overloop 

    // -----looping over small new task which add-----------------------------------------
    // items.forEach( function(item){ 
    items.forEach(item=> {
        // when you take item
        item.addEventListener("dragstart",function(){
            drag=item;
            // meaning that mouse drag item selected and have its value
            item.style.opacity="0.5"
            // console.log("drag start")
        })

        // when you put item
        item.addEventListener("dragend",function(){
                drag=null;
                item.style.opacity="1"
                // console.log("drag end")
        })

        // -----looping over big container-------------
        boxs.forEach(BOX=>{
        // ======chabge color=====
            // when you drag the item and be on box
            BOX.addEventListener("dragover",function(e){
                //change color when the mouse is drag over it fill with item
                e.preventDefault()
                // stop the default of dragover 
                this.style.background="red"
                this.style.color="white"
            })
            // when you leave  box
            BOX.addEventListener("dragleave",function(){
            this.style.background="white"
            this.style.color="black"
            })
            // ======final drop =====
            // when put item in boxb 
            BOX.addEventListener("drop",function(){
            BOX.append(drag)
            this.style.background="green"
            this.style.color="#435"
            })
        })
        // -----big-------------------------------- 
        
    })
 // --------------small---------------------------------------------------------------------

}    