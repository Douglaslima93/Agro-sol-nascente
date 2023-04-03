function Form () {
    function Contato (e) {
        e.presentDefault()
        window.alert('Em breve entraremos em contato')
    }
    return (
        <div className="contato">
            <h2>Entre em Contato</h2>
            <form onSubmit={Contato}>

                <div className='formulario'>
                    <label for='Nome'>Nome:</label><br/>
                    <input id="nome" type="text"/><br/>

                    <label for='Email'>Email:</label><br/>
                    <input id="email" type="email"/><br/>

                    <label for='Assunto'>Assunto:</label><br/>
                    <input id="assunto" type="text"/><br/>

                    <label for='Mensagem'>Mensagem:</label><br/>
                    <input id="mensagem" type="text"/><br/>
                    <br/>
                    <input type="submit" value='Enviar'/>

                </div>
            </form>
        </div>
    )
}

export default Form