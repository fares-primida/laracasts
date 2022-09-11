let backcolor = [1,2,3,4,5,6,7,8,9 , "A" , "B" , "C" ,"D" ,"E" , "F"]
let finalcolor = []

for (i=0; i<6 ; i++) {
    finalcolor.push(backcolor[Math.floor(Math.random() * backcolor.length)])
    console.log("fares")
}
document.body.style.backgroundColor = finalcolor