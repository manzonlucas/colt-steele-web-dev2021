export default function Comments() {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="comment">Your comment:</label>
      <input type="text" name="comment" id="comment" />
    </form>
  )
}