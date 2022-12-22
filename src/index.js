import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function logintarea(){
    return(
        <div className='wrapper bg-secondary d-flex align-items-center justify-content-center w-100'>
            <div className='login'>
                <h2 className='titulo display-4'>
                    Login
                </h2>
                <form /*className='needs-validation'*/>
                  <div className='form-group was-validated mb-2'>
                      <label htmlFor='user' className='form-label'>
                          Usuario:
                      </label>
                      <input id='usuario' placeholder='User' type='user' className='form-control' required></input>
                      <div className='invalid-feedback'>
                        Por favor, escribir su usuario
                      </div>
                  </div>
                  <div className='form-group was-validated mb-2'>
                      <label htmlFor='password' className='form-label'>
                          Contraseña:
                      </label>
                      <input id='contraseña' placeholder='Password' type='password' className='form-control' required></input>
                      <div className='invalid-feedback'>
                        Por favor, ingrese su contraseña
                      </div>
                  </div> 
                  <div className='form-group form-check mb-2'>
                    <input id='check' type='checkbox' className='form-check-input' onChange={stateCheck}></input>
                      <label htmlFor='check' className='form-check-label'>
                        Recordar credenciales
                      </label>     
                  </div>                 
                  <button className='btn btn-secondary w-100 mt-2' type='submit' onClick={mostar} >Ingresar</button>
                </form>
            </div>
        </div>
    )   
}

let checkbool = false;

function stateCheck (){
  return(
    checkbool = !checkbool
  )
}

function mostar(e){
  e.preventDefault();
  let user, password, check, conjunto;

  user = document.getElementById("usuario").value;
  password = document.getElementById("contraseña").value;
  check = checkbool;

  conjunto = {
    user: user,
    password: password,
    check: check
  }
  console.log(conjunto)
}

export default logintarea;