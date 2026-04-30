
function NombrePerfil({name,age,esMiembro,hobbies} : Props) {

    return(
        <div>
            <h2>Nombre: {name}</h2>
            <h2>Edad: {age}</h2>
            <h2>Es Miembro: {(esMiembro) ? "Miembro activo":"Miembro no activo"}</h2>
            <h3>Hobbies:</h3>
            <ul>
                {
                    hobbies.map((hobby,index) => {
                        return <li key={index}>{hobby}</li>;                  
                    })
                }
            </ul>
        </div>
    )
}

type Props = {
  name: string;
  age: number;
  esMiembro: boolean;
  hobbies: Array<String>;

};

export default NombrePerfil;
    