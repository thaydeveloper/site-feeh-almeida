function useAuth() {
  function handleAddToken(token) {
    localStorage.setItem("token", token);
  }
  function handleClearToken() {
    localStorage.removeItem("token");
  }
  function handleGetToken() {
    return localStorage.getItem("token");
  }
  return {
    handleAddToken,
    handleClearToken,
    handleGetToken,
  };
}
export default useAuth;
