import Parent from "./props/Parent";
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
    return (
        <div>
            <h1>Hi there - I'm  an app</h1>
            <Parent />
            <GuestList />
            <UserSearch />
        </div>
    )
}

export default App;