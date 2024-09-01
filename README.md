<h1 align="center">ISEKAI RESTO OwO</h1>

<p align="center">
  <img src="https://github.com/user-attachments/assets/8cf0f3a0-a2de-4b25-ab3b-780615e331ec" alt="Isekai resto" width="200"/>
</p>

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
5. MAKE SURE THE BACKEND (API) IS RUNNING, you can clone the API here :
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
![screencapture-localhost-5173-login-2024-09-01-20_54_29](https://github.com/user-attachments/assets/0d300c5e-980b-42d3-84dc-0427883dfa33)
![screencapture-localhost-5173-menu-2024-09-01-20_51_19](https://github.com/user-attachments/assets/a17731d2-57ea-471c-956d-f998122f5b50)
![screencapture-localhost-5173-queue-2024-09-01-20_52_12](https://github.com/user-attachments/assets/05d3ec75-5f35-4da7-9b48-5b5651bde194)
![screencapture-localhost-5173-list-2024-09-01-20_52_24](https://github.com/user-attachments/assets/3d21cb09-9df6-42d7-a09c-a17135ee3c38)
![screencapture-localhost-5173-payment-2024-09-01-20_52_36](https://github.com/user-attachments/assets/871304fe-4648-4798-9fca-725a283cb251)
![screencapture-localhost-5173-admin-2024-09-01-20_52_55](https://github.com/user-attachments/assets/b31b6b81-e359-4b24-92fc-438c7f4b8c40)
![screencapture-localhost-5173-admin-2024-09-01-20_53_04](https://github.com/user-attachments/assets/e529efc7-8cb5-4d82-8e72-295693106c26)

