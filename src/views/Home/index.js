
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCharacters} from "../../redux/charactersSlice"

const Home = () => {
    const dispatch = useDispatch();
    const { loadingCharacters, dataCharacters, errorCharacters} = useSelector((state) => state.characters);
    const { loadingUser, dataUser, errorUser} = useSelector((state) => state.login);
    useEffect(() => {
      dispatch(getAllCharacters());
    }, []);

    return(
        <div className="homePage">
          {!loadingCharacters &&
            dataCharacters?.map(character => (
              <p key={character.id}>{character.name}</p>
            ))
          }
        </div>
    )
}

export default Home;