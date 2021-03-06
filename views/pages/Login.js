let username = ""

let login = false;

let Login = {

    render: async () => {
        return /*html*/ `
            <section class="section">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" id="email_input" type="email" placeholder="Enter your Email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="pass_input" type="password" placeholder="Enter a Password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-primary" id="loginBtn">
                        Login
                        </button>
                    </p>
                </div>
            </section>
        `
    }

    , after_render: async () => {
        document.getElementById("loginBtn").addEventListener ("click",  () => {
            let email = document.getElementById("email_input");
            let pass  = document.getElementById("pass_input");
            if (email.value != "" && pass.value != "") {
                // Lo lleva a la lista con la opción de editar.
                username = email.value
                login = true;
                location.href = "#/";
                //alert("Sesión iniciada")
            } else {
                alert("Inserta un correo y contraseña")
            }
        })
    }
}