import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { sendPostService } from "../services";

function NewPost() {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const data = new FormData(e.target);
      const post = await sendPostService({ data, token });

      // addPost(post);
      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form>
        <h1> Add New Post</h1>
        <fieldset>
          <label htmlFor="text">Text</label>
          <input type="text" id="text" name="text" required />
        </fieldset>
        <fieldset>
          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" />
          <button>Send Post</button>
          {sending ? <p>Sending Post</p> : null}
        </fieldset>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  );
}
export default NewPost;
