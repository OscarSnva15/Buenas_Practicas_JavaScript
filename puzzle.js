const addElement=(...copyUser)=>copyUser
let user= ['javier','david','rosa','virgilio','mercedes']
for(let copyUser of user)
{
    user.push(addElement(...copyUser))   
}
console.log(`Numero de elementos en el array ${user.length}`)

/**
 * segun la imagen,¿que resultado mostrara console.log?
 * 
 * a) 10
 * b) 6
 * c) 11
 * d) 5
 * c) Undefine
 * e) buccle Infinito
 */
