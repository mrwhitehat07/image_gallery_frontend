export const logout = () => {
    localStorage.setItem("token", "");
    window.location.reload(true);
}