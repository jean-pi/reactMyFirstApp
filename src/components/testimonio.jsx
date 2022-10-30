import React from "react";
import "../styles/testimonio.css";

function Testimonio(){
  return(
		<div className="testimonioContainer">
			<img 
			className="testimonioContainer-img" 
			src={require(`../img/testimonio-emma.png`)} 
			alt="emma imagen" />
			<div className="testimonioContainer-textoTestimonio">
				<p className="testimonioContainer-textoTestimonio-name">Emma Bostian en Suecia</p>
				<p className="testimonioContainer-textoTestimonio-cargo">Ingeniera de Software en Spotify</p>
				<p className="testimonioContainer-textoTestimonio-texto">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo autem rem, nam quasi exercitationem laudantium labore modi aliquam natus voluptatibus. Distinctio eos esse aperiam officia minima nihil, exercitationem totam quia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo autem rem, nam quasi exercitationem laudantium labore modi aliquam natus voluptatibus"</p>
			</div>
		</div>
	)
}


export default Testimonio;