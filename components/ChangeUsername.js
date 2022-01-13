import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter you new username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({ username });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="text-black bg-red-700 hover:text-rose-200 p-2 rounded-md"
      >
        Change username
      </button>
    </div>
  );
}

export default ChangeUsername;
