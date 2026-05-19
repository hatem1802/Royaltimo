كيفية تنزيل الصور المحلية ونشر المشروع

هذا المجلد يحتوي على ملفات `assets/css/styles.css` و `assets/js/script.js`، لكن الصور لم تُحمَّل تلقائيًا. لإكمال التحويل، شغّل الأوامر التالية في PowerShell من جذر المشروع (المجلد الذي يحتوي على ملف HTML).

PowerShell (تأكد من فتح التيرمنال في المسار الصحيح):

Invoke-WebRequest -Uri "https://i.ibb.co/Y45WHDjf/IMG-20260513-083144-453.jpg" -OutFile "assets/images/IMG-20260513-083144-453.jpg"
Invoke-WebRequest -Uri "https://i.ibb.co/C51D8Zq9/IMG-20260513-083144-501.jpg" -OutFile "assets/images/IMG-20260513-083144-501.jpg"
Invoke-WebRequest -Uri "https://i.ibb.co/FFg4sRW/IMG.jpg" -OutFile "assets/images/IMG-FFg4sRW.jpg"
Invoke-WebRequest -Uri "https://i.ibb.co/hFYQ5S18/387951c8-d42f-48a3-9ecf-04b88aa6396b.jpg" -OutFile "assets/images/387951c8-d42f-48a3-9ecf-04b88aa6396b.jpg"
Invoke-WebRequest -Uri "https://i.ibb.co/m5kzVTPW/IMG.jpg" -OutFile "assets/images/IMG-m5kzVTPW.jpg"
Invoke-WebRequest -Uri "https://i.ibb.co/bjXr0GR9/IMG-20260517-WA0034.jpg" -OutFile "assets/images/IMG-20260517-WA0034.jpg"
Invoke-WebRequest -Uri "https://i.ibb.co/jZqkk6Cb/IMG.jpg" -OutFile "assets/images/IMG-jZqkk6Cb.jpg"

بعد تنزيل الصور، تأكد أن المسارات تتطابق مع تلك في ملف `deepseek_html_20260517_2900f2.html`.

نشر المشروع (خيارات):
- افتح `deepseek_html_20260517_2900f2.html` مباشرة في المتصفح.
- أو استخدم خادم محلي بسيط (مثل `npx serve` أو `python -m http.server 8000`) ثم افتح `http://localhost:3000` أو المنفذ المناسب.
- للنشر على الإنترنت: ارفع المجلد إلى GitHub وفعّل GitHub Pages أو استخدم Netlify/Vercel بنشر المجلد كـ static site.
