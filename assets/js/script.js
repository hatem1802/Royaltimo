// منتصف الشاشة
const centerNotif = document.getElementById('centerNotification');
const closeCenter = document.getElementById('closeCenterNotif');
setTimeout(() => { if(centerNotif) centerNotif.classList.add('hide'); }, 7000);
if(closeCenter) closeCenter.addEventListener('click', () => centerNotif.classList.add('hide'));

// شرح منبثق
const overlay = document.getElementById('explanationOverlay');
const showBtn = document.getElementById('showExplanationBtn');
const closeExp1 = document.getElementById('closeExplanation');
const closeExp2 = document.getElementById('closeExplanationBtn');
function openExplanation() { overlay.classList.add('active'); }
function closeExplanation() { overlay.classList.remove('active'); }
if(showBtn) showBtn.addEventListener('click', openExplanation);
if(closeExp1) closeExp1.addEventListener('click', closeExplanation);
if(closeExp2) closeExp2.addEventListener('click', closeExplanation);
overlay.addEventListener('click', (e) => { if(e.target === overlay) closeExplanation(); });

// نسخ الكود
function copyCode() {
    navigator.clipboard.writeText('748CYI');
    const toast = document.getElementById('copyToast');
    toast.style.opacity = '1';
    setTimeout(() => toast.style.opacity = '0', 1500);
}
const copyBtn = document.getElementById('copyMainCodeBtn');
if(copyBtn) copyBtn.addEventListener('click', copyCode);

// FAQ
document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', () => {
        item.classList.toggle('open');
        const icon = q.querySelector('i');
        if(item.classList.contains('open')) icon.classList.replace('fa-chevron-down','fa-chevron-up');
        else icon.classList.replace('fa-chevron-up','fa-chevron-down');
    });
});
