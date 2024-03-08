import React from "react";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            alert(`Bienvenue ${user.email}`);
        } catch (error) {
            alert(`Erreur: ${error.message}`);
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <div>
                <h1>Connexion</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <div>
                            <input type="email" id="email" {...register("email", { required: true })} />
                        </div>
                        {errors.email && <span>Email requis</span>}
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe</label>
                        <div>
                            <input type="password" id="password" {...register("password", { required: true })} />
                        </div>
                        {errors.password && <span>Mot de passe requis</span>}
                    </div>
                    <button type="submit">Se connecter</button>

                    <div>
                        <Link to="/">Retour</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
