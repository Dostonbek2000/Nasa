import React, { useState } from 'react'
import { Button, Container, Image, Inner, Input, Wrapper } from './style'
import Logo from './../../images/nasa.png';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';


const Content = () => {
  const navigate = useNavigate();
  const [value, setvalue] = useState('');

  function Tohome() {
    if(value===''){
      Swal.fire({
        icon: 'warning',
        title: 'Ooops...',
        text: 'Iltimos inputni to`ldiring!',
        footer: '<a href="#">Why do I have this issue?</a>',
        confirmButtonText:'Okay',
        
      })
    }else{
      localStorage.setItem('search',value)
      navigate('/home')
    }
  }

  return (
    <Container>
        <Wrapper>
            <Inner>
                <Input placeholder='Type here ...' value={value} onChange={(e)=>setvalue(e.target.value)} />
                <Button onClick={Tohome}>Start</Button>
            </Inner>
            <Image className='logoimg' src={Logo} />
        </Wrapper>
    </Container>
  )
}

export default Content