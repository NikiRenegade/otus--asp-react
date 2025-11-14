export default function Register()  {
    return (
        <div className="mt-5 container" style={{ maxWidth: 400 }}>
            <h2 className="mb-4">Register</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input type="text" id="name" className="form-control" placeholder="Введите имя" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Введите email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>
                <input type="password" id="password" className="form-control" placeholder="Введите пароль" />
            </div>
            <button className="btn btn-success">Зарегистрироваться</button>
        </div>
    );
};