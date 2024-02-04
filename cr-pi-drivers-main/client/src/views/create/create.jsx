import { useState } from "react";
import {useDispatch} from "react-redux";
import { postDriver } from "../../redux/actions/actions";
const Create = () => {

  const dispatch = useDispatch()


  const [state, setState] = useState({
    name: "",
    forename: "",
    image:"",
    nationality:"",
    description: "",
    dob: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    forename: "",
    image:"",
    nationality:"",
    description: "",
    dob: "",
  });

  const validate = (state, name) => {
    if (name === "name") {
      if (state[name] === "") setErrors({ ...errors, name: "El nombre es requerido" });
      else if (state.name.length >= 8) setErrors({ ...errors, name: "El nombre es muy largo" });
      else setErrors({ ...errors, name: "" });
    }
    if (name === "forename") {
      if (state[name] === "") setErrors({ ...errors, forename: "El forename es requerido" });
      else if (state.forename.length >= 8) setErrors({ ...errors, forename: "El forename es muy largo" });
      else setErrors({ ...errors, forename: "" });
    }
    if (name === "image") {
      if (state[name] === "") setErrors({ ...errors, image: "El image es requerido" });
      else if (state.image.length >= 8) setErrors({ ...errors, image: "El image es muy largo" });
      else setErrors({ ...errors, image: "" });
    }  
      if (name === "nationality") {
      if (state[name] === "") setErrors({ ...errors, nationality: "El nationality es requerido" });
      else if (state.nationality.length >= 13) setErrors({ ...errors, nationality: "El nationality es muy largo" });
      else setErrors({ ...errors, nationality: "" });
    }
    if (name === "description") {
      if (state[name] === "") setErrors({ ...errors, description: "La Description es requerida" });
      else if (state.description.length >= 30) setErrors({ ...errors, description: "La Description es muy larga" });
      else if (state.description.length <= 3) setErrors({ ...errors, description: "La Description es muy corta" });
      else setErrors({ ...errors, description: "" });
    }
    if (name === "dob") {
      const dobRegex = /^[0-9/]*$/;
      if (!dobRegex.test(state.dob)) {
        setErrors({ ...errors, dob: "Formato de fecha inválido. Solo se permiten números y '/'." });
      } else if (state.dob.length >= 11) {
        setErrors({ ...errors, dob: "Solo se permite una longitud máxima de 10 caracteres." });
      } else {
        setErrors({ ...errors, dob: "" });
      }
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    
    
    // re-renderizado
    validate(
      {
        ...state,
        [event.target.name]: event.target.value,
      },
      event.target.name);   
    };



    const handleSubmit = (event)=>{
      event.preventDefault();
      dispatch(postDriver(state))
    }
    


    const buttonDisabled = () => {
      let disableAux = true;
      for (let error in errors) {
        if (errors[error] === "") {
          disableAux = false;
        } else {
          disableAux = true;  
          break
        }
      }
      return disableAux;
    };

  return (
    <div>
      {console.log(errors)}
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Name" />
        <span>{errors.name}</span>
        <input onChange={handleChange} type="text" name="forename" placeholder="Forename" />
        <span>{errors.forename}</span>
        <input onChange={handleChange} type="text" name="image" placeholder="image" />
        <span>{errors.image}</span>
        <input onChange={handleChange} type="text" name="nationality" placeholder="nationality" />
        <span>{errors.nationality}</span>
        <input onChange={handleChange} type="text" name="description" placeholder="Description" />
        <span>{errors.description}</span>
        <input onChange={handleChange} type="text" name="dob" placeholder="mm/dd/yyyy" />
        <span>{errors.dob}</span>
        <input disabled={buttonDisabled()} type="submit" />
      </form>
    </div>
  );
};

export default Create;