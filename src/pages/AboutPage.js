import image from "../imgs/gamesJpeg.jpg"

const AboutPage = () => {
    
    return (
      <>
        <h1>Sobre</h1>
        <img src={image} alt="ImageBanner" width="680px" height="400px" />
    <p>
        Me chamo Gabriel Viccari de Almeida, 
        atualmente tenho 18 anos e sou técnico em 
        análise e desenvolvimento de sistemas.
        Curso faculdade tambem de análise e desenvolvimento 
        de sistemas, pela Fatec.
        Sou apaixonado por programação e por games, por isso
         decidi juntar o utíl ao agradável, criando esse website.  
    </p>
    
    </>
    )
}

export default AboutPage