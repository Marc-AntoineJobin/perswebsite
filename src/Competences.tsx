import mysql from './assets/mysql.png';
import java from './assets/java.svg';
import csharp from './assets/csharp.png';
import html from './assets/html.png';
function Competences() {
    return (
    <>
    <h1>Compétences</h1>
    <h2>languages préférés:</h2>
    <img src={java} className='rounded' style={{ maxWidth: '100px' }} alt="java"/>
    <img src={csharp} className='rounded' style={{ maxWidth: '100px' }} alt="csharp"/>
    <img src={mysql} className='rounded' style={{ maxWidth: '100px' }} alt="mysql"/>
    <img src={html} className='rounded' style={{ maxWidth: '100px' }} alt="html"/>
    <h2>Jaime:</h2>
    <p>le développement web, d'algorithmes et d'applications</p>
    <h2>Jaime moins:</h2>
    <p>les infrastructures réseaux, gérer systèmes d'exploitations mais je comprends tout de même leur importance capitale</p>
</>
    )
}

export default Competences