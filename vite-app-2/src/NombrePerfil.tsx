
function NombrePerfil({name,age,isMember,hobbies,onHobbyClick} : Props) {

    return(
        <div>
            <h2>Nombre: {name}</h2>
            <h2>Edad: {age}</h2>
            <h2>Es Miembro: {(isMember) ? "Miembro activo":"Miembro no activo"}</h2>
            <h3>Hobbies:</h3>
            <ul>
                {
                    hobbies.map((hobby,index) => {
                        return <li key={index} onClick={() => onHobbyClick(hobby)}>{hobby}</li>;                  
                    })
                }
            </ul>
        </div>
    )
}

type Props = {
  name: string;
  age: number;
  isMember: boolean;
  hobbies: string[],
  onHobbyClick: (hobby: string) => void;
};

export default NombrePerfil;
    