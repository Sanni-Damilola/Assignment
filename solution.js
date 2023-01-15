// assignment 1
// 1
console.log('This i solution 1')
document.getElementById('bluebox').style.background = 'blue' 

//2
var firstname = 'Damilola'
var lastname = 'fortune'
var age = '18'

var result = 'hi, my name is ' + firstname + ' im ' + age + ' year old and im learn javascript'

document.getElementById('bluebox').innerHTML = result

//3
const div = () => {
   let y = 101
   let z = 7
   return y / z
}
console.log(div(1,1))


//4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

if ((phone3 >= 999999999) && (phone3 <= 9999999999)) {
   send = 'vaild'
} else {
   send = 'notvaild'
   console.log(send)
}

//5
squreroot = 32
console.log(squreroot*6)


//7

// var quantity = "25";
// var number = 6;
// var pressure;
// var temperature = null;

// console.log(quantity += quantity); 
// console.log( (7+5) / number + 2 ); 
// console.log(pressure); 
// console.log(temperature); 
// console.log(typeof pressure); 
// console.log(typeof temperature);


//8



// assignment 2
//2
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
console.log(classification.sort().reverse())
console.log(classification.slice(3,6))

// 3
var course = {
   'title': "Learn to Code in Python 3",
   'categories': ['programming', 'technology', 'python'],
   '5_stars_reviews': 420,
   '4_stars_reviews': 80,
   '3_stars_reviews': 33,
   '2_stars_reviews': 20,
   '1_stars_reviews': 4
}
document.getElementById('bluebox2').style.background = 'blue'
document.getElementById('bluebox2').innerHTML = course.title + course.categories



// const per = () => {
//    let total = course["1_stars_reviews"] + course["5_stars_reviews"] + course["4_stars_reviews"] + course["3_stars_reviews"] + course["2_stars_reviews"]
// }
// console.log(per.total
   
   //4
   var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
   console.log(shoppingList.pop())
shoppingList[0] = "Cheese"  
shoppingList[1] =  "Eggs"  
console.log(shoppingList)