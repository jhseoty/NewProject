document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // 간단한 비밀번호 일치 확인
    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    // 데이터 객체 생성 (실제 환경에서는 여기서 API 서버로 전송)
    const userData = {
        username: username,
        email: email,
        password: password
    };

    console.log('회원가입 데이터:', userData);
    alert(`${username}님, 회원가입을 축하합니다!`);
});