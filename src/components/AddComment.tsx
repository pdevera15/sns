import React from "react"

function AddComment() {
  return (
    <div style={{ padding: "10px 0" }}>
      <textarea
        style={{ width: "98%", border: "1px solid #999999", padding: "1%" }}
        rows={1}
      ></textarea>
      <button>Submit</button>
    </div>
  )
}

export default AddComment
