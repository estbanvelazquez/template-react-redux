
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCharacters} from "../../redux/charactersSlice"

const Home = () => {
    const dispatch = useDispatch();
    const { loading, data, error} = useSelector((state) => state.characters);
    useEffect(() => {
      dispatch(getAllCharacters());
    }, []);

    return(
        <div className="homePage">
          {loading === 'success' &&
            data?.map(character => (
              <p key={character.id}>{character.name}</p>
            ))
          }
        </div>
    )
}

export default Home;