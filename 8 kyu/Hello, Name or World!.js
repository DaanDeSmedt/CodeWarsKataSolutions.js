/**
 * 
 * Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
 * Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
 * 
 * URL : https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
 * 
 */

function hello(name) {
  return `Hello, ${name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`
}