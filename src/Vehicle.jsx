function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

export default Car;
