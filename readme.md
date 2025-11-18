### Q1: What are some differences between Interfaces and Types in TypeScript?

##### Answer:
Interface এবং Type — দুটোই object-এর structure ঠিক করতে ব্যবহার হয়।  
কিন্তু কিছু গুরুত্বপূর্ণ পার্থক্য আছে:

1. **Merging**  
   - Interface বারবার declare করলে একসাথে merge হয়ে যায়।  
   - Type কখনই merge হয় না। একই নামে আবার type লিখলে এরর আসে।

2. **Extending**  
   - Interface `extends` ব্যবহার করে বাড়ানো যায়।  
   - Type `&` (intersection) দিয়ে বাড়ানো যায়।

3. **Usage**  
   - Interface সাধারণত object-এর structure define করতে ব্যবহার হয়।  
   - Type আরও flexible — union, primitive alias, function type—সবকিছু define করা যায়।

সংক্ষেপে:  
**Interface → structure define করতে ভালো**  
**Type → বেশি flexible ও বেশি কাজে লাগে**

---

## Q2: What is the use of the keyof keyword in TypeScript? Provide an example.

### Answer:
`keyof` হলো TypeScript-এর একটি keyword যা কোনো object-এর সব property নামকে union type হিসেবে বের করে দেয়।

সহজ ভাষায়:  
**`keyof` → object-এর key গুলোকে টাইপ হিসেবে পাওয়া যায়।**

### Example:
```ts
interface Car {
  brand: string;
  model: string;
  year: number;
}

type CarKeys = keyof Car;
// ফলাফল: "brand" | "model" | "year"

function printKey(key: CarKeys) {
  console.log(key);
}

printKey("brand"); // ঠিক আছে
// printKey("color"); // এরর: "color" Car-এর key না

