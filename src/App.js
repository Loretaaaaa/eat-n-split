import { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend () {
    setShowAddFriend((show) => !show)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
          </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
