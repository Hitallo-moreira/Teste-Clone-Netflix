import React from 'react';
import './form.css';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Registro realizado com sucesso! Você será encaminhado para a tela inicial')
        window.location.href = "/";       
    }
    
    return(
        <div className="form">
            <div className="header noBorderHeader sigupHeader">
                <div className="sigupHeader">
                    <a href="/" className="logo sigupHeader"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix logo"/></a>
                </div>
            </div>
            <div className="simple-container">
                <div className="center-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-container">
                        <div className="header-form-container">
                                <div className="header-form-title">
                                    <h1 class="title-success"></h1>
                                </div>
                            </div>
                            <div className="header-form-container">
                                <div className="header-form-title">
                                    <h1 class="title">Preencha seus dados</h1>
                                </div>
                            </div>
                            <div className="field-container">
                                <input type="text" name="nome" placeholder="Digite seu nome" required/>
                                <input type="text" name="email" placeholder="Digite seu e-mail" required/>
                                <input type="password" name="senha" placeholder="Digite sua senha" required/>
                                <div className="submit-container">
                                    <input type="submit" name="submitForm" value="Enviar"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;