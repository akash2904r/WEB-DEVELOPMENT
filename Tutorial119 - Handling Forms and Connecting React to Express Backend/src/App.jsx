import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {method: "POST", body: JSON.stringify(data), headers: {"Content-Type": "application/json"}})
    let res = await r.text()
    console.log(data, res)

    // if(data.Username != "Chandu")
    //   setError("myform", { message: "The credentials are not valid" })

    // if(data.Username == "Dilip")
    //   setError("blocked", { message: "This user is Blocked !!!" })
  } 

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("Username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Minimum Length is 3" }, maxLength: { value: 8, message: "Maximum Length is 8" } })} placeholder='Username' type="text" />
          {errors.Username && <div className='red'>{errors.Username.message}</div>}
          <input {...register("Password", { required: { value: true, message: "This field is required" }, minLength: { value: 7, message: "Minimum Length is 7" } })} placeholder='Password' type="password" />
          {errors.Password && <div className='red'>{errors.Password.message}</div>}
          <input disabled={isSubmitting} type="submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
