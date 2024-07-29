//creating object
export function createUser(name, add, role, isActive) {
  return {
    name,
    add,
    role,
    isActive,
  };
}
//testing object comparison with deep equality
export function deepEqulity(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
