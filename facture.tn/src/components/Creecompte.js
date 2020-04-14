import React, { Component } from 'react';
import './Formulaire.css';
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class Creecompte extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nom:null,
      prenom:null,
      email:null,
      password:null,
      tel:null,
      formErrors:{
        nom:"",
        prenom:"",
        email:"",
        password:"",
        tel:""
      }
    };
  }
  //action sur le boutton submit 
  handleSubmit = e => {
    e.preventDefault();
    if(formValid(this.state)){      
      this.props.history.push('/entreprise');
    }else{
      alert("Les champs sant vides ,il faut remplir!")
    }
  };

  handleChange = e =>{
    e.preventDefault();

    const {name,value } = e.target;    
    let formErrors ={ ...this.state.formErrors };

    switch(name){
      case "nom" :
        formErrors.nom =value.length < 3 ? "minimum 3 characaters required" :"";
        break;
      case "prenom" :
        formErrors.prenom =value.length < 3  ? "minimum 3 characters required" :"";
        break;
      case "email" :
        formErrors.email =emailRegex.test(value)  ? "" :"invalid email address";
        break;
      case "password" :
        formErrors.password =value.length < 6  ? "minimum 6 characters required" :"";
        break;
      case "tel" :
        formErrors.tel =value.length === 8 ? "" :"minimum 8 characters required";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="content-header" >
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6"></div>
                <div className="col-sm-6" >
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="/">Crée compte</a></li>
                        <li className="breadcrumb-item ">Personnelle</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="wrapper">
          <div className="form-wrapper">
            <center><h5>
              <i className="fa fa-user"></i>
               Personnelle
            </h5></center>
            <form onSubmit={this.handleSubmit} noValidate>

              <div className="nom">
                <label htmlFor="nom">Nom :</label>
                <input 
                  className={formErrors.nom.length > 0 ? "error" : null}
                  type="text" 
                  noValidate 
                  placeholder="Nom"  
                  name="nom" 
                  onChange={this.handleChange} 
                />
                {
                  formErrors.nom.length > 0 && (
                    <span className="errorMessage">{formErrors.nom}</span>
                  )
                }
              </div>
              
              <div className="prenom">
                <label htmlFor="nom">Prenom :</label>
                <input 
                  className={formErrors.prenom.length > 0 ? "error" : null}
                  type="text" 
                  noValidate 
                  placeholder="Prenom"
                  name="prenom" 
                  onChange={this.handleChange} 
                />
                {
                  formErrors.prenom.length >0 && (
                    <span className="errorMessage">{formErrors.prenom}</span>
                  )
                }
              </div>
              
              <div className="email">
                <label htmlFor="email">Email :</label>
                <input 
                  className={formErrors.email.length >0 ? "error": null} 
                  type="email" 
                  noValidate 
                  placeholder="Email"  
                  name="email" 
                  onChange={this.handleChange} 
                />
                {
                  formErrors.email.length >0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )
                }
              </div>
              
              <div className="password">
                <label htmlFor="password">Mot de passe :</label>
                <input 
                  className={formErrors.password.length >0 ? "error" :null} 
                  type="password" 
                  noValidate placeholder="Mot de passe"
                  name="password" 
                  onChange={this.handleChange} 
                />
                {
                  formErrors.password.length >0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )
                }
              </div>
              
              <div className="tel">
                <label htmlFor="tel">Téléphone :</label>
                <input 
                  className={formErrors.tel.length > 0 ? "error" :null} 
                  type="text" 
                  noValidate 
                  placeholder="Téléphone" 
                  name="tel" 
                  onChange={this.handleChange} 
                />
                {
                  formErrors.tel.length > 0 && (
                    <span className="errorMessage">{formErrors.tel}</span>
                  )
                }
              </div>
              
              <div className="createAccount">
                  <button type="submit" onClick={this.handleSubmit} >Suivant<i className="fa fa-arrow-right"></i></button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Creecompte;