const usePermissions = (permission) => {
  const permissions = JSON.parse(localStorage.getItem("permissions"));
  return permissions[permission] || false;
};


export default usePermissions