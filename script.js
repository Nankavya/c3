let userData=[{id:1,name:"john",age:"18",profession:"developer"},
                {id:2,name:"jack",age:"20",profession:"developer"},
                {id:3,name:"Karen",age:"19",profession:"admin"}
            ]

let div=document.getElementById('div-1') 
let dropdown=document.getElementById('select-btn')
let button=document.getElementById('button');




function filterfunction()
{
   div.innerHTML=""
    let choice=dropdown.value
    if(choice==='profession')
    {
        div.innerHTML=""
        alert("Please select a profession")
    }
    userData.filter((event)=>{
        if(event.profession==choice)
        {
            let box=document.createElement('div')


            box.style.margin='2%'
            box.style.border='1px solid white'
            box.style.borderRadius="4px"
            box.style.padding="9px"
            box.style.width="30%"


            box.innerHTML=event.id+ "name :"  +event.name + "  age :  "+ event.age +" profession  :"+event.profession
            console.log(box)
            div.append(box)
        }
    }) 
}
// button.style.marginTop="10%"

button.style.marginLeft="2%"

button.addEventListener('click', filterfunction)

let btn=document.getElementById('btn')
let array=[]


function additem()
{
let display=document.getElementById("info-added")
let boxvalue1=document.getElementById('text1').value
let boxvalue2=document.getElementById('text2').value
let boxvalue3=document.getElementById('text3').value

let p={name:boxvalue1,age:boxvalue3,profession:boxvalue2}
let info=p
console.log(info)
userData.push(p)
userData.filter((event)=>{
    display.style.padding="10px"
    display.style.marginLeft="2%"
    display.innerText="name :"  +event.name + "  age :  "+ event.age +" profession  :"+event.profession
})


// array.push(boxvalue1)
// array.push(boxvalue3)
// array.push(boxvalue2)

// userData=[...array,...userData]


alert("user has been added")
}

console.log(userData)
btn.addEventListener('click',additem)



