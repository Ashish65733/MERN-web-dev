function handleClick(event) {
  console.log("Hello");
  console.log(event);
}

function handleMouseOver() {
  console.log("Bye");
}

function handleDblClick() {
    console.log("Double Clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>this parah is for event demo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus quod voluptatem quos dolores nulla natus, quidem ex ipsa, voluptatibus quas rem, earum provident! Neque, amet. Officia totam libero repellat reiciendis necessitatibus, earum eius aliquam natus omnis? Laborum, amet ipsam?</p>
            <button onDoubleClick={handleDblClick}>Double Click me!</button>
        </div>
    )
}