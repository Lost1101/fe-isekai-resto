![Cuplikan layar 2024-09-01 204634](https://github.com/user-attachments/assets/8cf0f3a0-a2de-4b25-ab3b-780615e331ec)
<h1 align="center">ISEKAI RESTO OwO</h1>

Build with React JS + Vite + Tailwind and the API with Express JS + Prisma ORM + MySQL. This is restaurant management app, serving ordering menu, queue, and payment. >.&lt;

# 📝 NOTES:

1. The UI/UX might be still not friendly for user :/ (no navbar)
2. The app might have a bug I didn't notice

# 🔌 SETUP
1. Of course, you should clone this repo
```
git clone https://github.com/Lost1101/fe-isekai-resto
```
2. Open code editor that can editing Javascript code, make sure the path inside /fe-isekai-resto
3. Run this to download all dependency from package.json
```
npm i
```  
5. MAKE SURE THE BACKEND (API) ALREADY RUN, you can clone the API here :
```
git clone https://github.com/Lost1101/be-isekai-resto
``` 
7. MAKE SURE MYSQL SERVER IS RUNNING, you can use XAMPP to turn it on
8. Run npm run dev to run the app
9. ENJOY!

# 💡 Roles

There is 3 roles inside the app:
**Admin**
1. Have access to all page
2. Full control manipulation data

**Waiter**
1. Only have access to /menu, /queue, /list
2. Have task **customer order > take the food from cook > completing the order list** also monitoring where empty table

**Cashier**
1. Only have access to /payment, /queue
2. Have task to complete payment

# 😢 Issue
Still need optimizing with refresh/real-time update if there is something change at backend (e.g. database), still need manual refresh

# 🔭 REMARKS
The program is still in development, so all kinds of changes, optimizations and fixes are expected
If you have any suggestions or comments, please express them in a more modern code format.

Thank you. Enjoy :D

# 📸 Screenshot
