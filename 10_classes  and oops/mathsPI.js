const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

const panda = {
    name:"pandaJi", 
    price: 150,
    isAvailable: true,

    givePanda: function(){
        console.log('Panda mil gaya');
        
    }

}
console.log(Object.getOwnPropertyDescriptor(panda, "name"));

Object.defineProperty(panda , "name" , {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(panda , "name"));

for (const [key, value] of Object.entries(panda)) {
    if (typeof value != 'function') {
        console.log(`${key} :${value}`);
        
    }
    
}

