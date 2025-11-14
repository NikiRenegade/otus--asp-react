import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { setTheme } from '../store/themeSlice';

export const ThemeSwitcher = () => {
    const dispatch: AppDispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.theme.mode);

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", mode);
    }, [mode]);

    return (
        <button
            className="btn btn-outline-light ms-3"
            onClick={() => dispatch(setTheme())}>
            {mode === "light" ? "Dark" : "Light"}
        </button>
    );
};