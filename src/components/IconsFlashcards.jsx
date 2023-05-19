import React from 'react';
import certo from "../assets/icone_certo.png";
import erro from "../assets/icone_erro.png";
import quase from "../assets/icone_quase.png";
import play from "../assets/seta_play.png";

const IconsFlashcards = ({ status, start }) => {
  return (
    <>
      {status === 'incorrect' && <img data-test="no-icon" src={erro} alt="ícone de erro" />}
      {status === 'effort' && <img data-test="partial-icon" src={quase} alt="ícone de quase" />}
      {status === 'imediate' && <img data-test="zap-icon" src={certo} alt="ícone de correto" />}
      {status === 'not-answer' && <img data-test="play-btn" onClick={start} src={play} alt="ícone de play" />}
    </>
  );
};

export default IconsFlashcards;