import React from "react";

import { Input } from "antd";

       


function logout(){


return(

    <>
      <div className="form-structor">
     <div className="signup">
          <h2 className="form-title" id="signup">
           Sign up
          </h2>
          <div className="form-holder">
            <Input type="text" className="input" placeholder="Username" />
            <Input type="text" className="input" placeholder="Phonenumber" />
            <Input type="date" className="input" placeholder="CreateDate" />
            <Input type="role" className="input" placeholder="Role" />
            <Input type="email" className="input" placeholder="Email" />
            <Input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Sign up</button>
        </div>
         </div>
        </>
       
)
}

export default logout