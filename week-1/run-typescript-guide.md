
# How to Run a TypeScript (.ts) File

## ✅ Step-by-Step Process

### 1. Install Node.js
Download and install from: [https://nodejs.org](https://nodejs.org)

### 2. Install TypeScript Globally
```bash
npm install -g typescript
```

### 3. Create a TypeScript File
Example: `index.ts`
```ts
const greet = (name: string): void => {
  console.log(`Hello, ${name}!`);
};
greet("Sunny");
```

### 4. Compile the TypeScript File to JavaScript
```bash
tsc index.ts
```
This creates a file named `index.js`.

### 5. Run the Compiled JavaScript File Using Node.js
```bash
node index.js
```

---

## ✅ Optional: Run .ts File Directly Using ts-node

### 1. Install ts-node and typescript
```bash
npm install -g ts-node typescript
```

### 2. Run the TypeScript File Directly
```bash
ts-node index.ts
```
