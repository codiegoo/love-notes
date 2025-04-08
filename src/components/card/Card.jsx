import './card.sass';

export default function Card({setShowCard}) {





  const handleClose = () => {
    setShowCard(false);
  };


  return (
    <div className="formBackground">
      <form className="formContain">
        <h3>Feliz aniversario, mi vida hermosa. Ya son 1 año y 3 meses contigo, y todavía me cuesta creer la suerte que tengo de tener a una mujer tan maravillosa como tú. Gracias por llenar mis días de alegría, ternura y esa forma tan única que tienes de amar.
        Cada palabra que me escribes se queda grabada en mi corazón, y me emociona tanto imaginar todo lo que viene para nosotros amor esa casita juntos, los chinitos corriendo por ahí, y los sueños que vamos a cumplir de la mano, como equipo, como lo hemos hecho hasta ahora.
        Te lo juro mi amor, me haces sentir fuerte, capaz, completo… pero sobre todo, amado. Y no hay nada más bonito que saber que tengo a mi lado a alguien que cree en mí, que me cuida y que no duda en entregarlo todo por este amor.
        Tú también eres lo más importante para mí, mi amor. Eres mi calma, mi impulso, mi compañera, mi todo. Me siento seguro contigo, y sé que pase lo que pase, vamos a salir adelante porque tenemos algo real, algo que no se rompe.
        Gracias por tanto amor, por tus palabras, por tu apoyo incondicional. Te prometo seguir construyendo contigo, cuidarte como lo mereces, hacerte sonreír siempre, y estar aquí para ti, para lo bueno y lo difícil.
        Te amo con cada parte de mí, mi niña hermosa, mi corazón de color, mi esposa de la vida.
        Con todo el amor del mundo,
        El amor de tu vida ❤</h3>
        <button type="button" className="btnCloseForm" onClick={handleClose}>x</button>
      </form>
    </div>
  );
}
