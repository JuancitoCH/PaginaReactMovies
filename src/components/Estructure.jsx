import React from 'react';
import {Link} from 'react-router-dom'
import '../css/Estructure.css'
//  <Link to="/got">Game Of Thrones API</Link>

export default function Estructure() {
  return <>
     <h1 className='h1Estructure'>Hola Test de estructura</h1>
     <Link to='/TestingH1'>A test</Link>
  </>
}
