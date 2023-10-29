import { useFormik } from "formik"
import { Container } from "react-bootstrap";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Nombre Completo'),
  email: Yup.string().required('Requerido').email('Email no valido'),
  password: Yup.string().required('Requerido').min(8,"Cotraseña de 8 caracteres minimo"),
})

const App = () => {

  const formik= useFormik({

    //Lo que necesita el formulario
    initialValues:{
      name:'',
      email:'',
      password:'',
    },

    //Validacion con YUP
    validationSchema: validationSchema,

    //Lo que sucede al enviar el formulario, una alerta
    onSubmit:(values)=> {
      alert(JSON.stringify(values,null,2));
      //console.log("Valores del formulario",values);
    }

  });

  return (
    <>
      <Container className="d-flex justify-content-center aling-items-center">
        <div className="border rounded-3 p-5 mt-5">
          <h1>Formulario de registro</h1>
          <h5 className="text-center">con Formik y Yup</h5>
          <form onSubmit={formik.handleSubmit}>

            {/* NOMBRE*/ }
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">Nombre</label> 
            <input 
            type="text" 
            className="form-control"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            
            />
            {formik.touched.name && formik.errors.name ?(
              <div className="text-danger"> {formik.errors.name }</div>
            ) : null
          }

          </div>

            {/* EMAIL*/ }

          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email</label> 
            <input 
            type="email" 
            className="form-control"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            
            />
            {formik.touched.email && formik.errors.email ?(
              <div className="text-danger"> {formik.errors.email }</div>
            ) : null
          }

          </div>

            {/* PASSWORD*/ }

          <div className="mb-3 mt-3">
            <label htmlFor="password" className="form-label">Password</label> 
            <input 
            type="password" 
            className="form-control"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            
            />
            {formik.touched.password && formik.errors.password ?(
              <div className="text-danger"> {formik.errors.password }</div>
            ) : null
          }

          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-warning px-5">
              Enviar
            </button>
          </div>

          </form>
          
        </div>
      </Container>
    </>
  )
}

export default App;
