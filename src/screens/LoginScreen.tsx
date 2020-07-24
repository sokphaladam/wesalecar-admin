import React from 'react';
import { useFirebase } from 'react-redux-firebase';

export function LoginScreen() {
  let email: HTMLInputElement | null = null;
  let password: HTMLInputElement | null = null;

  const firebase = useFirebase();

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    try {
      const data = {
        email: email!.value,
        password: password!.value
      }
      await firebase.login(data);
      localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="account-background">
      <div className="account-table">
        <div className="account-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-lg-offset-4">
                <div className="bg-form p-4 mt-5 rounded">
                  <div className="text-center">
                    <h3 className="text-uppercase ac_logo font-weight-bold">wesalecar</h3>
                    <p className="text-white mt-10 mb-30">Sign into your account</p>
                  </div>
                  <form className="login_account" onSubmit={handleSignIn}>
                    <div className="row">
                      <div className="col-lg-12 mt-5">
                        <input type="email" className="form-control" placeholder="Email" required ref={ref => email = ref} />
                      </div>
                      <div className="col-lg-12 mt-5">
                        <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" ref={ref => password = ref} />
                      </div>
                      <div className="col-lg-12 mb-30 mt-10">
                        <button className="btn btn-danger w-100">Sign in</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}