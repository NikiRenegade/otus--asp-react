export default function  Login() {
    return (
        <div className="mt-5" style={{ maxWidth: 400 }}>
            <h2 className="mb-4">Login</h2>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Введите email" />
            </div>
            <div className="mb-3">
                <label className="form-label">Пароль</label>
                <input type="password" className="form-control" placeholder="Введите пароль" />
            </div>
            <button className="btn btn-primary">Войти</button>
        </div>
    );
};