// Loop through an object and print the key-value pairs with their types

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };



    // for(let props in myObject){
    //     console.log(props,":",myObject[props]," |","type: ",typeof props)
    // }

    // console.log(Object.entries(myObject))

    // console.log(typeof myObject.isStudent)

    for(let prop of Object.entries(myObject)){
        console.log(prop[0],": ",prop[1],"|","type: ",typeof prop[1])
    }