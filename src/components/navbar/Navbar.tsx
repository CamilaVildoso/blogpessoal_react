import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import React, { useContext } from 'react'
import { toastAlerta } from '../../util/toastAlerta'
import Logo from '../../assets/logoperro.png'


function Navbar() {
 
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/login')
    }

    let navbarComponent
    
    if(usuario.token !== "") {
      navbarComponent = (

      <div className='w-full bg-amber-700 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='flex justify-center items-center gap-2'>
            <img src={Logo} alt="" className='w-[35px]'/>
            <Link to='/home' className='text-2xl font-bold'>PetZone</Link>
          </div>

          <div className='flex gap-4'>
            <Link to='/postagens' className='hover:underline'>Postagens</Link>
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
      
    )
  }
  
  return (
    <>
      {navbarComponent}
    </>
  )
}


export default Navbar