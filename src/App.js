import React, {useState} from 'react';
import './App.css'
import Modal from './componentes/Modal';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

	const [estadoModal, cambiarEstadoModal] = useState(false);

	return (
		<div>
			<ContenedorBotones>
				<Boton onClick={() => cambiarEstadoModal(!estadoModal)}>Cursos +</Boton>
			</ContenedorBotones>

			<Modal
				estado = {estadoModal}
				cambiarEstado = {cambiarEstadoModal}
			>
				
				<Contenido>
					<p><b>Formulario</b></p>

					<form action=""  className="formulario">
						
						<div class="form-group">
							<label htmlFor="perfil">Perfil: </label>
							<select name="select" id="perfil" class="form-control">
								<option value="---" selected> ------------------ </option>
								<option value="Generales" >Generales</option>
								<option value="Habilidades blandas">Habilidades blandas</option>
								<option value="Encuestas">Encuestas</option>
								<option value="Conocimiento Básico">Conocimiento Básico</option>

							</select>
						</div>

						<div class="form-group">
							<label htmlFor="cursos">Cursos: </label>
							<select name="select" id="cursos" class="form-control">
								<option value="---" selected> ------------------ </option>
								<option value="Presentación" >Presentación</option>
								<option value="Sobre la agencia ¿quiénes somos?">Sobre la agencia ¿quiénes somos?</option>
								<option value="Organigrama - Linea de carrera - funciones y plataformas">Organigrama - Linea de carrera - funciones y plataformas</option>
								<option value="Habilidades Blandas">Habilidades Blandas</option>
								<option value="Encuesta de Satisfacción">Encuesta de Satisfacción </option>
								<option value="Metodología SCRUM">Metodología SCRUM </option>
								<option value="Encuesta de Satisfacción">Domina las herramientas de GSuite </option>
								<option value="Reuniones de trabajo efectivo">Reuniones de trabajo efectivo</option>
							</select>
						</div>

						<div class="form-group">
							<label htmlFor="cursos">Actividades: </label>
							<select name="select" id="actividades" class="form-control">
								<option value="---" selected> ------------------ </option>
								<option value="PPT" >PPT</option>
								<option value="Formulario">Formulario</option>
								<option value="E. Final">E. Final</option>
								<option value="Caso">Caso</option>
								<option value="Otro">Otro </option>
								<option value="Jamboard">Jamboard</option>
							</select>
						</div>

						<div class="form-group">
							<label htmlFor="descripcion">Descripción: </label>
							<textarea id="descripcion" cols="15" rows="1" class="form-control" placeholder=" ..."></textarea>
						</div>

						<div class="form-group">
							<table>
								<tr>
									<td WIDTH="170">
										<label htmlFor="aspecto">Aspecto: </label>
										<select name="select" id="perfil" class="form-control">
											<option value="---" selected> ------------------ </option>
											<option value="Presentación" >Presentación</option>
											<option value="Desenvolvimiento">Desenvolvimiento</option>
											<option value="Dominio del tema">Dominio del tema</option>
										</select>
									</td>
									<td WIDTH="100"></td>
									<td>
										<label htmlFor="correo">Puntaje: </label>
										<input
											type="number"
											name="puntaje"
											placeholder="0"
											id="puntaje"
											min="0" 
											max="10"
										/>
									</td>
								</tr>
							</table>
						</div>
					</form>
					<br/>
					<Boton onClick={() => cambiarEstadoModal(!estadoModal)}> Aceptar </Boton>
				</Contenido>
			</Modal>
		</div>
	);
}
 
export default App;


const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #F5B509;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #F57C09;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;