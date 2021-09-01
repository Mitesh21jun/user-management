import http from "../http-common";
class UserManagement {
  
    getAllUsers() {
        return http.get(`/get_all_users`);
    }

    addUser(email,first_name,last_name,pwd,username) {
        return http.post(`/add_new_user`, {
            
                email: email,
                first_name: first_name,
                last_name: last_name,
                pwd: pwd,
                username: username
                
        })
    }
    
    deleteUser(email){
        return http.delete(`/delete_existing_user?email=${email}`)
    }

    
}
export default new UserManagement;