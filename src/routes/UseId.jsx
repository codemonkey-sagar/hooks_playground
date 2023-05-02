import { useId } from "react";

function LabelInputPair() {
  const id = useId();

  return (
    <div style={{ marginBottom: '50px' }}>
      <label htmlFor={id}>
        Click on this label and it'll highlight the input {id}
      </label>
      <br />
      <input type="text" id={id} placeholder={`input id ${id}`} />
    </div>
  )
}

export default function useIdComponent() {
  return (
    <div
      style={{
        margin: `10vh`,
        border: '5px solid aqua',
        borderRadius: `10px`,
        padding: '50px'
      }}
      className="use-id"
    >
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
    </div>
  )
}