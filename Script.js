function signup() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const pass = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;
  const status = document.getElementById('signupStatus');
  
  if (!name || !email || !pass || !confirm) {
    status.textContent = "أكمل جميع الحقول";
    return;
  }
  if (pass.length < 8) {
    status.textContent = "كلمة المرور يجب أن تكون 8 أحرف فأكثر";
    return;
  }
  if (pass !== confirm) {
    status.textContent = "كلمتا المرور غير متطابقتين";
    return;
  }
  
  localStorage.setItem('user', JSON.stringify({ name, email, pass }));
  status.textContent = "تم إنشاء الحساب بنجاح! 🎉";
  
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  const status = document.getElementById('loginStatus');
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (user && user.email === email && user.pass === pass) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('loggedName', user.name);
    window.location.href = "success.html";
  } else {
    status.textContent = "بيانات الدخول غير صحيحة";
  }
}

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = "login.html";
}

window.onload = () => {
  const sName = document.getElementById('successName');
  if (sName) {
    const name = localStorage.getItem('loggedName');
    sName.textContent = name || "";
  }
  
