import React from "react";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
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
      <div className="login-page">
         <div className="sign-up-form max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center text-blue-500 mb-8 ">Connexion</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                     Email
                  </label>
                  <div className="flex items-center border border-gray-300 px-3 py-2 my-arrondi focus-within:ring-2 focus-within:ring-blue-500">
                     <input type="email" id="email" {...register("email", { required: true })} className="flex-1 focus:outline-none" />
                  </div>
                  {errors.email && <span className="text-red-500 text-sm">Email requis</span>}
               </div>
               <div className="flex flex-col mb-4">
                  <label htmlFor="password" className="text-gray-700 font-medium mb-2">
                     Mot de passe
                  </label>
                  <div className="flex items-center border border-gray-300 px-3 py-2 my-arrondi focus-within:ring-2 focus-within:ring-blue-500">
                     <input type="password" id="password" {...register("password", { required: true })} className="flex-1 focus:outline-none" />
                  </div>
                  {errors.password && <span className="text-red-500 text-sm">Mot de passe requis</span>}
               </div>
               <button type="submit" className="font-medium px-4 py-2 my-arrondi my-connexbtn">
                  Se connecter
               </button>

               <div className="flex justify-center mt-4">
                  <Link to="/" className="text-sm text-blue-500 mt-4">
                     Retour
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
